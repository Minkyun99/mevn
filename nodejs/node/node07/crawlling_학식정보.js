const axios = require('axios') //리퀘스트용도로 사용
const cheerio = require('cheerio') //선택자로 필요한 정보만 추출

const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'

axios.get(url).then((res) => {
  console.log(res.data)
  let $ = cheerio.load(res.data)
  $('.menu-tit01~p').each(() => {
    console.log($(this).text())
  })
})
