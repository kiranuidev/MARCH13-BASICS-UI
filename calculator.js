(function(outer1,outer2){
    var add;
    console.log(outer1);
    console.log(outer2);
    add = function(first,second){
      console.log(first+second); 
    };
    
    add(10,12);
})(100,200);



(function(outer1,outer2){
    var add;
    console.log(outer1);
    console.log(outer2);
    add = function(first,second){
      console.log(first+second); 
    };
    
    add(10,12);
})(100,200);