// const keystone = require('keystone')
//
// const storage = new keystone.Storage({
//   adapter: require('keystone-storage-adapter-s3'),
//   s3: {
//     key: process.env.S3_KEY, // required; defaults to process.env.S3_KEY
//     secret: process.env.S3_SECRET, // required; defaults to process.env.S3_SECRET
//     bucket: process.env.S3_BUCKET, // required; defaults to process.env.S3_BUCKET
//     path: '/uploads',
//     headers: {
//       'x-amz-acl': 'public-read', // add default headers; see below for details
//     },
//   },
//   schema: {
//     bucket: true, // optional; store the bucket the file was uploaded to in your db
//     etag: true, // optional; store the etag for the resource
//     path: true, // optional; store the path of the file in your db
//     url: true, // optional; generate & store a public URL
//   },
// })
//
// module.exports = storage
