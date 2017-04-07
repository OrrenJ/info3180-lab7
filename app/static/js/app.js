var app = angular.module("myViewer", []);

app.controller("myCtrl", function($scope, $http){

	$http({
        method : "GET",
        url : "/api/thumbnails"
    }).then(function success(response) {
    	console.log(response.data);
        $scope.response = response.data;
    }, function error(response) {
        $scope.response = "error";
    });

}).config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('//').endSymbol('//');
});

// since Flask's Jinja also uses {{...}} as an identifier, I have opted to use //...// to resolve conflicts that arose from this