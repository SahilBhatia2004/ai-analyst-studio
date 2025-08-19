import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your needs and how our solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="mt-2 border-border/50 focus:border-secondary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="mt-2 border-border/50 focus:border-secondary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    className="mt-2 border-border/50 focus:border-secondary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-foreground font-medium">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    className="mt-2 border-border/50 focus:border-secondary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-foreground font-medium">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full mt-2 px-3 py-2 border border-border/50 rounded-lg bg-background text-foreground focus:border-secondary focus:outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="ai-analyst">AI Analyst</option>
                    <option value="custom-ai">Custom AI Solutions</option>
                    <option value="consulting">AI Strategy Consulting</option>
                    <option value="training">AI Training & Support</option>
                    <option value="integration">AI Integration Services</option>
                    <option value="acceleration">AI Acceleration Program</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your AI needs and goals..." 
                    rows={4}
                    className="mt-2 border-border/50 focus:border-secondary resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">sahilbat9@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">+91 9319866788</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">New Delhi, India</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div className="text-muted-foreground">Mon-Fri: 9AM-6PM IST</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">Book a Free Consultation</h3>
                <p className="mb-6 opacity-90">
                  Schedule a 30-minute consultation with our AI experts to discuss your specific needs and learn how we can help transform your business.
                </p>
                <Button variant="outline" className="w-full bg-white text-primary hover:bg-gray-100" asChild>
                  <a href="https://cal.com/sahilbhatia2004/consultation" target="_blank" rel="noopener noreferrer">
                    Schedule Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose DataSpark?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Enterprise-grade security and privacy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Proven track record with Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">24/7 expert support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Custom solutions tailored to your industry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;