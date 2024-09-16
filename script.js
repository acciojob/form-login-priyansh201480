function getFormvalue() {
    const form = document.getElementById("form1");
	form.addEventListener('submit',function(event){
		event.preventDefault();
		
	const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    alert(firstName + " " + lastName);
	});
}
window.onload = getFormvalue;
