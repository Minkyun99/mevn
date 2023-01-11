const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.botid

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true })

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id
  const resp = match // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  if (msg.text == '안녕하세요') {
    bot.sendMessage(chatId, '반갑습니다.')
  }

  if (msg.text == '로악귀') {
    let image =
      'https://upload3.inven.co.kr/upload/2021/12/10/bbs/i14015888077.png'
    bot.sendMessage(chatId, image)
  }

  if (msg.text == '반장님계단운동시간') {
    let image =
      'https://i.pinimg.com/originals/a0/29/2b/a0292b8b699accc1379057b37865c0ca.gif'
    bot.sendMessage(chatId, image)
  }

  if (msg.text == '강사님 이야기가 끝난 후 내 모습') {
    let image = 'https://img.theqoo.net/img/vmUfq.jpg'
    bot.sendMessage(chatId, image)
  }

  if (msg.text == '잘한다') {
    let image = 'https://img.theqoo.net/img/ofEaA.jpg'
    bot.sendMessage(chatId, image)
  }

  if (msg.text == '코딩하러 가자') {
    let image =
      'https://upload3.inven.co.kr/upload/2022/03/26/bbs/i15608172024.png?MW=360'
    bot.sendMessage(chatId, image)
  }

  if (msg.text == '집간다') {
    let image =
      'https://post-phinf.pstatic.net/MjAyMDAzMTdfNDQg/MDAxNTg0NDEwMjkxNTE5.TZTfSedKEwlvuinriffdlbli6dIPIVCy0yKNxoGtgWUg.MoqN0ZwKBIkEP4X0sZhaygsX6PDbhiYPT-IS6ZrFYuog.PNG/1.png?type=w1200'
    bot.sendMessage(chatId, image)
  }

  if (msg.text == '이시빈 전적') {
    let image =
      'https://img.lostark.co.kr/armory/9/4A97336897ABB060465CB3017AAC9BD320ED2358F4E4AC51EA64C20D48B0B706.png?v=20230108073204'

    let link = 'https://loawa.com/char/%EB%8D%B0%EC%8A%A4%EB%85%B8%ED%8A%B821'
    bot.sendMessage(chatId, `${image} 아래 링크를 클릭해보세요   ${link}`)
  }
})
