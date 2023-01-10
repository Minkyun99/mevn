const axios = require('axios') //리퀘스트용도로 사용
const cheerio = require('cheerio') //선택자로 필요한 정보만 추출

const url = 'https://loawa.com/rank'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  //   let data = []
  let name = []

  //   $('table mt-2 mb-0 table-rank3').each(() => {
  //     data.push($(this).text())
  //   })

  $('.d-none d-lg-table-cell>a').text()
})
