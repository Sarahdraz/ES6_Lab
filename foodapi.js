
//pizza
document.getElementById('pizza').addEventListener('click', async () => {
  const container = document.getElementById('resultContainer');
  container.innerHTML = 'Loading...';

  const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await res.json();
     if (data.recipes.length > 0) {
      container.innerHTML = ''; 

      data.recipes.forEach(pizza => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${pizza.image_url}" alt="${pizza.title}" />
          <h2>${pizza.title}</h2>
          <p><strong>Publisher:</strong> ${pizza.publisher}</p>
          <p><a href="${pizza.source_url}" target="_blank">View Full Recipe</a></p>
        `;
        container.appendChild(card);} )

}    else {
      container.innerHTML = 'No pizzas found.';
    }
    }
);
//salad
document.getElementById('salad').addEventListener('click', async () => {
  const container = document.getElementById('resultContainer');
  container.innerHTML = 'Loading...';

  const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
    const data = await res.json();
     if (data.recipes.length > 0) {
      container.innerHTML = ''; 

      data.recipes.forEach(salad => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${salad.image_url}" alt="${salad.title}" />
          <h2>${salad.title}</h2>
          <p><strong>Publisher:</strong> ${salad.publisher}</p>
          <p><a href="${salad.source_url}" target="_blank">View Full Recipe</a></p>
        `;
        container.appendChild(card);} )

}    else {
      container.innerHTML = 'No salads found.';
    }
    }
);
//beef
document.getElementById('beef').addEventListener('click', async () => {
  const container = document.getElementById('resultContainer');
  container.innerHTML = 'Loading...';

  const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=beef');
    const data = await res.json();
     if (data.recipes.length > 0) {
      container.innerHTML = ''; 

      data.recipes.forEach(beef => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${beef.image_url}" alt="${beef.title}" />
          <h2>${beef.title}</h2>
          <p><strong>Publisher:</strong> ${beef.publisher}</p>
          <p><a href="${beef.source_url}" target="_blank">View Full Recipe</a></p>
        `;
        container.appendChild(card);} )

}    else {
      container.innerHTML = 'No beef found.';
    }
    }
);

// pasta
document.getElementById('pasta').addEventListener('click', async () => {
  const container = document.getElementById('resultContainer');
  container.innerHTML = 'Loading...';

  const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pasta');
    const data = await res.json();
     if (data.recipes.length > 0) {
      container.innerHTML = ''; 

      data.recipes.forEach(pasta => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${pasta.image_url}" alt="${pasta.title}" />
          <h2>${pasta.title}</h2>
          <p><strong>Publisher:</strong> ${pasta.publisher}</p>
          <p><a href="${pasta.source_url}" target="_blank">View Full Recipe</a></p>
        `;
        container.appendChild(card);} )

}    else {
      container.innerHTML = 'No pasta found.';
    }
    }
);