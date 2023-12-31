/**
 * campaign controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::campaign.campaign');

/* export default factories.createCoreController('api::campaign.campaign', ({ strapi }) => ({
    async find(ctx) {
      // Calling the default core action
      const { data, meta } = await super.find(ctx);
      const query = strapi.db.query('api::campaign.campaign');
      await Promise.all(
        data.map(async (item, index) => {
          const foundItem = await query.findOne({
            where: {
              id: item.id,
            },
            populate: ['createdBy', 'updatedBy'],
          });
          
          data[index].attributes.createdBy = {
            id: foundItem.createdBy.id,
            firstname: foundItem.createdBy.firstname,
            lastname: foundItem.createdBy.lastname,
          };
          data[index].attributes.updatedBy = {
            id: foundItem.updatedBy.id,
            firstname: foundItem.updatedBy.firstname,
            lastname: foundItem.updatedBy.lastname,
          };
        })
      );
      return { data, meta };
    },
  })); */