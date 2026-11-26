// Slide 7 (parte do Davi). "time" = tempo sugerido de fala, em segundos. Sua parte: 2 a 3 min no total.
window.SLIDES = [
  {
    title: "Tecnologias na área",
    tag: "Tecnologia (1 de 2)",
    time: 80,
    mine: true,
    bullets: [
      "Equipamentos de laser e radiofrequência.",
      "Aplicativos de análise facial.",
      "Plataformas de agendamento.",
      "Softwares de gestão.",
      "Inteligência artificial."
    ],
    script: [
      "Nesta parte, falamos das tecnologias presentes na área. Equipamentos de laser e radiofrequência, plataformas de agendamento e softwares de gestão já fazem parte da rotina de muitas clínicas.",
      "Nosso projeto não controla esses aparelhos. Ele organiza a informação em torno do atendimento. Cada sessão de laser gera registros de data, profissional, parâmetros e histórico do cliente. Sem um sistema, esses dados ficam na memória da equipe ou em papéis separados. Com um sistema, a clínica sabe quantas sessões o cliente já fez, quando ele deve voltar e quem o atendeu. É aí que a Desenvolvimento de Sistemas se encaixa.",
      "A análise facial aparece como tendência, mas não faz parte da nossa proposta, porque envolve dados sensíveis e risco de viés. Para fechar, passamos à inteligência artificial e aos sistemas, que conectam tudo isso ao atendimento."
    ],
    qa: [
      {
        q: "Para que serve o laser na área?",
        a: "Na depilação a laser, a luz é absorvida pelo pigmento do fio e o calor reduz o crescimento. Como os pelos não estão todos na mesma fase, são necessárias várias sessões. A radiofrequência aquece camadas da pele e é usada em procedimentos com diferentes objetivos estéticos. Nos dois casos, o profissional escolhe os parâmetros, e a resposta do cliente depende deles e da pigmentação da pele e dos pelos."
      },
      {
        q: "Em que a Desenvolvimento de Sistemas se encaixa nesse equipamento?",
        a: "Não controlamos o aparelho nem escolhemos parâmetros, porque isso é decisão clínica. O sistema registra cada sessão (data, profissional, área tratada, parâmetros, tipo de pele e intercorrências), agenda a próxima sessão no intervalo que o profissional definir, guarda o histórico de manutenção do equipamento e impede escalar quem não tem habilitação registrada e válida."
      },
      {
        q: "Quem pode operar o laser?",
        a: "É uma questão jurídica disputada. Pareceres antigos de conselhos de medicina trataram a depilação definitiva como ato médico, e a Lei nº 13.643/2018 regulamenta a profissão de esteticista. A habilitação depende da legislação e dos conselhos, e a responsabilidade é da clínica. O sistema apenas bloqueia o agendamento de quem não tem habilitação cadastrada."
      },
      {
        q: "Análise facial está no projeto? É ética?",
        a: "Não está no projeto. Dado biométrico e dado de saúde são sensíveis pela LGPD (art. 5º, II), e o tratamento só é permitido nas hipóteses do art. 11. A ANPD ainda discute quando uma foto vira dado biométrico. Em 2018, Buolamwini e Gebru, do MIT, mediram sistemas comerciais de classificação de gênero por imagem: o erro foi de 0,8% para homens de pele clara e chegou a 34,7% para mulheres de pele escura. A tarefa era outra, mas mostra o risco de bases desbalanceadas. Se algum dia fosse incluída, exigiria consentimento específico, teste de viés, transparência e nenhum uso para pressionar a venda."
      },
      {
        q: "Precisa de registro na Anvisa?",
        a: "Segundo a RDC nº 657/2022, programas usados exclusivamente para gestão administrativa e financeira de serviços de saúde ficam fora da regulação de software como dispositivo médico. Por isso, a parte administrativa da proposta tende a ficar fora. Se o sistema passasse a apoiar decisão clínica, seria preciso análise regulatória. Isso não é parecer jurídico, e vale confirmar com o orientador."
      },
      {
        q: "Já existem softwares assim? Por que o nosso?",
        a: "Existem sistemas de gestão para clínicas. Nosso trabalho não fez um levantamento comparativo de mercado. A proposta é conceitual, e sua viabilidade depende de levantamento de requisitos com a clínica, testes e adequação às normas."
      }
    ],
    sources: [
      "BRASIL. Lei nº 13.709, de 14 de agosto de 2018 (LGPD), arts. 5º, II, e 11. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
      "BRASIL. Lei nº 13.643, de 3 de abril de 2018 (profissão de esteticista).",
      "ANVISA. Resolução RDC nº 657, de 24 de março de 2022 (software como dispositivo médico). Disponível em: https://antigo.anvisa.gov.br/documents/10181/5141677/RDC_657_2022_COMP.pdf/d2da154d-bd76-40ba-87ee-3d9baadb5dd3",
      "BUOLAMWINI, Joy; GEBRU, Timnit. Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification. Proceedings of Machine Learning Research, v. 81, 2018. Disponível em: https://proceedings.mlr.press/v81/buolamwini18a.html",
      "BRASIL. ANPD. Tomada de subsídios: dados pessoais sensíveis, dados biométricos (2025). Disponível em: https://www.gov.br/participamaisbrasil/ts-dados-biometricos",
      "BRASIL. Agência Nacional de Vigilância Sanitária (Anvisa), 2024a e 2024b, citados no trabalho.",
      "WOLF, Naomi. O mito da beleza. Rio de Janeiro: Rosa dos Tempos, 1992."
    ]
  }
];
