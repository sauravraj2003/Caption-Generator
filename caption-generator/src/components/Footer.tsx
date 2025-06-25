
import { Sparkles, Twitter, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">CaptionCraft</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered social media caption generation for content creators, influencers, and brands.
            </p>
            <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              Trusted by 10,000+ Creators
            </Badge>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Product</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Integrations</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Templates</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Video Tutorials</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Best Practices</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">support@captioncraft.ai</span>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              © 2024 CaptionCraft. All rights reserved. Made with ❤️ for content creators worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
