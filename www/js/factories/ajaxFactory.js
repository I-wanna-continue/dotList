app.factory('ajaxFactory', function($http) {

  var headers = {
      'Access-Control-Allow-Origin' : '*',
      //'Access-Control-Allow-Methods' : 'POST, GET',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return {
        ajax: function(data) {

          var baseurl = "http://innk94-001-site1.smarterasp.net/Service1.asmx";

          /*console.log(data["data"]);
          $http({
           method: data["method"],
           url: baseurl+"/"+data["url"],
           headers: headers,
           data: data["data"]
          }).success(function(data){
            console.log("succses");
            console.log(data);
            //succsescb();
          }).error(function(data, status){
            console.log("error");
            console.log(data);
            //errorcb();
          });*/

          var parameters = {
                "email": "HallaBalla@hej.he",
                "password": "Test123123",
            };

          return $.ajax({
                type: data["method"],
                url: baseurl + data["url"],
                dataType: "json",
                data: data["data"]
            });


        }
    };
});
