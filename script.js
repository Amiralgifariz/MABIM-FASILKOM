function login() {
    var done = 0;
    var username = document.login.username.value;
    var passeord = document.login.password.value;

    if(usernma == "himasi"  && password == "himasi"){
        if(confirm("apakah ingin login?") == true){
            window.location.href ="";
        } else{
            alert("Membatalkan login :");
        }
    } else{
        if(done==0){
            alert("unsername/password salah:");
        }
    }
}