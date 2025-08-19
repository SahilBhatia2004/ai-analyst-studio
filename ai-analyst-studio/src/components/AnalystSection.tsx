import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Shield, Zap, Brain, TrendingUp, Database } from "lucide-react";

const AnalystSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Queries",
      description: "Ask your data anything in plain English and get instant insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Runs entirely within your infrastructure - your data never leaves your system"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get answers in seconds, not hours. Real-time analysis and reporting"
    },
    {
      icon: BarChart3,
      title: "Rich Visualizations",
      description: "Beautiful charts, graphs, and dashboards generated automatically"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identify patterns, predict outcomes, and discover hidden insights"
    },
    {
      icon: Database,
      title: "Multi-Source Integration",
      description: "Connect to any database or data source seamlessly"
    }
  ];

  return (
    <section id="analyst" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Introducing <span className="text-secondary">AI Analyst</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your Personal AI Analyst. Ask your data anything; AI Analyst turns natural language into powerful insight instantly. Whether you need KPIs, trends, raw numbers, concise summaries, or rich visualizations, you get answers in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-muted/30 border-border/50 shadow-[var(--shadow-card)]">
              <CardContent className="p-0">
                <div className="bg-primary/5 rounded-lg p-6 mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Query:</div>
                  <div className="text-foreground font-medium mb-4">
                    "Show me sales trends for the last quarter compared to the same period last year"
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">AI Analyst Response:</div>
                  <div className="text-secondary font-semibold">
                    ✓ Generated report in 2.3 seconds<br/>
                    ✓ Found 23% growth in Q4 sales<br/>
                    ✓ Identified top performing regions<br/>
                    ✓ Created interactive visualization
                  </div>
                </div>
                <Button variant="cta" className="w-full" asChild>
                  <a href="https://cal.com/sahilbhatia2004/consultation" target="_blank" rel="noopener noreferrer">
                    Try AI Analyst Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why AI Analyst Beats Other Data Analytics Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">10x</div>
                <div className="text-muted-foreground">Faster than traditional BI tools</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">Zero</div>
                <div className="text-muted-foreground">Data leaves your infrastructure</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">Natural</div>
                <div className="text-muted-foreground">Language processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalystSection;