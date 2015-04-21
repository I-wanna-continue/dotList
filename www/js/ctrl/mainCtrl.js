app.controller('mainCtrl', ['$scope', 'ajaxFactory', '$state', function ($scope, ajaxFactory, $state) {
    
    $scope.login = function(){
      //console.log($scope.username, $scope.password);
      ajaxFactory.ajax(
        {
          "data":{"email":$scope.username,"password":$scope.password},
          "method":"POST",
          "url": "/AjaxLogin"
        },function(data){
          console.log(data);
          if(data === ""){$scope.errormsg = "Wrong email or password! try again";}
            else{
              var data = JSON.parse(data);
              $state.transitionTo("lists");
            }

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
