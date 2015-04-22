app.controller('mainCtrl', ['$scope', 'ajaxFactory', '$state', function ($scope, ajaxFactory, $state) {
    $scope.db = new PouchDB('dotlist');
    $scope.login = function(){
      //console.log($scope.username, $scope.password);
      ajaxFactory.ajax(
        {
          "data":{"email":$scope.username,"password":$scope.password},
          "method":"POST",
          "url": "/AjaxLogin"
        },function(data){
          if(data === ""){$scope.errormsg = "Wrong email or password! try again";}
            else{
              var data = JSON.parse(data);
              $.cookie('userId', data[0]["id"]);
              //console.log($.cookie('userId'));
             // $.removeCookie('userId');
             // console.log($.cookie('userId'));
             // console.log(data[4]["lists"]);
             var lists = data[4]["lists"][0];
             var allists = [];
             console.log(lists.length);
             for(var i = 0; i < lists.length; i++){
                 console.log(i);
                 allists.push({
                     title: lists[i]["list_title"],
                     items: lists[i]["list_items"]["items"],
                     id: lists[i]["list_id"]
                 });
             }
             console.log(allists); 
             $scope.db.get('lists').then(function(doc) {
                  return $scope.db.put({
                    _id: doc["_id"],
                    _rev: doc["_rev"],
                    lists: allists
                  });
              });
                
              $state.transitionTo("lists");
            }

        },function(){
          
        });

    }

    $scope.regUser = function(){
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
