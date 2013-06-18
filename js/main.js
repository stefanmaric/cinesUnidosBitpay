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

	this.insertPayment = function(idFactura, publicKey, status) {
		var passKey = window.btoa(idFactura).substring(0,4);

		var payment = {}

		payment.idFactura 		= idFactura;
		payment.publicKey 		= publicKey;
		payment.status			= status;
		payment.creationDate	= new Date();
		payment.passKey 		= passKey;

    $.ajax({ 
      url: "https://api.mongolab.com/api/1/databases/cinesunidos/collections/payments?apiKey=504557bce4b072c137d81770",
      data: JSON.stringify(payment),
      type: "POST",
      contentType: "application/json" 
    });
	
		return passKey;
	}

	return this
}();