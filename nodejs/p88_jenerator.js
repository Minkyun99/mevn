const log = console.log
function* get() {
  yield 10
  if (false) yield 20
  yield 30
  return 90
  yield 40
}

let iter = get()
console.log
