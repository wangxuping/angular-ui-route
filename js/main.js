require.config({
    baseUrl: "js/",
    paths: {
      "app" : "routes/appRoute",
      "jquery" : "libs/jquery-2.1.4",
      "angular" : "libs/angular-1.3.0",
      "router" : "libs/angular-ui-router",
      "pagination" : "libs/tm.pagination"
    },
    shim: {
       'jquery': {
          exports: 'angular'
       },
       'angular': {
          exports: 'angular'
       },
       'router':{
          deps: ["angular"]
       },
       'pagination':{
          deps: ["angular"]
       },
       'app':{
          deps: ["router","pagination","jquery"]
       }
    }
});

require(['app'],function (){
    angular.bootstrap(document,["myModule"]);
});

