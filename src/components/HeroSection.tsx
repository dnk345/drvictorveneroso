
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import DentistPhoto from "@/components/DentistPhoto";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-full hero-gradient pt-24 md:pt-28 pb-16 md:pb-20">
      {/* Content Container */}
      <div className="relative z-10 flex items-start justify-center w-full max-w-full">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-2 md:py-8">
          
          {/* Mobile Layout: Photo Top, Content Below */}
          <div className="block lg:hidden">
            <motion.div 
              className="flex justify-center mb-6 mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <DentistPhoto
                src="/lovable-uploads/0b04f159-c4b3-4327-a77a-ba1f85622c0f.png"
                alt="Dr. Victor Veneroso"
                aspectRatio="4:5"
                objectPosition="center"
                size="sm"
              />
            </motion.div>

            <motion.div 
              className="space-y-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl font-title text-primary leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Sua Jornada Para Um Sorriso Perfeito Começa Aqui!
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-foreground font-body leading-relaxed px-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Com o Dr. Victor Veneroso, você recebe tratamentos de excelência em 
                <strong> odontologia estética</strong> e <strong> implantes dentários</strong>, 
                com resultados naturais e duradouros, feitos sob medida para você.
              </motion.p>
              
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button 
                  variant="hero"
                  size="lg" 
                  className="font-button text-lg px-12 py-4"
                >
                  Agende Seu Horário
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout: Content Left, Photo Right */}
          <div className="hidden lg:flex lg:items-center lg:gap-12 xl:gap-16">
            {/* Text Content - Left Side */}
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl xl:text-5xl 2xl:text-6xl font-title text-primary leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Sua Jornada Para Um Sorriso Perfeito Começa Aqui!
              </motion.h1>
              
              <motion.p 
                className="text-lg xl:text-xl text-foreground font-body leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Com o Dr. Victor Veneroso, você recebe tratamentos de excelência em 
                <strong> odontologia estética</strong> e <strong> implantes dentários</strong>, 
                com resultados naturais e duradouros, feitos sob medida para você.
              </motion.p>
              
              <motion.div
                className="pt-4 flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button 
                  variant="hero"
                  size="lg" 
                  className="font-button text-xl px-14 py-5"
                >
                  Agende Seu Horário
                </Button>
              </motion.div>
            </motion.div>

            {/* Photo Area - Right Side */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <DentistPhoto
                src="/lovable-uploads/0b04f159-c4b3-4327-a77a-ba1f85622c0f.png"
                alt="Dr. Victor Veneroso"
                aspectRatio="4:5"
                objectPosition="center"
                size="lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
