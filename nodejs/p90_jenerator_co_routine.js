const log = console.log
function* map(f, list) {
  for (const a of list) {
    yield f(a)
  }
}

const add = (a) => a + 10
const a = [1, 2, 3, 4, 5]
const cg = map(add, a)

log(cg.next())
log('어떤 로직 1')

log(cg.next())
log('어떤 로직 2')

log(cg.next())
log('어떤 로직 3')

log(cg.next())
log('어떤 로직 4')

log(cg.next())
log('어떤 로직 5')
