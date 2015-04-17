app.controller('activeListCtrl', function ($scope, $stateParams, ajaxFactory) {

    $scope.db = new PouchDB('dotlist');
    $scope.title = "";
    $scope.serchword = "";

    $scope.menuHandler = "menu-bar";
    $scope.hamburgerHandler = "hamburger";
    $scope.currentTask = 0;
    $scope.selectedList = [];

    $scope.init = function(){
        $scope.getItems();
    }

    $scope.completeTask = function($index){
    	($scope.selectedList[$index]["complete"]) ? $scope.selectedList[$index]["complete"] = false : $scope.selectedList[$index]["complete"] = true;
       	console.log($index);
       	($scope.selectedList[$index]["complete"]) ? $scope.currentTask-- : $scope.currentTask++;
       	$scope.saveItems();
    }

    	//Delete items in a List
	$scope.deleteItem = function($index){

		if(confirm("Are you sure you want to delete " + $scope.selectedList[$index]["title"] + "?")){
            $scope.selectedList.splice($index, 1);
            $scope.currentTask--;
        }
        $scope.saveItems();
	}

	$scope.addItem = function(){

		$scope.selectedList.push({
			id: $scope.selectedList.length +1,
			title: $scope.itemTitle,
			complete: false

		});

		$scope.itemTitle = "";
		$scope.currentTask++
        $scope.saveItems();
	}

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

    $scope.search = function(){
        $(".search-bar").slideToggle("slow");
    }

    $scope.openModal = function(){
        $('#overlay')
        .fadeIn()
        .find('.modalen')
        .fadeIn();
        $scope.menuAction();
    }

    $scope.closeModal = function(){
         $('#overlay')
         .fadeOut()
         .find('.modalen')
         .fadeOut();
    }

    $scope.getItems = function(){
        $scope.db.get('lists').then(function (doc) {
            console.log(doc["lists"]);
            for(var i = 0; i < doc["lists"].length; i++){
                if(doc["lists"][i]["id"] == $stateParams.id){
                    $scope.$apply(function(){
                        $scope.title = doc["lists"][i]["title"];
                        $scope.selectedList = doc["lists"][i]["items"];
                    });
                }
            }
            for(var i = 0; i < $scope.selectedList.length; i++){
                if($scope.selectedList[i].complete == false) $scope.currentTask++;

            }
        });
    }

    $scope.saveItems = function(){
        $scope.db.get('lists').then(function(doc) {
          //var lists = doc["lists"];
          for(var i = 0; i < doc["lists"].length; i++){
                if(doc["lists"][i]["id"] == $stateParams.id){
                    doc["lists"][i]["items"] = $scope.selectedList;
                }
          }
          return $scope.db.put({
            _id: doc["_id"],
            _rev: doc["_rev"],
            lists: doc["lists"]
          });
        });
    }

});
