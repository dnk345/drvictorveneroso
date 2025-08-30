import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const PaymentSection = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Parcelamento em Cartão de Crédito",
      description: "Parcele o valor em até 12 vezes* sem comprometer o seu orçamento."
    },
    {
      icon: Landmark,
      title: "Transferência Bancária",
      description: "Rapidez e segurança para facilitar sua escolha."
    },
    {
      icon: Smartphone,
      title: "Pix",
      description: "Pagamento instantâneo e sem burocracia."
    }
  ];

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-title text-primary">
            Facilitamos o caminho para o seu novo sorriso
          </h2>
          
          <p className="text-lg text-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Sabemos que investir no seu sorriso é importante, por isso oferecemos opções de 
            pagamento flexíveis e seguras para você. Estou aqui para tornar seu tratamento 
            acessível e confortável, sempre priorizando a praticidade.
          </p>

          <Button variant="cta" size="lg" className="font-button text-white text-lg px-8 py-4">
            Faça seu orçamento
          </Button>
        </motion.div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 text-center space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-brown-light rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <method.icon className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-heading text-primary">
                {method.title}
              </h3>
              
              <p className="text-foreground font-body leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;