import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual é o tempo de duração de um implante dentário?",
      answer: "Com os cuidados adequados, um implante dentário pode durar uma vida inteira. A taxa de sucesso dos implantes é superior a 95% e, com boa higienização e acompanhamento regular, eles se mantêm funcionais por décadas."
    },
    {
      question: "O procedimento de implante é doloroso?",
      answer: "O procedimento é realizado com anestesia local, tornando-o praticamente indolor. Utilizamos técnicas minimamente invasivas e, se necessário, sedação consciente para garantir máximo conforto. O pós-operatório é geralmente bem tranquilo com medicação adequada."
    },
    {
      question: "Quanto tempo leva para finalizar um tratamento de implante?",
      answer: "O tempo varia conforme o caso. Em situações ideais, pode levar de 3 a 6 meses. Casos mais complexos podem necessitar de mais tempo. Oferecemos também a técnica de carga imediata quando possível, permitindo dente no mesmo dia."
    },
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Oferecemos diversas opções: pagamento à vista com desconto, parcelamento no cartão de crédito, transferência bancária e PIX. Também trabalhamos com planos personalizados para facilitar seu tratamento."
    },
    {
      question: "É possível fazer clareamento em dentes com restaurações?",
      answer: "O clareamento age apenas no esmalte natural do dente. Restaurações, coroas e próteses não sofrem alteração de cor. Nesses casos, pode ser necessário trocar as restaurações após o clareamento para harmonizar a cor."
    },
    {
      question: "Com que frequência devo fazer consultas de manutenção?",
      answer: "Recomendamos consultas a cada 6 meses para pacientes com boa saúde bucal. Para quem tem implantes, próteses ou histórico de problemas periodontais, o acompanhamento pode ser mais frequente, conforme orientação personalizada."
    }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-foreground font-body">
            Tire suas principais dúvidas sobre nossos tratamentos
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-muted rounded-2xl border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left font-heading text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground font-body leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;