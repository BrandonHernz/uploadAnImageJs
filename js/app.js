const input_image = document.querySelector("#input-image");
var uploaded_image = "";

input_image.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        document.querySelector("#image-display").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})