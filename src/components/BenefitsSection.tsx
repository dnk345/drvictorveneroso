import { Button } from "@/components/ui/button";
import { Award, Heart, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import dentistTreating from "@/assets/dentist-treating.jpg";
const BenefitsSection = () => {
  const benefits = [{
    icon: Star,
    title: "Atendimento Personalizado",
    description: "Tratamentos sob medida para suas necessidades e expectativas."
  }, {
    icon: Heart,
    title: "Estética e Funcionalidade",
    description: "Implantes dentários e odontologia estética com foco no sorriso perfeito."
  }, {
    icon: Shield,
    title: "Tecnologia de Ponta",
    description: "Uso das técnicas mais avançadas para resultados rápidos e eficientes."
  }, {
    icon: Award,
    title: "Conforto Garantido",
    description: "Cuidados para proporcionar uma experiência sem dor e agradável."
  }];
  return <section id="benefícios" className="bg-muted overflow-hidden py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-full overflow-hidden">
          {/* Left - Benefits */}
          <div className="space-y-12">
            <motion.div className="text-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
                Por trás de cada sorriso, compromisso com excelência.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => <motion.div key={index} className="space-y-4 text-center" initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }}>
                  <motion.div className="w-12 h-12 bg-brown-light rounded-full flex items-center justify-center mx-auto" whileHover={{
                scale: 1.1
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-heading text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>)}
            </div>

            <motion.div className="text-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <Button variant="cta" size="lg" className="font-button text-white text-lg px-8 py-4">
                Faça sua avaliação!
              </Button>
            </motion.div>
          </div>

          {/* Right - Image with Seal */}
          <motion.div className="relative max-w-full overflow-hidden" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <div className="relative rounded-3xl overflow-hidden shadow-soft mb-8 lg:mr-8 mx-auto lg:mx-0">
              <img src="/lovable-uploads/f9f93050-e891-4b13-978c-642b5d8206ae.png" alt="Consultório odontológico moderno com equipamentos avançados" className="w-full h-[400px] lg:h-[500px] object-cover object-[25%_center]" />
            </div>
            
            {/* Professional Seal */}
            
          </motion.div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;