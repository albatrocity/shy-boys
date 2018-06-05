const cache = require("memory-cache");
const request = require("request-promise-native");
const bitBase = "https://rest.bandsintown.com";

module.exports = function(server, keystone) {
  server.use((req, res, next) => {
    req.keystone = keystone;
    next();
  });

  server.get("/api/pages/:slug", getPage);
  server.get("/api/posts", getPosts);
  server.get("/api/posts/:slug", getPost);
  server.get("/api/contacts", getContacts);
  server.get("/api/shows", getShows);
  server.get("/api/releases", getReleases);
};

const fillImages = (response, width, height) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.fill(width || 1200, height || 800),
      _id: image["_id"]
    }))
  });
};

const sizeImages = (response, width, height) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.limit(width || 1400, height || 1400),
      width: image.width,
      height: image.height,
      _id: image["_id"]
    }))
  });
};

async function updatePageCache(req, config, contentKey) {
  const Page = req.keystone.list("Page");

  cache.put("cache_key", config ? config.cache_key : Date.now());

  const page = await Page.model.findOne({ slug: req.params.slug });
  const prepared = sizeImages(page);
  cache.put(contentKey, prepared);
  return cache.get(contentKey);
}

async function updatePostCache(req, config, contentKey) {
  const Post = req.keystone.list("Post");

  cache.put("cache_key", config ? config.cache_key : Date.now());

  const post = await Post.model.findOne({ slug: req.params.slug });
  if (!post) {
    throw new Error("Post not found");
  }
  const prepared = sizeImages(post);
  cache.put(contentKey, prepared);
  return cache.get(contentKey);
}

async function updateContactsCache(req, config, contentKey) {
  const Contact = req.keystone.list("Contact");

  cache.put("cache_key", config ? config.cache_key : Date.now());

  const contacts = await Contact.model.find();
  cache.put(contentKey, contacts);
  return cache.get(contentKey);
}

async function updateReleasesCache(req, config, contentKey) {
  const Release = req.keystone.list("Release");

  const extractAlbumId = (embed = "") => {
    const first = embed.split("album=")[1];
    return first ? first.split("/")[0] : undefined;
  };

  cache.put("cache_key", config ? config.cache_key : Date.now());

  const releaseQuery = await Release.model
    .find()
    .sort("-releasedAt")
    .exec();
  const releases = releaseQuery.map(x => ({
    ...x.toJSON(),
    cover: {
      thumb_url: x._.cover && x._.cover.limit(600, 600),
      url: x._.cover && x._.cover.limit(1000, 1000),
      _id: x._id
    },
    bandcampAlbumId: x.playerEmbed && extractAlbumId(x.playerEmbed)
  }));
  cache.put(contentKey, releases);
  return cache.get(contentKey);
}

async function updatePostsCache(req, config, contentKey) {
  cache.put("cache_key", config ? config.cache_key : Date.now());
  const Post = req.keystone.list("Post");
  return new Promise((resolve, reject) => {
    Post.paginate({
      page: req.query.page || 1,
      perPage: 10,
      maxPages: 10
    })
      .where({ published: true })
      .sort("-publishedAt")
      .limit(5)
      .exec((err, res) => {
        if (err) {
          return reject(err);
        }
        const prepared = res.results.map(x => sizeImages(x));
        cache.put(
          contentKey,
          Object.assign(res, {
            results: prepared,
            image: config && config.image ? config.image.secure_url : undefined,
            meta: config && config.meta_description
          })
        );
        return resolve(cache.get(contentKey));
      });
  });
}

async function getPost(req, res) {
  const Configuration = req.keystone.list("Configuration");
  const config = await Configuration.model.findOne({ active: true });
  const contentKey = `${req.params.slug}_post`;
  if (config && cache.get("cache_key") === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey));
    } else {
      const content = await updatePostCache(req, config, contentKey);
      res.json(content);
    }
  } else {
    const content = await updatePostCache(req, config, contentKey);
    res.json(content);
  }
}

async function getPosts(req, res) {
  const Configuration = req.keystone.list("Configuration");
  const config = await Configuration.model.findOne({ active: true });
  const contentKey = req.query.page
    ? `posts_page_${req.query.page}`
    : `all_posts`;

  if (config && cache.get("cache_key") === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey));
    } else {
      const content = await updatePostsCache(req, config, contentKey);
      res.json(content);
    }
  } else {
    const content = await updatePostsCache(req, config, contentKey);
    res.json(content);
  }
}

async function getPage(req, res) {
  const Configuration = req.keystone.list("Configuration");
  const config = await Configuration.model.findOne({ active: true });
  const contentKey = `page_${req.params.slug}`;
  if (config && cache.get("cache_key") === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey));
    } else {
      const content = await updatePageCache(req, config, contentKey);
      res.json(content);
    }
  } else {
    const content = await updatePageCache(req, config, contentKey);
    res.json(content);
  }
}

async function getContacts(req, res) {
  const Configuration = req.keystone.list("Configuration");
  const config = await Configuration.model.findOne({ active: true });
  const contentKey = `contacts`;
  if (config && cache.get("cache_key") === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey));
    } else {
      const content = await updateContactsCache(req, config, contentKey);
      res.json(content);
    }
  } else {
    const content = await updateContactsCache(req, config, contentKey);
    res.json(content);
  }
}

async function getShows(req, res) {
  const options = {
    method: "GET",
    uri: `${bitBase}/artists/Shy%20Boys/events`,
    qs: {
      app_id: process.env.BANDSINTOWN_APP_ID
    },
    headers: {
      "content-type": "application/json"
    }
  };

  const bitResponse = await request(options);
  res.json(JSON.parse(bitResponse));
}

async function getReleases(req, res) {
  const Configuration = req.keystone.list("Configuration");
  const config = await Configuration.model.findOne({ active: true });
  const contentKey = `releases`;
  if (config && cache.get("cache_key") === config.cache_key) {
    if (cache.get(contentKey)) {
      return res.json(cache.get(contentKey));
    } else {
      const content = await updateReleasesCache(req, config, contentKey);
      res.json(content);
    }
  } else {
    const content = await updateReleasesCache(req, config, contentKey);
    res.json(content);
  }
}
