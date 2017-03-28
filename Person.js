(
    function () {
        //we can pass params to the constructor.
        function Person(data) {
            //properites that belong to the person & instance of the person can access these properites.
            this.firstName = "";
            this.lastName = "";
            
            //private properties cannot be accessed by student or employee.
            var pan = data;
            this.getId = function(data1){
                console.log(data1);
                return "xxx-xxx"+pan.substring(6,10);
            }
        }

        var student = new Person("ABCD456712");
        student.firstName = "Ravi";
        student.lastName = "Kiran";
        student.collegeName="JNTU";
        
        console.log(student);
        console.log(student.getId())
        //The below code throws an error.
        //coz student is not a construtor.
        /*var classOneStudent = new student();*/
        var classOneStudent = new Object(student);
        
        console.log(classOneStudent);
        
        var employee = new Person();
        employee.firstName="Krishna";
        employee.lastName="kumar";
        employee.company="K3informatics";
        console.log(employee);
    }
)();
