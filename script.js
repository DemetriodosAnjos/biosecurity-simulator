// 4. Mocks de respostas certas e justificativas técnicos expandido para as 20 questões
const quizData = [
  {
    correct: "B",
    description:
      "A biossegurança envolve ações destinadas a prevenir, controlar, reduzir ou eliminar riscos inerentes às atividades que possam comprometer a saúde humana, animal e o meio ambiente.",
  },
  {
    correct: "C",
    description:
      "Além da proteção humana, a biossegurança visa a preservação ambiental contra contaminações resultantes de atividades laboratoriais ou industriais.",
  },
  {
    correct: "B",
    description:
      "A saúde ocupacional foca na prevenção de doenças e acidentes de trabalho, promovendo a qualidade de vida e integridade física/mental dos trabalhadores.",
  },
  {
    correct: "C",
    description:
      "A LER (Lesão por Esforço Repetitivo) é uma síndrome diretamente ligada a tarefas laborais que exigem movimentos contínuos e posturas inadequadas.",
  },
  {
    correct: "D",
    description:
      "Agentes biológicos incluem microrganismos vivos como vírus, bactérias, clamídias, fungos e parasitas capazes de desencadear infecções.",
  },
  {
    correct: "A",
    description:
      "Riscos físicos são gerados por fontes de energia no ambiente de trabalho, como pressões extremas, radiações, vibrações, temperaturas extremas e ruídos.",
  },
  {
    correct: "B",
    description:
      "Riscos ergonômicos envolvem fatores que interferem nas características psicofisiológicas do trabalhador, como postura incorreta, levantamento de peso e monotonia.",
  },
  {
    correct: "C",
    description:
      "A imunização ativa (vacinas) estimula o sistema imunológico a produzir anticorpos específicos para prevenir o desenvolvimento de doenças infecciosas.",
  },
  {
    correct: "B",
    description:
      "Na imunização ativa, o corpo entra em contato com o antígeno enfraquecido ou inativado e é estimulado a produzir seus próprios mecanismos de defesa.",
  },
  {
    correct: "B",
    description:
      "A imunização passiva consiste na introdução de anticorpos já produzidos por outro organismo diretamente no corpo do paciente (como soros antiofídicos).",
  },
  {
    correct: "A",
    description:
      "A vacina contra a Hepatite B é estritamente recomendada e frequentemente obrigatória para profissionais da saúde devido ao risco biológico por materiais perfurocortantes.",
  },
  {
    correct: "B",
    description:
      "O Equipamento de Proteção Individual (EPI) serve unicamente para neutralizar ou mitigar a exposição a riscos que ameacem a segurança física e a saúde do colaborador.",
  },
  {
    correct: "C",
    description:
      "Luvas de procedimento protegem individualmente as mãos do trabalhador e enquadram-se na definição regulamentar de EPI.",
  },
  {
    correct: "D",
    description:
      "Equipamentos de Proteção Coletiva (EPC) servem para proteger todo o grupo exposto ao ambiente. Rotas e saídas de emergência beneficiam a coletividade.",
  },
  {
    correct: "B",
    description:
      "Segundo as diretrizes legais da NR-6, cabe exclusivamente ao empregador fornecer ao trabalhador, gratuitamente, o EPI adequado ao risco em perfeito estado.",
  },
  {
    correct: "B",
    description:
      "O Certificado de Aprovação (CA) é o documento emitido pelo órgão nacional competente que atesta que o EPI passou por testes rigorosos de qualidade e eficácia.",
  },
  {
    correct: "C",
    description:
      "Resíduos biológicos (Grupo A do PGRSS) contêm presença de agentes biológicos que podem apresentar risco de infecção, como sangue e secreções orgânicas.",
  },
  {
    correct: "C",
    description:
      "Os perfurocortantes (Grupo E) exigem descarte imediato no local de geração em caixas rígidas, estanques e resistentes à punctura (como o Descarpack).",
  },
  {
    correct: "C",
    description:
      "Resíduos químicos (Grupo B) possuem características de inflamabilidade, corrosividade, reatividade ou toxicidade. Reagentes puros ou misturas laboratoriais são exemplos típicos.",
  },
  {
    correct: "D",
    description:
      "Substâncias químicas jamais devem ser misturadas aleatoriamente ou guardadas em frascos sem identificação. A rotulação clara é obrigatória para evitar reações acidentais severas.",
  },
];

let currentIndex = 0;
const totalQuestions = quizData.length;

// Elementos do DOM
const track = document.getElementById("track");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnSubmit = document.getElementById("btn-submit");
const resultPanel = document.getElementById("result-panel");

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

  // Varre as respostas do usuário e constrói o histórico do feedback
  quizData.forEach((data, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const userAnswer = selected ? selected.value : null;

    const isCorrect = userAnswer === data.correct;
    if (isCorrect) correctCount++;

    feedbackHTML += `
            <div class="feedback-item ${isCorrect ? "correct" : ""}">
                <p><strong>Pergunta ${index + 1}:</strong> Sua resposta: ${userAnswer || "Nenhuma"} | Certa: ${data.correct}</p>
                <p><small>${data.description}</small></p>
            </div>
        `;
  });

  // Cálculo da nota de 0 a 10 baseado na proporção de acertos
  const score = Math.round((correctCount / totalQuestions) * 10);
  let message = "";

  // Regra de negócio das faixas de notas
  if (score <= 5) {
    message = "Não estudou nada né? Faz de novo o simulado bicho preguiça.";
  } else if (score >= 6 && score <= 8) {
    message = "Parabéns! Sua nota foi ótima.";
  } else if (score >= 9 && score <= 10) {
    message = "UAU! Vc arrasou!";
  }

  // Insere o cabeçalho do resultado antes do histórico de respostas
  feedbackHTML =
    `
        <h2>Resultado do Simulado</h2>
        <h3>Nota: ${score} / 10</h3>
        <p><strong>${message}</strong></p>
        <hr style="margin:15px 0; border: 0; border-top: 1px solid #eee;">
    ` + feedbackHTML;

  // Renderiza e exibe o painel
  resultPanel.innerHTML = feedbackHTML;
  resultPanel.classList.remove("hidden");

  // Desabilita os controles para travar as respostas enviadas
  btnSubmit.disabled = true;
  btnPrev.disabled = true;

  // Faz o scroll suave até o painel de resultados que surge abaixo do quiz
  resultPanel.scrollIntoView({ behavior: "smooth" });
});
