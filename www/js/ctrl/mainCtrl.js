app.controller('mainCtrl', ['$scope', 'ajaxFactory', function ($scope, ajaxFactory) {

    $scope.login = function(){
      //console.log($scope.username, $scope.password);
      ajaxFactory.ajax(
        {
          "data":{"email":$scope.username,"password":$scope.password},
          "method":"POST",
          "url": "AjaxLogin"
        },function(){

        },function(){
          
        });

    }


    $scope.flipped = false;

    $scope.flip = function (){
        if($scope.flipped){
            $("#login-side").css({"transform": "rotateY(0deg)", });
            $scope.flipped = false;
        }else{
            $("#login-side").css({"transform": "rotateY(180deg)", });
            $scope.flipped = true;
        }
    }

}]);
