var textField = document.querySelector('#name');
var userName = document.getElementById("name").value;
alert(typeof '1999993s9939');
textField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        userName = document.getElementById("name").value;
        alert(typeof userName);
        if( userName.length>=2 ){
            document.querySelectorAll('.gender').forEach((_element) => {
                _element.style.visibility = 'visible';
            });
           
            document.getElementById('userGender').innerHTML = "Hi " + userName + ", Can I know your gender";
            alert(typeof userName);
        }
        else{
            alert();
        }
        // alert(1);
    }
});

alert(userName);

function showEmail() {
    document.querySelectorAll('.email').forEach((_element) => {
        _element.style.visibility = 'visible';
        document.getElementById('emailId').innerHTML = "Hi " + userName + ", Can I know your email";
    });
}

var userEmail = document.querySelector('#email');
userEmail.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelectorAll('.password').forEach((_element) => {
            _element.style.visibility = 'visible';
            document.getElementById('pass').innerHTML = "Hi " + userName + ", Can I know your password";
        });
    }
});

var userPassword = document.querySelector('#password');

userPassword.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelectorAll('.confirmPassword').forEach((_element) => {
            _element.style.visibility = 'visible';
        });
    }

});


var confirmedPassword = document.querySelector('#confirm_password');

confirmedPassword.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelectorAll('.contact').forEach((_element) => {
            _element.style.visibility = 'visible';
            document.getElementById('contact_No').innerHTML = "Hi " + userName + ", Can I know your contact no.";
        });

    }
});