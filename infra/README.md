# Check certificate service

Download [shell2http](https://github.com/msoap/shell2http)

```
wget https://github.com/msoap/shell2http/releases/download/1.7/shell2http-1.7.linux.amd64.zip
```

Unpack, move and link executable

```
unzip shell2http-1.7.linux.amd64.zip
sudo mkdir /opt/octopus
sudo cp shell2http /opt/ocopus/.
sudo ln -s /opt/octopus/shell2http /usr/local/bin/shell2http
```

Edit service file with host IP and which certificate to check.

Start and enable service
```
sudo cp infra/octopus-check-cert.service /etc/systemd/system/octopus-check-cert.service
sudo systemctl start octopus-check-cert.service
sudo systemctl enable octopus-check-cert.service
```
