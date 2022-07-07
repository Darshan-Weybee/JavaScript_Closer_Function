let f;
(function (){
    const header = document.querySelector("h1");
    header.style.color = "red";
    f = function(){
        header.style.color = "blue";
    }
})();

document.addEventListener("click", f);