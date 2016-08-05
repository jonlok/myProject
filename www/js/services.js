angular.module('starter.services', [])

.factory('Posts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [{
    id: 0,
    name: 'Michael Lee',
    lastText: 'You on your way?',
    pic: 'https://static.pexels.com/photos/2752/city-sunny-people-street.jpg'
  }, {
    id: 1,
    name: 'Daniel Wong',
    lastText: 'Hey, it\'s me',
    pic: 'https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg'
  }, {
    id: 2,
    name: 'Arthur Chan',
    lastText: 'I should buy a boat',
    pic: 'https://static.pexels.com/photos/46082/pexels-photo-46082.jpeg'
  }, {
    id: 3,
    name: 'Sarah Smith',
    lastText: 'Look at my mukluks!',
    pic: 'https://static.pexels.com/photos/65121/pexels-photo-65121.jpeg'
  }, {
    id: 4,
    name: 'Mary Carpenter',
    lastText: 'This is wicked good ice cream.',
    pic: 'https://static.pexels.com/photos/27411/pexels-photo-27411.jpg'
  }];

  return {
    all: function() {
      return posts;
    },
    remove: function(post) {
      posts.splice(posts.indexOf(post), 1);
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
});
