angular.module('starter.controllers', [])

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
      .get('http://localhost:3000/posts')
      .then(function(response){
        console.log(response);
        $scope.posts = response.data;
      });
    }

  $scope.addPost = function(){
    $http({
      url: 'http://localhost:3000/posts',
      method: 'POST',
      data: $scope.newPost
    }).then(function(response){
        getPosts();
     });
    $scope.newPost = {};
  }

}])

.controller('DashCtrl', function($scope) {})

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
