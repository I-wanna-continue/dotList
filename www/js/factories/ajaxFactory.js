app.factory('ajaxFactory', function($http) {

  var headers = {
      'Access-Control-Allow-Origin' : '*',
      //'Access-Control-Allow-Methods' : 'POST, GET',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return {
        ajax: function(data,succsescb,errorcb) {

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

            $.ajax({
                type: data["method"],
                url: data["url"],
                dataType: "json",
                data: data["data"],
                success: function (msg) {
                    console.log("Succsess!");
                    //var json  = JSON.parse(msg);
                    if(msg === ""){console.log("empty");}
                    else{
                        var msg = JSON.parse(msg);
                        for(var i = 0; i < msg.length; i++){
                          console.log(msg[i]);
                        }
                    }

                    //console.log(msg[0]["id"]);
                },
                error: function (err) {
                    console.log("Fail!");
                    console.log(err);
                    //console.log(err.responseText);
                }
            });


        }
    };
});
