angular.module('starter.controllers', [])

.controller('SignUpCtrl', function($scope) {
    $scope.signup = function () {
      $auth.submitRegistration($scope.registrationForm).
       then(function(resp) {
         // handle success response
         console.log(resp);

         // redirect back to root when registration succesfull
         $location.path('/');
       }).
       catch(function(resp) {
         // handle error response
         console.log(resp);
       });
    };

})

.controller('HomeCtrl', function($scope) {
   $scope.data = {};

   $scope.login = function() {
     console.log('login user: ' + $scope.data.useremail + ' and password: ' + $scope.data.password);
   }

})

.controller('PostInputCtrl', ['$scope','$http',function($scope, $http) {
  $scope.newPost = {};
  $scope.posts = [];

  // $scope.addPost = function () {
  //   $scope.posts.push({content: $scope.newPost.content});
  //   $scope.newPost = {};
  // };

  getPosts();

  function getPosts(){
    $http
      .get('http://localhost:3001/posts')
      .then(function(response){
        console.log(response);
        $scope.posts = response.data;
      });
    }

  $scope.addPost = function(){
    $http({
      url: 'http://localhost:3001/posts',
      method: 'POST',
      data: $scope.newPost
    }).then(function(response){
        getPosts();
     });
    $scope.newPost = {};
  }

}])

.controller('DashCtrl', ['$scope','$http', function($scope, $http) {

  $scope.schools = [];

  $scope.getSchools = function(){
    console.log('test');
    $http
      .get('http://localhost:3001/schools')
      .then(function(response){
        console.log(response);
        $scope.schools = response.data;
      });
    }

}])

.controller('SignUpCtrl', function($scope) {})

.controller('PostsCtrl', function($scope, Posts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.posts = Posts.all();
  $scope.remove = function(post) {
    Posts.remove(post);
  };
})

.controller('PostDetailCtrl', function($scope, $stateParams, Posts) {
  $scope.post = Posts.get($stateParams.postId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
