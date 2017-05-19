define(['app'],function(app){
    app.register.service('ServiceFun', function(){
        this.showName = function(name) {
            console.log(name);
        }
    })
})