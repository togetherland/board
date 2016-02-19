var redis=require('redis');
var client=redis.createClient('6379','127.0.0.1');
client.on('error',function(error){
	console.log(error);
});
//set
// client.select('15',function(error){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		client.set('str_key_0','0',function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
// 			client.end();
// 		});
// 	}
// });
//get
// client.select('15',function(error){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		client.get('str_key_0',function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
// 			client.end();
// 		});
// 	}
// });
//publish.js

client.on('ready',function  (error) {
	if (error) {
		console.log(error);
	}else{
		client.publish('wangjiangbo_test',"test,i am test");
		client.publish('wangjiangbo_test2',"test,i am test2");
	}
	client.end();
});

