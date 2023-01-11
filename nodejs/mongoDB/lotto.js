const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const Lotto = require('./new_Lotto.js')

const mongoDB = 'mongodb://127.0.0.1/lotto'

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err))

const _path = path.join(__dirname, '/')

const main = async () => {
  const _data = {
    id: '지난 주 로또 당첨 번호',
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=1&acr=1&acq=%EC%A7%80%EB%82%9C%EC%A3%BC+%EB%A1%9C%EB%98%90&qdt=0&ie=utf8&query=%EC%A7%80%EB%82%9C%EC%A3%BC+%EB%A1%9C%EB%98%90+%EB%8B%B9%EC%B2%A8%EB%B2%88%ED%98%B8'
  }

  const lotto = new Lotto(_data)
  const t = await lotto.save()
  console.log(t)
}

main()
