# Octopus
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This started as a Super Crazy Friday project.

See [wiki](https://github.com/abilia/octopus/wiki) for current status and backlog.

## Development

### Prerequisits
* node, npm/yarn

### Scripts
Start application in development mode

If this is the first time run

First start the `mockdevserver`. It mocks the certificate backend service.
```
cd mockdevserver
yarn install
yarn start
```

Or you can set up the `octopus-service` as described in the [infra/README](https://github.com/abilia/octopus/infra/README.md).

After that start octopus with

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Build the application to `build` folder

```
npm run build
```
This is done in [`Jenkinsfile`](https://github.com/abilia/octopus/blob/master/Jenkinsfile) to prepare for deploy.
