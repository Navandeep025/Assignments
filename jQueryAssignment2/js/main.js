$(function(){
	$('#emp').hide();
	$('#search').on('click', function(){

		var id = $('#idInputTop').val().trim();
		
		if(isNaN(id) || id == null || id == "" || id<0)
		{
			alert("Id field can take only numbers greater than or equal to 0.");			
		}
		else{
			$.ajax({
				type:'GET',
				url: 'http://127.0.0.1:3000/employee/'+id,
				success: function(id){

					$("#table").find("tr:not(:first)").remove();
					$('#table').append('<tr>'+'<td>'+ id.id + '</td>'+
						'<td>'+ id.name + '</td>'+
						'<td>'+ id.age + '</td>' + '<td>'+ id.gender + '</td>'+ 
						'<td>'+ id.company + '</td>'+ '<td>'+ id.email + '</td>'+
						'<td>'+ id.phone + '</td>'+ '<td>'+ id.address + '</td>'+
						'<td><button id=\'delete\' data-id='+id.id+'>Delete</button> <button id=\'update\' data-id='+id.id + ' data-toggle=\'modal\' data-target=\'#myModal\'>Update</button> </td>'+'</tr>');
					$('#idInputTop').val("");
				},
				error: function()
				{
					alert("invalid id");
				}
			});		
		}
	});
//*******************
// var start=11;
// var end =20;

//  	$('#paging').bootpag({
//      total: 40000/10,
//      page: 1,
//      maxVisible: 10,
//      leaps: true,
//      firstLastUse: true,
//      first: '←',
//      last: '→',
//      wrapClass: 'pagination',
//      activeClass: 'active',
//      disabledClass: 'disabled',
//      nextClass: 'next',
//      prevClass: 'prev',
//      lastClass: 'last',
//      firstClass: 'first'
//  }).on("page", function(event, num){
   
//         $("#table").find("tr:not(:first)").remove();	
// 		$.ajax({
// 			type: 'GET',
// 			url: 'http://127.0.0.1:3000/employee?_start='+(start)+'&_end='+(end),
// 			success: function(records){
				
// 				$.each(records , function(i , id)
// 				{
// 					$('#table').append('<tr>'+'<td>'+ id.id + '</td>'+
// 						'<td>'+ id.name + '</td>'+'<td>'+ id.age + '</td>' + 
// 						'<td>'+ id.gender + '</td>'+ '<td>'+ id.company + '</td>'+
// 						'<td>'+ id.email + '</td>'+'<td>'+ id.phone + '</td>'+ 
// 						'<td>'+ id.address + '</td>'+
// 						'<td><button id=\'delete\' data-id='+id.id+'>Delete</button> <button id=\'update\' data-id='+id.id + ' data-toggle=\'modal\' data-target=\'#myModal\'>Update</button> </td>'+'</tr>');				});	
// 			}	
// 		});
// 		start=start+10;
//   		 end = end+10;

//  });

//**************************************

	$('#btnDisplayRecords').on('click', function(){

		$('#table').find("tr:not(:first)").remove();	
		$.ajax({
			type: 'GET',
			url: 'http://127.0.0.1:3000/employee?_start=0&_end=10',
			success: function(records){
				
				$.each(records , function(i , id)
				{
					$('#table').append('<tr>'+'<td>'+ id.id + '</td>'+
						'<td>'+ id.name + '</td>'+'<td>'+ id.age + '</td>' + 
						'<td>'+ id.gender + '</td>'+ '<td>'+ id.company + '</td>'+
						'<td>'+ id.email + '</td>'+'<td>'+ id.phone + '</td>'+ 
						'<td>'+ id.address + '</td>'+
						'<td><button id=\'delete\' data-id='+id.id+'>Delete</button> <button id=\'update\' data-id='+id.id + ' data-toggle=\'modal\' data-target=\'#myModal\'>Update</button> </td>'+'</tr>');				});	
			}	
		});
	});

	function ValidateEmail(email) {
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(email);
	};

	$('#back').on('click', function(){

		$("#emp").hide(); 
		$("#addDetails").show(); 
		$('#searchDiv').show();
		$('#btnDisplay').show();

	});

	$('#addDetails').on('click', function(){
			$('#emp').show();
			$('#addDetails').hide();
			$('#searchDiv').hide();
			$('#btnDisplay').hide();

	});

	$('#addRecord').on('click', function(){

		$('#table').find("tr:not(:first)").remove();

		var ageInput = $('#ageInput').val();
		var nameInput = $('#nameInput').val();
		var genderInput = $('#genderInput').val();
		var companyInput = $('#companyInput').val();
		var emailInput = $('#emailInput').val();
		var phoneInput = $('#phoneInput').val();
		var textAddress = $('#textAddress').val();

		if(ageInput!="" && nameInput!="" && genderInput!="" && companyInput!="" && emailInput!="" && phoneInput!="" && textAddress!="")
		{
			var validEmail = (ValidateEmail(emailInput));
			if(validEmail==true)
			{
			// alert("In if of valid Email");
		//	console.log("jii");
		var obj ={
			name : nameInput,
			age : ageInput,
			gender : genderInput,
			company : companyInput,
			email : emailInput,
			phone : phoneInput,
			address : textAddress,
		};

		$.ajax({
			type: 'POST',
			url: 'http://127.0.0.1:3000/employee/',
			data: obj,
					//data-type : json,
					success: function(id){
						$('#table').append('<tr>'+'<td>'+ id.id + '</td>'+
							'<td>'+ id.name + '</td>'+
							'<td>'+ id.age + '</td>' + '<td>'+ id.gender + '</td>'+ 
							'<td>'+ id.company + '</td>'+ '<td>'+ id.email + '</td>'+
							'<td>'+ id.phone + '</td>'+ '<td>'+ id.address + '</td>'+
							'<td>  <button id=\'update\' data-id='+id.id + ' data-toggle=\'modal\' data-target=\'#myModal\'>Update</button></td>'+'</tr>');

						var ageInput = $('#ageInput').val("");
						var nameInput = $('#nameInput').val("");
						var genderInput = $('#genderInput').val("");
						var companyInput = $('#companyInput').val("");
						var emailInput = $('#emailInput').val("");
						var phoneInput = $('#phoneInput').val("");
						var textAddress = $('#textAddress').val("");

						alert("A new record is added.");
					},
						
					});	
					}//end of email if
					else{
						alert("Email incorect");
					}//end else email if

				}//if main
				else
				{
					alert("mandatory to fill all details");
				}
			});

	$('#table').delegate('#delete','click', function(){

		var id = ($(this).attr('data-id'));
		var li =  $(this).closest('tr');

		$.ajax({
			type: 'DELETE',
			url: 'http://127.0.0.1:3000/employee/'+$(this).attr('data-id'),
			success: function(){

				li.remove();
				alert("Employee record with id "+id+" is deleted.");

			},
			error:function(){
				alert(id+" employee id doesn't exist");
			}
		});
	});

	var id2;
	var remove;
	$('#table').delegate('#update', 'click',function(){
		
		id2 = ($(this).attr('data-id'));

		remove = $(this).closest('tr');

		$.ajax({
			type:'GET',
			datatype: 'JSON',
			url: 'http://127.0.0.1:3000/employee/'+$(this).attr('data-id'),
			success: function(id){

				$('#nameModal').val( id.name ),
				$('#ageModal').val( id.age ),
				$('#genderModal').val( id.gender ),
				$('#companyModal').val( id.company ),
				$('#emailModal').val( id.email ),
				$('#phoneModal').val( id.phone),
				$('#addressModal').val( id.address)
			}
		});  		 
	});		

	$('#updateChanges').on('click',function(){

		var ageInput = $('#ageModal').val();
		var nameInput = $('#nameModal').val();
		var genderInput = $('#genderModal').val();
		var companyInput = $('#companyModal').val();
		var emailInput = $('#emailModal').val();
		var phoneInput = $('#phoneModal').val();
		var textAddress = $('#addressModal').val();

	if(ageInput!="" && nameInput!="" && genderInput!="" && companyInput!="" && emailInput!="" && phoneInput!="" && textAddress!="")
	{
		if(nameInput.length>=2 || !(isNaN(nameInput)))
		{
			var validEmail = (ValidateEmail(emailInput));
			if(validEmail==true)
			{
				if(phoneInput.length==10)
				{
					conole.log("phone: "+phoneInput.length);
					var obj = {

						name : nameInput,				
						age : ageInput,
						gender : genderInput,
						company : companyInput,
						email : emailInput,
						phone : phoneInput,
						address : textAddress
					};

					$.ajax({
						type:'PATCH',
						data: obj,
						url: 'http://127.0.0.1:3000/employee/'+id2,
						success: function(id){

							console.log("id:"+id2);
							//remove.remove();   	   		

							$('#table').append('<tr>'+'<td>'+ id.id + '</td>'+
								'<td>'+ id.name + '</td>'+
								'<td>'+ id.age + '</td>' + '<td>'+ id.gender + '</td>'+ 
								'<td>'+ id.company + '</td>'+ '<td>'+ id.email + '</td>'+
								'<td>'+ id.phone + '</td>'+ '<td>'+ id.address + '</td>'+
								'<td> <button id=\'delete\' data-id='+id.id+'>Delete</button> <button id=\'update\' data-id='+id.id + ' data-toggle=\'modal\' data-target=\'#myModal\'>Update</button></td>'+'</tr>');

						}
					});  
				}

				else{
					alert("Invalid phone no.");
				}
			}
			else
			{
				alert("Invalid email");
			}
		}

		else
		{
			alert("Name can contain only characters.");
		}
	}	

	else
	{
		alert("Don't leave blank filelds.");
	}
});	

	var start=0;
	var end =30;
	$(window).scroll(function()
	{
		if($(window).scrollTop() == $(document).height() - $(window).height())
		{
			$('div#loadmoreajaxloader').show();
			$.ajax({

				url: 'http://localhost:3000/employee?_start='+(start+30)+'&_end='+(end+30),
       //http://localhost:3000/db?_start=0&_end=10
       success: function(html)
       {
       	
       	start = start+30;
       	end = end+30;
       	if(html)
       	{
       		$("#postswrapper").append(html);
       		$(html).each(function(index,html)

       		{

       			$('#table').append('<tr>'+'<td>'+ html.id + '</td>'+
       				'<td>'+ html.name + '</td>'+
       				'<td>'+ html.age + '</td>' + '<td>'+ html.gender + '</td>'+ 
       				'<td>'+ html.company + '</td>'+ '<td>'+ html.email + '</td>'+
       				'<td>'+ html.phone + '</td>'+ '<td>'+ html.address + '</td>'+
       				'<td> <button id=\'delete\' data-id='+html.id+'>Delete</button> <button id=\'update\' data-id='+html.id + ' data-toggle=\'modal\' data-target=\'#myModal\'>Update</button></td>'+'</tr>');

       		});

       		$('div#loadmoreajaxloader').hide();
       	}
       	else
       	{
       		$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
       	}
       }
   });
		} 
	});  
});
