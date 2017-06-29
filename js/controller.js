var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope) {
              $scope.letra="#F6E3CE";
              $scope.Tletra- 12;
              });


app.directive("direct1", function(){
		return {
			template:"Hola mundo"
		};

});

app.controller('lista',function ($scope){
	var nombres=
	['kevin','fabian','lady','angel','diego','joselyn'];
	$scope.data=nombres;
	
	
});


app.controller('listasuma',function ($scope){
	var ciudad=
	names=[{nombre:'uno',ciudad:'atlantis'},{nombre:'dos',ciudad:'jumangi'}]
	$scope.data2=ciudad;
	
});
