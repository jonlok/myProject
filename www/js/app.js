// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ng-token-auth'])

.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3001'
  });
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

   .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

   .state('tab.post-input', {
      url: '/postinput',
      views: {
        'tab-post-input': {
          templateUrl: 'templates/tab-post-input.html',
          controller: 'PostInputCtrl'
        }
      }
    })

  .state('tab.posts', {
      url: '/posts',
      views: {
        'tab-posts': {
          templateUrl: 'templates/tab-posts.html',
          controller: 'PostsCtrl'
        }
      }
    })
  .state('tab.post-detail', {
      url: '/posts/:postId',
      views: {
        'tab-posts': {
          templateUrl: 'templates/post-detail.html',
          controller: 'PostDetailCtrl'
        }
      }
    })
  .state('tab.signup', {
      url: '/home/signup',
      views: {
        'tab-home': {
          templateUrl: 'templates/signup.html',
          controller: 'SignUpCtrl'
        }
      }

  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
