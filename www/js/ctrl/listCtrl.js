app.controller('listCtrl', ['$scope', function ($scope) {
                
	$scope.allLists = [];
	$scope.list = [];

	$scope.listTitle = "";
    
    $scope.menuopen = false;

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
			items: $scope.list


		});
		console.log($scope.allLists);
		$scope.list = [];
		$scope.listTitle = "";
		$("#overlay").hide();
		$(".modalen").hide();
	}

    $scope.menuAction = function(){
        if($("#menu-bar").css("bottom") == "-80px" ){
            $("#menu-bar").css("bottom", "0");
            $(".hamburger").css("margin-top", "-160px");
        }else{
            $("#menu-bar").css("bottom", "-80px");
            $(".hamburger").css("margin-top", "0px"); 
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


}]);