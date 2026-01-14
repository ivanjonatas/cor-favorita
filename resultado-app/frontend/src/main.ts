const updateResults = async () => {
  try {
    const response = await fetch('http://localhost:8002/resultado');
    const data = await response.json();
    
    const total = data.azul + data.verde || 1; // evita divisão por zero
    const pctAzul = (data.azul / total) * 100;
    const pctVerde = (data.verde / total) * 100;

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <style>
        .result-container { display: flex; height: 100vh; width: 100vw; color: white; font-size: 2rem; }
        .bar { 
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            transition: width 0.5s ease-in-out; overflow: hidden;
        }
      </style>
      <div class="result-container">
        <div class="bar" style="width: ${pctAzul}%; background: #2563eb;">
            <span>AZUL</span>
            <strong>${data.azul}</strong>
        </div>
        <div class="bar" style="width: ${pctVerde}%; background: #16a34a;">
            <span>VERDE</span>
            <strong>${data.verde}</strong>
        </div>
      </div>
    `;
  } catch (e) {
    console.error("Erro ao buscar resultados");
  }
}

setInterval(updateResults, 1000);
updateResults();