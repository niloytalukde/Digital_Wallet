import { Users, Target, Heart, Award, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';




const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the safety of your money above everything else.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Every decision we make starts with how it benefits our users.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We build for a borderless world where money flows freely.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "No hidden fees, no surprises. What you see is what you get.",
  },
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Financial Freedom</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're on a mission to make financial services accessible, fast, and secure for everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PayFlow started in 2018 with a simple observation: sending money shouldn't be complicated or expensive. 
                  Our founders experienced firsthand the frustration of slow bank transfers, hidden fees, and clunky interfaces.
                </p>
                <p>
                  We set out to build something different—a digital wallet that combines the security of traditional banking 
                  with the speed and simplicity of modern technology.
                </p>
                <p>
                  Today, PayFlow serves over 10 million users in 150+ countries, processing billions in transactions 
                  while maintaining our commitment to transparency and user experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="gradient-primary border-0">
                <CardContent className="p-8 flex items-center justify-center aspect-square">
                  <div className="text-center text-primary-foreground">
                    <div className="text-6xl font-bold mb-2">2018</div>
                    <div className="text-xl opacity-90">Founded in SF</div>
                  </div>
                </CardContent>
              </Card>
              <Badge className="absolute -bottom-3 -right-3 w-32 h-32 flex flex-col items-center justify-center text-2xl font-bold shadow-xl">
                150+
                <span className="text-sm font-normal">Countries</span>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To democratize financial services by providing fast, secure, and affordable money transfer solutions 
                  to everyone, regardless of where they are in the world.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A world where money moves as freely as information, empowering individuals and businesses 
                  to thrive in the global economy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at PayFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default About;