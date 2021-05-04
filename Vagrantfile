# -*- mode: ruby -*-
# vi: set ft=ruby :
HOST = "dev.sum-it.io"

Vagrant.configure("2") do |config|
  # Find boxes at https://app.vagrantup.com/boxes/search.
  config.vm.box = "debian/buster64"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.2.10" # random local IP, let's hope it's free!
  config.vm.hostname = HOST

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant", type: "nfs"

  # Provider-specific configuration
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  # Provisioning (run once)
  config.vm.provision "install", type: "shell", privileged: false, path: "vagrant/install.sh"

  # Startup script (run every time the vm is launched)
  config.vm.provision "up", type: "shell", privileged: false, run: "always", inline: <<-SHELL
    set -ex
    cd /vagrant
    # Build bookmarklet
    gulp
    # Launch server
    # --host 0.0.0.0: listen on all interfaces (not only loopback) so it's accessible outside the VM
    #                 (https://zarino.co.uk/post/jekyll-local-network/ / https://stackoverflow.com/a/16608698)
    # --watch: check for updates in main folder (/vagrant)
    # --force-polling: avoid outdated files due to synced_folder latency
    sudo bundle exec jekyll serve --port 80 --host 0.0.0.0 --watch --force-polling
  SHELL
end
