.directive('menu', function() {
  return {
    restrict: 'E',
    scope: {
      'close': '&onClose'
    },
    templateUrl: 'menuTemplate.html'
  };
});
