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

let allUsers = []

if (localStorage.users) {
    let retrieved = JSON.parse(localStorage.getItem("users"))
    // console.log(retrieved);
    allUsers = retrieved
} else {
    allUsers = []
}

const signUp = () => {
    if (firstName.value == "" || lastName.value == "" || eMail.value == "" || passWord.value == "") {
        toast("Please fill all the fields 😠", "red", "white")
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
            sub.innerHTML = 'Sign Up'
        }, 1000)

    } else {
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
        const fName = document.getElementById("firstName").value
        const lName = document.getElementById("lastName").value
        const userEmail = document.getElementById("eMail").value
        const pWord = document.getElementById("passWord").value

        const user = { fName, lName, userEmail, pWord }
        let found = allUsers.find(eachUser => eachUser.userEmail === userEmail)

        if (found == undefined) {
            allUsers.push(user)
            toast("User created successfully 🎉", "green", "white")
            console.log(allUsers);

            setTimeout(() => {
                window.location.href = 'signin.html'
            }, 2000)

            localStorage.setItem("users", JSON.stringify(allUsers))

            document.getElementById("firstName").value = ""
            document.getElementById("lastName").value = ""
            document.getElementById("eMail").value = ""
            document.getElementById("passWord").value = ""

        } else {
            toast("Account already exist, Kindly sign in with your details", "blue", "white")
            setTimeout(() => {
                sub.innerHTML = 'Sign Up'
            }, 1500)
        }
    }
}
