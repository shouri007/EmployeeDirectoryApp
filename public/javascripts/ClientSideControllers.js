angular.module("Employees",[])
    .controller("AddEmployee",function($filter,DataRequestService,$controller,$window){

        var ae = this;
        var ge = $controller('GetEmployees');
        ae.addEmployee = function (employee) {

            var date = $filter('date')(employee.dob,'yyyy-MM-dd');
            var birth_year = $filter('date')(date,'yyyy');
            var presentDate = new Date();
            var presentYear = $filter('date')(presentDate,'yyyy');
            var age = presentYear - birth_year;
            
            var newEmployee = JSON.stringify({

                name:employee.name,
                email:employee.email,
                dob:date,
                department:employee.department,
                gender:employee.gender,
                age:age,
            });

            DataRequestService.add(newEmployee)
                .then(function(result){
                    $window.location.reload();
                }).catch(function(error){
                    console.log("error");
                })
        }
    })
    .controller("GetEmployees",function(DataRequestService) {

        var ge = this;
        ge.arr = [];
        ge.getEmployees = function (){
            DataRequestService.getEmployees(ge)
        }
    })
    .controller("UpdateEmployee",function(DataRequestService,$rootScope,$filter,$window){

        var ue = this;
        ue.UpdateEmployee = function (employee) {

            employee = $rootScope.employee;
            employee.name = document.getElementById("name").value;
            employee.email = document.getElementById("email").value;
            employee.dob = document.getElementById("dob").value;
            employee.department = document.getElementById("dept").value;
            employee.gender = document.getElementById("gender").value;
            DataRequestService.updateEmployee(employee)
                .then(function(result){
                    $window.location.reload();
                })

        }
    })
    .controller("ChangeEmployee",function($rootScope,DataRequestService,$controller,$window){

        var ce = this;
        var ge = $controller('GetEmployees');
        ce.deleteEmployee = function (employee) {
            DataRequestService.deleteEmployee(employee)
                .then(function(result){
                    console.log("yo");
                    $window.location.reload();
                })
                .catch(function(error){
                    console.log("Error "+error);
                })
        }
        ce.editEmployee = function(employee){

            $rootScope.employee = employee;
            document.getElementById("name").value=employee.name;
            document.getElementById("email").value=employee.email;
            document.getElementById("dob").value=employee.dob;
            document.getElementById("dept").value=employee.department;
            document.getElementById("gender").value=employee.gender;
        }
    })
