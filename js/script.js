function validateForm() {
    const nama = document.forms['massage-form']['name-input'].value;
    const email = document.forms['massage-form']['email-input'].value;
    const interest = document.forms['massage-form']['interest-input'].value;

    if (nama == '' || email == '' || interest == '') {
        alert('Please fill in all fields');
        return false;
    }

    // setSender (nama);

    // return false;
}

// function setSender (nama) {
//     document.getElementById("sender-name").innerHTML = nama;
// }