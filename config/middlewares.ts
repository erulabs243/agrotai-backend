// TODO set cors for production and development environments

export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: "*",
      origin: ['https://backend.agrotai.com', 'https://agrotai.com', 'https://crowdfarming.agrotai.com', 'https://admin.agrotai.com']
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
