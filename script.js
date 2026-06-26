// Mocks de respostas certas, perguntas (sem numeração embutida), alternativas e justificativas técnicas
const quizData = [
  {
    question: "A biossegurança pode ser definida como:",
    options: {
      A: "Conjunto de práticas para aumentar a produtividade hospitalar",
      B: "Conjunto de normas voltadas à prevenção, minimização e eliminação de riscos",
      C: "Método utilizado exclusivamente em laboratórios",
      D: "Sistema de controle financeiro hospitalar",
    },
    correct: "B",
    description:
      "A biossegurança envolve ações destinadas a prevenir, controlar, reduzir ou eliminar riscos inerentes às atividades que possam comprometer a saúde humana, animal e o meio ambiente.",
  },
  {
    question: "Qual dos itens abaixo é um objetivo da biossegurança?",
    options: {
      A: "Reduzir salários dos trabalhadores",
      B: "Aumentar a carga horária",
      C: "Preservar o meio ambiente",
      D: "Eliminar o uso de EPIs",
    },
    correct: "C",
    description:
      "Além da proteção humana, a biossegurança visa a preservação ambiental contra contaminações resultantes de atividades laboratoriais ou industriais.",
  },
  {
    question: "A saúde ocupacional é responsável por:",
    options: {
      A: "Tratar apenas doenças infecciosas",
      B: "Promover e manter o bem-estar dos trabalhadores",
      C: "Controlar apenas acidentes físicos",
      D: "Regular apenas equipamentos hospitalares",
    },
    correct: "B",
    description:
      "A saúde ocupacional foca na prevenção de doenças e acidentes de trabalho, promovendo a qualidade de vida e integridade física/mental dos trabalhadores.",
  },
  {
    question:
      "Qual das alternativas representa um problema relacionado à saúde ocupacional?",
    options: {
      A: "Hipertensão genética",
      B: "Miopia congênita",
      C: "LER (Lesão por Esforço Repetitivo)",
      D: "Diabetes tipo I",
    },
    correct: "C",
    description:
      "A LER (Lesão por Esforço Repetitivo) é uma síndrome diretamente ligada a tarefas laborais que exigem movimentos contínuos e posturas inadequadas.",
  },
  {
    question: "Vírus, bactérias e fungos são exemplos de:",
    options: {
      A: "Riscos físicos",
      B: "Riscos químicos",
      C: "Riscos ergonômicos",
      D: "Riscos biológicos",
    },
    correct: "D",
    description:
      "Agentes biológicos incluem microrganismos vivos como vírus, bactérias, clamídias, fungos e parasitas capazes de desencadear infecções.",
  },
  {
    question: "O ruído excessivo é considerado:",
    options: {
      A: "Risco físico",
      B: "Risco químico",
      C: "Risco biológico",
      D: "Risco ergonômico",
    },
    correct: "A",
    description:
      "Riscos físicos são gerados por fontes de energia no ambiente de trabalho, como pressões extremas, radiações, vibrações, temperaturas extremas e ruídos.",
  },
  {
    question: "A postura inadequada e o espaço repetitivo são exemplos de:",
    options: {
      A: "Risco físico",
      B: "Risco ergonômico",
      C: "Risco químico",
      D: "Risco biológico",
    },
    correct: "B",
    description:
      "Riscos ergonômicos envolvem fatores que interferem nas características psicofisiológicas do trabalhador, como postura incorreta, levantamento de peso e monotonia.",
  },
  {
    question: "O principal objetivo da imunização é:",
    options: {
      A: "Curar doenças crônicas",
      B: "Eliminar medicamentos",
      C: "Prevenir doenças infecciosas",
      D: "Substituir tratamentos médicos",
    },
    correct: "C",
    description:
      "A imunização ativa (vacinas) estimula o sistema imunológico a produzir anticorpos específicos para prevenir o desenvolvimento de doenças infecciosas.",
  },
  {
    question: "A imunização ativa ocorre quando:",
    options: {
      A: "O indivíduo recebe anticorpos prontos",
      B: "O organismo produz seus próprios anticorpos",
      C: "O paciente toma antibióticos",
      D: "Há uso de suplementos",
    },
    correct: "B",
    description:
      "Na imunização ativa, o corpo entra em contato com o antígeno enfraquecido ou inativado e é estimulado a produzir seus próprios mecanismos de defesa.",
  },
  {
    question: "A imunização passiva acontece quando:",
    options: {
      A: "O organismo produz anticorpos naturalmente",
      B: "O indivíduo recebe anticorpos prontos",
      C: "Há vacinação anual",
      D: "O paciente pratica exercícios",
    },
    correct: "B",
    description:
      "A imunização passiva consiste na introdução de anticorpos já produzidos por outro organismo diretamente no corpo do paciente (como soros antiofídicos).",
  },
  {
    question: "Qual vacina é indicada para profissionais da saúde?",
    options: {
      A: "Hepatite B",
      B: "Antirrábica animal",
      C: "Dengue obrigatória universal",
      D: "Varicela veterinária",
    },
    correct: "A",
    description:
      "A vacina contra a Hepatite B é estritamente recomendada e frequentemente obrigatória para profissionais da saúde devido ao risco biológico por materiais perfurocortantes.",
  },
  {
    question: "O principal objetivo do EPI é:",
    options: {
      A: "Melhorar a aparência profissional",
      B: "Garantir a segurança do trabalhador",
      C: "Reduzir custos hospitalares",
      D: "Evitar treinamentos",
    },
    correct: "B",
    description:
      "O Equipamento de Proteção Individual (EPI) serve unicamente para neutralizar ou mitigar a exposição a riscos que ameacem a segurança física e a saúde do colaborador.",
  },
  {
    question: "Qual alternativa representa um EPI?",
    options: { A: "Extintor", B: "Sinalização", C: "Luvas", D: "Corrimão" },
    correct: "C",
    description:
      "Luvas de procedimento protegem individualmente as mãos do trabalhador e enquadram-se na definição regulamentar de EPI.",
  },
  {
    question: "Qual item abaixo corresponde a um EPC?",
    options: {
      A: "Máscara",
      B: "Jaleco",
      C: "Óculos de proteção",
      D: "Saída de emergência",
    },
    correct: "D",
    description:
      "Equipamentos de Proteção Coletiva (EPC) servem para proteger todo o grupo exposto ao ambiente. Rotas e saídas de emergência beneficiam a coletividade.",
  },
  {
    question: "Segundo a NR-6:",
    options: {
      A: "O trabalhador compra obrigatoriamente seus EPIs",
      B: "O empregador fornece gratuitamente os EPIs",
      C: "Os EPIs podem ser utilizados sem treinamento",
      D: "O Certificado de Aprovação não é necessário",
    },
    correct: "B",
    description:
      "Segundo as diretrizes legais da NR-6, cabe exclusivamente ao empregador fornecer ao trabalhador, gratuitamente, o EPI adequado ao risco em perfeito estado.",
  },
  {
    question: "O Certificado de Aprovação (CA) serve para:",
    options: {
      A: "Registrar funcionários",
      B: "Garantir a validade e aprovação do EPI",
      C: "Identificar hospitais",
      D: "Autorizar medicamentos",
    },
    correct: "B",
    description:
      "O Certificado de Aprovação (CA) é o documento emitido pelo órgão nacional competente que atesta que o EPI passou por testes rigorosos de qualidade e eficácia.",
  },
  {
    question: "São considerados resíduos biológicos:",
    options: {
      A: "Solventes e medicamentos vencidos",
      B: "Produtos de limpeza",
      C: "Sangue e fluidos corporais",
      D: "Equipamentos eletrônicos",
    },
    correct: "C",
    description:
      "Resíduos biológicos (Grupo A do PGRSS) contêm presença de agentes biológicos que podem apresentar risco de infecção, como sangue e secreções orgânicas.",
  },
  {
    question:
      "Materiais perfurocortantes contaminados devem ser descartados em:",
    options: {
      A: "Sacos plásticos comuns",
      B: "Recipientes abertos",
      C: "Caixas rígidas específicas",
      D: "Lixeiras domésticas",
    },
    correct: "C",
    description:
      "Os perfurocortantes (Grupo E) exigem descarte imediato no local de geração em caixas rígidas, estanques e resistentes à punctura (como o Descarpack).",
  },
  {
    question: "Qual dos itens abaixo é considerado resíduo químico?",
    options: {
      A: "Gaze contaminada",
      B: "Sangue",
      C: "Reagente laboratorial",
      D: "Curativo usado",
    },
    correct: "C",
    description:
      "Resíduos químicos (Grupo B) possuem características de inflamabilidade, corrosividade, reatividade ou toxicidade. Reagentes puros ou misturas laboratoriais são exemplos típicos.",
  },
  {
    question: "Uma medida correta no descarte de resíduos químicos é:",
    options: {
      A: "Misturar substâncias diferentes",
      B: "Armazenar em recipientes improvisados",
      C: "Não identificar os recipientes",
      D: "Rotular adequadamente os recipientes",
    },
    correct: "D",
    description:
      "Substâncias químicas jamais devem ser misturadas aleatoriamente ou guardadas em frascos sem identificação. A rotulação clara é obrigatória para evitar reações acidentais severas.",
  },
];

