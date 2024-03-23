// const upperset = "ABCDEFGHIjKLMNOPQRSTUVWXYZ";
// const lowerset = "abcdefghijklmnopqrstuvwxyz";
// const numberset = "123456789";
// const symbolsset = "~!@#$%^&*()_+/";

// // selectors
// const passbox = document.getElementById("pass-box")
// const totalchar = document.getElementById("total-char")
// const upperinput = document.getElementById("upper-case")
// const lowerinput = document.getElementById("lower-case")
// const numberinput = document.getElementById("numbers")
// const symbolinput = document.getElementById("symbols")



// // to get random data* form datasets

// const getrandomdata = (dataset) => {
//     return dataset[Math.floor(Math.random() * dataset.length)]
// }

// // to generate a password form the random data*

// const generatepassword = (password = "") => {
//     if (upperinput.checked) {
//         password += getrandomdata(upperset)
//     }
//     if (lowerinput.checked) {
//         password += getrandomdata(lowerset)
//     }
//     if (numberinput.checked) {
//         password += getrandomdata(numberset)
//     }
//     if (symbolinput.checked) {
//         password += getrandomdata(symbolsset)
//     }
//     if (password.length < totalchar.value) {
//         return generatepassword(password)
//     }
//     passbox.innerText = truncateString(password, totalchar.value);
// }

// generatepassword();

// document.getElementById("btn").addEventListener("click",
//     function () {
//         generatepassword();
//     })

// function truncateString(str, num) {
//     if (str.length > num) {
//         return str.slice(0, num) + "...";
//     } else {
//         return str;
//     }
// }
// Share

// generatepassword();