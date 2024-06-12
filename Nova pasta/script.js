async function sendRequest(command) {
  const response = await fetch(`http://192.168.5.105/${command}`);
  const data = await response.text();
  console.log(data);
  alert(data);
}

function acenderLED() {
  sendRequest('LEDOn');
}

function apagarLED() {
  sendRequest('LEDOff');
}
