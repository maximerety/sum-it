# Sum it!

## About

Sum it! is a bookmarklet that allows you to sum data on a webpage in only two clicks.

More on [the Sum it! website](https://maximerety.github.io/sum-it/)

## Contribute

You can run the Sum it! website locally following these steps:

1. Install [Ruby](https://www.ruby-lang.org/en/)
1. Install [Vagrant](https://www.vagrantup.com/downloads.html)
1. Install the vagrant-hostupdater plugin: `vagrant plugin install vagrant-hostsupdater`
1. Install [VirtualBox](https://www.virtualbox.org/)
1. Clone the project
1. Run the VM: `vagrant up` (will be slow only the first time)
1. Connect to the VM: `vagrant ssh`
1. Build with Gulp and launch the Jekyll web server: `cd /vagrant && gulp && sudo bundle exec jekyll serve`
1. Go to [dev.sum-it.io](http://dev.sum-it.io) in your browser
1. Stop the VM: `vagrant halt`

## Credits

The development process of Sum it! uses the following open source and/or free softwares: NodeJS, Npm, Babel, Gulp, Ruby, VirtualBox, Vagrant, Git, Jekyll, Github Pages, Linux Debian. Kudos to all their creators and maintainers!
