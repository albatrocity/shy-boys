const request = require("request-promise-native");
const bitBase = "https://rest.bandsintown.com";

exports.handler = async function(event, context, callback) {
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
  try {
    const bitResponse = await request(options);
    const json = JSON.parse(bitResponse);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(json)
    });
  } catch (e) {
    console.log("ERROR");
    console.log(e);
    callback(null, {
      statusCode: 500,
      body: e
    });
  }
};
