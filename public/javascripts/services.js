/**
 * Created by Shouri on 17/06/16.
 */
var app = angular.module("Employees");
app.service('DataRequestService',function($http,$filter){

        var service = this;
        //////////////////////////////////////////////////////////////////////////////////////

            service.add = function (employee) {
            return $http({
                method:'POST',
                url:'http://localhost:3000/employee',
                data:employee,
                headers:{
                    "Content-Type": "application/json",
                }
            });
        },
        //////////////////////////////////////////////////////////////////////////////////////

            service.getEmployees=function (ge) {

                var employee = Object[{
                    id: "",
                    name: "",
                    email: "",
                    dob: "",
                    department: "",
                    gender: "",
                    age: ""
                }];

                return $http({
                    method:'GET',
                    url:'http://localhost:3000/employees',
                    headers:{
                        "Content-Type":"application/json",
                    }
            }).then(function (result) {

                for (var i = 0; i < result.data.length; i++) {

                    var employee = new Object();
                    employee.id = result.data[i]["_id"];
                    employee.name = result.data[i]["name"];
                    employee.email = result.data[i]["email"];
                    var date = $filter('date')(result.data[i]["dob"],'yyyy-MM-dd');
                    employee.dob = date;
                    employee.department = result.data[i]["department"];
                    employee.gender = result.data[i]["gender"];
                    employee.age = result.data[i]["age"];
                    ge.arr.push(employee);
                }
            })
        },
         ////////////////////////////////////////////////////////////////////////////////

            service.deleteEmployee=function(employee){
                var _id = employee.id;
                return $http({
                    method:'DELETE',
                    url:'http://localhost:3000/delete/:'+_id,
                    data:_id,
                    headers:{
                        "Content-Type":"text/plain"
                    }
                });
            },
                ///////////////////////////////////////////////////////////////////////////

            service.updateEmployee = function (employee) {

                var id = employee.id;
                console.log(id);
                return $http({
                    method:'PUT',
                    url:'http://localhost:3000/update/:'+id,
                    data:employee,
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
            }
        ///////////////////////////////////////////////////////////////////////////////////
        });
