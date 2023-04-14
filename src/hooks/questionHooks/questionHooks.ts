/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

export interface QuestionProps {
  question: string;
  answer: string;
  open: boolean;
}

const useQuestion = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>([
    {
      question: "Qual é o prazo de entrega?",
      answer:
        "O prazo de entrega varia de acordo com minha agenda no momento da contratação. Geralmente, o prazo de produção das páginas é de 2 a 10 dias, dependendo do tamanho e da complexidade. Fique tranquilo(a), assim que fecharmos o contrato, estabeleceremos um prazo de entrega específico para o seu projeto.",
      open: false,
    },
    {
      question: "Qual é o processo de pagamento?",
      answer:
        "Nosso processo de pagamento é simples e oferecemos diferentes opções para maior comodidade do cliente. Aceitamos Pix, Mercado Pago e Cartão de Crédito. Em relação ao parcelamento, é possível dividir o valor total em até 12x com juros.",
      open: false,
    },
    {
      question: "Vocês oferecem serviços de hospedagem e domínio?",
      answer:
        "Não oferecemos serviços de hospedagem e registro de domínio diretamente, mas podemos ajudar nossos clientes a escolherem a melhor opção de hospedagem e registrar um domínio. Nós podemos recomendar provedores de hospedagem confiáveis e ajudar no processo de registro de domínio, mas a compra e a configuração da hospedagem e do domínio são de responsabilidade do cliente.",
      open: false,
    },
    {
      question: "Vocês oferecem suporte após a entrega do trabalho?",
      answer:
        "Sim, oferecemos suporte pós-entrega por um período limitado de tempo de 14 dias úteis. Durante esse período, você pode entrar em contato conosco para esclarecer dúvidas ou receber ajuda com questões relacionadas ao trabalho entregue. Nós nos esforçamos para garantir a satisfação de nossos clientes e estamos sempre disponíveis para ajudar no que for necessário.",
      open: false,
    },
    {
      question: "Posso solicitar mais alterações após o trabalho ser entregue?",
      answer:
        "Sim, é possível solicitar mais alterações após o trabalho ser entregue, porém há um limite de 5 alterações por pedido. Caso necessite de mais alterações, será necessário efetuar um pagamento adicional de R$ 50,00 por alteração.",
      open: false,
    },
  ]);

  function getQuestions(): QuestionProps[] {
    return questions;
  }

  function setQuestion(questions: QuestionProps[]) {
    setQuestions(questions);
  }

  return {
    getQuestions,
    setQuestion,
  };
};

export { useQuestion };
