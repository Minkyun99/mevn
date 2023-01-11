require('dotenv').config()
const mongoose = require('mongoose')

const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify', false)
mongoose.set('strictQuery', false) //권장사항

mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))

const Photo = require('./photo.js')

const main = async () => {
  const _data = {
    albumId: 12010,
    id: 12010,
    title: '큰돌',
    url: 'jhc9639@naver.com',
    thumbnailUrl: 'http://via.placeholder.com/150/13454b'
  }

  const new_photo = new Photo(_data)
  const t = await new_photo.save()
  console.log(t)
}

main()
