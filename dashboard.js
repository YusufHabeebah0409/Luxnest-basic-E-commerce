const checkPerson = () => {
    if (localStorage.person) {
        const signedInUser = JSON.parse(localStorage.getItem('person'))
        console.log(signedInUser);
        showPerson.innerHTML = `<h4 class="my-3 text-center">Welcome ${signedInUser.fName} ${signedInUser.lName},</h4>`
        // signin 
    } else {
        body.innerHTML = `<h4 class="my-3 text-center">You are not signed in, redirecting you to sign in...</h4>`
        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 1500)
    }
}
checkPerson()

const signOut = () => {
    const conDel = confirm(" Are you sure You want to Sign Out , This action is not reversible")
    if (conDel === true) {
        toast("Sign Out Successfully", "green", "white")
        localStorage.removeItem('person')
        checkPerson()
    } else {
        checkPerson()
    }
    
}


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

cart = []
let allIndex = ""
if (localStorage.getItem('Product')) {
    cart = JSON.parse(localStorage.getItem('Product'));
}
const addProduct = () => {
    if (product.value.trim() === "") {
        toast("Input A Product ", "red", "white", "left")
    } else {
        cart.push(product.value)
        localStorage.setItem("Product", JSON.stringify(cart))
        product.value = ""
        display()
    }
}
const delProduct = (num) => {
    const conDel = confirm(" Are you sure You want to Delete , This action is not reversible")
     if (conDel === true) {
        cart.splice(num, 1)
        localStorage.setItem("Product", JSON.stringify(cart))
        display()
     } else {
        display()
     }
}

const delAll = () => {
    cart=[]
    localStorage.setItem("Product", JSON.stringify(cart))
    display()
}

const editProduct = (data,nub) => {
    updateProduct.value = data
     allIndex = nub
}

const saveItem = () => {
    setTimeout(() => {
        toast("Product Updated Successfully", "green", "white")
    },1000)
    cart.splice(allIndex, 1, updateProduct.value)
    localStorage.setItem("Product", JSON.stringify(cart))
    display()
    
}


const display = () => {
    show.innerHTML = ""
    cart.map((item, index) => {
        show.innerHTML += `
        <tr>
            <td class="table-light fs-3 text-center">${index + 1}.</td>
            <td class="table-light fs-3 text-center">${item}</td>

            <td class="table-light">

            <button onclick='editProduct(${JSON.stringify(item)},${index})' data-bs-toggle="modal" data-bs-target="#exampleModal" class=" btn btn-info text-center w-50 "> 
                 <img src="./icons8-create-24.png" alt="">
            </button>

            </td>

            <td class="table-light">

            <button onclick='delProduct(${index})' class=" btn btn-danger text-center w-50 ">          
                <img src="./icons8-delete-30.png" alt="">
                </button>

            </td>
        </tr>
       `
    })

    if(cart.length >= 2){
      allDel.style.display = "block"
    }else{
        allDel.style.display = "none" 
    }
}

display()