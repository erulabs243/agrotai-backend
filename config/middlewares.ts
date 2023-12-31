// TODO set cors for production and development environments

export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: "*",
      origin: [
        "http://localhost", 
        "http://localhost:3000", 
        "http://localhost:1337", 
        "http://localhost:8000", 
        "https://agrotai.com", 
        "https://backend.agrotai.com",
        "https://crowdfarming.agrotai.com",
        "https://admin.agrotai.com"
      ]
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