// Algoritmo Fisher-Yates para randomização precisa do conteúdo interno do Array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Executa o embaralhamento dos enunciados/gabarito
shuffle(quizData);

let currentIndex = 0;
const totalQuestions = quizData.length;

// Elementos do DOM
const track = document.getElementById("track");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnSubmit = document.getElementById("btn-submit");
const resultPanel = document.getElementById("result-panel");

// Renderiza o carrossel fixando a numeração sequencial de 1 a 20 através do index + 1
function renderQuiz() {
  let htmlContent = "";
  quizData.forEach((data, index) => {
    htmlContent += `
          <div class="quiz-card">
              <h3>${index + 1}. ${data.question}</h3>
              <div class="options">
                  <label><input type="radio" name="q${index}" value="A"> A) ${data.options.A}</label>
                  <label><input type="radio" name="q${index}" value="B"> B) ${data.options.B}</label>
                  <label><input type="radio" name="q${index}" value="C"> C) ${data.options.C}</label>
                  <label><input type="radio" name="q${index}" value="D"> D) ${data.options.D}</label>
              </div>
          </div>
      `;
  });
  track.innerHTML = htmlContent;
}

// Inicializa a interface estática com dados dinâmicos
renderQuiz();

// Atualiza a posição do carrossel e exibição dos botões
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  btnPrev.disabled = currentIndex === 0;

  if (currentIndex === totalQuestions - 1) {
    btnNext.classList.add("hidden");
    btnSubmit.classList.remove("hidden");
  } else {
    btnNext.classList.remove("hidden");
    btnSubmit.classList.add("hidden");
  }
}

