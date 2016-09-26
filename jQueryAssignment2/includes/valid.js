$(function(){
	 $("form[name='registration']").validate({
    
    rules: {
		      nameV: "required",
		      ageV: "required",
		      emailV: {
		       			 required: true,
		        		 email: true
					  }
   			 },
   
    messages: {
			      nameV: "Please enter name",
			      ageV: "Please enter your age",
			      
			      emailV: "Please enter a valid email address"
   			 }

   			 // submitHandler: function(form) {
   			 // 	alert("submitted");
      	// 			form.submit();
      	// 		}    
 	 });	 	 
});