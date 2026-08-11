import { Zap, Shield, BarChart3, Globe } from "lucide-react";

const features = [
  {
    name: "Entrega Instantânea",
    description: "Receba suas ferramentas digitais imediatamente após a confirmação do pagamento.",
    icon: Zap,
  },
  {
    name: "Segurança Garantida",
    description: "Transações criptografadas e suporte 24/7 para garantir sua tranquilidade.",
    icon: Shield,
  },
  {
    name: "Analytics Completo",
    description: "Acompanhe o desempenho das suas ferramentas com dashboards integrados.",
    icon: BarChart3,
  },
  {
    name: "Alcance Global",
    description: "Venda para clientes em qualquer lugar do mundo com suporte a múltiplas moedas.",
    icon: Globe,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que escolher a Pluffy?</h2>
          <p className="mt-4 text-muted-foreground">
            Oferecemos a infraestrutura necessária para o sucesso do seu produto digital.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative p-6 bg-background rounded-xl border transition-all hover:border-primary/50 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
