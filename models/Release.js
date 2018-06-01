const keystone = require("keystone");
const Types = keystone.Field.Types;
const cacheBuster = require("./cacheBuster");

/**
 * Client Model
 * ==========
 */
const Release = new keystone.List("Release", {
  autokey: { path: "slug", from: "title publishedAt", unique: true },
  track: true
});

Release.add({
  title: { type: Types.Text, required: true, initial: true },
  listenUrl: { type: Types.Text, initial: true },
  purchaseUrl: { type: Types.Text, initial: true },
  playerEmbed: { type: Types.Textarea, initial: true },
  linerNotes: { type: Types.Html, wysiwyg: true },
  releasedAt: { type: Types.Date, default: Date.now, initial: true },
  cover: {
    type: Types.CloudinaryImage,
    folder: "releases",
    select: true,
    autoCleanup: true,
    initial: true
  }
});
cacheBuster(Release);

/**
 * Registration
 */
Release.defaultColumns = "title, releasedAt";
Release.register();
