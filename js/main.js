var payTypes = document.getElementsByClassName("payMethod")
var bitcoinSection = document.getElementById("bitcoinSection")

var myEvent = function(e) {
    if (e.target.id == "typeBitcoin")
        bitcoinSection.style.display = "block"
    else
        bitcoinSection.style.display = "none"
}

for (var i = 0, j = payTypes.length; i < j; i++) {
    payTypes[i].onchange = myEvent;
}