define(['app','services/serviceName'],function(app){
    app.register.controller('companyCtrl',function ($scope,$rootScope,$http,ServiceFun) {
        $http.get('json/company.php').success(function(response) {
            //console.log(response.companys);
              $scope.companys = response.companys;
        })
        ServiceFun.showName("xuping.wang")
   })
})
