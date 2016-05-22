define(function(){
    return {
        clog: function (item){
            try{
                console.log(item);
            } catch(e) {
                alert(item);
            }
        }
    };
});