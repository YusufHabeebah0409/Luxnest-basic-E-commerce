let gottenUsers = JSON.parse(localStorage.getItem('users')) || []
console.log(gottenUsers);

const toast = (text, background, color, position = "left") => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
 
}


const signIn = () => {
    if (eMail.value == "" || passWord.value == "") {
        toast("Please in the Input 😠", "red", "white")
        sub.innerHTML = `
         <div class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
        `
        setTimeout(() => {
            sub.innerHTML = 'Sign In'
        },2000)

    } 
    
    else {
        sub.innerHTML = `
        <div class="dot-spinner">
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
        </div>
    `
        
        const userEmail = document.getElementById("eMail").value
        const pWord = document.getElementById("passWord").value

        const  signInObj = { userEmail, pWord }
        console.log(signInObj);

        let found = gottenUsers.find(user=>user.userEmail == userEmail && user.pWord == pWord)
        console.log(found);
        
        if(found == undefined) {
            toast('User not found', '#f01400', '#fff')
        } else {
                toast('Sign in successful😁', '#006400', '#fff')
                setTimeout(()=>{
                    window.location.href = 'dashboard.html'
                }, 1000)
        }
    
    
        document.getElementById("eMail").value = ""
        document.getElementById("passWord").value = ""
    }
    
  
}