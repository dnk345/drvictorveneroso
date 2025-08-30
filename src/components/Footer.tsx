const Footer = () => {
  return <footer className="py-12 bg-muted border-t border-border/50">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4">
          <div className="text-primary font-body">
            <span className="font-heading">Dr. Victor Veneroso</span> | CRO-MG 52779 | 
            <a href="tel:+5531998397953" className="hover:text-brown-medium transition-smooth ml-1">
              (31) 99839-7953
            </a> | 
            <span className="ml-1">Belo Horizonte – MG</span>
          </div>
          
          <div className="text-sm text-foreground font-body">
            © 2025 | Todos os direitos reservados – Site criado pela 
            <span className="text-brown-medium ml-1">Agência Rubra</span>.
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;