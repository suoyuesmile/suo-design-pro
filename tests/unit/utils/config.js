export const api = {
  develop: 'http://xxxx:808',
  mock: 'http://xxxx',
  feature: 'http://xxxx',
  test: 'http://xxxx',
  production: 'http://xxxx'
}

export default api[process.env.NODE_ENV || 'dev']
