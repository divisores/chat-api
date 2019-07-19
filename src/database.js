const mongoose = require('mongoose')

const { URI_DATABASE } = require('./settings')

module.exports = {
  connectDatabase: () => {
    return new Promise((resolve, reject) => {
      mongoose.Promise = Promise

      mongoose.connect(URI_DATABASE, {
          useNewUrlParser: true
        })
        .then(resolve)
        .catch(reject)
    })
  }
}