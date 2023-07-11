console.log("log")

const login = document.getElementById("login");

console.log(login);
login.addEventListener("click", ()=>{
    console.log("Event happened");
    window.location.replace("dashboard.html");
})


//The difference between href and replace, is that replace() removes the URL of the current document from the document history, meaning that it is not possible to use the "back" button to navigate back to the original document.