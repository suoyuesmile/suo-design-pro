import { convertIdToName } from './convertIdToName'
describe('测试convertIdToName方法', () => {
  const list = [
    { id: 0, name: '男' },
    { id: 1, name: '女' },
    { id: 2, name: '未知' }
  ]
  it('测试正常输入', () => {
    const usage = list
    usage.forEach((item) => {
      expect(convertIdToName(item.id, list)).toBe(item.name)
    })
  })
  it('测试非正常输入', () => {
    const usage = list
    usage.forEach((item) => {
      expect(convertIdToName(item, list)).toBe('')
    })
  })
})
