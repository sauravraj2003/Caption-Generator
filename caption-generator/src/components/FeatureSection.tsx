
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Palette, BarChart3, Clock, Users } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "AI-Powered Generation",
      description: "Advanced GPT-4 technology creates unique, engaging captions tailored to your brand voice and audience.",
      badge: "AI-Powered"
    },
    {
      icon: <Target className="h-8 w-8 text-pink-400" />,
      title: "Multi-Platform Optimization",
      description: "Generate captions optimized for Instagram, TikTok, Facebook, LinkedIn, and Twitter with platform-specific features.",
      badge: "Cross-Platform"
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-400" />,
      title: "Brand Voice Training",
      description: "Teach our AI your unique brand voice and tone for consistent, authentic content across all your posts.",
      badge: "Premium"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-400" />,
      title: "Performance Analytics",
      description: "Track engagement metrics and optimize your caption strategy with detailed performance insights.",
      badge: "Analytics"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-400" />,
      title: "Content Calendar",
      description: "Plan and schedule your content creation with our integrated calendar system and batch generation tools.",
      badge: "Planning"
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Team Collaboration",
      description: "Work together with your team or agency to create and approve content with collaborative workflows.",
      badge: "Teams"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Create{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Viral Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you create, optimize, and track 
            high-performing social media content that drives real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-gray-300 border-white/20">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
