const { v4: uuid } = require('uuid')

exports.comments = [
  {
    id: uuid(),
    username: 'wolfman',
    comment: 'Hello World',
  },

  {
    id: uuid(),
    username: 'kim',
    comment: 'Hi',
  },

  {
    id: uuid(),
    username: 'jojo',
    comment: 'Hello',
  },
]
