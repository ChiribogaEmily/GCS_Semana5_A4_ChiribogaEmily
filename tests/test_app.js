const assert = require('assert')
const { addTask, listTasks } = require('../src/app')

addTask('Matemáticas', 10)
assert.ok(listTasks().length >= 1)
console.log('OK: test_add_and_list pasó correctamente.')
