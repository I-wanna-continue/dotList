app.controller('profileCtrl', ['$scope', function ($scope) {
    
    $scope.title = "profile";
    $scope.menuHandler = "menu-bar";
    $scope.hamburgerHandler = "hamburger";




    
    $scope.menuAction = function(){
        if($scope.menuHandler == "menu-bar"){
           // $("#menu-bar").css("bottom", "0");
           $scope.menuHandler = "menu-bar-open";
             $scope.hamburgerHandler = "hamburger-open";
        }else{
           $scope.menuHandler= "menu-bar";
             $scope.hamburgerHandler = "hamburger"; 
        }
    }


}]);