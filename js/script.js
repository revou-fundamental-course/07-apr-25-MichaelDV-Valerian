let homeName = prompt("Siapakah nama anda?", "")
document.getElementById('home-name').innerHTML = homeName

function validateForm(){
    const name = document.forms["form-message"]["input-nama"].value;
    const birthDate = document.forms["form-message"]["input-tanggal-lahir"].value;
    const gender = document.forms["form-message"]["jenis-kelamin"].value;
    const message = document.forms["form-message"]["input-pesan"].value;

    if (name == "" || birthDate == "" || gender == "" || message == ""){
        alert("Tidak boleh ada yang kososng!");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);
    return false;
}

function setSenderUI(name, birthDate, gender, message){
    document.getElementById("output-nama").innerHTML = name;
    document.getElementById("output-tanggal-lahir").innerHTML = birthDate;
    document.getElementById("output-jenis-kelamin").innerHTML = gender;
    document.getElementById("output-pesan").innerHTML = message;
}






