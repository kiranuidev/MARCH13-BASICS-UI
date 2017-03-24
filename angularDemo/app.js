angular.module("demo", [])
    .controller("demoCtrl", [function () {
            var vm = this;
            vm.employees = [{
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
            vm.addEmployee = function () {
                var emp = {};
                emp.id = vm.id;
                emp.empName = vm.empName;
                vm.employees.push(emp);
            };
            
    
    }]);
