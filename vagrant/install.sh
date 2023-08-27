#!/bin/bash
set -x

# software versioning
NODEJS_VERSION=12.22.1
RUBY_VERSION=2.7.2
RUBY_VERSION_SHORT=2.7

# repository index update
sudo apt-get -y update --allow-releaseinfo-change

# upgrade packages
# see: https://github.com/SteveWooding/OAuth2.0/commit/dcc8162c40d2092f36b5947e3d385fef4bd78805
sudo DEBIAN_FRONTEND=noninteractive apt-get -y upgrade

# install git
sudo apt-get -y install git

# install nodejs
wget -q https://nodejs.org/dist/v$NODEJS_VERSION/node-v$NODEJS_VERSION-linux-x64.tar.xz
(
  cd /usr/local/
  sudo tar --strip-components 1 -xJf /home/vagrant/node-v$NODEJS_VERSION-linux-x64.tar.xz
)
rm -rf node-v$NODEJS_VERSION-linux-x64*

# install ruby dependencies on debian
# (stolen from RVM source: https://github.com/rvm/rvm/blob/28bf567/scripts/functions/requirements/debian)
sudo apt-get -y install make
sudo apt-get -y install g++ gcc
sudo apt-get -y install autoconf automake bison ca-certificates curl libc6-dev libffi-dev libgdbm-dev libncurses5-dev \
                        libsqlite3-dev libtool libyaml-dev openssl patch pkg-config sqlite3 zlib1g zlib1g-dev
sudo apt-get -y install libgmp-dev
sudo apt-get -y install libreadline-dev
sudo apt-get -y install libssl-dev

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

sudo gem update --system --no-document

# go to project root directory (to find Gemfile and package.json)
cd /vagrant

# install gems from the Gemfile (gh-pages & jekyll)
bundle install

# install the gulp client globally: this is NOT gulp, but rather a
# wrapper to use the gulp version installed locally in the project,
# see: https://stackoverflow.com/a/35573218.
sudo npm install gulp-cli -g

# install locally the gulp modules listed in the package.json
npm install
