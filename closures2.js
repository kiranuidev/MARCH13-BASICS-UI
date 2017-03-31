function getTicket(source,destination){
    
   return function calculateFare(mode){
      console.log("your "+mode +"Ticket")
       console.log("Fare from :"+source);
        console.log("to :"+destination);
       
    
    }
    
}

getTicket("Hyderabad","New York")("Flight");
getTicket("Hyderabad", "Vizag")("Bus");
(function(){})();
/*var calc = getTicket("Hyd","NewYork");
var calc2 = getTicket("Hyd","Vizag");

calc("Flight");
calc2("Bus");*/








