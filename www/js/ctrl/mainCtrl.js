app.controller('mainCtrl', ['$scope', function ($scope, ajaxFactory) {

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
