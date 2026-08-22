const tasks = []

function listTasks() {
  return tasks
}

function addTask(subject, price) {
  if (!subject) throw new Error('subject required')
  if (price < 0) throw new Error('price must be >= 0')
  tasks.push({ subject, price })
  return true
}

module.exports = { listTasks, addTask }
