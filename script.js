    const popup = document.getElementById('popupBox');
  const popupTitle = document.getElementById('popupTitle');
  const popupPrice = document.getElementById('popupPrice');
  const popupBenefits = document.querySelector('.popup-benefits');

  // Banco de dados dos produtos
  const produtos = {
    "Fã do max": {
      descricao: "Apoie o <strong>max</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do Max", "✅ Cargo personalizado"],
    },
    "Fã do malf": {
      descricao: "Apoie o <strong>malf</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do malf", "✅ Cargo personalizado", "✅ Te ajudo a configurar seu mod no miencraft java"],
    },
    "Fã do never": {
      descricao: "Apoie o <strong>never</strong> financeiramente!",
      beneficios: ["✅ Todos os béneficios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do never", "✅ Cargo personalizado", "✅ Poder marcar o never"],
    },
    "Fã do recai": {
      descricao: "Apoie o <strong>recai</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do recai", "✅ Cargo personalizado", "✅ Aulas de HTML + CSS"],
    },
    "Fã do ter3cotec0": {
      descricao: "Apoie o <strong>ter3cotec0</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do teo", "✅ Cargo personalizado", "✅ Perde o family friend e pode xingar no chat sem perigo do automod", "✅ com limites claro..."],
    },
    "Fã do salamon": {
      descricao: "Apoie o <strong>salamon</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do salamon", "✅ Cargo personalizado"],
    },
    "Tranque o chat": {
        descricao: "Tranque o chat-geral por 1 hora!",
        beneficios: ["Aparece que você trancou (caso queira)"],
    },
    "Mute um membro": {
        descricao: "Mute qualquer membro do servidor por 1 hora",
        beneficios: ["não incluí staffers"],
    },
    "Demote um ADM": {
        descricao: "Tire um adm do cargo por 1 hora!",
        beneficios: ["Válido para:", "AJUDANTE", "MODERADOR", "SUPERVISOR", "ADMINISTRADOR"],
    },
    "Expulse um membro": {
        descricao: "Expulse um membro do servidor",
        beneficios: ["Lembrando que uma expulsão", "não um banimento!", "Não incluí staffers"],
    },
    "Add emoji": {
        descricao: "Adicione um emoji no servidor",
        beneficios: ["Não pode ser +18", "Não pode ser n4z1sta", "Não pode ser de pedof1l14", "Não pode ser de apostas", "Não pode ser de nenhum crime"],
    },
    "Cargo VIP": {
        descricao: "Tenha um cargo VIP por <strong>1 mês!</strong>",
        beneficios: ["✅ 2x entradas em sorteios", "✅ Acesso á call VIP", "✅ Permissão para enviar imagens em canais bloqueados", "✅ Acesso ao servidor secreto", "✅ Acesso ao superchat"],
    },
    "Doação": {
        descricao: "Doe para o servidor ❤️",
        beneficios: ["✅ Cargo de Doador"],
    },
    "Divulgação": {
        descricao: "Divulgue seu projeto no servidor",
        beneficios: ["✅ Divulgação com @everyone", "❌ Mais de uma vez", "Não pode ser n4z1sta", "Não pode ser de apostas", "Não pode ser de pedof1l14", "Não pode ser de nenhum crime"],
    },
    "Criar cargo": {
        descricao: "Crie um cargo personalizado, e tenha ele por <strong>1 mês</strong> ,só seu!",
        beneficios: ["✅ Aparece na lista do servidor", "❌ Compartilhar com outro membros", "❌ Possuí béneficios vips", "❌ Possuí poderes administrativos", "❌ Pode ser n4z1sta", "❌ Pode ser de apostas", "❌ Pode ser de pedof1l14", "não pode ser de nenhum crime"],
    },
    "Mensagem Anônima": {
        descricao: "Mande uma mensagem anônima no servidor",
        beneficios: ["❌ Mais de uma vez"],
    },
    "Desliga o automod": {
        descricao: "desliga o auto-mod do servidor por <strong>1 hora!</strong>",
        beneficios: ["qualquer atitude ruim ainda e sujeita a penalidade"],
    },
    "Add Figurinha": {
        descricao: "Envie uma figurinha no servidor",
        beneficios: ["Não pode ser +18", "Não pode ser n4z1st4", "Não pode ser de apostas", "Não pode ser de pedof1l1a", "Não pode ser de nenhum crime"],
    },
    // posso  adicionar os outros aqui seguindo o mesmo padrão
  };

  function showPopup(title, price) {
    popupTitle.textContent = `1x ${title}`;
    popupPrice.textContent = `Total: ${price}`;

    const item = produtos[title];

    if (item) {
      popupBenefits.innerHTML = `
        <strong>Vantagens</strong>
        <p>${item.descricao}</p>
        <ul>
          ${item.beneficios.map(ben => `<li>${ben}</li>`).join('')}
        </ul>
      `;
    } else {
      popupBenefits.innerHTML = `
        <strong>Vantagens</strong>
        <p>Sem informações cadastradas.</p>
      `;
    }

    popup.style.display = 'flex';
  }

  function closePopup() {
    popup.style.display = 'none';
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title').textContent;
      const price = card.querySelector('.card-price').textContent;
      showPopup(title, price);
    });
  });