
module.exports = ({ env }) => ([
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            env('AWS_BUCKET') + ".s3.eu-west-3.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            env('AWS_BUCKET') + ".s3.eu-west-3.amazonaws.com",,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  { name: 'strapi::body', config: { includeUnparsed: true } },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
]);