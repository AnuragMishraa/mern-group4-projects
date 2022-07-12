const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let valid=1;
    let error_text ='';
    
    const name = document.querySelector("#name").value; 
    if(name == '' && valid == 1){
        error_text = 'Please enter your name';
        valid = 0;
    }
    
    const email = document.querySelector("#email").value;
    if(email == '' && valid == 1){
        error_text = 'Please enter your email';
        valid = 0;
    }

    const phone = document.querySelector("#phone").value;
    if(phone == '' && phone.length !=10 && valid == 1){
        error_text = 'Please enter your phone';
        valid = 0;
    }
    
    const address = document.querySelector("#address").value;

    const pincode = document.querySelector("#pincode").value;
    if(pincode == '' && valid == 1){
        error_text = 'Please enter your pincode';
        valid = 0;
    }

    const password = document.querySelector("#password").value;
    if(password == '' && valid == 1){
        error_text = 'Please enter your password';
        valid = 0;
    }

    const cnfpassword = document.querySelector("#cnfpassword").value;
    if(cnfpassword == '' && valid == 1){
        error_text = 'Please enter your password';
        valid = 0;
    }
    if(password != cnfpassword && valid == 1){
        error_text = 'Please enter your password and confirm password same';
        valid = 0;
    }
    
    

    if(valid == 0 && error_text!=''){
        document.querySelector(".error_message").style.display='block';
        document.querySelector('.error_message').innerText= error_text;
        document.querySelector('.error_message').style.color='red';
    }  
    if(valid==1){
        document.querySelector("#show_name").innerText=name;
        document.querySelector("#show_email").innerText=email;
        document.querySelector("#show_phone").innerText=phone;
        document.querySelector("#show_add").innerText=address;
        document.querySelector("#show_pin").innerText=pincode;
    }
})