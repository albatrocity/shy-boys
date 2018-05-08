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
  meta_description: { type: Types.Textarea, label: 'Meta Tag Description' },
  cache_key: { type: Types.Number, default: Date.now().toString() },
  image: {
    type: Types.CloudinaryImage,
    folder: 'posts',
    select: true,
    autoCleanup : true,
    note: "Default share image",
  }
})

Configuration.schema.pre('save', function(next) {
  this.cache_key = Date.now().toString();
  next()
})
/**
 * Registration
 */
Configuration.defaultColumns = 'name, active'
Configuration.register()
