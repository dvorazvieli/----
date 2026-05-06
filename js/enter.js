function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function login(){
    let email=document.querySelector("#login-username").value;
    let password=document.querySelector("#login-password").value;
    if(window.localStorage.getItem(email)!=null){
        let user=window.localStorage.getItem(email);
        user=JSON.parse(user);
        if(user.password===password){
            window.localStorage.setItem("currentUser", JSON.stringify(user));
            document.getElementById('login-username').value="";
            document.getElementById('login-password').value="";
            window.location.href="select_game.html";
            alert("welcome back!");
            return;
        }
        else{
            
                document.querySelector("#password-error").textContent = "הסיסמה שגויה";
                return;
            }        
    }
    if(email==""||password=="")
        alert("הכנס פרטים");
    else{
        alert("אינך קיים במערכת")
    }
}


let login_form=document.getElementById('login-form');
let registrationDiv=document.getElementById('registration-form');

function ShowRegisterForm(){
    login_form.style.display='none';
    registrationDiv.style.display='block';
    document.getElementById('login-username').value="";
    document.getElementById('login-password').value="";
}


function showloginform(){
    registrationDiv.style.display='none';
    login_form.style.display='block';

}


function register(){
    let Name = document.querySelector("#register-username").value;
    let email = document.querySelector("#register-email").value;
    let password = document.querySelector("#register-password").value;
    let confirmpassword = document.querySelector("#confirm-password").value;
    
    let user = {
        "Name": Name,
        "email": email,
        "password": password,
        "num_of_wins" :0
    }
    if(isValidEmail(email)==false){
        document.getElementById('register-email').value="unvalid email";
    }
    if(password==""){
        document.getElementById('register-password').value="enter passwort";
    }
    else if (window.localStorage.getItem(email) === null&&password==confirmpassword&&password!=null&&isValidEmail(email)==true) {
        window.localStorage.setItem(email, JSON.stringify(user));
        document.querySelector("#register-username").value="";
        document.querySelector("#register-email").value="";
        document.querySelector("#register-password").value="";
        document.querySelector("#confirm-password").value="";
        alert("נרשמת בהצלחה למערכת!");
        showloginform()
    } 
    else{
        alert("User already exists");
        document.querySelector("#register-username").value="";
        document.querySelector("#register-email").value="";
        document.querySelector("#register-password").value="";
        document.querySelector("#confirm-password").value="";
        showloginform()
    }
}