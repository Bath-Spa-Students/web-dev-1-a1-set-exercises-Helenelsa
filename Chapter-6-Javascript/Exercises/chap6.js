// for getting total amount immediately
window.onload = () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
      input.addEventListener('input', calculate); // Changed to 'input' event
  });
}

// calculating amount
function calculate() {
  const petrol_price = document.querySelector('#petrol_price').value; // Corrected ID
  const litres = document.querySelector('#litres').value; // Corrected ID

  if (!petrol_price || !litres) return;

  document.querySelector('#total_amount').innerHTML = petrol_price * litres;
}  