angular.module('tmtApp.configures', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
      
        .state('accounts', {
          url: '/accounts',
          templateUrl: 'app/configures/accounts.html',
          controller: 'accountController'
        })
        .state('groups', {
          url: '/groups',
          templateUrl: 'app/configures/groups.html'
        })
        .state('settings', {
          url: '/settings',
          templateUrl: 'app/configures/settings.html'
        })
        .state('addons', {
          url: '/addons',
          templateUrl: 'app/configures/addons.html',
          //controller: addonsController
        })
      }
  ]
);