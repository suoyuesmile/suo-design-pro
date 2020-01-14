/**
 * 通过id和数组获取name
 * example 当只有性别id,需要获取性别name
 * use {{ id | convertIdToName(list)}}
 */
export const convertIdToName = (value, list) => {
  if (value !== 0 && value !== 1 && value !== 2) return ''
  const item = list.find(function(item) {
    return item.id === value
  })
  return item.name
}
