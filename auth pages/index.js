const usernameIP = document.getElementById('username');
const emailIP = document.getElementById('email');
const passwordIP = document.getElementById('password')

const loginbtn = document.getElementById('loginbtn')
//html a login btn ku id add panniko


loginbtn.addEventListener('click',()=>{
    const email = String(emailIP.value);
    const username = String(usernameIP.value);
    const password = String(passwordIP.value);
    if(email!='' && password!='' && username!=''){
        console.log(email+username+password);
        //'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$'
    }else{
        console.log("eroor");
    }
    
    
    
    
});
