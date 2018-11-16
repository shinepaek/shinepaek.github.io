// Name and Password from the register-form
var name = document.getElementById('myname');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('myname', name.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = "as"//localStorage.getItem('myname');
    var storedPw = "11"//localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById("psw");


    // check if stored data from register-form is equal to data from login form
    if(userPw.value != storedPw) { //if(userName.value != storedName || userPw.value != storedPw) {
        alert('ERROR');
    }else {
        alert('You are logged in.');
    }








}
