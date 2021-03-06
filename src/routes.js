/**
 * Contains all routes
 */

const constants = require('../app-constants')
const { SCOPES: { READ, CREATE, DELETE, UPDATE, ALL } } = require('config')

module.exports = {
  '/resources': {
    get: {
      controller: 'ResourceController',
      method: 'getResources',
      auth: 'jwt',
      access: [constants.UserRoles.Admin, constants.UserRoles.User],
      scopes: [READ, ALL]
    },
    post: {
      controller: 'ResourceController',
      method: 'createResource',
      auth: 'jwt',
      access: [constants.UserRoles.Admin, constants.UserRoles.User],
      scopes: [CREATE, ALL]
    },
    delete: {
      controller: 'ResourceController',
      method: 'deleteResource',
      auth: 'jwt',
      access: [constants.UserRoles.Admin, constants.UserRoles.User],
      scopes: [DELETE, ALL]
    }
  },
  '/resources/health': {
    get: {
      controller: 'HealthCheckController',
      method: 'check'
    }
  },
  '/resources/:memberId/challenges': {
    get: {
      controller: 'ResourceController',
      method: 'listChallengesByMember',
      auth: 'jwt',
      access: [constants.UserRoles.Admin, constants.UserRoles.User],
      scopes: [READ, ALL]
    }
  },
  '/resourceRoles': {
    get: {
      controller: 'ResourceRoleController',
      method: 'getResourceRoles',
      auth: 'jwt',
      access: [constants.UserRoles.Admin, constants.UserRoles.User],
      scopes: [READ, ALL]
    },
    post: {
      controller: 'ResourceRoleController',
      method: 'createResourceRole',
      auth: 'jwt',
      access: [constants.UserRoles.Admin],
      scopes: [CREATE, ALL]
    }
  },
  '/resourceRoles/:resourceRoleId': {
    put: {
      controller: 'ResourceRoleController',
      method: 'updateResourceRole',
      auth: 'jwt',
      access: [constants.UserRoles.Admin],
      scopes: [UPDATE, ALL]
    }
  },
  '/resourceRoles/PhaseDependencies': {
    get: {
      controller: 'ResourceRolePhaseDependencyController',
      method: 'getDependencies',
      auth: 'jwt',
      access: [constants.UserRoles.Admin],
      scopes: [READ, ALL]
    },
    post: {
      controller: 'ResourceRolePhaseDependencyController',
      method: 'createDependency',
      auth: 'jwt',
      access: [constants.UserRoles.Admin],
      scopes: [CREATE, ALL]
    }
  },
  '/resourceRoles/PhaseDependencies/:id': {
    put: {
      controller: 'ResourceRolePhaseDependencyController',
      method: 'updateDependency',
      auth: 'jwt',
      access: [constants.UserRoles.Admin],
      scopes: [UPDATE, ALL]
    },
    delete: {
      controller: 'ResourceRolePhaseDependencyController',
      method: 'deleteDependency',
      auth: 'jwt',
      access: [constants.UserRoles.Admin],
      scopes: [DELETE, ALL]
    }
  }
}
