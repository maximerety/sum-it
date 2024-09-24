#!/usr/bin/env bash

set -x

# Install Node.js 22
export NVM_DIR="/usr/local/share/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 22 --default

set -e

# Install the gulp client globally: this is NOT gulp, but rather a
# wrapper to use the gulp version installed locally in the project,
# see: https://stackoverflow.com/a/35573218.
npm install gulp-cli -g

# Install locally the gulp modules listed in the package.json
npm install

# Install the Ruby gems specified by the project
bundle install

# Workaround for the following issue:
#   fatal: detected dubious ownership in repository at '/workspaces/sum-it'
#
# The ~/.gitconfig file will only be modified on the guest container, not on the host.
git config --global --add safe.directory /workspaces/sum-it
