// src/main.ts
const vote = async (color: 'azul' | 'verde') => {
  try {
    const response = await fetch(`http://localhost:8001/vote/${color}`, { method: 'POST' });
    if (response.ok) {
      alert(`Voto computado no ${color.toUpperCase()}!`);
    }
  } catch (error) {
    alert("Erro: O backend (Voter) está rodando na porta 8001?");
  }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <style>
    body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; font-family: sans-serif; }
    .container { display: flex; height: 100vh; width: 100vw; }
    
    .side { 
      flex: 1; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      transition: flex 0.3s ease;
    }
    
    .azul { background-color: #2563eb; }
    .verde { background-color: #16a34a; }

    .btn-vote {
      padding: 20px 40px;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      border: 4px solid white;
      border-radius: 12px;
      color: white;
      background: rgba(0,0,0,0.2);
      transition: transform 0.2s, background 0.2s;
    }

    .btn-vote:hover {
      transform: scale(1.1);
      background: rgba(0,0,0,0.4);
    }
  </style>

  <div class="container">
    <div class="side azul">
      <button id="btn-azul" class="btn-vote">VOTAR AZUL</button>
    </div>
    <div class="side verde">
      <button id="btn-verde" class="btn-vote">VOTAR VERDE</button>
    </div>
  </div>
`;

document.querySelector('#btn-azul')?.addEventListener('click', () => vote('azul'));
document.querySelector('#btn-verde')?.addEventListener('click', () => vote('verde'));