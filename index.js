const phoneInput = document.getElementById("contact-phone");

phoneInput.addEventListener("input", function () {
    let numbers = this.value.replace(/\D/g, "").slice(0, 10);

    if (numbers.length > 6) {
        this.value =
            numbers.slice(0, 3) + "-" +
            numbers.slice(3, 6) + "-" +
            numbers.slice(6);
    } else if (numbers.length > 3) {
        this.value =
            numbers.slice(0, 3) + "-" +
            numbers.slice(3);
    } else {
        this.value = numbers;
    }
});