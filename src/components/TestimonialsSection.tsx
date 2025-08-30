import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amanda Dias",
      initials: "AD",
      rating: 5,
      message: "Profissional excelente, atendimento impecável, espaço ótimo, enfim, incrível em tudo! Muito obrigada!"
    },
    {
      name: "Maria Luiza Barbian Magalhaes",
      initials: "ML", 
      rating: 5,
      message: "Excelente profissional!! Confio de olhos fechados."
    },
    {
      name: "Isaque Cruz",
      initials: "IC",
      rating: 5,
      message: "Fiquei muito feliz com o resultado. Atendimento excelente."
    },
    {
      name: "Luiz Carlos Nunes",
      initials: "LC",
      rating: 5,
      message: "Excelente profissional, pontual, educado e atencioso. Tudo isso reflete em sua ótima formação profissional e dedicação!! Recomendo 👏🏻👏🏻👏🏻👏🏻"
    },
    {
      name: "Angela Cioni",
      initials: "AC",
      rating: 5,
      message: "Excelente profissional, atendimento personalizado, atende minha família a 5 anos, então… podem confiar"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-star fill-star" : "text-border"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-muted overflow-hidden" id="depoimentos">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
            O impacto de um atendimento transformador!
          </h2>
          <p className="text-lg text-foreground font-body max-w-2xl mx-auto">
            Conheça as experiências de quem já transformou seu sorriso conosco
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card space-y-6 border border-border/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Rating */}
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>

              {/* Message */}
              <p className="text-primary font-body leading-relaxed text-lg">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {testimonial.name === "Amanda Dias" ? (
                    <img 
                      src="/lovable-uploads/a55bc8dc-4a98-483a-8317-78d8867bf770.png" 
                      alt="Amanda Dias"
                      className="w-full h-full object-cover"
                    />
                  ) : testimonial.name === "Maria Luiza Barbian Magalhaes" ? (
                    <img 
                      src="/lovable-uploads/70a916a7-4a32-4031-ba1e-f499d40f63cf.png" 
                      alt="Maria Luiza Barbian Magalhaes"
                      className="w-full h-full object-cover"
                    />
                  ) : testimonial.name === "Isaque Cruz" ? (
                    <img 
                      src="/lovable-uploads/a58e5eb7-f993-447b-b724-1172607ef30c.png" 
                      alt="Isaque Cruz"
                      className="w-full h-full object-cover"
                    />
                  ) : testimonial.name === "Luiz Carlos Nunes" ? (
                    <img 
                      src="/lovable-uploads/cc6a87a4-fe1c-4be8-8195-21c082516eb2.png" 
                      alt="Luiz Carlos Nunes"
                      className="w-full h-full object-cover"
                    />
                  ) : testimonial.name === "Angela Cioni" ? (
                    <img 
                      src="/lovable-uploads/45397153-1cdc-4737-a2fc-475be65d471e.png" 
                      alt="Angela Cioni"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-cta rounded-full flex items-center justify-center">
                      <span className="text-primary font-heading text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                  )}
                </motion.div>
                <div>
                  <div className="font-heading text-primary">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;