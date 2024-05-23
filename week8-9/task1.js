

function login(){
    let user=document.getElementById("uname").value;
let password=document.getElementById("pass").value;

if (user==='Shiwani' && password==='1234@5'){
    localStorage.setItem('UserLoggedInSuccessful',true);
    localStorage.setItem('Shiwani', user);
    window.location.href = 'nextpage.html'; }

 else {
   alert('Either username or password is incorrect or missing!');
   return false;
}
}



window.onload = function() {
    var loginSuccessful = localStorage.getItem('UserLoggedInSuccessful');
    if (loginSuccessful) {
        window.location.href = 'nextpage.html';
    }
};