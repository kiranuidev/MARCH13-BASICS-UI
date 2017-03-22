(function(){
    var fName,lName,age,btnRegister;
    fName= document.getElementById("txtFirstName");
    lName= document.getElementById("txtLastName");
    age= document.getElementById("txtAge");
    btnRegister = document.getElementById("btnRegister");
    
   /* fName.value="kiran";
    lName.value="PVS";
    age.value="30";*/
    
    
    
    function registerUser(evt){
        var user ={};//object
        user.firstName = fName.value;
        user.lastName =lName.value;
        user.age =age.value;
        
        console.log(user);
        console.log(evt);
    }
    
    function numbersOnly(evt){
        console.log("age entered");
        console.log(evt);
        var enteredKey = evt.keyCode;
        if(enteredKey>=48 && enteredKey<=57){
            console.log("valid");
        }
        else{
            evt.preventDefault();
        }
    }
    function alphabetsOnly(evt){
        var enteredKey = evt.keyCode;
        console.log(enteredKey);
        if( 
            (enteredKey>=97 && enteredKey<=122) ||
            (enteredKey>=65 && enteredKey<=90)
            ){
            console.log("valid character");
        }
        else{
            evt.preventDefault();
        }
    }
    btnRegister.addEventListener("click",registerUser);
    age.addEventListener("keypress",numbersOnly);
    fName.addEventListener("keypress",alphabetsOnly);
    
})();









