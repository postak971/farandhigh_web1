var isCAD = false;

var checkCad = document.querySelector(".button_cad");
checkCad.addEventListener("click", toggleCurrency);



function usdToCad() {
    //alert("The button is clicked")
    var costUSD = [];
    var costCAD = [];
    var numOfCost = document.querySelectorAll(".cost").length;
    
    var cost = document.querySelectorAll(".cost");
    var price = document.querySelectorAll(".price");

    for (var i = 0; i < numOfCost; i++) {
        costUSD[i] = cost[i].innerHTML;
        costCAD[i] = parseInt(costUSD[i], 10) * 1.29;
        price[i].innerHTML = "CA$ " + Math.round(costCAD[i]) + " Per Person"; 
        checkCad.textContent = "View Price in US$";
        isCAD = true;
    }   
  
}

function refresh() {
    location.reload();
    isCAD = false;
}

function toggleCurrency() {
    isCAD ? refresh() : usdToCad();
}