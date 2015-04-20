app.controller('listCtrl', ['$scope', function ($scope, ajaxFactory) {

  $scope.db = new PouchDB('dotlist');

	$scope.allLists = [];
	$scope.list = [];

	$scope.listTitle = "";


  $scope.menuHandler = "menu-bar";
  $scope.hamburgerHandler = "hamburger";


  //If user is admin of list

  $scope.listOptions = function($event){
    console.log($($event.target).parent().find(".list-options"));
    $($event.target).parent().parent().find(".list-options").slideToggle().css("display", "flex");
   // ($($event.target).parent().parent().find(".list-options") ? $scope.list[$index]["complete"] = false : $scope.list[$index]["complete"] = true;
  }




  //Delete items in a List
  $scope.deleteList = function($index){

    if(confirm("Are you sure you want to delete " + $scope.allLists[$index]["title"] + "?")){
            $scope.allLists.splice($index, 1);
            $scope.saveLists();
        }

  }

    $scope.init = function(){
        $scope.db.info().then(function (info) {
          //console.log(info);
          if(info["doc_count"] == 0) {
              $scope.db.put({
                  _id: 'lists',
                  lists: []
              });
          }
        });
        $scope.getLists();
    }

	$scope.addItem = function(){

		$scope.list.push({
			id: $scope.list.length +1,
			title: $scope.itemTitle,
			complete: false

		});

		$scope.itemTitle = "";

	}

	//Delete items in a List
	$scope.deleteItem = function($index){

		if(confirm("Are you sure you want to delete " + $scope.list[$index]["title"] + "?")){
            $scope.list.splice($index, 1);
        }

	}


	//Adding list Checkboxes
	$scope.checkItem = function($index){
		($scope.list[$index]["complete"]) ? $scope.list[$index]["complete"] = false : $scope.list[$index]["complete"] = true;

	}


	$scope.createList = function(){

		$scope.allLists.push({
			title: $scope.listTitle,
			items: $scope.list,
      id: $scope.allLists.length+1
		});

		console.log($scope.allLists);
		$scope.list = [];
		$scope.listTitle = "";
		$("#overlay").hide();
		$(".modalen").hide();
        $scope.saveLists();
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
    }

    $scope.closeModal = function(){
         $('#overlay')
         .fadeOut()
         .find('.modalen')
         .fadeOut();
    }

    $scope.getLists = function(){
        $scope.db.get('lists').then(function (doc) {
            console.log(doc["lists"]);
            $scope.$apply(function(){
                $scope.allLists = doc["lists"];
            });
            //$scope.allLists = doc["lists"];
        });
    }

    $scope.saveLists = function(){
        $scope.db.get('lists').then(function(doc) {
          return $scope.db.put({
            _id: doc["_id"],
            _rev: doc["_rev"],
            lists: $scope.allLists
          });
        });
    }

    $scope.flipped = false;

    $scope.flip = function ($event){
      //console.log($($event.target).parent().parent().parent().parent().find(".flipped").html());
        if($($event.target).parent().parent().parent().parent().find(".flipped").html() == "1"){
            //console.log($($event.target).parent().parent().parent());
           $($event.target).parent().parent().parent().css({"transform": "rotateX(0deg)"});
            $($event.target).parent().parent().parent().parent().find(".flipped").html("0");
        }else{
             $($event.target).parent().parent().parent().css({"transform": "rotateX(180deg)"});
             $($event.target).parent().parent().parent().parent().find(".flipped").html("1");
        }
    }

}]);
