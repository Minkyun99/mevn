const request = require('request')

// const url = process.env.Aurl

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=alQPO%2BQUh%2BiA5wsYXuLyIP5he2drBx2W0NE4KyX44tDE%2BzlLnN85L3vHBFtVeKZitPlfPXvBSuMaXDIoTzMQpQ%3D%3D&pageNo=1&numOfRows=100&resultType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[1]
  console.log()
})
