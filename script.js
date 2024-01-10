//your JS code here. If required.
const student={
	name : 'taj'
}
Object.prototype.getKeys = function(){
	return Object.keys(this) ;
}
let result  = student.getKeys();
console.log(result)