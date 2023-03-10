const http = require('http')
http
  .createServer((req, res) => {
    if (req.headers.cookie == undefined) {
      res.writeHead(200, {
        'Set-Cookie': [
          'yummy_cookie=choco;Secure;HttpOnly', //Scure는 http's'에 대한 보안, choco의 보안성을 더 올림.
          'tasty_cookie=strawberry',
          `Parament-cookies;Max-Age=${60 * 60 * 24}` //일정시간이 지나면 쿠키가 삭제됨.
          //만약 cookie를 지속적으로 유지하고 싶다면 Expires을 사용해야 함.
        ]
      })
    }
    console.log(req.headers.cookie)
    res.write('Cookie test!')
    res.end()
  })
  .listen(3000)
