const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Client Model
 * ==========
 */
const Configuration = new keystone.List('Configuration')

Configuration.add({
  name: { type: Types.Text, required: true, initial: true, default: 'Default' },
  active: { type: Types.Boolean },
  cache_key: { type: Types.Number, default: Date.now() },
  image: {
    type: Types.CloudinaryImage,
    folder: 'posts',
    select: true,
    autoCleanup : true,
    note: "Default share image",
  }
})

Configuration.schema.pre('save', function(next) {
  this.cache_key = Date.now()
  next()
})
/**
 * Registration
 */
Configuration.defaultColumns = 'name, active'
Configuration.register()
