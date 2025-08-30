import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQDetailedSection = () => {
  const faqs = [
    {
      question: "Como posso entrar em contato para agendar uma consulta?",
      answer: "Para agendar sua consulta ou tirar dúvidas, entre em contato diretamente pelo WhatsApp (31) 99839 7953 ou Instagram @dr.victorveneroso."
    },
    {
      question: "Onde fica localizado o consultório?",
      answer: "Nosso consultório está localizado na Rua Major Lopes, 100, São Pedro, Belo Horizonte. Estamos em uma área de fácil acesso, e ficaremos felizes em recebê-lo para sua consulta."
    },
    {
      question: "Qualquer pessoa pode realizar o tratamento odontológico?",
      answer: "Sim! Cada paciente tem necessidades e expectativas únicas, por isso realizamos um planejamento personalizado para garantir o melhor tratamento. Precisamos conhecer mais sobre você e suas preferências para criar um plano ideal e adaptado ao seu caso."
    },
    {
      question: "O tratamento odontológico dói?",
      answer: "Não! Utilizamos um protocolo de conforto para garantir que o paciente esteja o mais relaxado possível durante o tratamento. Sabemos que o momento odontológico pode ser delicado, por isso tomamos todas as precauções para evitar dor ou desconforto."
    },
    {
      question: "Qual o valor do tratamento odontológico?",
      answer: "O valor do tratamento é definido após uma avaliação detalhada e planejamento. Como cada paciente tem necessidades específicas, o valor pode variar. No entanto, oferecemos opções de parcelamento e condições especiais para que o tratamento seja acessível a todos."
    },
    {
      question: "O tratamento irá desgastar meu dente?",
      answer: "Alguns tratamentos exigem um pequeno preparo no dente, mas não causam danos. Utilizo técnicas modernas que preservam ao máximo a estrutura do dente, com ajustes mínimos, garantindo resultados estéticos e funcionais."
    },
    {
      question: "O tratamento odontológico vai parecer natural?",
      answer: "Sim, a naturalidade é nossa principal prioridade. Todos os tratamentos são realizados para criar um sorriso harmônico e discreto, sem exageros. Durante o processo, alinhamos todos os detalhes com você para garantir que o resultado final atenda às suas expectativas de forma natural."
    },
    {
      question: "Qual é a duração dos tratamentos odontológicos?",
      answer: "Os tratamentos podem durar a vida toda, dependendo dos cuidados do paciente. A manutenção regular, como higienização adequada e consultas periódicas, é essencial para garantir que os resultados se mantenham duradouros."
    },
    {
      question: "Quanto tempo leva para ver os resultados dos tratamentos odontológicos?",
      answer: "O tempo para perceber os resultados varia de acordo com o tipo de tratamento realizado. Alguns tratamentos oferecem resultados imediatos, enquanto outros podem precisar de algumas semanas ou meses. Durante o planejamento, vamos definir um cronograma de expectativas para você."
    },
    {
      question: "Quais cuidados devo ter após o tratamento odontológico?",
      answer: "O cuidado pós-tratamento é fundamental para garantir os melhores resultados. Consultas de rotina e manutenções são essenciais para garantir a durabilidade e eficácia do tratamento."
    },
    {
      question: "Os tratamentos odontológicos são seguros?",
      answer: "Sim! Todos os nossos tratamentos são realizados com tecnologia de ponta e seguindo as melhores práticas de segurança e higiene. Você pode confiar na nossa experiência e em nosso compromisso com a sua saúde bucal."
    },
    {
      question: "Posso fazer o tratamento odontológico se tiver algum problema de saúde?",
      answer: "Cada caso é analisado individualmente. Se você tiver alguma condição de saúde específica, faremos uma avaliação cuidadosa antes de recomendar qualquer procedimento. A segurança do paciente é nossa prioridade, e trabalhamos para garantir que o tratamento seja seguro para todos."
    },
    {
      question: "O tratamento odontológico pode ser feito em uma única sessão?",
      answer: "Depende do tipo de tratamento escolhido. Alguns procedimentos podem ser concluídos em uma única visita, enquanto outros podem exigir múltiplas sessões. Durante a consulta inicial, vamos definir o tempo necessário para o tratamento completo e ajustar conforme a sua disponibilidade."
    },
    {
      question: "Os tratamentos odontológicos são indicados para pessoas de todas as idades?",
      answer: "Sim! Temos tratamentos personalizados para todas as idades. Cada faixa etária possui necessidades específicas, por isso criamos planos de tratamento que atendem a todas as fases da vida, sempre com segurança e conforto."
    },
    {
      question: "Como sei se o tratamento odontológico é realmente necessário para mim?",
      answer: "Durante a avaliação inicial, vamos analisar suas necessidades e expectativas, e explicaremos os benefícios de cada procedimento. Nosso objetivo é sempre melhorar sua saúde bucal, portanto, recomendaremos apenas os tratamentos que são realmente necessários para alcançar o sorriso que você deseja, levando em conta seu histórico médico e condições atuais."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border/50 px-6"
            >
              <AccordionTrigger className="text-left font-heading text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground font-body leading-relaxed pt-2 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQDetailedSection;