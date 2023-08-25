  document.addEventListener("DOMContentLoaded", function () {
    // ... Código anterior ...
  
    const verMaisButtons = document.querySelectorAll(".ver-mais-btn");
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");
  
    verMaisButtons.forEach(button => {
      button.addEventListener("click", function () {
        const gameName = this.getAttribute("data-game");
  
        // Atualize o conteúdo do modal com as informações do jogo
        modalContent.innerHTML = `
          <h2>Nome do Jogo ${gameName}</h2>
          <p>Descrição do Jogo ${gameName}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="game${gameName}.jpg" alt="Imagem do Jogo ${gameName}">
          <a href="download-game${gameName}.zip" class="download-btn">Baixar Jogo</a>
        `;
  
        modal.classList.add("show");
      });
    });
  
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
  
  
    const verMaisButtons = document.querySelectorAll(".ver-mais-btn");
  
    verMaisButtons.forEach(button => {
      button.addEventListener("click", function () {
        const gameName = this.getAttribute("data-game");
  
        modalImage.src = `game${gameName}.jpg`;
        modalTitle.textContent = `Nome do Jogo ${gameName}`;
        modalDescription.textContent = `Descrição do Jogo ${gameName}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
        modalDownload.href = `download-game${gameName}.zip`; // Substitua pelo link de download real
  
        modal.style.display = "block";
        modalContent.classList.add("show-modal");
      });
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      modalContent.classList.remove("show-modal");
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        modalContent.classList.remove("show-modal");
      }
    });

  document.addEventListener("DOMContentLoaded", function () {
    // ... Código anterior ...
  
    const verMaisButtons = document.querySelectorAll(".ver-mais-btn");
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");
  
    verMaisButtons.forEach(button => {
      button.addEventListener("click", function () {
        const gameName = this.getAttribute("data-game");
  
        // Atualize o conteúdo do modal com as informações do jogo
        modalContent.innerHTML = `
          <h2>Nome do Jogo ${gameName}</h2>
          <p>Descrição do Jogo ${gameName}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="game${gameName}.jpg" alt="Imagem do Jogo ${gameName}">
          <a href="download-game${gameName}.zip" class="download-btn">Baixar Jogo</a>
        `;
  
        modal.classList.add("show");
      });
    });
  
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const playerStatsDiv = document.querySelector(".player-stats");
    const playerName = "Quittoツ"; // Substitua pelo nome do jogador desejado
    const platform = "kbm"; // Substitua pela plataforma desejada (kbm, gamepad, touch)
  
    const apiKey = "YOUR_API_KEY"; // Substitua pela sua chave de API do Fortnite Tracker
  
    const playerStatsEndpoint = `https://api.fortnitetracker.com/v1/profile/${platform}/${playerName}`;
  
    fetch(playerStatsEndpoint, {
      headers: {
        "TRN-Api-Key": apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      // Use "data" para obter as informações do jogador e atualizar a div ".player-stats"
      playerStatsDiv.innerHTML = `
        Eventos jogados: ${data.lifeTimeStats[0].value},
        Vitórias: ${data.lifeTimeStats[8].value},
        Eliminações: ${data.lifeTimeStats[10].value}
        // ... E outras informações que desejar exibir
      `;
    })
    .catch(error => {
      console.error("Erro na solicitação da API:", error);
      playerStatsDiv.innerHTML = "Não foi possível carregar as estatísticas do jogador.";
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const teamMembersDiv = document.querySelector(".team-members");
    const apiKey = "YOUR_API_KEY"; // Substitua pela sua chave de API do Fortnite Tracker
  
    const players = [
      { name: "Quittoツ", platform: "kbm" },
      // Adicione mais jogadores conforme necessário
    ];
  
    players.forEach(player => {
      const playerCard = document.createElement("div");
      playerCard.classList.add("player-card");
  
      fetchPlayerInfo(player.name, player.platform)
        .then(data => {
          const rank = data.stats.rank;
          const earnings = data.stats.earnings;
  
          playerCard.innerHTML = `
            <h3>${player.name}</h3>
            <p>Rank: ${rank}</p>
            <p>Earnings: $${earnings}</p>
          `;
  
          teamMembersDiv.appendChild(playerCard);
        })
        .catch(error => {
          console.error("Erro na solicitação da API:", error);
          playerCard.innerHTML = "Não foi possível carregar informações do jogador.";
          teamMembersDiv.appendChild(playerCard);
        });
    });
  
    function fetchPlayerInfo(playerName, platform) {
      const playerInfoEndpoint = `https://api.fortnitetracker.com/v1/profile/${platform}/${playerName}`;
  
      return fetch(playerInfoEndpoint, {
        headers: {
          "TRN-Api-Key": apiKey
        }
      })
      .then(response => response.json());
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const verMaisButtons = document.querySelectorAll(".learn-more-btn");
    const gameDetails = document.querySelectorAll(".game-details");
  
    verMaisButtons.forEach(button => {
      button.addEventListener("click", function () {
        const gameName = this.getAttribute("data-game");
        const gameDetailDiv = document.getElementById(gameName + "-details");
        // Preencha os detalhes do projeto aqui
        gameDetailDiv.innerHTML = `
          <h3>Detalhes do Projeto ${gameName}</h3>
          <p>Informações detalhadas sobre o Projeto ${gameName}.</p>
          <button class="close-details-btn">Fechar</button>
        `;
        gameDetailDiv.style.display = "block";
      });
    });
  
    gameDetails.forEach(detail => {
      detail.addEventListener("click", function () {
        if (event.target.classList.contains("close-details-btn")) {
          detail.style.display = "none";
        }
      });
    });
  });
  