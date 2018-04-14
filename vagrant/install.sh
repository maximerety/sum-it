#!/bin/bash
set -x

# software versioning
NODEJS_VERSION=8.11.1
RUBY_VERSION=2.5.1
RUBY_VERSION_SHORT=2.5

# distrib repo update
sudo apt-get update

# install git
sudo apt-get --yes --force-yes install git

# install nodejs
wget -q https://nodejs.org/dist/v$NODEJS_VERSION/node-v$NODEJS_VERSION-linux-x64.tar.xz
(
  cd /usr/local/
  sudo tar --strip-components 1 -xJf /home/vagrant/node-v$NODEJS_VERSION-linux-x64.tar.xz
)
rm -rf node-v$NODEJS_VERSION-linux-x64*

# install ruby dependencies on debian
# (stolen from RVM source: https://github.com/rvm/rvm/blob/5441a9939c72a53643899c6528ddd9a7385fa2d6/scripts/functions/requirements/debian#L113)
sudo apt-get --yes --force-yes install make
sudo apt-get --yes --force-yes install g++ gcc

sudo apt-get --yes --force-yes install libc6-dev patch openssl ca-certificates \
                                       curl zlib1g zlib1g-dev libyaml-dev \
                                       libsqlite3-dev sqlite3 autoconf libgmp-dev \
                                       libgdbm-dev libncurses5-dev automake libtool \
                                       bison pkg-config libffi-dev libssl-dev

# install ruby from sources (needs a wget version compatible with TLSv1.2+)
wget -q https://cache.ruby-lang.org/pub/ruby/$RUBY_VERSION_SHORT/ruby-$RUBY_VERSION.tar.gz
tar xzf ruby-$RUBY_VERSION.tar.gz
(
  cd ruby-$RUBY_VERSION/
  # --with-zlib-dir otherwise ruby doesn't detect its location
  # (see: https://github.com/rvm/rvm/blob/bee47675c34a4ba96f849017ea06ce00efcbfc7a/scripts/functions/manage/base_install_patches#L69)
  ./configure --with-zlib-dir=/lib/x86_64-linux-gnu/
  make
  sudo make install
)
rm -rf ruby-$RUBY_VERSION*

sudo gem update --system --no-ri --no-rdoc
sudo gem install bundler --no-ri --no-rdoc

# go to project root directory (to find Gemfile and package.json)
cd /vagrant

# install gems from the Gemfile (gh-pages & jekyll)
sudo bundle install

# install jekyll theme locally
if [ ! -d architect ]; then
  git clone https://github.com/pages-themes/architect
  (
    cd architect/
    sudo ./script/bootstrap
  )
fi

# install the gulp client globally: this is NOT gulp, but rather a
# wrapper to use the gulp version installed locally in the project,
# see: https://stackoverflow.com/a/35573218.
sudo npm install gulp-cli -g

# install locally the gulp modules listed in the package.json
npm install
# or (if no package.json yet):
# npm init
# npm install --save-dev gulp
# npm install --save-dev gulp-babel babel-core babel-preset-env
# npm install --save-dev gulp-concat
# npm install --save-dev gulp-minify
# npm install --save-dev gulp-header
# npm install --save-dev gulp-file-include
