define(['app','services/serviceName'],function(app){
    app.register.controller('indexCtrl',function($scope,ServiceFun){
        ServiceFun.showName("ServiceFun");
        $scope.title = '首页';
    })
})