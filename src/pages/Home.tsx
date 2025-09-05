import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CircularGallery from "@/components/carousel";
import {
  Trophy,
  Users,
  BookOpen,
  Calendar,
  Crown,
  Star,
  Globe,
  MessageCircle,
  Mail,
  Instagram,
  Gamepad2,
} from "lucide-react";
import heroImage from "@/assets/hero-chess-bg.jpg";
import hero from "@/assets/hero.png";
import { motion } from "framer-motion";
import SplitText from "../components/gsapText";
import AboutTimeline from "@/components/about";
import PuzzleOfTheDay from "@/components/puzzles";
import ContactUs from "@/components/contact";

const Home = () => {
  const eventsData = [
    {
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      text: "Weekly Tournament",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop&crop=center",
      text: "Beginner's Workshop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop&crop=center",
      text: "Grandmaster Lecture",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      text: "Rapid Chess Night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1528819622765-d6bcf132a442?w=800&h=600&fit=crop&crop=center",
      text: "Team Championship",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&h=600&fit=crop&crop=center",
      text: "Puzzle Solving",
    },
  ];

  const highlightsData = [
    {
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      text: "Tournament Victory",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop&crop=center",
      text: "Chess Workshop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop&crop=center",
      text: "Master Class",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      text: "Club Meeting",
    },
    {
      image:
        "https://images.unsplash.com/photo-1528819622765-d6bcf132a442?w=800&h=600&fit=crop&crop=center",
      text: "Championship",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&h=600&fit=crop&crop=center",
      text: "Strategy Session",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      text: "Award Ceremony",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop&crop=center",
      text: "Chess Exhibition",
    },
  ];

  return (
    <div className="min-h-screen bg-chess-dark text-foreground">
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-chess-dark/80 via-chess-dark/60 to-chess-dark/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 hero-text text-chess-gold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SplitText
              text="En Passant"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-4 hero-text text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chess Club
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-8 hero-text text-chess-gold/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Think Ahead. Move Smart. Win Together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="hero" size="xl" className="animate-scale-in">
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-chess-dark relative overflow-hidden">
        <AboutTimeline />
      </section>

      <section id="membership" className="py-20 px-4 md:px-8 bg-chess-charcoal">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-chess-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Join En Passant?
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Trophy,
                title: "Competitions",
                desc: "Regular tournaments and ranking system",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Meet like-minded chess enthusiasts",
              },
              {
                icon: BookOpen,
                title: "Learning",
                desc: "Workshops and coaching sessions",
              },
              {
                icon: Crown,
                title: "Excellence",
                desc: "Reach your chess potential",
              },
            ].map((perk, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <perk.icon className="w-16 h-16 text-chess-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {perk.title}
                </h3>
                <p className="text-gray-300">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="premium" size="xl">
              Become a Member
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 md:px-8 bg-chess-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-chess-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Club Highlights
          </motion.h2>
          <motion.div
            className="h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CircularGallery
              items={highlightsData}
              bend={3}
              textColor="#D4AF37"
              borderRadius={0.15}
              font="bold 20px Figtree"
              scrollSpeed={1.2}
              scrollEase={0.06}
            />
          </motion.div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default Home;
