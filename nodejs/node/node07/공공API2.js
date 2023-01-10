require('dotenv').config()
const request = require('request')
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
const parser = new XMLParser()

const key = process.env.pkey

let busstopname
let busstopid

const url =
  'http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=100&bstopnm=' +
  busstopname +
  '&arsno=' +
  busstopid

request(url, (e, res, body) => {
  const body = parser.parse.body
  console.log(body)
  const _ = body.items.item
  console.log()
})
