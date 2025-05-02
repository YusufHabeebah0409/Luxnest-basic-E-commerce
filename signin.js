const toast = (text, background, color, position = "right") => {
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


const gotten = JSON.parse(localStorage.getItem("users"));
const signIn = () => {
    if(inMail.value == "" || passwordIn.value == ""){  
        alert("Please fill all the fields")
    }

    let found = false;

    for (let i = 0; i < gotten.length; i++) {
        // console.log(gotten[i].userEmail);
        if(inMail.value == gotten[i].userEmail && passwordIn.value == gotten[i].pWord)  {
            found = true;
            
        } 
    }

    if (found == false) {
        toast("Invalid email or password 😒", "red", "white")
    } else {
        toast("Login successful 🎉", "green", "white")
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
            sub.innerHTML = 'Submit'
        }, 2000)
        
    }
    setInterval(()=>{
        window.location.href = 'dashboard.html'
      }, 1000)
   // window.location.href = 'index.html' 
}



