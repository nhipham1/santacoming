document.getElementById("btn-submit").addEventListener("click", function () {
    const emailTo = "grapea.nice@gmail.com";
    const ten = document.getElementById("fullname").value;
    const message = document.getElementById("mes").value;
    const mailtoLink = `mailto:${emailTo}?subject=${ten}&body=${message}`;

    if (ten !== "" && message !== "") {
        window.location.href = mailtoLink;
    } else {
        alert("Please enter enough information!")
    }
});
