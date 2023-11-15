// events
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('username').addEventListener('blur', validateUser);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// name
function validateName() {
  const name = document.getElementById('name');
  const reg = /\b[A-Z][a-zA-Z]*\b/g;

  if(!reg.test(name.value)){
    name.classList.add('is-invalid');
    document.querySelector('.invalid-feedback').style.display = 'block';
  } else {
    name.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback').style.display = 'none';
  }
  if(name.value === '') {
    name.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback').style.display = 'none';
  }
}

// username
function validateUser() {
  const user = document.getElementById('username');
  const reg = /\b[a-z0-9]+\b/g;

  if(!reg.test(user.value)){
    user.classList.add('is-invalid');
    document.querySelector('.invalid-feedback1').style.display = 'block';
  } else {
    user.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback1').style.display = 'none';
  }
  if(user.value === '') {
    user.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback1').style.display = 'none';
  }
}

// email
function validateEmail() {
  const email = document.getElementById('email');
  const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!reg.test(email.value)){
    email.classList.add('is-invalid');
    document.querySelector('.invalid-feedback2').style.display = 'block';
  } else {
    email.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback2').style.display = 'none';
  }
  if(email.value === '') {
    email.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback2').style.display = 'none';
  }
}

// phone number 
function validatePhone() {
  const phone = document.getElementById('phone');
  const reg = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!reg.test(phone.value)){
    phone.classList.add('is-invalid');
    document.querySelector('.invalid-feedback3').style.display = 'block';

  } else {
    phone.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback3').style.display = 'none';
  }
  if(phone.value === '') {
    phone.classList.remove('is-invalid');
    document.querySelector('.invalid-feedback3').style.display = 'none';
  }
}