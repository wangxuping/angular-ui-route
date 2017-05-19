define(['router'],function(){
    var app = angular.module("myModule", ['ui.router','tm.pagination'])
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
        app.register = {
            controller : $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            service: $provide.service
        };
    })
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('home');
        $stateProvider
        .state("home",{
            url:"/home",
            controller: 'indexCtrl',
            templateUrl:'views/main.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/indexCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("case",{
            url:"/case",
            views:{
                '':{
                    controller:'caseCtrl',
                    templateUrl:'views/case.html'
                },
                'caseMain@case':{
                    controller:'caselistCtrl',
                    templateUrl:'views/case-list.html'
                }
            },
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/caseCtrl',
                        'controllers/caselistCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("case.detail",{
            url:'/:id',
            views:{
                '':{
                    controller:'caseCtrl',
                    templateUrl:'views/case.html'
                },
                'caseMain@case':{
                    controller:'casedetailCtrl',
                    templateUrl:'views/case-detail.html'
                }
            },
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/caseCtrl',
                        'controllers/casedetailCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("company",{
            url:"/company",
            views:{
                '':{
                    controller:'companyCtrl',
                    templateUrl:'views/company.html'
                },
                'companyRight@company':{
                    controller:'companyDetailCtrlFirst',
                    templateUrl:'views/company-detail.html'
                }
            },
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/companyCtrl',
                        'controllers/companyDetailCtrlFirst'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("company.detail",{
            url:'/:id',
            views:{
                '':{
                    controller:'companyCtrl',
                    templateUrl:'views/company.html'
                },
                'companyRight@company':{
                    controller:'companydetailCtrl',
                    templateUrl:'views/company-detail.html'
                }
            },
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/companyCtrl',
                        'controllers/companydetailCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("contact",{
            url:"/contact",
            controller: 'contactCtrl',
            templateUrl:'views/contact.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/contactCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
    })

　　return app;
})

