(function () {
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
  function createColumnForEmployeeData(data){
      var column = document.createElement("td");
      column.innerHTML=data;
      return column;
  }
    function createRowForEmployee(emp){
        console.log(emp);
        var empNameColumn =createColumnForEmployeeData(emp.empName);
       var empIdColumn = createColumnForEmployeeData(emp.id);
        
        var row = document.createElement("tr");
        row.appendChild(empIdColumn);
        row.appendChild(empNameColumn);
        console.log(row);
        return row;
    }
    
    function buildTable(){
        var empTable = document.getElementById("tblEmployees");
       for(var i=0;i<employees.length;i++){
          /* console.log(employees[i]);*/
        var empRow=   createRowForEmployee(employees[i]);
           
           empTable.appendChild(empRow);
       } 
    }
    buildTable();
    
})();
