document.addEventListener('DOMContentLoaded', () => {

	let u_name =  document.querySelector('.u_name');
	let u_email = document.querySelector('.u_email');
	let u_msg =   document.querySelector('.u_msg');

	
	
	u_name.addEventListener('focus', () => {
		u_name.classList.add('active');
	});
	u_name.addEventListener('blur', () => {
		u_name.classList.remove('active');
	});

	
	
	u_email.addEventListener('focus', () => {
		u_email.classList.add('active');
	});
	u_email.addEventListener('blur', () => {
		u_email.classList.remove('active');
	});



	u_msg.addEventListener('focus', () => {
		u_msg.classList.add('active');
	});
	u_msg.addEventListener('blur', () => {
		u_msg.classList.remove('active');
	});

});