app.factory('ajaxFactory', function($http) {
    return {
        ajax: function(data,succsescb,errorcb) {
          var baseurl = "123.12.123.21.3";
          $http({
           method: data["method"],
           url: baseurl+"/"+data["url"],
           headers: {
             'Content-Type': "json"
           },
           data: data["data"]
          }).success(function(data){
            console.log(data);
            //succsescb();
          }).error(function(data, status){
            console.log("data: "+ data " status:" + status);
            //errorcb();
          });
        }
    };
});
