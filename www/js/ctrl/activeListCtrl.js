app.controller('activeListCtrl', function ($scope, $state, $stateParams, ajaxFactory) {

    $scope.db = new PouchDB('dotlist');
    $scope.title = "";
    $scope.serchword = "";

    $scope.menuHandler = "menu-bar";
    $scope.hamburgerHandler = "hamburger";
    $scope.currentTask = 0;

    $scope.loading = false;

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

    $scope.refresh = function(){
      console.log("refresh!");
    }

  $scope.deletelist = function(){
    if(confirm("Are you sure you want to delete " + $scope.title + "?")){
          loading = true;
          /*ajaxFactory.ajax({
              "data":{
                "list_id": $stateParams.id,
                "user_id": $.cookie('userId')
              },
              "method":"POST",
              "url": "/AjaxRemoveList"
            }).done(function(data){
              console.log(data);
              loading = false;
            });*/

            $scope.db.get('lists').then(function(doc) {
              var lists = [];
              for(var i = 0; i < doc["lists"].length; i++){
                  console.log(doc["lists"]);
                  if(doc["lists"][i]["id"] === $stateParams.id){
                    //lists = doc["lists"].splice(i, 1);
                    console.log(doc["lists"].splice(i-1, 1));

                  }
              }
              /*
              return $scope.db.put({
                _id: doc["_id"],
                _rev: doc["_rev"],
                lists: lists
              });*/
            });
            //$state.transitionTo("lists");
        }
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

    $scope.loading = true;
    /*ajaxFactory.ajax({
        "data":{
          "list_id": $stateParams.id,
          "content": $scope.itemTitle
        },
        "method":"POST",
        "url": "/AjaxPostItem"
      }).done(function(data){
        console.log(data);
        $scope.loading = false;
      });*/

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
            //console.log(doc["lists"]);
            for(var i = 0; i < doc["lists"].length; i++){
                if(doc["lists"][i]["id"] == $stateParams.id){
                    $scope.$apply(function(){
                        $scope.title = doc["lists"][i]["title"];
                        console.log(doc["lists"][i]["items"]);
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
