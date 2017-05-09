function length(obj){
	var count = 0; 
  	for(var key in obj){
    	count++;
function length(obj){
	var count = 0; 
  	for(var key in obj){
    	count++;
    }
  	return count; 
}

function deepEqual(obj1, obj2){
 if(typeof(obj1) === "object" || typeof(obj2) === "object"){
   	if(obj1 === null || obj2 === null || // type of null is "object"
       length(obj1) !== length(obj2)){
        return false; 
       } 
   
    for(var key in obj1){
       // check if keys in obj1 are present in obj2 (values maybe different)
       if(!obj2.hasOwnProperty(key) ||
         !deepEqual(obj1[key], obj2[key])){
           return false; 
            }
           }       
    return true;
 } else {
   	// return this if typeof var is not an object
    	return obj1 === obj2; 
   }  	
}
