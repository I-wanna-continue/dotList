app.factory('ajaxFactory', function($http) {

  var headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return {
        ajax: function(data,succsescb,errorcb) {
          var baseurl = "http://innk94-001-site1.smarterasp.net/Service1.asmx";
          //console.log(baseurl+"/"+data["url"]);
          $http({
           method: data["method"],
           url: baseurl+"/"+data["url"],
           headers: {
             'Access-Control-Allow-Origin' : baseurl+"/"+data["url"],
             'Access-Control-Allow-Methods' : 'POST, GET',
             'Content-Type': 'json',
             'Accept': 'application/json'
           },
           data: data["data"]
          }).success(function(data){
            console.log(data);
            //succsescb();
          }).error(function(data, status){
            console.log(data);
            //errorcb();
          });
        }
    };
});
