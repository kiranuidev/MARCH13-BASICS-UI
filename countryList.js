(function(){
    
    var countries=[{name:"India",code:"IN"},
                  {name:"United States",code:"USA"}];
    
    function buildOptionTag(data){
        console.log(data);
        var option= document.createElement("option");
        //attach value 
        option.value=data.code;
       
        //add text content
        option.innerText=data.name;
        
        console.log(option);
        return option;
    }
    
    function buildDropdown(){
       var countryList = document.getElementById("ddlCountries");//Loop through the countries
        for(var i=0;i<countries.length;i++){
           var optionTag= buildOptionTag(countries[i]);
            countryList.appendChild(optionTag);
        }
    }
    
    buildDropdown();
    
})();