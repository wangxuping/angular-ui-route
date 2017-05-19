define(['app','services/serviceName'],function(app){
    app.register.controller('indexCtrl2',function($scope,ServiceFun){
        ServiceFun.showName("6666")
    })
})