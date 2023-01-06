// module.exports.intro = (req, res)=>{
//     res.send('Express로 만든 서버입니다.')
// }

module.exports.intro = (req, res) => {
  let u_name = req.param('name')
  let b_name = req.param('bname')

  console.log(u_name, b_name)
  res.send(`${u_name}과 ${b_name}입니다.`)
}
