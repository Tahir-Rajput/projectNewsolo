const btn = document.getElementById("mybtn")
const alertmsg = document.getElementById("alertMessage")
const myalert = document.getElementById("home")

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const email = document.getElementById("email").value.trim()
    const contact = document.getElementById("contact").value.trim()
    const name = document.getElementById("name").value.trim()
    


if(name === "" || email === "" || contact === ""){
alertmsg.textContent = "Fill your form"
myalert.classList.add("error")
myalert.classList.remove("success")
}
else {
    alertMessage.textContent = "Your form is submitted";
    myalert.classList.add("success");
    myalert.classList.remove("error");
  }
    

    myalert.classList.add("show")

    setTimeout(() => {
        myalert.classList.remove("show")
    }, 2000);
     
})