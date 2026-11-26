// Slide 8 (parte do Davi), adicionado ao slide 7. Sua parte: 2 a 3 min no total.
window.SLIDES = window.SLIDES.concat([
  {
    title: "Inteligência artificial e sistemas",
    tag: "Tecnologia (2 de 2)",
    time: 85,
    mine: true,
    bullets: [
      "Auxiliam na organização dos atendimentos.",
      "Facilitam o cadastro de clientes.",
      "Ajudam no controle financeiro.",
      "Podem melhorar a experiência dos consumidores.",
      "Não substituem a avaliação dos profissionais."
    ],
    script: [
      "A inteligência artificial pode apoiar a organização do atendimento. Um chatbot responde perguntas repetitivas sobre horário e preparo, e ferramentas de agendamento organizam os horários de cada profissional. Já os sistemas de gestão facilitam o cadastro de clientes, com validação de dados e prevenção de duplicidade, e ajudam no controle financeiro. Para o cliente, isso significa horários claros e informações consistentes.",
      "Mas a decisão clínica continua com o profissional habilitado. A inteligência artificial é apoio, e não substituta. Por isso, nosso protótipo começa com regras simples, e a IA entra depois, com testes de viés, transparência e proteção de dados. É esse o caminho para que a tecnologia realmente ajude, sem colocar o cliente em risco."
    ],
    qa: [
      {
        q: "Para que isso serve na saúde e na beleza?",
        a: "Para a recepção, reduz retrabalho e erros de cadastro. Para o profissional, deixa o histórico do cliente ao alcance antes do atendimento. Para a gestão, mostra indicadores como faltas e fechamento de caixa. Para o cliente, traz confirmação de horário e informações consistentes. Na beleza, o valor está no cuidado com a pessoa, e não em um padrão imposto. Orientações pós-procedimento devem vir do profissional, e não de um sistema automático."
      },
      {
        q: "Como implementaríamos?",
        a: "Em sete etapas: (1) levantamento de requisitos com a equipe da clínica; (2) modelagem do banco de dados, com clientes, profissionais, procedimentos, agendamentos, sessões, pagamentos, estoque e usuários; (3) protótipo das telas, validado com a recepção; (4) desenvolvimento por módulos, começando por cadastro e agenda, depois registro de sessões, financeiro e relatórios, e deixando a IA para o fim; (5) testes de funcionamento, usabilidade e controle de acesso; (6) piloto em uma clínica por um período; (7) treinamento e manutenção. A base técnica prevista é HTML, CSS e JavaScript, um servidor em Node.js, PHP ou Java, e MySQL ou PostgreSQL."
      },
      {
        q: "Como o cadastro fica mais fácil?",
        a: "Com validação de CPF e telefone no formulário, restrição de unicidade do CPF no banco de dados para evitar duplicidade e preenchimento pelo próprio cliente, por um link, com consentimento registrado. A leitura automática de fichas por IA fica para uma etapa posterior, porque fichas de saúde são dados sensíveis."
      },
      {
        q: "É ético?",
        a: "Pode ser, com quatro cuidados. Transparência: o cliente sabe quando fala com um robô e pode pedir atendimento humano. Privacidade: dado de saúde é sensível pela LGPD, então o sistema coleta só o necessário, com acesso restrito e registro de acessos. Viés: qualquer modelo de análise deve ser testado com grupos diversos antes de uso. Responsabilidade: a decisão clínica é do profissional, e a LGPD (art. 20) garante ao titular o direito de pedir revisão de decisões tomadas apenas por tratamento automatizado. Há ainda um risco de uso: pressionar o cliente a comprar procedimentos, o que contraria a ideia de cuidado."
      },
      {
        q: "Vai realmente ajudar no futuro?",
        a: "Há sinais de demanda. Segundo a ISAPS, o Brasil encerrou 2024 no topo do ranking mundial de cirurgias plásticas estéticas, com mais de 2,3 milhões de procedimentos, e o total mundial estimado foi de cerca de 38 milhões de procedimentos estéticos. Mas nosso trabalho é conceitual: não implementamos nem testamos o sistema, então não sabemos o tamanho do ganho. Os benefícios dependem de adoção pela equipe, dados de boa qualidade e conformidade com a LGPD e a regulação sanitária. Um piloto deve medir tempo de agendamento, taxa de faltas, erros de cadastro e tempo de fechamento do caixa."
      },
      {
        q: "A IA vai substituir profissionais?",
        a: "Não. Na proposta, a IA é apoio administrativo. Decisões clínicas continuam com o profissional habilitado, e a análise de imagem não substitui a avaliação presencial."
      },
      {
        q: "Por que não usar uma IA pronta, como o ChatGPT?",
        a: "Ferramentas prontas podem responder perguntas gerais, sem dados pessoais. Enviar dados de clientes a um serviço externo exige base legal, contrato e cuidado com a transferência de dados. Por isso, não é a escolha do protótipo."
      },
      {
        q: "Dá para fazer IA com conhecimento de curso técnico?",
        a: "Sim, por etapas. Começamos com fluxos de regras e um chatbot simples. Modelos de linguagem por API e modelos preditivos, como previsão de faltas, exigem mais estudo, mais dados e cuidados maiores, por isso ficam para depois."
      }
    ],
    sources: [
      "BRASIL. Lei nº 13.709, de 14 de agosto de 2018 (LGPD), arts. 5º, II, 11 e 20. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
      "ANVISA. Resolução RDC nº 657, de 24 de março de 2022. Disponível em: https://antigo.anvisa.gov.br/documents/10181/5141677/RDC_657_2022_COMP.pdf/d2da154d-bd76-40ba-87ee-3d9baadb5dd3",
      "BUOLAMWINI, Joy; GEBRU, Timnit. Gender Shades (2018). Disponível em: https://proceedings.mlr.press/v81/buolamwini18a.html",
      "ISAPS. Pesquisa Global de Procedimentos Estéticos 2024 (versão em português). Disponível em: https://www.isaps.org/media/3uhnjvup/2024-global-survey-portuguese-brazilian.pdf",
      "OHOJE. Brasil atinge recorde mundial de cirurgias plásticas, 11 ago. 2025. Disponível em: https://ohoje.com/2025/08/11/brasil-atinge-recorde-mundial-de-cirurgias-plasticas/",
      "BRASIL. Ministério da Saúde. Portaria GM/MS nº 1.604, de 20 de outubro de 2023.",
      "VANESSA. Entrevista concedida a Sara, 2026. Registrada no trabalho, seção 7.",
      "Fonte: texto do trabalho, seções 3.2, 3.3, 4.1, 4.2 e 6. A proposta é conceitual e não foi implementada nem testada com usuários."
    ]
  }
]);
