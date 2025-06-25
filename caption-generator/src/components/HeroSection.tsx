
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Trusted by 10,000+ Content Creators
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Generate{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Viral Captions
          </span>
          <br />
          in Seconds
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          AI-powered caption generation for Instagram, TikTok, and more. Create engaging content 
          that converts followers into customers with our advanced AI technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl shadow-purple-500/25 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
          >
            Start Creating for Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex justify-center items-center space-x-8 text-gray-400 mb-16">
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm">500K+ Captions Generated</span>
          </div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 backdrop-blur-sm p-8 shadow-2xl">
            <div className="bg-black/40 rounded-xl p-6 border border-white/10">
              <div className="text-left space-y-4">
                <div className="text-sm text-purple-400 font-semibold">AI Caption Generator</div>
                <div className="text-2xl font-bold text-white">
                  "Transform your brand story into viral content..."
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600/20 text-purple-300">#entrepreneur</Badge>
                  <Badge className="bg-pink-600/20 text-pink-300">#success</Badge>
                  <Badge className="bg-blue-600/20 text-blue-300">#motivation</Badge>
                  <Badge className="bg-green-600/20 text-green-300">#growth</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
