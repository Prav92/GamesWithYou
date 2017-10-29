var app = angular.module("myApp", [])


app.controller('GamesListCtrl',['$scope', '$http', function($scope, $http, ngChange) {
	$scope.games = [];
	$http.get("http://starlord.hackerearth.com/gamesarena")
	// .success(function(data) {
 //            $scope.games = eval(data);
 //            console.log(data)
 //        })
 //        .error(function(data) {
 //            alert(data);
 //            console.log('Error: ' + data);
 //    });
 $http({
    method: 'get', 
    url: 'http://starlord.hackerearth.com/gamesarena'}
).then(function (response) {
    console.log(response.data, 'res');
    $scope.games = response.data;
},function (error){
    console.log(error, 'can not get data.');
});

 $scope.sortOrder = function(value){
	console.log(value);
	if (value == true){
		return '-score'
	}
	else{
		return 'score'
	}	
}

$scope.options = ['-score', 'score']

}]);