 app.controller('MyController', ['$scope', function ($scope) {
                
    $scope.tasks = [];
    $scope.loading = true;

    $scope.addTask = function (){
        $scope.tasks.push({id:$scope.tasks.length+1, title:$scope.task, complite:false});
        $scope.task = "";
        //saveList();
    };

    $scope.init = function(){
        /*$scope.db = new PouchDB('listapp');
        $scope.db.get('list').then(function(doc) {
            $scope.$apply(function(){
                $scope.tasks = doc["tasks"];
                $scope.loading = false;
            });
        });*/


    }

    $scope.completeTask = function($index){
        ($scope.tasks[$index]["complite"]) ? $scope.tasks[$index]["complite"] = false : $scope.tasks[$index]["complite"] = true;
        //saveList();
    }

    $scope.deleteTask = function($index){
        if(confirm("Are you sure you whant to delete " + $scope.tasks[$index]["title"] + "?")){
            $scope.tasks.splice($index, 1);
            //saveList();
        }
    }

    function saveList(){
        $scope.db.get('list').then(function(doc) {
          return $scope.db.put({
            _id: doc["_id"],
            _rev: doc["_rev"],
            tasks: $scope.tasks
          });
        });
    }


}]);