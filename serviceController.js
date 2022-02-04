var serviceAppModule = angular.module("serviceApp", []);    
 serviceAppModule.controller("serviceCtrl", function ($scope,$http) {    
   $http.get('https://sainsaji.github.io/AngularJSON/service.json')    
   .success(function(data){    
     $scope.services = data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.services = { };     
   });    
 }); 

 serviceAppModule.filter("toUpperCase", function () {
  return function (input)
  {
      var output = "";       
      output = input.toUpperCase();
      return output;
  }
});

serviceAppModule.filter('feeGreaterThan', function () {
 
  return function (input, fee) {
      var output = [];
      if (isNaN(fee)) {

          output = input;
      }
      else {
          angular.forEach(input, function (item) {
              if (item.fee > fee) {
                  output.push(item)
              }
          });
      }
      return output;
  }
})

serviceAppModule.filter('onlytwoWheeler', function () {
 
  return function (input, sclass) {
      var output = [];
      if (isNaN(sclass)) {

          output = input;
      }
      else {
          angular.forEach(input, function (item) {
              if (item.sclass = "2 Wheeler") {
                  output.push(item)
              }
          });
      }
      return output;
  }
})

serviceAppModule.filter('onlyfourWheeler', function () {
 
  return function (input, sclass) {
      var output = [];
      if (isNaN(sclass)) {

          output = input;
      }
      else {
          angular.forEach(input, function (item) {
              if (item.sclass = "4 Wheeler") {
                  output.push(item)
              }
          });
      }
      return output;
  }
})