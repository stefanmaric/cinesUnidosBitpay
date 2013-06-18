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

var mongoLabs = function() {

	function insertPayment(idFactura, publicKey, status) {
		var passKey = window.btoa(idFactura).substring(0,4);

		var payment = {}

		payment.idFactura 		= idFactura;
		payment.publicKey 		= publicKey;
		payment.status			= status;
		payment.creationDate	= new Date();
		payment.passKey 		= passKey;

		

		return passKey;
	}

	return this
}