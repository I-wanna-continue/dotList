app.controller('mainCtrl', ['$scope', function ($scope) {
    
    $scope.flipped = false;
    
    $scope.flip = function (){
        if($scope.flipped){
            $("#f1_card").css({"transform": "rotateY(0deg)", });
            $scope.flipped = false;
        }else{
            $("#f1_card").css({"transform": "rotateY(180deg)", });
            $scope.flipped = true;
        }    
    }
    
}]);