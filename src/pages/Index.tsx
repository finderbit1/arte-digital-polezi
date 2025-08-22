import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Image, 
  FileText, 
  Monitor, 
  Star, 
  Layers,
  ArrowRight,
  Instagram,
  Mail
} from "lucide-react";

// Import product images
import productLogo1 from "@/assets/product-logo-1.jpg";
import productIllustration1 from "@/assets/product-illustration-1.jpg";
import productTemplate1 from "@/assets/product-template-1.jpg";
import productMockup1 from "@/assets/product-mockup-1.jpg";

const Index = () => {
  const categories = [
    {
      title: "Logos & Branding",
      description: "Identidades visuais completas e logotipos profissionais",
      itemCount: 120,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      icon: <Palette className="w-12 h-12" />
    },
    {
      title: "Ilustrações",
      description: "Arte digital única e ilustrações personalizadas",
      itemCount: 85,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      icon: <Image className="w-12 h-12" />
    },
    {
      title: "Templates",
      description: "Modelos prontos para redes sociais e apresentações",
      itemCount: 200,
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
      icon: <FileText className="w-12 h-12" />
    },
    {
      title: "Mockups",
      description: "Apresentações profissionais para seus designs",
      itemCount: 65,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      icon: <Monitor className="w-12 h-12" />
    },
    {
      title: "Ícones",
      description: "Conjuntos de ícones vetoriais modernos",
      itemCount: 300,
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-500",
      icon: <Star className="w-12 h-12" />
    },
    {
      title: "Elementos Gráficos",
      description: "Recursos visuais e elementos decorativos",
      itemCount: 150,
      gradient: "bg-gradient-to-br from-teal-500 to-blue-600",
      icon: <Layers className="w-12 h-12" />
    }
  ];

  const featuredProducts = [
    {
      title: "Pack de Logos Minimalistas Premium",
      price: 29.90,
      originalPrice: 49.90,
      category: "Logos & Branding",
      image: productLogo1,
      isNew: true,
      isFeatured: true
    },
    {
      title: "Ilustrações Digitais Abstratas",
      price: 19.90,
      category: "Ilustrações",
      image: productIllustration1,
      isFeatured: true
    },
    {
      title: "Templates Instagram Stories - 30 Designs",
      price: 15.90,
      originalPrice: 25.90,
      category: "Templates",
      image: productTemplate1,
      isNew: true
    },
    {
      title: "Mockups de Dispositivos Modernos",
      price: 24.90,
      category: "Mockups",
      image: productMockup1,
      isFeatured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore por Categoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encontre exatamente o que você precisa navegando pelas nossas categorias especializadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="gap-2">
                Ver Todas as Categorias
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Produtos em Destaque
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nossos designs mais populares e recentes
                </p>
              </div>
              <Button className="gap-2">
                Ver Todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Fique por dentro das novidades
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Receba em primeira mão nossos novos designs, promoções exclusivas e dicas de design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button size="lg" variant="secondary">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">P</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">POLEZI</h3>
                  <p className="text-xs text-muted-foreground">Design</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Arte digital de qualidade premium para transformar suas ideias em realidade.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Todas as Artes
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Novidades
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Mais Vendidos
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Promoções
                </a>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Logos & Branding
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Ilustrações
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Templates
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Mockups
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Polezi Design. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;