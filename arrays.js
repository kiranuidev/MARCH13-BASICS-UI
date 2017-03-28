(function(){
    Array.prototype.even = function(){
     //console.log(this); 
        var newdata=[];
        for(var i=0;i<this.length;i++){
            if(i%2==0){
                newdata.push(this[i]);
            }
        }
        return newdata;
    }
    Array.prototype.odd = function(){
     //console.log(this); 
        var newdata=[];
        for(var i=0;i<this.length;i++){
            if(i%2==1){
                newdata.push(this[i]);
            }
        }
        return newdata;
    }
    
  
    
})();