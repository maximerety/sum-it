# software versioning
RUBY_VERSION=2.4.1
RUBY_VERSION_SHORT=2.4


# distrib repo update
sudo apt-get update


# install git
sudo apt-get --yes --force-yes install git


# install ruby dependencies on debian
# (stolen from RVM source: https://github.com/rvm/rvm/blob/5441a9939c72a53643899c6528ddd9a7385fa2d6/scripts/functions/requirements/debian#L113)
sudo apt-get --yes --force-yes install make
sudo apt-get --yes --force-yes install g++ gcc

sudo apt-get --yes --force-yes install libc6-dev patch openssl ca-certificates \
                                       curl zlib1g zlib1g-dev libyaml-dev \
                                       libsqlite3-dev sqlite3 autoconf libgmp-dev \
                                       libgdbm-dev libncurses5-dev automake libtool \
                                       bison pkg-config libffi-dev libssl-dev

# install ruby 2.4.1 from sources (needs a wget version compatible with TLSv1.2+)
wget -q https://cache.ruby-lang.org/pub/ruby/$RUBY_VERSION_SHORT/ruby-$RUBY_VERSION.tar.gz
tar xzf ruby-$RUBY_VERSION.tar.gz
cd ruby-$RUBY_VERSION/
# --with-zlib-dir otherwise ruby doesn't detect its location
# (see: https://github.com/rvm/rvm/blob/bee47675c34a4ba96f849017ea06ce00efcbfc7a/scripts/functions/manage/base_install_patches#L69)
./configure --with-zlib-dir=/lib/x86_64-linux-gnu/
make
sudo make install
cd -
rm -rf ruby-$RUBY_VERSION*

sudo gem update --system --no-ri --no-rdoc

sudo gem install bundler --no-ri --no-rdoc


# install gems from the Gemfile (gh-pages & jekyll)
cd /vagrant
sudo bundle install


# install jekyll theme locally
if [ ! -d architect ]; then
  git clone https://github.com/pages-themes/architect
  cd architect/
  sudo ./script/bootstrap
  cd -
fi