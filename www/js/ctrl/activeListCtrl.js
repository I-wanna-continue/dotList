app.controller('activeListCtrl', function ($scope, $stateParams) {
    
    console.log($stateParams);
    $scope.id = $stateParams.id;

});