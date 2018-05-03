const keystone = require('keystone')
const Types = keystone.Field.Types
const s3Storage = require('../config/s3Storage')
const cacheBuster = require('./cacheBuster')

const Contact = new keystone.List('Contact', {
  sortable: true,
})

Contact.add({
  name: { type: Types.Text, required: true, initial: true, index: true },
  type: { type: Types.Text, initial: true, default: false, note: "'Booking', 'Management', etc." },
  email: { type: Types.Email, initial: true, required: true },
})
cacheBuster(Contact)

/**
 * Registration
 */
Contact.defaultColumns = 'name, type, email'
Contact.register()
