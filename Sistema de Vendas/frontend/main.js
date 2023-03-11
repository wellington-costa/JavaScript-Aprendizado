const paymentType = document.getElementById('payment-type');
const cashPayment = document.querySelector('.cash-payment');

paymentType.addEventListener('change', function() {
	if (paymentType.value === 'money') {
		cashPayment.classList.remove('hide');
	} else {
		cashPayment.classList.add('hide');
	}
});

const cashReceived = document.getElementById('cash-received');
const cashChange = document.getElementById('cash-change');
const totalAmount = document.getElementById('total-amount');

cashReceived.addEventListener('keyup', function() {
	const received = parseFloat(cashReceived.value);
	const total = parseFloat(totalAmount.textContent);

	if (isNaN(received)) {
		cashChange.value = '';
		return;
	}

	const change = received - total;

	if (change >= 0) {
		cashChange.value = change.toFixed(2);
	} else {
		cashChange.value = '';
	}
});

function imprimirCupom() {
    window.print(); // executa a impressão da página atual
  }
  
  
  