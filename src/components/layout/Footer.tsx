export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-primary">Tools</span>
            <p className="mt-4 text-sm text-muted-foreground">
              As melhores ferramentas digitais para impulsionar seu negócio online.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Produtos</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">SEO Master</a></li>
              <li><a href="#" className="hover:text-primary">Design UI</a></li>
              <li><a href="#" className="hover:text-primary">Social Post</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Suporte</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">FAQ</a></li>
              <li><a href="#" className="hover:text-primary">Contato</a></li>
              <li><a href="#" className="hover:text-primary">Termos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Social</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tools. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
