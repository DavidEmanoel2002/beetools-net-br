import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import beeLogo from "@/assets/bee-logo.png.asset.json";


export function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-36 bg-background">
      {/* Background Grid and Glow */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23fef08a' stroke-width='1' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '56px 100px'
          }} 
        />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] translate-y-1/2 -translate-x-1/2 rounded-full bg-orange-600/5 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8 flex flex-col items-center gap-6" variants={itemVariants}>
            <img 
              src={beeLogo.url} 
              alt="Bee Tools Logo" 
              className="h-24 md:h-32 w-auto object-contain animate-float mix-blend-lighten"
            />
            <Badge className="px-4 py-1.5 border-yellow-500/50 text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(254,240,138,0.2)]" variant="outline">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              SUPORTE ONLINE
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight sm:text-7xl text-white mb-6"
            variants={itemVariants}
          >
            Seja Bem-vindo à <span className="text-yellow-500">Bee Tools</span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-gray-400 px-4"
            variants={itemVariants}
          >
            Aqui você encontra tudo para deixar sua experiência de jogo ainda melhor. Compra rápida, segura e 100% digital. Explore e aproveite!
          </motion.p>
          
          <motion.div className="mt-12 flex flex-wrap justify-center gap-4" variants={itemVariants}>
            <Button 
              size="lg" 
              className="h-14 px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all hover:scale-105"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver produtos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div 
            className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 px-4"
            variants={containerVariants}
          >
            {[
              { label: "4.9/5", sub: "AVALIAÇÕES" },
              { label: "RÁPIDO", sub: "ENTREGA AUTOMÁTICA" },
              { label: "100%", sub: "COMPRA SEGURA" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center justify-center rounded-2xl border border-yellow-500/10 bg-yellow-500/5 p-4 md:p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgba(234, 179, 8, 0.4)" }}
              >
                <span className="text-xl md:text-2xl font-bold text-white">{stat.label}</span>
                <span className="mt-1 text-[10px] md:text-xs font-bold text-yellow-500 tracking-wider">{stat.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
