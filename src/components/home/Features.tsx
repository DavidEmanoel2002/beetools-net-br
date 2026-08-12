import { Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Entrega em até 48h",
    description: "Receba suas ferramentas digitais em até 48 horas após a confirmação do pagamento.",
    icon: Zap,
  },
  {
    name: "Segurança Garantida",
    description: "Transações criptografadas e suporte 24/7 para garantir sua tranquilidade.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que escolher a Bee Tools?</h2>
          <p className="mt-4 text-muted-foreground">
            Oferecemos a infraestrutura necessária para o sucesso do seu produto digital.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-2xl mx-auto">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.name} 
              className="relative p-6 bg-background rounded-xl border transition-all hover:border-primary/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
