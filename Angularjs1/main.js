app.controller("myCtrl",function($scope , movieService ){

	$scope.pageno = 1; 
    $scope.total_count = 0;
    $scope.itemsPerPage = 10; 
    $scope.getData = function(pageno){
    	//alert(pageno);
	
			var promise = movieService.getMovie($scope.$parent.title1, pageno) ;
			$scope.title1 = "";
			  
			   promise.then(function(movieData) {
			  	
			      $scope.movieData = movieData.movies.Search;
			      $scope.total_count = movieData.movies.totalResults;
			      
			   });	
			}
			$scope.getData($scope.pageno);
});

app.controller("myDetailsCtrl" ,function($scope ,$stateParams , movieDetailsFactory ){
	
		var promise = movieDetailsFactory.getMovieDetails($stateParams.param);
		promise.then(function(movDetail){
			//console.log(movDetail.details);
			$scope.detail = movDetail.details;
			//console.log(detail);
		});	
});

