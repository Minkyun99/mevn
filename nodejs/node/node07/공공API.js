require('dotenv').config()
const request = require('request')

const key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=100&resultType=json'
//개인 인증키 보안을 위하여 env파일에 나의 키값을 따로 보관함.

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `[${_.site}\n일산화탄소:${_.co}\n 오존:${_.o3}\n 초미세먼지:${_.pm25} \n 미세먼지:${_.pm10}\n]`
  )
})
