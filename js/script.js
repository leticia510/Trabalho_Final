    // Mapeia as chaves aos nomes completos dos famosos
    const quizNames = {
      nanjoon: "Nanjoon",
      foortThitipong: "Foort Thitipong",
      bossChaikamon: "Boss Chaikamon",
      dylanWang: "Dylan Wang",
      laufey: "Laufey",
      linManuelMiranda: "Lin Manuel Miranda"
    };

    // Quizzes sobre os famosos (5 questões cada)
    const quizzes = {
      nanjoon: [
        { 
          question: "Em que país Nanjoon se tornou famoso?", 
          options: ["Coreia do Sul", "Japão", "Estados Unidos", "Brasil"], 
          answer: "Coreia do Sul" 
        },
        { 
          question: "Qual rede social Nanjoon mais utiliza para se conectar com os fãs?", 
          options: ["Instagram", "Facebook", "TikTok", "Twitter"], 
          answer: "TikTok" 
        },
        { 
          question: "Qual é o hobby favorito de Nanjoon?", 
          options: ["Jogos", "Culinária", "Dança", "Fotografia"], 
          answer: "Dança" 
        },
        { 
          question: "Qual estilo musical melhor representa Nanjoon?", 
          options: ["K-pop", "Rock", "Jazz", "Pop"], 
          answer: "K-pop" 
        },
        { 
          question: "Como os fãs geralmente descrevem Nanjoon?", 
          options: ["Carismático", "Tímido", "Sério", "Reservado"], 
          answer: "Carismático" 
        }
      ],
      foortThitipong: [
        { 
          question: "De qual país Foort Thitipong é originário?", 
          options: ["Tailândia", "Vietnã", "Filipinas", "Indonésia"], 
          answer: "Tailândia" 
        },
        { 
          question: "Qual é a principal área de atuação de Foort Thitipong?", 
          options: ["Ator", "Músico", "Esportista", "Modelo"], 
          answer: "Ator" 
        },
        { 
          question: "Em que década Foort Thitipong ganhou notoriedade?", 
          options: ["Anos 90", "Anos 2000", "Anos 2010", "Anos 2020"], 
          answer: "Anos 2010" 
        },
        { 
          question: "Qual dos seguintes hobbies é associado a Foort Thitipong?", 
          options: ["Culinária", "Dança", "Pintura", "Fotografia"], 
          answer: "Dança" 
        },
        { 
          question: "Qual característica é frequentemente atribuída a Foort Thitipong?", 
          options: ["Simpático", "Reservado", "Disciplinado", "Criativo"], 
          answer: "Criativo" 
        }
      ],
      bossChaikamon: [
        { 
          question: "Como é conhecido Boss Chaikamon nas redes sociais?", 
          options: ["Boss", "Mestre", "Líder", "Capitão"], 
          answer: "Boss" 
        },
        { 
          question: "Em qual área Boss Chaikamon se destaca?", 
          options: ["Entretenimento", "Moda", "Tecnologia", "Culinária"], 
          answer: "Entretenimento" 
        },
        { 
          question: "Qual destas características é associada a Boss Chaikamon?", 
          options: ["Determinação", "Timidez", "Indiferença", "Preguiça"], 
          answer: "Determinação" 
        },
        { 
          question: "Qual é a nacionalidade de Boss Chaikamon?", 
          options: ["Tailandês", "Coreano", "Chinês", "Japonês"], 
          answer: "Tailandês" 
        },
        { 
          question: "Em qual plataforma Boss Chaikamon ganhou fama?", 
          options: ["YouTube", "Instagram", "TikTok", "Facebook"], 
          answer: "TikTok" 
        }
      ],
      dylanWang: [
        { 
          question: "Qual é a nacionalidade de Dylan Wang?", 
          options: ["Chinês", "Coreano", "Japonês", "Taiwanês"], 
          answer: "Chinês" 
        },
        { 
          question: "Em qual série Dylan Wang ganhou destaque?", 
          options: ["Meteor Garden", "The Untamed", "Euphoria", "Stranger Things"], 
          answer: "Meteor Garden" 
        },
        { 
          question: "Qual é a principal profissão de Dylan Wang?", 
          options: ["Ator", "Cantor", "Modelo", "Esportista"], 
          answer: "Ator" 
        },
        { 
          question: "Em qual rede social Dylan Wang é mais ativo?", 
          options: ["Weibo", "Twitter", "Facebook", "Instagram"], 
          answer: "Weibo" 
        },
        { 
          question: "Qual característica física é frequentemente associada a Dylan Wang?", 
          options: ["Cabelo estiloso", "Olhar marcante", "Sorriso cativante", "Estatura alta"], 
          answer: "Cabelo estiloso" 
        }
      ],
      laufey: [
        { 
          question: "Qual é a nacionalidade de Laufey?", 
          options: ["Islandesa", "Sueca", "Norueguesa", "Dinamarquesa"], 
          answer: "Islandesa" 
        },
        { 
          question: "Qual gênero musical melhor representa o estilo de Laufey?", 
          options: ["Jazz", "Rock", "Pop", "Eletrônica"], 
          answer: "Jazz" 
        },
        { 
          question: "Além de cantar, qual instrumento Laufey toca?", 
          options: ["Violão", "Piano", "Bateria", "Violino"], 
          answer: "Piano" 
        },
        { 
          question: "Qual canção é uma das mais conhecidas de Laufey?", 
          options: ["Valentine", "Midnight Sun", "Summer Nights", "Frozen Heart"], 
          answer: "Valentine" 
        },
        { 
          question: "Qual característica destaca a voz de Laufey?", 
          options: ["Timbre suave", "Voz potente", "Timbre rouco", "Voz aguda"], 
          answer: "Timbre suave" 
        }
      ],
      linManuelMiranda: [
        { 
          question: "Qual é a principal obra de Lin Manuel Miranda?", 
          options: ["Hamilton", "Les Misérables", "Wicked", "Phantom of the Opera"], 
          answer: "Hamilton" 
        },
        { 
          question: "Qual gênero musical é explorado na obra 'Hamilton'?", 
          options: ["Hip-hop", "Rock", "Jazz", "Country"], 
          answer: "Hip-hop" 
        },
        { 
          question: "Além de atuar, qual outra habilidade é de Lin Manuel Miranda?", 
          options: ["Compositor", "Pintor", "Ator de voz", "Dançarino"], 
          answer: "Compositor" 
        },
        { 
          question: "De qual país Lin Manuel Miranda é originário?", 
          options: ["Estados Unidos", "Canadá", "Reino Unido", "Austrália"], 
          answer: "Estados Unidos" 
        },
        { 
          question: "Qual destes prêmios Lin Manuel Miranda já ganhou?", 
          options: ["Tony Award", "Oscar", "Grammy", "Emmy"], 
          answer: "Tony Award" 
        }
      ]
    };

    let currentQuiz = [];
    let currentQuestion = 0;
    let score = 0;

    function startQuiz(subject) {
      currentQuiz = quizzes[subject];
      document.getElementById("quiz-title").innerText = `Quiz de ${quizNames[subject]}`;
      document.getElementById("start-screen").style.display = "none";
      document.getElementById("quiz-screen").style.display = "block";
      currentQuestion = 0;
      score = 0;
      loadQuestion();
    }

    // Função para embaralhar um array usando o algoritmo de Fisher-Yates
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function loadQuestion() {
      const questionElement = document.getElementById("question");
      const optionsElement = document.getElementById("options");
      const resultElement = document.getElementById("result");
      const scoreElement = document.getElementById("score");
      const restartButton = document.getElementById("restart");

      resultElement.innerText = "";
      scoreElement.innerText = `Pontuação: ${score}`;
      restartButton.style.display = "none";

      const quizItem = currentQuiz[currentQuestion];
      questionElement.innerText = quizItem.question;
      
      optionsElement.innerHTML = "";
      // Embaralha as opções para que a resposta correta não esteja sempre na mesma posição
      const shuffledOptions = shuffleArray([...quizItem.options]);
      shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
      });
    }

    function checkAnswer(selected) {
      const resultElement = document.getElementById("result");
      if (selected === currentQuiz[currentQuestion].answer) {
        resultElement.innerText = "Resposta correta!";
        resultElement.style.color = "green";
        score++;
      } else {
        resultElement.innerText = "Resposta errada!";
        resultElement.style.color = "red";
      }
      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < currentQuiz.length) {
          loadQuestion();
        } else {
          resultElement.innerText = "Quiz finalizado!";
          document.getElementById("score").innerText = `Pontuação final: ${score}/${currentQuiz.length}`;
          document.getElementById("restart").style.display = "block";
        }
      }, 1000);
    }

    function showStartScreen() {
      document.getElementById("quiz-screen").style.display = "none";
      document.getElementById("start-screen").style.display = "block";
    }
