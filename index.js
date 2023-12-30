 //selecvting popup box popupoverlay
 var popupoverlay=document.querySelector(".popup-overlay") 
 var popupbox=document.querySelector(".popup-box")
 var addpopupbutton=document.getElementById("add-popup-button")
 addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
 })
 //select cancel button
 var cancelpopup=document.getElementById("cancel-popup")
 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })
 //selecting container div,add-book,book-title-input,book-author-input,book-description-input
 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitleinput=document.getElementById("book-title-input")
 var bookauthorinput=document.getElementById("book-author-input")
 var bookdescriptioninput=document.getElementById("book-description-input")
 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })
 
 function deletebook(event){
    event.target.parentElement.remove()
 }

var toggleButton = document.getElementById("dark-mode-toggle");
var icon = toggleButton.querySelector("img");

toggleButton.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
    localStorage.setItem('darkMode', document.body.classList.contains("dark-theme"));
};


document.addEventListener('DOMContentLoaded', function () {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'true') {
        document.body.classList.add('dark-theme');
        icon.src = "images/sun.png";
    }
  
});

