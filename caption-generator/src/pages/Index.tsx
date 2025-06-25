
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Zap, Users, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
