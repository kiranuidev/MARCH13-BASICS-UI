(function(data){
    //innner function
    function greetings(){
        console.log(data);
        var greetingData="Awesome"
        
        //innerfunction
        function warmWelcome(){
            console.log(data);
            console.log(greetingData);
        }
        
        warmWelcome();
    }
    greetings();
    
})("Welcome to closures");