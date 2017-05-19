define(['app'],function(app){
    app.register.controller('casedetailCtrl', ['$scope','$http','$stateParams', function ($scope,$http,$stateParams) {
        console.log($stateParams);
        $http.get('json/case.php').success(function(response) {
          console.log(response.items);
            var len = response.items.length;;
            var data = eval(response.items);
            console.log(data);
            for (var i = 0; i < len; i++) {
                if (data[i].id == $stateParams.id) {
                   $scope.title = data[i].title;
                   $scope.src = data[i].src;
                   $scope.content = data[i].content;
                   break;
               }
            }
        })
   }])
})

