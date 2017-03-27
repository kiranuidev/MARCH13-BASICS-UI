(function () {
    //object literal.
    var vehicle = {};
    vehicle.make = "Audi";
    vehicle.model = "A5";
    vehicle.vin = "AZUI183849MN";
    //engine is now an object.
    //vehicle is having a property called enginer.
    vehicle.engine = {
        capcity: "1500cc",
        fuelType: "Diesel"
    };
    vehicle.getSpecifications=function(){
        console.log("abcd");
    };
    console.log(vehicle.engine.capcity);

})();

(function () {
    var vehicle = {
        make: "Audi",
        model: "A5",
        engine: {
            capcity: "1500cc",
            fuelType: "Diesel"
        },
        getSpecifications:function(){
            console.log("abcd");
        }
    };
    vehicle.make="BMW";
    vehicle.getSpecifications();
})();
