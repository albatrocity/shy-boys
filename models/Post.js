const keystone = require('keystone')
const Types = keystone.Field.Types
const s3Storage = require('../config/s3Storage')
const cacheBuster = require('./cacheBuster')

/**
 * Client Model
 * ==========
 */
const Post = new keystone.List('Post', {
  autokey: { path: 'slug', from: 'title publishedAt', unique: true },
  track: true,
})

Post.add({
  title: { type: Types.Text, required: true, initial: true },
  published: { type: Types.Boolean, initial: true, default: false },
  content: { type: Types.Html, wysiwyg: true, initial: true },
  publishedAt: { type: Types.Date, default: Date.now },
  slug: { type: Types.Text, index: true },
  images: {
    type: Types.CloudinaryImages,
    folder: 'posts',
    select: true,
    autoCleanup : true,
  },
})
cacheBuster(Post)

/**
 * Registration
 */
Post.defaultColumns = 'title, publishedAt, published'
Post.register()
