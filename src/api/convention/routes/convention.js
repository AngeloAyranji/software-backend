'use strict';

/**
 * convention router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::convention.convention');
