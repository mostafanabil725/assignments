var signUpBtn = document.querySelector('span');
var NameDiv = document.querySelector('.Name');
var nameInput = document.querySelector('.nameInput');
var emailInput = document.querySelector('.emailInput');
var passwordInput = document.querySelector('.passwordInput');
var alert = document.querySelector('#alert');
var success = document.querySelector('#success');
var signupBtn = document.querySelector('#signupBtn');
var loginBtn = document.querySelector('#loginBtn');
var loginPage = document.querySelector('.login');
var welcomePage = document.querySelector('.welcomePage');
var userName = document.querySelector('.user-welcome h1 span')
signUpBtn.addEventListener('click' , function(){
   toSignupPage()
})


function toSignupPage(){
     NameDiv.classList.add('d-none');
     loginBtn.classList.remove('d-none')
     signupBtn.classList.add('d-none')
     signUpBtn.innerHTML = "Sign in"
}
 function login(){
    if(emailInput.value === '' || passwordInput.value === '' ){
    alert.innerHTML = 'All inputs is required';
    }
    else{
     loginPage.classList.add('d-none');
     welcomePage.classList.replace('d-none' , 'd-flex')
     userName.innerHTML = nameInput.value;
    }

      clear();
}
function logout(){
     loginPage.classList.remove('d-none');
     welcomePage.classList.replace('d-flex' , 'd-none')
   }

function toSigninPage(){
     NameDiv.classList.add('d-none');
     signUpBtn.innerHTML = "Sign Up"
}


function signUp(){
 var Names = [];
 var Emails = [];
 var Passwords = [];

 Names.push(nameInput.value);
 localStorage.setItem('Names' , JSON.stringify(Names));
 Emails.push(emailInput.value);
 localStorage.setItem('Emails' , JSON.stringify(Emails));
 Passwords.push(passwordInput.value);
 localStorage.setItem('Passwords' , JSON.stringify(Passwords));

 

    if(emailInput.value === '' || passwordInput.value === '' || nameInput.value === '' ){
     
      alert.innerHTML = 'All inputs is required';  
    } 
   
    else{
      alert.innerHTML = '';
      success.innerHTML = 'Success'; 
    }
    
   
     
     
}
function clear(){
     nameInput.value = null;
     emailInput.value = null;
     passwordInput.value = null;
}