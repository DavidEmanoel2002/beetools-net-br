import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductCard } from "@/components/products/ProductCard";
import { useSearch } from "@/hooks/use-search";


const productsQueryOptions = {
  queryKey: ["products"],
  queryFn: async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },
};

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions),
  component: Index,
  head: () => ({
    title: "Pluffy Tools - As Melhores Ferramentas Digitais",
    meta: [
      { name: "description", content: "Encontre as melhores ferramentas de SEO, Design e Marketing para o seu negócio digital na Pluffy Tools." },
      { property: "og:title", content: "Pluffy Tools - Marketplace de Ferramentas Digitais" },
      { property: "og:description", content: "Aumente suas vendas com nossas ferramentas digitais exclusivas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);
  const { searchQuery } = useSearch();

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const tools = filteredProducts.filter(p => p.category !== 'IPTV');
  const iptv = filteredProducts.filter(p => p.category === 'IPTV');


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section id="products" className="py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ferramentas Digitais</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                As melhores ferramentas para o seu fluxo de trabalho criativo e produtivo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {iptv.length > 0 && (
              <>
                <div className="flex flex-col items-center justify-center text-center mt-32 mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">IPTV & Entretenimento</h2>
                  <p className="mt-4 text-muted-foreground max-w-2xl">
                    Sua dose diária de entretenimento com a melhor qualidade.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {iptv.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <Features />
      </main>
      <Footer />
    </div>
  );
}
