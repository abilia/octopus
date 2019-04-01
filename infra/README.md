# Infrastructure and background services 

## Check certificate service
Run `open_ssl` to check certificate at terminal. Present as http service at `http://localhost:3042/check-cert`

### Install
```
sudo snap install shell2http
```

Or download [shell2http](https://github.com/msoap/shell2http)

```
wget https://github.com/msoap/shell2http/releases/download/1.7/shell2http-1.7.linux.amd64.zip
```

And unpack, move and link executable

```
unzip shell2http-1.7.linux.amd64.zip
sudo mkdir /opt/octopus
sudo cp shell2http /opt/ocopus/.
sudo ln -s /opt/octopus/shell2http /usr/local/bin/shell2http
```

### Start
Edit service file with which certificate to check.

Start and enable service
```
sudo cp infra/octopus-check-cert.service /etc/systemd/system/octopus-check-cert.service
sudo systemctl start octopus-check-cert.service
sudo systemctl enable octopus-check-cert.service
```
