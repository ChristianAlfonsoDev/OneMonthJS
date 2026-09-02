fetch('../scripts/dummy.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('json-display');
    container.innerHTML = ''; // Clear loading text

    // Loop through the array of objects
    data.forEach(item => {
      container.innerHTML += `
        <div class="card">
          <h3>${item.researchName}</h3>
          <p><strong>Description:</strong> ${item.description}</p>
          <p><strong>Researcher:</strong> ${item.researcher}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error:', error));