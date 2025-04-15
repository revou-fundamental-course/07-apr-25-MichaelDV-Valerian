let homeName = prompt("Siapakah nama anda?", "")
document.getElementById('home-name').innerHTML = homeName


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) {slideIndex = 1}
    if (n < 1) {slideIndex = imgList.length};

    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    
    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    slideIndex++;
    showDivs(slideIndex);
  }, 3000);

function validateForm(){
    const name = document.forms["form-message"]["input-nama"].value;
    const birthDate = document.forms["form-message"]["input-tanggal-lahir"].value;
    const gender = document.forms["form-message"]["jenis-kelamin"].value;
    const message = document.forms["form-message"]["input-pesan"].value;

    if (name == "" || birthDate == "" || gender == "" || message == ""){
        alert("Tidak boleh ada yang kosong!");
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






