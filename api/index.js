const cache = require('memory-cache')

module.exports = function(server, keystone) {
  server.use((req, res, next) => {
    req.keystone = keystone
    next()
  })

  server.get('/api/pages/:slug', getPage)
  server.get('/api/posts', getPosts)
  server.get('/api/posts/:slug', getPost)
  server.get('/api/contacts', getContacts)
}

const fillImages = (response, width, height) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.fill(width || 1200, height || 800),
      '_id': image['_id']
    }))
  })
}

const sizeImages = (response, width, height) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.limit(width || 1400, height || 1400),
      '_id': image['_id']
    }))
  })
}

async function updatePageCache(req, config, contentKey) {
  const Page = req.keystone.list('Page')

  cache.put('cache_key', config ? config.cache_key : Date.now())

  const page = await Page.model.findOne({slug: req.params.slug});
  const prepared = sizeImages(page);
  cache.put(contentKey, prepared)
  return cache.get(contentKey)
}

async function updatePostCache(req, config, contentKey) {
  const Post = req.keystone.list('Post')

  cache.put('cache_key', config ? config.cache_key : Date.now())

  const post = await Post.model.findOne({slug: req.params.slug});
  const prepared = sizeImages(post)
  cache.put(contentKey, prepared)
  return cache.get(contentKey)
}

async function updateContactsCache(req, config, contentKey) {
  const Contact = req.keystone.list('Contact')

  cache.put('cache_key', config ? config.cache_key : Date.now())

  const post = await Contact.model.find();
  cache.put(contentKey, post)
  return cache.get(contentKey)
}

async function updatePostsCache(req, config, contentKey) {
  cache.put('cache_key', config ? config.cache_key : Date.now())
  const Post = req.keystone.list('Post')
  return new Promise((resolve, reject) => {
    Post.paginate({
      page: req.query.page || 1,
      perPage: 10,
      maxPages: 10,
    })
    .where({ published: true })
    .sort('-publishedAt')
    .limit(5)
    .exec((err, res) => {
      if (err) { return reject(err) }
      const prepared = res.results.map(x => sizeImages(x))
      cache.put(contentKey, Object.assign(res, {
        results: prepared,
        image: config.image ? config.image.secure_url : undefined ,
        meta: config.meta_description,
      }));
      return resolve(cache.get(contentKey));
    })
  })
}

async function getPost(req, res) {
  const Configuration = req.keystone.list('Configuration')
  const config = await Configuration.model.findOne({ active: true })
  const contentKey = `${req.params.slug}_post`
  if (config && cache.get('cache_key') === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey))
    } else {
      const content = await updatePostCache(req, config, contentKey)
      res.json(content)
    }
  } else {
    const content = await updatePostCache(req, config, contentKey)
    res.json(content)
  }
}

async function getPosts(req, res) {
  const Configuration = req.keystone.list('Configuration')
  const config = await Configuration.model.findOne({ active: true })
  const contentKey = req.query.page ? `posts_page_${req.query.page}` : `all_posts`

  if (config && cache.get('cache_key') === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey))
    } else {
      const content = await updatePostsCache(req, config, contentKey)
      res.json(content)
    }
  } else {
    const content = await updatePostsCache(req, config, contentKey)
    res.json(content)
  }
}


async function getPage(req, res) {
  const Configuration = req.keystone.list('Configuration')
  const config = await Configuration.model.findOne({ active: true })
  const contentKey = `page_${req.params.slug}`
  if (config && cache.get('cache_key') === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey))
    } else {
      const content = await updatePageCache(req, config, contentKey)
      res.json(content)
    }
  } else {
    const content = await updatePageCache(req, config, contentKey)
    res.json(content)
  }
}

async function getContacts(req, res) {
  const Configuration = req.keystone.list('Configuration')
  const config = await Configuration.model.findOne({ active: true })
  const contentKey = `contacts`
  if (config && cache.get('cache_key') === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey))
    } else {
      const content = await updateContactsCache(req, config, contentKey)
      res.json(content)
    }
  } else {
    const content = await updateContactsCache(req, config, contentKey)
    res.json(content)
  }
}
