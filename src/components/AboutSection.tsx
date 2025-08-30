import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import dentistProfile from "@/assets/dentist-profile.jpg";

const AboutSection = () => {
  const qualifications = [
    "Cirurgião Dentista pela UFMG",
    "Certificação Internacional pela UCAM – Espanha",
    "Especialista em Odontologia Estética e Implantes Dentários",
    "Membro da Sociedade Brasileira de Odontologia Estética (SBOE)"
  ];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden" id="sobre-mim">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
                Sobre o Victor Veneroso
              </h2>
            </motion.div>

            <div className="space-y-4">
              {qualifications.map((qualification, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-brown-medium mt-1 flex-shrink-0" />
                  <span className="text-foreground font-body">
                    {qualification}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-lg text-foreground font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              O Dr. Victor Veneroso é um cirurgião-dentista, registrado sob o CRO-MG 52779, 
              formado pela <strong>UFMG</strong> e especializado em <strong>Reabilitação Oral 
              pela Universidade Católica de Múrcia (Espanha)</strong>, com vasta experiência 
              em odontologia estética e implantes dentários.
            </motion.p>
            
            <motion.p 
              className="text-lg text-foreground font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Com mais de 06 anos de experiência, o Dr. Victor oferece tratamentos 
              personalizados, com foco em resultados naturais e duradouros. Seu 
              compromisso é entregar a você o sorriso que sempre desejou, com a 
              qualidade e o cuidado que você merece.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="default" size="lg" className="font-button text-white">
                Agende seu horário
              </Button>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src="/lovable-uploads/96e56950-4595-4efb-a574-24e49e8ae724.png"
                alt="Dra. Dentista - Especialista em Odontologia Estética"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;