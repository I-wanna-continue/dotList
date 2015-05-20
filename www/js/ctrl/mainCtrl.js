app.controller('mainCtrl', ['$scope', 'ajaxFactory', '$state', function ($scope, ajaxFactory, $state) {
    $scope.db = new PouchDB('dotlist');
    $scope.login = function(){
      console.log("ups!");
      //FIX THIS;
      /*ajaxFactory.ajax({
          "data":{"email":$scope.username,"password":$scope.password},
          "method":"POST",
          "url": "/AjaxLogin"
        }).done(function(data){
          if(data.length === 0){
            $scope.$apply(function () {
              $scope.error = "Wrong email or password! try again";
            });
          }else{
             var data = JSON.parse(data);
             console.log(data);
             $.cookie('userId', data[0]["id"]);

             var lists = data[4]["lists"][0];
             var allists = [];
             for(var i = 0; i < lists.length; i++){
                 allists.push({
                     title: lists[i]["list_title"],
                     items: lists[i]["list_items"]["items"],
                     id: lists[i]["list_id"]
                 });
             }

             $scope.db.info().then(function (info) {
               console.log(info);
               if(info["doc_count"] == 0) {
                   $scope.db.put({
                       _id: 'lists',
                       lists: []
                   });
               }
             });

             $scope.db.get('lists').then(function(doc) {
                  return $scope.db.put({
                    _id: doc["_id"],
                    _rev: doc["_rev"],
                    lists: allists
                  });
             });

             $state.transitionTo("lists");
          }
        });*/
    
    }

    $scope.regUser = function(){
      console.log("uops not working!");
      //FIX THIS!
      /*
      if($scope.regPassword === $scope.regRetype){
          ajaxFactory.ajax(
          {
            "data":{
              "email": $scope.regEmail,
              "username": $scope.regUsername,
              "password": $scope.regPassword,
              "confirmPassword": $scope.regRetype
            },
            "method":"POST",
            "url": "/AjaxRegister"
          },function(data){
            console.log(data);
            // if(data === ""){$scope.errormsg = "Wrong email or password! try again";}
            //   else{
            //     var data = JSON.parse(data);
            //     $state.transitionTo("lists");
            //   }

          },function(){

          });
      }else{
        $scope.errormsg = "Your password doesnt match";
      }*/
    }

    $scope.init = function(){
        $scope.db.info().then(function (info) {
          //console.log(info);
          if(info["doc_count"] == 0) {
              $scope.db.put({
                  _id: 'lists',
                  lists: []
              });
              $state.transitionTo("lists");
          }
        });
    }

    $scope.flipped = false;

    $scope.flip = function (){
        if($scope.flipped){
            $("#login-side").css({"transform": "rotateY(0deg)", });
            $scope.flipped = false;
        }else{
            $("#login-side").css({"transform": "rotateY(180deg)", });
            $scope.flipped = true;
        }
    }

}]);
