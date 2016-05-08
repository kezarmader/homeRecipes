angular.module('starter')
.factory('appConfig',function(){
    return {
      getFbAppId: getFbAppId
    }

    function getFbAppId(){
      return 'APPID';
    }
});
