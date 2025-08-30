import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted overflow-hidden" id="contato">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
            Contato
          </h2>
          <p className="text-lg text-foreground font-body max-w-2xl mx-auto">
            Para agendar sua consulta ou tirar dúvidas, entre em contato diretamente pelo WhatsApp ou Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Map */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8173939668877!2d-43.93417258485305!3d-19.916682386598996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c2c5a7b5b7%3A0x9c8b4f7c7e7a8b6c!2sRua%20Major%20Lopes%2C%20100%20-%20S%C3%A3o%20Pedro%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1628789876543!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório Dr. Victor Veneroso"
              ></iframe>
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-brown-light rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-primary mb-2">
                    Endereço
                  </h3>
                  <p className="text-foreground font-body leading-relaxed">
                    Rua Major Lopes, 100<br />
                    São Pedro, Belo Horizonte – MG
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-brown-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-primary mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-foreground font-body mb-2">
                    Atendemos com hora marcada para melhor conforto e organização. Confira nossos horários:
                  </p>
                  <div className="text-foreground font-body space-y-1">
                    <p><strong>Segunda a Sexta:</strong> 09:00 – 18:00</p>
                    <p><strong>Sábado:</strong> 08:00 – 12:00</p>
                    <p><strong>Domingo:</strong> Fechado</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="cta" size="lg" className="w-full font-button text-white">
                Agende seu horário
              </Button>
              
              <p className="text-center text-foreground font-body">
                <a href="tel:+5531998397953" className="hover:text-primary transition-smooth">
                  (31) 99839-7953
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;