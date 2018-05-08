const keystone = require('keystone')
const Types = keystone.Field.Types
const cacheBuster = require('./cacheBuster')

/**
 * Page Model
 * ==========
 */
const Page = new keystone.List('Page', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: 'name',
  track: true,
})

Page.add({
  title: { type: Types.Text },
  name: { type: Types.Text, required: true, index: true },
  slug: { type: Types.Text, index: true },
  content: { type: Types.Html, wysiwyg: true, initial: true },
  images: {
    type: Types.CloudinaryImages,
    folder: 'pages',
    select: true,
    autoCleanup : true,
  }
})

cacheBuster(Page)

/**
 * Registration
 */
Page.defaultColumns = 'title, name, slug'
Page.register()
