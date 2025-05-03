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
        display()
     } else {
        display()
     }
}

const delAll = () => {
    cart=[]
    display()
}

const editProduct = (data,nub) => {
     product.value = data
     allIndex = nub
}


const display = () => {
    show.innerHTML = ""
    cart.map((item, index) => {
        show.innerHTML += `
        <tr>
            <td>${index + 1}.</td>
            <td>${item}</td>
            <td><button onclick='editProduct(${JSON.stringify(item)},${index})'> Edit</button></td>
            <td><button onclick='delProduct(${index})'> Delete</button></td>
        </tr>
       `
    })

    if(cart.length >= 2){
      allDel.style.display = "block"
    }else{
        allDel.style.display = "none" 
    }
}