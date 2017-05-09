function length(obj){
	var count = 0; 
  	for(var key in obj){
    	count++;
    }
  	return count; 
}

function deepEqual(obj1, obj2){
 if(typeof(obj1) === "object" || typeof(obj2) === "object"){
   	if(obj1 === null || obj2 === null) // typeof(null) is an object
      return false; 
    
   if(length(obj1) !== length(obj2)){
        return false; 
       } 
   else {
        for(var key in obj1){
          // check if keys in obj1 are present in obj2 (values maybe different)
            if(!obj2.hasOwnProperty(key)){ 
                return false; 
               } 
          	// return false as soon as first inequality between 
          	// object values is found in recursive call
          	if(!deepEqual(obj1[key], obj2[key])){
            	return false; 
            }
           }
       }
    return true;
 } else {
   	// return this if typeof var is not an object
    	return obj1 === obj2; 
   }  	
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
