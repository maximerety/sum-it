# -*- mode: ruby -*-
# vi: set ft=ruby :
HOST = "dev.sum-it.io"

Vagrant.configure("2") do |config|
  # Find boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "debian/jessie64"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.1.84" # random local IP, let's hope it's free!
  config.vm.hostname = HOST

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant", type: "nfs"

  # Provider-specific configuration
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512"
  end

  # Provisioning
  config.vm.provision "install", type: "shell", path: "vagrant/install.sh"

  # Launch Jekyll server at startup
  config.vm.provision "up", type: "shell", run: "always", inline: <<-SHELL
    cd /vagrant
    # --host 0.0.0.0: listen on all interfaces (not only loopback) so it's accessible outside the VM
    #                 (https://zarino.co.uk/post/jekyll-local-network/ / https://stackoverflow.com/a/16608698)
    # --watch: check for updates in main folder (/vagrant)
    # --force-polling: avoid outdated files due to synced_folder latency
    bundle exec jekyll serve --port 80 --host 0.0.0.0 --watch --force-polling
  SHELL
end
