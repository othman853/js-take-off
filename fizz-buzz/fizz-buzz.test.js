const test = require('ava')
const fizzBuzz = require('./fizz-buzz')

test('Retorna fizz para tres', t => {
  const traducao = fizzBuzz(3)

  t.deepEqual(traducao, 'fizz')
})


test('Retorna buzz para cinco', t => {
  const traducao = fizzBuzz(5)

  t.deepEqual(traducao, 'buzz')
})

test('Retorn fizzbuzz para quinze', t => {
  const traducao = fizzBuzz(15)

  t.deepEqual(traducao, 'fizzbuzz')
})
