const asList = Array.of
const apply = Function.prototype.apply

const traduzir = (dividendo, nome) => (numero) => numero % dividendo === 0 ? nome : '_'

const fizz = traduzir(3, 'fizz')
const buzz = traduzir(5, 'buzz')
const foo = traduzir(2, 'foo')
const bar = traduzir(1, 'bar')

const fizzBuzz = (n) =>
  asList(fizz, buzz, foo, bar)
    .map(apply)
    .filter(_n => _n !== '_')
    .join('')
  || n.toString()

console.log(fizzBuzz(3))

console.log(fizzBuzz(5))

console.log(fizzBuzz(15))

console.log(fizzBuzz(2))
