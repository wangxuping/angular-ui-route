define(['app'],function(app){
    app.register.controller('caselistCtrl', ['$scope','$rootScope','$http','$log', function ($scope,$rootScope,$http,$log) {
        console.log('test');
        $http.get('json/case1.php').success(function(response) {
            $scope.items = response.items;
        })

        // 配置分页基本参数
        $scope.paginationConf = {
            currentPage: 1,
            itemsPerPage: 5
        };

        // 在变更分布的时候，重新获取数据条目
        var reGetProducts = function(){
            // 发送给后台的请求数据
            var postData = {
                currentPage: $scope.paginationConf.currentPage,
                itemsPerPage: $scope.paginationConf.itemsPerPage
            };
           // console.log("$scope.paginationConf.currentPage="+$scope.paginationConf.currentPage);
           // console.log("$scope.paginationConf.itemsPerPage="+$scope.paginationConf.itemsPerPage);
            if ($scope.paginationConf.currentPage == 1) {
                $http.post('json/case1.php', postData).success(function(data){
                    // 变更分页的总数
                    $scope.paginationConf.totalItems = data.total;
                    // 变更产品条目
                    $scope.items = data.items;
                });
            }
            if ($scope.paginationConf.currentPage == 2) {
                $http.post('js/json/case2.php', postData).success(function(data){
                    // 变更分页的总数
                    $scope.paginationConf.totalItems = data.total;
                    // 变更产品条目
                    $scope.items = data.items;
                });
            }

        };

        $scope.paginationConf = {
            currentPage: 1,
            totalItems: 11,
            itemsPerPage: 8,
            pagesLength: 8,
            perPageOptions: [10, 20, 30, 40, 50],
            onChange: function(){
              // console.log("1111");
                // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
                $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', reGetProducts);
            }
        };
   }])
})


