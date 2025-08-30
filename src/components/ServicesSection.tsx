import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Lentes de Contato Dentais",
      description: "Corrija imperfeições e tenha um sorriso perfeito com lentes de porcelana ou resina, garantindo resultados naturais e duradouros."
    },
    {
      title: "Clareamento Dental",
      description: "Deixe seu sorriso mais branco e brilhante com nosso clareamento profissional, seguro e eficaz para resultados rápidos e visíveis."
    },
    {
      title: "Reanatomização Estética do Sorriso",
      description: "Melhore a harmonia e a estética do seu sorriso com ajustes que tornam seus dentes mais alinhados e proporcionais."
    },
    {
      title: "Implantes Dentários",
      description: "Recupere a função e beleza do seu sorriso com implantes dentários de qualidade, realizando uma reabilitação estética devolvendo dentes perdidos."
    }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden" id="servicos">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
            Transforme seu sorriso com nossos tratamentos exclusivos!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-heading text-primary">
                {service.title}
              </h3>
              
              <p className="text-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="cta" size="lg" className="font-button text-white text-lg px-8 py-4">
            Agende sua consulta agora!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;