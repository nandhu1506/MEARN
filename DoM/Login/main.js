const login = ()=>{
    const usernameInput = username.value
    const pswdInput=password.value
    console.log(usernameInput);
    if(usernameInput && pswdInput){
        localStorage.setItem("username",usernameInput)
        window.location = "home.html"
    }else{
    alert("Fill the Form completely!!!!")
    }
}