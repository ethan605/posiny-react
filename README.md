# posiny-react
A very tiny POS (pos[t]iny) for Vietnamese online shop owners

## Setup instructions

```shell
$ npm init
```

Config files:

```
.eslintrc.json
.flowconfig
webpack.config.json
```

Edit `package.json` to something like this:

```json
{
  ...
  "main": "index.js",
  "scripts": {
    "webpack": "webpack-dev-server --progress --colors"
  },
  ...
  "dependencies": {
    "lodash": "^4.16.4",
    "react": "^15.3.2",
    "react-dom": "^15.3.2",
    "react-redux": "^4.4.5",
    "redux": "^3.6.0",
    "singleton": "^1.0.0"
  },
  "devDependencies": {
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-polyfill": "^6.16.0",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-react": "^6.16.0",
    "babel-root-slash-import": "^1.1.0",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.16.2"
  }
  ...
}
```

Run `webpack` dev server:

```shell
$ npm run-script webpack
```