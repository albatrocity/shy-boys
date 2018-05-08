const keystone = require('keystone')

module.exports = (List) => {
  List.schema.pre('save', function(next) {
    keystone.list('Configuration').model.collection.update({active: true}, {
      $set: { cache_key: Date.now().toString()}
    }).then(next)
  })
  List.schema.pre('remove', function(next) {
    keystone.list('Configuration').model.collection.update({active: true}, {
      $set: { cache_key: Date.now().toString() }
    }).then(next)
  })
}
