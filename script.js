//your JS code here. If required.
function fun(){
	this.value=this.value.toUpperCase();
}
document.getElementById('fname').addEventListener('blur',
fun);