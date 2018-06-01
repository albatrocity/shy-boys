const keystone = require("keystone");
const Types = keystone.Field.Types;
const cacheBuster = require("./cacheBuster");

/**
 * Page Model
 * ==========
 */
const Page = new keystone.List("Page", {
  autokey: { path: "slug", from: "name", unique: true },
  defaultSort: "name",
  track: true
});

Page.add({
  name: { type: Types.Text, required: true, index: true },
  title: { type: Types.Text },
  slug: { type: Types.Text, index: true },
  content: { type: Types.Html, wysiwyg: true, initial: true },
  ogContent: {
    type: Types.Textarea,
    initial: true,
    label: "Social Share Content",
    note: `Additional content to be added when somebody shares this page on Facebook (photo credits, etc.)`
  },
  images: {
    type: Types.CloudinaryImages,
    folder: "pages",
    select: true,
    autoCleanup: true
  }
});

cacheBuster(Page);

/**
 * Registration
 */
Page.defaultColumns = "name, slug";
Page.register();
