import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Cog, 
  Lightbulb, 
  Users, 
  Code, 
  Rocket,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Analyst",
      description: "Our flagship product - Transform your data into actionable insights with natural language queries and real-time analytics.",
      features: ["Natural language processing", "Real-time insights", "Enterprise security", "Custom dashboards"],
      isMainProduct: true
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "Tailored AI systems designed specifically for your business needs and industry requirements.",
      features: ["Bespoke development", "Industry-specific models", "Full integration support", "Ongoing optimization"]
    },
    {
      icon: Lightbulb,
      title: "AI Strategy Consulting",
      description: "Expert guidance on implementing AI across your organization for maximum impact and ROI.",
      features: ["Strategic planning", "Technology assessment", "Implementation roadmap", "Change management"]
    },
    {
      icon: Users,
      title: "AI Training & Support",
      description: "Comprehensive training programs and 24/7 support to ensure your team maximizes AI potential.",
      features: ["Team training", "Documentation", "24/7 support", "Best practices guidance"]
    },
    {
      icon: Code,
      title: "AI Integration Services",
      description: "Seamless integration of AI capabilities into your existing systems and workflows.",
      features: ["API development", "System integration", "Data pipeline setup", "Performance optimization"]
    },
    {
      icon: Rocket,
      title: "AI Acceleration Program",
      description: "Fast-track your AI adoption with our proven methodology and accelerated implementation.",
      features: ["Rapid deployment", "Proven frameworks", "Quick wins identification", "Scalable solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our AI Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From our flagship AI Analyst to custom AI solutions, we provide comprehensive AI services 
            tailored to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 ${
                service.isMainProduct 
                  ? 'ring-2 ring-secondary/20 bg-gradient-to-br from-card to-secondary/5' 
                  : 'hover:shadow-lg'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    service.isMainProduct 
                      ? 'bg-secondary text-white' 
                      : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
                  } transition-all duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  {service.isMainProduct && (
                    <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-medium">
                      Main Product
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.isMainProduct ? "hero" : "outline"} 
                  className="w-full group"
                >
                  {service.isMainProduct ? "Try AI Analyst" : "Learn More"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary text-white p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how our AI solutions can drive your business forward. 
                Book a consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Consultation
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;