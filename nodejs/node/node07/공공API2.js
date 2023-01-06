const request = require('request')

const url = process.env.Aurl

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  console.log(rst)
  const _ = rst.getJobOpnngInfo.body.items.item[1]
  console.log()
})
