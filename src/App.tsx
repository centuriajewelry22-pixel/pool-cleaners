import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplet, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Clock,
  ThumbsUp,
  Award
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Droplet className={`w-8 h-8 ${isScrolled ? 'text-cyan-500' : 'text-cyan-300'}`} />
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            CRYSTAL<span className="text-cyan-400">CLEAR</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Services', 'How it Works', 'Testimonials', 'About'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                isScrolled ? 'text-slate-500 hover:text-cyan-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-12 ml-4">
          <div className={`flex items-center gap-2 font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <Phone className={`w-4 h-4 ${isScrolled ? 'text-cyan-500' : 'text-cyan-300'}`} />
            <span className="text-sm">800.766.5253</span>
          </div>
          <button className={`px-8 py-2.5 rounded-full text-sm font-outfit font-bold uppercase tracking-widest transition-all ${
            isScrolled 
              ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-xl shadow-cyan-200' 
              : 'bg-white text-slate-900 hover:bg-cyan-500 hover:text-white'
          }`}>
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Luxury home pool */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury residential swimming pool at a modern home"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-cyan-600 to-blue-800 opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-left text-white w-full pt-20 md:pt-32">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif italic font-bold tracking-tight mb-4 md:mb-5 leading-[1.1] max-w-2xl"
        >
          Crystal Clear Pools, <span className="text-cyan-300 font-bold not-italic font-sans uppercase tracking-[0.1em] text-2xl md:text-3xl block mt-2">Zero Effort.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-xl font-outfit font-bold leading-snug"
        >
          Experience premium pool maintenance designed for luxury homes. 
          State-of-the-art cleaning and complete peace of mind.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-start gap-4 md:gap-6"
        >
          <button className="w-full sm:w-auto px-6 py-3.5 md:px-10 md:py-5 bg-white hover:bg-cyan-500 hover:text-white text-slate-900 rounded-full font-outfit font-bold text-sm uppercase tracking-[0.15em] shadow-2xl transition-all group">
            Get a Free Quote
          </button>
          
          <div className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl w-full sm:w-auto">
            <div className="p-2 bg-green-500/20 rounded-full">
              <ShieldCheck className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold leading-none mb-1">Guarantee</p>
              <p className="text-sm font-bold text-white">100% Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-0.5 h-10 bg-gradient-to-t from-white to-transparent rounded-full" />
      </div>
    </section>
  );
};

const TrustStrip = () => {
  return (
    <div className="bg-slate-50 py-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">POOLMAX</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">AQUASTAR</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">SHIELD POOLS</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">CLEARTECH</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">ZENPOOL</div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: "01",
      title: "The Inspect",
      desc: "Free 20-point digital analysis with chemical deep-dive."
    },
    {
      icon: "02",
      title: "The Sparkle",
      desc: "Deep scrub, brush, and precision chemical balance."
    },
    {
      icon: "03",
      title: "The Swim",
      desc: "Jump in and enjoy your crystal clear oasis immediately."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xs font-black tracking-[0.3em] text-cyan-500 uppercase mb-4">The Process</h2>
        <h3 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-20 tracking-tight">Three steps to perfect water</h3>
        
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="flex items-start gap-6 text-left group"
            >
              <span className="text-7xl font-black text-cyan-500 opacity-20 group-hover:opacity-40 transition-opacity leading-none">
                {step.icon}
              </span>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-2">{step.title}</h4>
                <p className="text-xl font-bold text-slate-800 leading-tight">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus Holloway",
      role: "Estate Owner",
      img: "https://i.pravatar.cc/150?u=marcus",
      quote: "The only company I trust with our 40-foot infinity pool. Their attention to detail on the tile scrubbing is unparalleled.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      img: "https://i.pravatar.cc/150?u=sarah",
      quote: "Every week they send a digital photo report of the chemicals. I never have to guess if the pool is safe for my kids.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Property Manager",
      img: "https://i.pravatar.cc/150?u=david",
      quote: "Reliability is everything. Crystal Clear has never missed a scheduled visit in three years. Truly the gold standard.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-800 rounded-full blur-[120px] -ml-40 -mb-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 items-center mb-20">
          <div className="lg:col-span-3">
            <h2 className="text-xs font-black tracking-[0.3em] text-cyan-400 uppercase mb-4">Trusted Reviews</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic tracking-tight leading-none mb-6">The best built <br/>on results.</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-md bg-white/5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Rating</span>
              <div className="text-3xl font-black text-white px-2">5.0 STARS</div>
              <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mt-1 underline">482 GOOGLE REVIEWS</span>
            </div>
            <div className="bg-white border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-md bg-white/5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Status</span>
              <div className="text-xl font-black text-white uppercase">FULLY INSURED</div>
              <span className="text-[10px] text-green-400 font-black uppercase tracking-widest mt-1">$2M COVERAGE</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-white text-slate-900 shadow-xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <p className="text-lg leading-relaxed text-slate-600 italic font-semibold mb-10 group-hover:text-slate-900 transition-colors">"{rv.quote}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src={rv.img} alt={rv.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-sm uppercase tracking-tight">{rv.name}</h5>
                  <p className="text-cyan-600 text-[10px] font-black uppercase tracking-widest">{rv.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Standard Clean",
      price: "99",
      description: "Perfect for smaller backyard pools.",
      features: ["Weekly Skimming", "Basket Cleaning", "Water Chemical Test", "Digital Visit Report", "Priority Scheduling"],
      isPopular: false
    },
    {
      name: "Premium Care",
      price: "149",
      description: "Our most popular comprehensive service.",
      features: ["Everything in Standard", "Full Bottom Vacuum", "Tile Line Scrubbing", "Filter Maintenance", "Chemicals Included", "Brush Walls & Steps"],
      isPopular: true
    },
    {
      name: "Estate Elite",
      price: "249",
      description: "White-glove service for luxury properties.",
      features: ["Everything in Premium", "Bi-Weekly Visits", "Equipment Optimization", "Algae Prevention Guarantee", "24/7 Concierge Support", "Lantern & Deck Cleaning"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black tracking-[0.3em] text-cyan-500 uppercase mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-slate-900 tracking-tight">Simple, transparent pricing</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-[40px] border flex flex-col ${
                plan.isPopular 
                  ? 'bg-cyan-950 text-white border-cyan-800 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-100 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-cyan-950 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className={`text-xs font-black uppercase tracking-[0.2em] mb-4 ${plan.isPopular ? 'text-cyan-400' : 'text-slate-400'}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold opacity-50">$</span>
                  <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-sm font-bold opacity-50">/month</span>
                </div>
                <p className={`mt-4 text-sm font-medium ${plan.isPopular ? 'text-cyan-100/60' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className={`h-px w-full mb-8 ${plan.isPopular ? 'bg-white/10' : 'bg-slate-100'}`} />

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-cyan-400' : 'text-cyan-500'}`} />
                    <span className={`text-sm font-bold ${plan.isPopular ? 'text-white/80' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                plan.isPopular 
                  ? 'bg-cyan-400 text-cyan-950 hover:bg-cyan-300' 
                  : 'bg-slate-900 text-white hover:bg-cyan-600'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Droplet className="w-8 h-8 text-cyan-500" />
              <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase">
                CRYSTAL<span className="text-cyan-500">CLEAR</span>
              </span>
            </div>
            <p className="text-slate-500 text-xl font-medium max-w-sm mb-8 leading-tight">
              Premium pool service for clients who demand excellence. Fully insured, certified, and dedicated to perfect water.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h6 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-[10px]">Contact Info</h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 font-bold">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>123 Azure Way, <br />Coastal Park, CA</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-black">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>800-POOL-CLEAN</span>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-[10px]">Office Hours</h6>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-500 font-black">
                <Clock className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>24/7 EMERGENCY</span>
              </div>
              <div className="p-4 bg-cyan-50 border border-cyan-100 rounded-2xl">
                <p className="text-xs font-black text-cyan-700 uppercase tracking-widest mb-1">Response Time</p>
                <p className="text-lg font-black text-slate-900 leading-none">Under 2 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest">© 2024 CRYSTAL CLEAR POOLS.</p>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        
        {/* Final CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[60px] overflow-hidden bg-cyan-950 p-12 md:p-32 text-center text-white shadow-3xl">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1519782417743-228743f11370?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Pool water pattern"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-serif italic tracking-tight mb-8 leading-[1.1]">Ready for <br/>the sparkle?</h2>
                <p className="text-xl md:text-2xl text-cyan-200/80 mb-12 font-bold max-w-xl mx-auto leading-tight">Join 500+ happy estate owners who never worry about their pool chemicals again.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-outfit font-bold text-lg uppercase tracking-widest shadow-2xl hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all">
                    Claim Your Quote
                  </button>
                  <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white/20 rounded-full font-outfit font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
                    Pricing
                  </button>
                </div>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-40">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase">No Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase">2hr Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

