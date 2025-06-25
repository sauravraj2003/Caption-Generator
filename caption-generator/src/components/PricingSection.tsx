
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Crown, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI-powered captions",
      features: [
        "10 caption generations per month",
        "Basic templates and styles",
        "5 hashtag suggestions per caption",
        "Instagram & TikTok support",
        "Basic emoji recommendations",
        "Character count optimization",
        "Email support"
      ],
      limitations: [
        "Limited to 10 generations/month",
        "Basic AI models only",
        "No brand voice training",
        "No analytics or insights"
      ],
      popular: false,
      cta: "Get Started Free",
      icon: <Zap className="h-6 w-6 text-blue-400" />
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Everything you need to scale your content creation",
      features: [
        "Unlimited caption generations",
        "Advanced AI customization",
        "Bulk caption creation (up to 50)",
        "All platforms (Instagram, TikTik, Facebook, LinkedIn, Twitter)",
        "Brand voice training from your content",
        "Performance analytics & insights",
        "A/B testing suggestions",
        "Trending hashtag recommendations",
        "Priority customer support",
        "Content calendar integration",
        "Export to CSV",
        "API access for agencies"
      ],
      popular: true,
      cta: "Start Premium Trial",
      icon: <Crown className="h-6 w-6 text-purple-400" />
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade when you're ready to unlock the full power of AI-driven content creation.
            No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
              plan.popular 
                ? 'bg-gradient-to-b from-purple-900/50 to-pink-900/50 border-purple-500/50 shadow-2xl shadow-purple-500/25' 
                : 'bg-black/40 border-white/10 hover:bg-black/60'
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular - Save 40%
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-12" : "pt-6"}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {plan.icon}
                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  </div>
                  {plan.popular && (
                    <Badge className="bg-purple-600 text-white border-0">
                      Best Value
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white text-lg">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {plan.limitations && (
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="font-semibold text-gray-400 text-sm">Limitations:</h4>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start space-x-3">
                        <div className="h-2 w-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need something custom? Contact us for enterprise pricing.
          </p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
