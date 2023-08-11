const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

app.use('/', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

app.listen(5173, () => {
  console.log('Proxy server is running on port 5173');
});
