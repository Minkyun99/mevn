require('dotenv').config()
const request = require('request')

const key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=' +
  key +
  '&pageNo=1&numOfRows=30&resultType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getFestivalKr.item[1]
  console.log(
    `[축제 번호: ${_.UC_SEQ}\n 장소: ${_.GUGUN_NM}\n 축제명: ${_.TITLE}\n 메인장소: ${_.MAIN_PLACE}]`
  )
})
