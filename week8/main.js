function firstPic(){
    var myDiv = document.getElementById("pictures container");
    myDiv.innerHTML="";
    var image = new Image(296,500);
    image.src = "./ArtifactDB-master/assets/fullcard/annihilation.png";
    myDiv.appendChild(image);
}
function secondPic(){
    var myDiv = document.getElementById("pictures container");
    myDiv.innerHTML="";
    var image = new Image(296,500);
    image.src = "./ArtifactDB-master/assets/fullcard/compel.png";
    myDiv.appendChild(image);
}
function thirdPic(){
    var myDiv = document.getElementById("pictures container");
    myDiv.innerHTML="";
    var image = new Image(296,500);
    image.src = "./ArtifactDB-master/assets/fullcard/escape_route.png";
    myDiv.appendChild(image);
}