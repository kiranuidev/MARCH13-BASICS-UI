(function(){
    
    //every function is an object.
    function student(){
        console.log("I am creating");
       var id="1";//private property of student
        this.prefix="Mr.";//public
    }
    
    var kiran = new student();
    console.log(kiran.prefix);
    
})();