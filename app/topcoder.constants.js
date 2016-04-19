import angular from 'angular'

angular.module('CONSTANTS', []).constant('CONSTANTS', {
  'API_URL'                 : process.env.API_URL,
  'AUTH_API_URL'            : process.env.AUTH_API_URL,
  'API_URL_V2'              : process.env.API_URL_V2,
  'ASSET_PREFIX'            : process.env.ASSET_PREFIX || '',
  'auth0Callback'           : process.env.auth0Callback,
  'auth0Domain'             : process.env.auth0Domain,
  'BLOG_LOCATION'           : process.env.BLOG_LOCATION,
  'clientId'                : process.env.clientId,
  'COMMUNITY_URL'           : process.env.COMMUNITY_URL,
  'domain'                  : process.env.domain,
  'ENVIRONMENT'             : process.env.ENVIRONMENT,
  'FORUMS_APP_URL'          : process.env.FORUMS_APP_URL,
  'HELP_APP_URL'            : process.env.HELP_APP_URL,
  'MAIN_URL'                : process.env.MAIN_URL,
  'ARENA_URL'               : process.env.ARENA_URL,
  'PHOTO_LINK_LOCATION'     : process.env.PHOTO_LINK_LOCATION,
  'SWIFT_PROGRAM_URL'       : process.env.SWIFT_PROGRAM_URL,
  'TCO16_URL'               : process.env.TCO16_URL,

  'NEW_CHALLENGES_URL'     : 'https://www.topcoder.com/challenges/develop/upcoming/',
  'SWIFT_PROGRAM_ID'       : 3445,
  'UPCOMING_SRMS_URL'      : 'https://www.topcoder.com/challenges/data/upcoming/',
  'EVENT_USER_LOGGED_IN'   : 'user_logged_in',
  'EVENT_USER_LOGGED_OUT'  : 'user_logged_out',
  'EVENT_PROFILE_UPDATED'  : 'profile_updated',
  'STATE_LOADING'          : 'loading',
  'STATE_ERROR'            : 'error',
  'STATE_READY'            : 'ready',
  'BUSY_PROGRESS_MESSAGE'  : 'Processing...',
  'REGISTRATION'           : 'REGISTRATION',
  'CODING'                 : 'CODING',
  'REGISTERED'             : 'REGISTERED',
  'SUBMISSION_TYPE_CONTEST': 'Contest Submission',
  'STATUS_ACTIVE'          : 'Active',
  'STATUS_COMPLETED_WITHOUT_WIN' : 'Completed Without Win',
  'ACCOUNTS_APP_LOGIN_URL'       : '//accounts.topcoder-dev.com/login',
  'ACCOUNTS_APP_LOGOUT_URL'       : '//accounts.topcoder-dev.com/logout'
})
