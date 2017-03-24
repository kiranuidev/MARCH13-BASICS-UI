(function () {
    /*functionality to add an employee*/
    // 
    // add event listener to the button
    // handle click for the button
    // read the data from the controls
    // add the empid and name to the employeess array
    // add it to the table.
    //Attaching event listner

    var btnCreate = document.getElementById("btnCreate");
    var empId = document.getElementById("txtEmpId");
    var empName = document.getElementById("txtEmpName");
    var empTable = document.getElementById("tblEmployees");

    function attachEvents() {
        //TODO
        //allow  numbers only to empid
        //allow alphabets only to empname;

        btnCreate.addEventListener("click", addEmployeeToTable)
    }

    function addEmployeeToTable() {
        var emp = {};
        emp.empName = empName.value;
        emp.id = empId.value;
        var empRow = createRowForEmployee(emp);
        empTable.appendChild(empRow);
        resetControls();
        employees.push(emp);
    }
    
    function resetControls(){
        empId.value="";
        empName.value="";
    }



    var employees = [{
            empName: "Kiran",
            id: 1
        },
        {
            empName: "test2",
            id: 2
        },
        {
            empName: "test3",
            id: 3
        }];

    //1. create a row for each employee.
    //  each row create column for id,
    // create column for name
    // attach the columns to row
    // attach row to table
    function createColumnForEmployeeData(data) {
        var column = document.createElement("td");
        column.innerHTML = data;
        return column;
    }

    function createRowForEmployee(emp) {
        console.log(emp);
        var empNameColumn = createColumnForEmployeeData(emp.empName);
        var empIdColumn = createColumnForEmployeeData(emp.id);

        var row = document.createElement("tr");
        row.appendChild(empIdColumn);
        row.appendChild(empNameColumn);
        console.log(row);
        return row;
    }

    function buildTable() {

        for (var i = 0; i < employees.length; i++) {
            /* console.log(employees[i]);*/
            var empRow = createRowForEmployee(employees[i]);

            empTable.appendChild(empRow);
        }
    }
    buildTable();
    attachEvents();



})();
