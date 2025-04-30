document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const comment = form.comment.value.trim();

        const phonePattern = /^\d{10}$/;

        let errorMsg = "";

        if (name.length < 2) {
            errorMsg = "Name must be at least 2 characters.";
        } else if (!phonePattern.test(phone)) {
            errorMsg = "Phone number must be exactly 10 digits.";
        } else if (comment.length < 10) {
            errorMsg = "Comment must be at least 10 characters.";
        }

        const oldMsg = document.querySelector(".form-message");
        if (oldMsg) oldMsg.remove();

        const message = document.createElement("p");
        message.className = "form-message";

        if (errorMsg) {
            message.textContent = errorMsg;
            message.style.color = "red";
            form.appendChild(message);
        } else {
            message.textContent = "Your message has been successfully submitted!";
            message.style.color = "#FFD700"; 
            form.appendChild(message);
            form.reset(); 
        }
    });
});
