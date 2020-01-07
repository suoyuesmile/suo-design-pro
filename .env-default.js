const api = {
  develop: 'http://xxxx:8080',
  mock: 'http://xxxx',
  feature: 'http://xxxx',
  test: 'http://xxxx',
  production: 'http://xxxx'
}

module.exports = {
  baseURL: api[process.env.NODE_ENV || 'dev']
}
