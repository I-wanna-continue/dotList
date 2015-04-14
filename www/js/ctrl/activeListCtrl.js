app.controller('activeListCtrl', function ($scope, $stateParams) {
    
    $scope.id = $stateParams.id;

    $scope.menuHandler = "menu-bar";
    $scope.hamburgerHandler = "hamburger";
    $scope.currentTask = 0;
    $scope.selectedList = [{
    	title: "Title",
    	checked: false
    },{
    	title: "Title2",
    	checked: false
    },{
    	title: "Title3",
    	checked: false
    },{
    	title: "Title4",
    	checked: false
    },{
    	title: "Title5",
    	checked: true
    },{
    	title: "Title6",
    	checked: false
    }];

    $scope.completeTask = function($index){
    	($scope.selectedList[$index]["checked"]) ? $scope.selectedList[$index]["checked"] = false : $scope.selectedList[$index]["checked"] = true;
       	console.log($index);
       	($scope.selectedList[$index]["checked"]) ? $scope.currentTask-- : $scope.currentTask++;
       	
    }

    $scope.init = function(){
    	for(var i = 0; i < $scope.selectedList.length; i++){
    		if($scope.selectedList[i].checked == false) $scope.currentTask++;

    	}
    }


    	//Delete items in a List
	$scope.deleteItem = function($index){

		if(confirm("Are you sure you want to delete " + $scope.selectedList[$index]["title"] + "?")){
            $scope.selectedList.splice($index, 1);
            $scope.currentTask--;
        }

	}

	$scope.addItem = function(){

		$scope.selectedList.push({
			id: $scope.selectedList.length +1,
			title: $scope.itemTitle,
			complete: false

		});

		$scope.itemTitle = "";
		$scope.currentTask++
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
        $scope.menuAction();
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

});