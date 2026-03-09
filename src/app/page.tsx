import { ArrowRight, Sparkles, Upload, Share2, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold tracking-tighter">ArtFlow1440</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#distribution" className="hover:text-white transition-colors">Distribution</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Promote your art with <br /> 
            <span className="text-purple-500">AI Intelligence.</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            Upload once. Our AI optimizes, distributes, and promotes your creative works across all major platforms automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-500 transition-all flex items-center justify-center group">
              Start Promoting Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
              View Sample Results
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Upload className="w-6 h-6" />}
              title="One-Click Upload"
              description="Upload your artwork, music, or video once. We handle all the platform-specific formatting and metadata."
            />
            <FeatureCard 
              icon={<Share2 className="w-6 h-6" />}
              title="Global Distribution"
              description="Direct integration with Ads APIs of Instagram, TikTok, YouTube, and specialized art platforms."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-6 h-6" />}
              title="AI Optimization"
              description="Our AI continuously analyzes performance and adjusts your promotion strategy for maximum visibility."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-40 text-sm">
          <p>© 2026 ArtFlow1440. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}
