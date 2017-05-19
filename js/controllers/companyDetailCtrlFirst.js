define(['app'],function(app){
   app.register.controller('companyDetailCtrlFirst', ['$scope','$http','$stateParams', function ($scope,$http,$stateParams) {
        console.log($stateParams);
        $http.get('json/company.php').success(function(response) {
            var len = response.companys.length;;
            var data = eval(response.companys);;
            $scope.companytitle = data[0].companytitle;
            $scope.content = data[0].content;
        })
   }])
})

