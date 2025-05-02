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

const allUsers = []

const signUp = () => {
    if (firstName.value == "" || lastName.value == "" || eMail.value == "" || passWord.value == "") {
        toast("Please fill all the fields 😠", "red", "white")

    } else {
        const fName = document.getElementById("firstName").value
        const lName = document.getElementById("lastName").value
        const userEmail = document.getElementById("eMail").value
        const pWord = document.getElementById("passWord").value

        const user = { fName, lName, userEmail, pWord }
        allUsers.push(user)
        localStorage.setItem("users", JSON.stringify(allUsers))
        toast("User created successfully 🎉", "green", "white")
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

        document.getElementById("firstName").value = ""
        document.getElementById("lastName").value = ""
        document.getElementById("eMail").value = ""
        document.getElementById("passWord").value = ""
    }
    
  setInterval(()=>{
    window.location.href = 'signin.html'
  }, 1000)
}