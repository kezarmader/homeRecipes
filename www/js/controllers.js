angular.module('starter.controllers', ['recipe.services', 'ngOpenFB'])
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
})
.controller('LoginCtrl', function($scope, $ionicModal, $openFB, $rootScope){
  // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.fbLogin = function () {
    $openFB.login({scope: 'email, public_profile, user_friends, user_posts, publish_actions'}).then( //remove: read_stream
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.getProfileInfo();
            } else {
                alert('Facebook login failed');
            }
        });
	};

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.getProfileInfo = function() {
      var profilePromise = $openFB.api({
          path: '/me',
          params: {fields: 'id,name'}
      }).then(
          function (user) {
              $rootScope.user = user;

              $openFB.api({
                  path: '/me/picture',
                  params: {
                      redirect: false,
                      height: 640,
                      width: 640
                  }
              }).then(function( res ) {
                  $rootScope.user.picture= res.data.url;
              });
          },
          function (error) {
              alert('Facebook error: ' + error.error_description);
          });
  }
})
.controller('ProfileCtrl', function($scope, $openFB){

});
