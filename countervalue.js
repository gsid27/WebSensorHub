function updateCounter(value) {
  document.getElementById('counter').value = value;
}
function fetchData() {
  fetch('/data')  
    .then(response => response.json())  
    .then(data => {
      updateCounter(data.counter);  
         })
    .catch(error => console.error('Error fetching data:', error));
}
window.onload = function() {
  fetchData();
  setInterval(fetchData, 5000);  // Refresh data every 5 seconds (5000 milliseconds)
};
