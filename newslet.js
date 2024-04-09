function storeNewsLetter() {
    let email = document.getElementById("newsL").value;
    let getEmail = JSON.parse(localStorage.getItem("newsLetter")) || [];
    if (getEmail.some(v => v.email === email)) {
        alert("You are already subscribed")
 } else {
        getEmail.push({
            "email": email,
        });
        localStorage.setItem("newsLetter", JSON.stringify(getEmail));
        alert("Thank you for subcribing to the Newsletter")

        emailInput.value = "";

    }

}