// Eventos de Navegação
btnNext.addEventListener("click", () => {
  if (currentIndex < totalQuestions - 1) {
    currentIndex++;
    updateCarousel();
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Processamento do Resultado
btnSubmit.addEventListener("click", () => {
  let correctCount = 0;
  let feedbackHTML = "";

  quizData.forEach((data, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const userAnswer = selected ? selected.value : null;

    const isCorrect = userAnswer === data.correct;
    if (isCorrect) correctCount++;

    // No feedback final, exibe também a numeração de 1 a 20 correspondente à ordem que o usuário realizou
    feedbackHTML += `
          <div class="feedback-item ${isCorrect ? "correct" : ""}">
              <p><strong>Pergunta ${index + 1}: ${data.question}</strong></p>
              <p>Sua resposta: ${userAnswer || "Nenhuma"} | Certa: ${data.correct}</p>
              <p><small>${data.description}</small></p>
          </div>
      `;
  });

  const score = Math.round((correctCount / totalQuestions) * 10);
  let message = "";

  if (score <= 5) {
    message = "Não estudou nada né? Faz de novo o simulado bicho preguiça.";
  } else if (score >= 6 && score <= 8) {
    message = "Parabéns! Sua nota foi ótima.";
  } else if (score >= 9 && score <= 10) {
    message = "UAU! Vc arrasou!";
  }

  feedbackHTML =
    `
      <h2>Resultado do Simulado</h2>
      <h3>Nota: ${score} / 10</h3>
      <p><strong>${message}</strong></p>
      <hr style="margin:15px 0; border: 0; border-top: 1px solid #eee;">
  ` + feedbackHTML;

  resultPanel.innerHTML = feedbackHTML;
  resultPanel.classList.remove("hidden");

  btnSubmit.disabled = true;
  btnPrev.disabled = true;

  resultPanel.scrollIntoView({ behavior: "smooth" });
});
