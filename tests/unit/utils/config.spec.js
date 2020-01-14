import { api } from './config'

describe('配置文件测试', () => {
  it('测试配置文件是否变动', () => {
    expect(api).toMatchSnapshot({
      develop: 'http://xxxx:8080',
      mock: 'http://xxxx',
      feature: 'http://xxxx',
      test: 'http://xxxx',
      production: 'http://xxxx'
    })
  })
})
