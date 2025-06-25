
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      handle: "@sarahfitslife",
      avatar: "/placeholder.svg",
      followers: "125K",
      role: "Fitness Influencer",
      content: "CaptionCraft has completely transformed my content strategy. I've seen a 340% increase in engagement since I started using their AI-generated captions. The brand voice training is incredible!",
      rating: 5,
      platform: "Instagram"
    },
    {
      name: "Marcus Rodriguez",
      handle: "@entrepreneurmindset",
      avatar: "/placeholder.svg",
      followers: "89K",
      role: "Business Coach",
      content: "As someone who posts daily across multiple platforms, CaptionCraft saves me hours every week. The multi-platform optimization ensures my message hits right every time.",
      rating: 5,
      platform: "LinkedIn"
    },
    {
      name: "Emma Chen",
      handle: "@fashionforward_em",
      avatar: "/placeholder.svg",
      followers: "203K",
      role: "Fashion Creator",
      content: "The hashtag suggestions are spot-on and my reach has doubled! CaptionCraft understands my aesthetic and brand voice better than I do sometimes. Worth every penny!",
      rating: 5,
      platform: "TikTok"
    },
    {
      name: "Jake Thompson",
      handle: "@foodieadventures",
      avatar: "/placeholder.svg",
      followers: "67K",
      role: "Food Blogger",
      content: "I love how CaptionCraft adapts to different content types. Whether I'm posting a recipe or a restaurant review, the captions are always perfectly tailored and engaging.",
      rating: 5,
      platform: "Instagram"
    },
    {
      name: "Priya Patel",
      handle: "@techtalks_priya",
      avatar: "/placeholder.svg",
      followers: "156K",
      role: "Tech Reviewer",
      content: "The performance analytics helped me understand what resonates with my audience. My engagement rate went from 2.1% to 8.7% in just two months!",
      rating: 5,
      platform: "Twitter"
    },
    {
      name: "David Kim",
      handle: "@creativestudio_dk",
      avatar: "/placeholder.svg",
      followers: "94K",
      role: "Design Agency",
      content: "Managing captions for 15+ clients was a nightmare until we found CaptionCraft. The team collaboration features and bulk generation have been game-changers for our agency.",
      rating: 5,
      platform: "Multiple"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              10,000+ Creators
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how content creators and influencers are using CaptionCraft to grow their 
            engagement, save time, and build stronger connections with their audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-8 w-8 text-purple-400" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 border-2 border-purple-500/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.handle}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30 mb-1">
                      {testimonial.platform}
                    </Badge>
                    <div className="text-gray-400 text-sm font-medium">{testimonial.followers}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
