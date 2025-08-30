import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const ResultsSection = () => {
  const isMobile = useIsMobile();
  
  const resultItems = [
    { id: 1, delay: 0 },
    { id: 2, delay: 0.1 },
    { id: 3, delay: 0.2 }
  ];

  const ResultItem = ({ item, index }: { item: typeof resultItems[0], index: number }) => (
    <motion.div 
      className="space-y-4" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay: item.delay }}
    >
      <motion.div 
        className="bg-card rounded-2xl overflow-hidden shadow-card" 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="aspect-[4/3] bg-brown-light flex items-center justify-center">
          <span className="text-primary font-body text-sm">ANTES / DEPOIS</span>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="resultados" className="bg-muted overflow-hidden py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-title text-primary mb-6">
            Sorrisos que contam nossa história
          </h2>
        </motion.div>

        {isMobile ? (
          <div className="max-w-sm mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {resultItems.map((item, index) => (
                  <CarouselItem key={item.id}>
                    <ResultItem item={item} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-primary/90 text-white border-none hover:bg-primary shadow-lg backdrop-blur-sm w-10 h-10" />
              <CarouselNext className="right-2 bg-primary/90 text-white border-none hover:bg-primary shadow-lg backdrop-blur-sm w-10 h-10" />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resultItems.map((item, index) => (
              <ResultItem key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;