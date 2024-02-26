'use strict';

/**
 * recruitement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recruitement.recruitement');
