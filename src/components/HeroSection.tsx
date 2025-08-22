import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-card to-muted">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Arte Digital de Qualidade Premium</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme suas
                <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                  {" "}ideias{" "}
                </span>
                em realidade
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Descubra milhares de designs exclusivos, logos profissionais, 
                ilustrações e templates prontos para usar em seus projetos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 group">
                Explorar Catálogo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Novidades
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Designs Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Categorias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Original</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroBanner} 
                alt="Arte Digital Polezi Design" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-2xl transform translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;