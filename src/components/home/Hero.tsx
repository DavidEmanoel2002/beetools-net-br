import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="outline">
            Novidade: SEO Master Pro v2.0
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Bem-vindo! Impulsione suas <span className="text-primary">Vendas Digitais</span> com Inteligência
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            A plataforma completa para gerenciar, escalar e automatizar seu negócio de ferramentas digitais. Tudo que você precisa em um só lugar.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="h-12 px-8">
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 -z-10 h-full w-full opacity-20">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      </div>
    </section>
  );
}

function Badge({ children, className, variant }: any) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variant === 'outline' ? 'border-primary text-primary' : 'bg-primary text-primary-foreground'} ${className}`}>
      {children}
    </span>
  );
}
