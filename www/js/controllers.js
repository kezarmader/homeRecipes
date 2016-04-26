angular.module('starter.controllers', ['recipe.services'])

.controller('DashCtrl', function($scope, $state, recipeServices) {
  $scope.recipes = recipeServices.all();

  $scope.toggleFavorite = function(){
    var obj = this.recipes[this.$index];
    obj.isFavorite = !obj.isFavorite;
  }

  $scope.navigate = function(id){
    console.log('inside navigate');
    $state.go('tab.recipe-detail', {recipeId: id});
  }
})

.controller('RecipeDetailCtrl', function($scope, $stateParams, recipeServices) {
  console.log($scope, $stateParams, recipeServices);
  $scope.recipe = recipeServices.get($stateParams.recipeId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
/*.controller('AboutMeCtrl', function($state){
  window.open('http://kezarmader.wix.com/aboutme', '_system');
  //$state.go('tab.recipes');
});*/
