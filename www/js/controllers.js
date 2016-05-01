angular.module('starter.controllers', ['recipe.services'])
.controller('HomeCtrl', function($scope, $state, recipeServices) {
  $scope.recipes = recipeServices.all();

  $scope.toggleFavorite = function(){
    var obj = this.recipes[this.$index];
    obj.isFavorite = !obj.isFavorite;
  }

  $scope.navigate = function(id){
    $state.go('tab.recipe-detail', {recipeId: id});
  }
})
.controller('RecipeDetailCtrl', function($scope, $stateParams, recipeServices) {
  $scope.recipe = recipeServices.get($stateParams.recipeId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
