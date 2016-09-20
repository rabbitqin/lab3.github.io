var token = '10917726.19ba9fb.8f1e74b19dd2421c8348e492835265da', 
    userid = 10917726, 
    num_photos = 20; 

var page= 1;

$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent', 
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		$('ul').append('<li><img src="'+data.data[0].images.low_resolution.url+'"></li>');
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});

$(document).ready(function(){
   $("ul").click(function(){
 $.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		if(page<20){
 			$('ul').append('<li><img src="'+data.data[page].images.low_resolution.url+'"></li>');
 		}
 		page = page+1;
        console.log(page);
	},
	error: function(data){
		console.log(data); 
	}
});
   // page = page+1;
   // console.log(page);
});
});



 
