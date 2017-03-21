//Task
//Write data to text box.
//1.get the reference of the textbox.
(function(){
 var firstNumber,secondNumber,password;
    firstNumber = document.getElementById("txtFirstNumber");
    secondNumber= document.getElementById("txtSecondNumber");
    password = document.getElementById("txtPassword");
    
    console.log(firstNumber);
    firstNumber.value=10;
    secondNumber.value=30;
    
    var typeOfPassword = password.type;
    
    password.type="date";
    typeOfPassword = password.type;
    password.className="trynew";
    password.id="newPassword";
})();


(function(){
    var elements;
    elements = document.getElementsByTagName("input");
    console.log(elements);
})();




(function(){
    var elements;
    elements = document.getElementsByClassName("abcd");
    console.log(elements);
})();