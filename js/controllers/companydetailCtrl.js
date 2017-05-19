define(['app'],function(app){
    app.register.controller('companydetailCtrl', ['$scope','$http','$stateParams', function ($scope,$http,$stateParams) {
        $http.get('json/company.php').success(function(response) {
          console.log($stateParams);
            var len = response.companys.length;;
            var data = eval(response.companys);;
            for (var i = 0; i < len; i++) {
                if (data[i].id == $stateParams.id) {
                  console.log('0000');
                   $scope.companytitle = data[i].companytitle;
                   $scope.content = data[i].content;
                   break;
               }
            }
        })
   }])
})

