'use strict';

/**
 * language-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::language-test.language-test');
