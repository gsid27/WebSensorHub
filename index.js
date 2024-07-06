async function fetchData() {
  try {
    const response = await fetch('/data'); 
    const data = await response.text();
    document.getElementById('sensorData').innerText = data;
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('sensorData').innerText = 'Error fetching data';
  }
}
setInterval(fetchData, 1000); 
