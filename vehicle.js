(
  function(){
      
      function vehicle(){
          this.year="";
          this.make="";
          this.model="";
      }
      
      var suzki = new vehicle();
      var ciaz= new vehicle();

      vehicle.prototype.engine="";
      console.log(ciaz);
      console.log(suzki);
      suzki.engine="k10";
      ciaz.engine="ddi";
      var today = new Date();
      console.log(today.getDate());
       console.log(today.getMonth());
      console.log(today.getFullYear());
  }
)();