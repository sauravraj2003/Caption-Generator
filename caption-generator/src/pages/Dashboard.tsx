
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Instagram, Facebook, Linkedin, Twitter, TrendingUp, Copy, Heart, MessageCircle, Share, Zap, Crown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("");
  const [contentType, setContentType] = useState("");
  const [brandVoice, setBrandVoice] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaptions, setGeneratedCaptions] = useState<any[]>([]);
  const [usageCount, setUsageCount] = useState(3);
  const { toast } = useToast();

  const platforms = [
    { value: "instagram", label: "Instagram", icon: Instagram, limit: 2200 },
    { value: "tiktok", label: "TikTok", icon: TrendingUp, limit: 2200 },
    { value: "facebook", label: "Facebook", icon: Facebook, limit: 63206 },
    { value: "linkedin", label: "LinkedIn", icon: Linkedin, limit: 3000 },
    { value: "twitter", label: "Twitter", icon: Twitter, limit: 280 }
  ];

  const contentTypes = [
    "Promotional",
    "Inspirational", 
    "Educational",
    "Entertaining",
    "Behind-the-scenes",
    "User-generated content",
    "Product showcase",
    "Story/Personal"
  ];

  const brandVoices = [
    "Casual & Friendly",
    "Professional & Authoritative", 
    "Funny & Playful",
    "Motivational & Inspiring",
    "Trendy & Cool",
    "Luxury & Sophisticated",
    "Authentic & Personal"
  ];

  const mockCaptions = [
    {
      text: "🌟 Transform your everyday moments into extraordinary memories! ✨ What small change made the biggest difference in your life? Share below! 👇 #transformation #mindset #growth #motivation #lifestyle",
      hashtags: ["#transformation", "#mindset", "#growth", "#motivation", "#lifestyle"],
      engagement: { likes: 2847, comments: 156, shares: 89 },
      performance: "High"
    },
    {
      text: "Ready to level up? 🚀 Sometimes the biggest breakthroughs come disguised as breakdowns. Keep pushing forward! 💪 #breakthrough #success #perseverance #goals #hustle",
      hashtags: ["#breakthrough", "#success", "#perseverance", "#goals", "#hustle"],
      engagement: { likes: 1923, comments: 203, shares: 67 },
      performance: "Medium"
    },
    {
      text: "The magic happens outside your comfort zone ✨ What's one thing you've been putting off that could change everything? 🤔 #comfortzone #change #growth #courage #action",
      hashtags: ["#comfortzone", "#change", "#growth", "#courage", "#action"],
      engagement: { likes: 3421, comments: 298, shares: 134 },
      performance: "High"
    }
  ];

  const handleGenerate = async () => {
    if (!topic || !platform || !contentType || !brandVoice) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to generate captions.",
        variant: "destructive"
      });
      return;
    }

    if (usageCount >= 10) {
      toast({
        title: "Usage Limit Reached",
        description: "You've reached your monthly limit. Upgrade to Premium for unlimited generations!",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedCaptions(mockCaptions);
      setUsageCount(prev => prev + 1);
      setIsGenerating(false);
      toast({
        title: "Captions Generated!",
        description: "3 unique captions have been created for your content.",
      });
    }, 3000);
  };

  const copyCaption = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Caption copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-white">Caption Generator</h1>
              <div className="flex items-center space-x-4">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                  Free Plan
                </Badge>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade to Premium
                </Button>
              </div>
            </div>
            
            {/* Usage Tracker */}
            <Card className="bg-black/40 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Monthly Usage</span>
                  <span className="text-gray-300">{usageCount}/10 generations</span>
                </div>
                <Progress value={(usageCount / 10) * 100} className="h-2" />
                <p className="text-gray-400 text-sm mt-2">
                  {10 - usageCount} generations remaining this month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                  Create Your Caption
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill in the details below and let our AI create engaging captions for you
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Topic */}
                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-white font-medium">
                    What's your content about? *
                  </Label>
                  <Textarea
                    id="topic"
                    placeholder="e.g., Sharing my morning routine for productivity and wellness..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="bg-black/60 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                  />
                </div>

                {/* Platform */}
                <div className="space-y-2">
                  <Label className="text-white font-medium">Platform *</Label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger className="bg-black/60 border-white/20 text-white">
                      <SelectValue placeholder="Choose your platform" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      {platforms.map((p) => (
                        <SelectItem key={p.value} value={p.value} className="text-white hover:bg-white/10">
                          <div className="flex items-center space-x-2">
                            <p.icon className="w-4 h-4" />
                            <span>{p.label}</span>
                            <Badge variant="secondary" className="ml-2 bg-white/10 text-gray-300">
                              {p.limit} chars
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Type */}
                <div className="space-y-2">
                  <Label className="text-white font-medium">Content Type *</Label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger className="bg-black/60 border-white/20 text-white">
                      <SelectValue placeholder="What type of content is this?" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      {contentTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()} className="text-white hover:bg-white/10">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Brand Voice */}
                <div className="space-y-2">
                  <Label className="text-white font-medium">Brand Voice *</Label>
                  <Select value={brandVoice} onValueChange={setBrandVoice}>
                    <SelectTrigger className="bg-black/60 border-white/20 text-white">
                      <SelectValue placeholder="How should your brand sound?" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      {brandVoices.map((voice) => (
                        <SelectItem key={voice} value={voice.toLowerCase()} className="text-white hover:bg-white/10">
                          {voice}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Target Audience */}
                <div className="space-y-2">
                  <Label htmlFor="audience" className="text-white font-medium">
                    Target Audience
                  </Label>
                  <Input
                    id="audience"
                    placeholder="e.g., Young professionals, fitness enthusiasts, entrepreneurs..."
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="bg-black/60 border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating || usageCount >= 10}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold"
                >
                  {isGenerating ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Generating Captions...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Generate Captions
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Captions */}
            <div className="space-y-6">
              {isGenerating ? (
                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-8 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
                    <h3 className="text-white text-lg font-semibold mb-2">Creating Your Captions...</h3>
                    <p className="text-gray-400">Our AI is crafting the perfect captions for your content</p>
                    <Progress value={66} className="mt-4" />
                  </CardContent>
                </Card>
              ) : generatedCaptions.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-white text-xl font-bold">Generated Captions</h3>
                  {generatedCaptions.map((caption, index) => (
                    <Card key={index} className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className={`${
                            caption.performance === 'High' 
                              ? 'bg-green-600/20 text-green-300 border-green-500/30' 
                              : 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30'
                          }`}>
                            {caption.performance} Performance
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyCaption(caption.text)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-white leading-relaxed">{caption.text}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {caption.hashtags.map((tag: string, tagIndex: number) => (
                            <Badge key={tagIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4 text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{caption.engagement.likes.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{caption.engagement.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Share className="w-4 h-4" />
                              <span>{caption.engagement.shares}</span>
                            </div>
                          </div>
                          <div className="text-gray-400">
                            {caption.text.length} characters
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-50" />
                    <h3 className="text-white text-lg font-semibold mb-2">Ready to Create?</h3>
                    <p className="text-gray-400">Fill in the form and generate your first AI-powered caption!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
