$(function (){
	$('#searchBtn').on('click', function(){
		var $table = $('#table');
		var $wrongName = $("#wrongName");
								
		$("#table").find("tr:not(:first)").remove();
	 	var textInput = $('#title').val();
	 		$('#title').val("");
	 		$.ajax({
	 				type:'GET',
					url: 'http://www.omdbapi.com/?s='+textInput,
					success: function(input){

							$wrongName.empty();
						   if(input.Response ==  "True")
						   {
						     	$.each(input.Search , function(i, movie) {
							 	$table.append('<tr><td>'+ movie.Title +'</td>'+'<td>'+ movie.Year +'</td>'+ '<td>'+movie.imdbID + '</td>'+ '<td>' +movie.Type +'</td>' + '<td>'+'<img src='+movie.Poster+' class="responsive-image">' +'</td></tr>');
							});
							}
							else
							{

								$wrongName.append('Movie not found');
								//console.log("Movie not found");
							}   
						},
					error: function(){
						alert('Movie not found');
					}	
	 		});		
	});
});
