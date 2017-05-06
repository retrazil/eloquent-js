function length(obj){
	var count = 0; 
  	for(var key in obj){
    	count++;
    }
  	return count; 
}

function deepEqual(obj1, obj2){
  	if(obj1 === null || obj2 === null){
    	return false; 
    } else if(typeof(obj1) !== typeof(obj2)){
      	return false; 
    } else if(typeof(obj1) === "object"){  
      	if(length(obj1) !== length(obj2)){
        	return false; 
        } else {
        	for(var key in obj1){
              	console.log("key in obj1: " + key  + ":" + obj1[key]);
              	console.log("key in obj2: "  + key + ":" + obj2[key]);
            	if(!obj2.hasOwnProperty(key)){
                	return false; 
                }
            }
        }
    	return true;
    } else {
    	return obj1 === obj2; 
    }  	
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: "comes", the: "sun"}));

// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
