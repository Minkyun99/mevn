require('dotenv').config()
const mongoose = require('mongoose')

const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'sensor'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify', false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))

const photo = require('./photo.js')

const main = async () => {
  const t = await photo
    .findOne({
      title: {
        $eq: '큰돌'
      },
      url: {
        $eq: 'jhc9639@naver.com'
      }
    })
    .lean()
  console.log(t)
}

main()
