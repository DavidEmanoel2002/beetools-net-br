import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-black">
      {/* Background Grid and Glow */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-600/20 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Badge className="px-4 py-1.5 border-orange-500/50 text-orange-500 bg-orange-500/10" variant="outline">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              SUPORTE ONLINE
            </Badge>
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white mb-6">
            Seja Bem-vindo(a) na <br />
            <span className="text-orange-500">Pluffy</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Aqui você encontra tudo para deixar sua experiência de jogo ainda melhor. Compra rápida, segura e 100% digital. Explore e aproveite!
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all hover:scale-105">
              Ver produtos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats/Features Row */}
          <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "4.9/5", sub: "AVALIAÇÕES" },
              { label: "RÁPIDO", sub: "ENTREGA AUTOMÁTICA" },
              { label: "100%", sub: "COMPRA SEGURA" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <span className="text-2xl font-bold text-white">{stat.label}</span>
                <span className="mt-1 text-xs font-bold text-orange-500 tracking-wider">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
