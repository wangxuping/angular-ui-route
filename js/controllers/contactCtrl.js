define(['app'],function(app){
    app.register.controller('contactCtrl',function($scope){
        $scope.contact = "联系我们";
        console.log('contactCtrl');
    })
})