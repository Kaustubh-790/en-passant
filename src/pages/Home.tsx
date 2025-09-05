import { Button } from "@/components/ui/button";
import { Trophy, Users, BookOpen, Crown } from "lucide-react";
import CircularGallery from "@/components/carousel";
import { motion } from "framer-motion";
import SplitText from "../components/gsapText";
import AboutTimeline from "@/components/about";
import ContactUs from "@/components/contact";

const Home = () => {
  const highlightsData = [
    {
      image: "/img1.jpg",
    },
    {
      image: "/img2.jpg",
    },
    {
      image: "/img3.jpg",
    },
    {
      image: "/img4.jpg",
    },
    {
      image: "/img5.jpg",
    },
    {
      image: "/img6.jpg",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-chess-dark/80 via-chess-dark/60 to-chess-dark/90"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SplitText
              text="En Passant"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl chess-heading font-black text-chess-gold text-center leading-tight tracking-tight"
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
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold mb-6 text-white leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chess Forum
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-chess-gold-light max-w-3xl mx-auto leading-relaxed font-montserrat font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where strategy, friendship, and passion for chess come together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="hero"
              size="xl"
              className="animate-scale-in text-lg font-bold px-10 py-5 rounded-2xl bg-gradient-to-r from-chess-gold-dark via-chess-gold to-chess-gold-light text-chess-dark shadow-lg shadow-chess-gold/30 hover:shadow-chess-gold/50 hover:scale-105 transition-all duration-300"
            >
              Join the Club
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <AboutTimeline />
      </section>

      <section id="membership" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-black mb-6 text-chess-gold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Join En Passant?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-montserrat font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover what makes our chess community extraordinary
          </motion.p>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Trophy,
                title: "Competitions",
                desc: "Regular tournaments",
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
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-chess-gold/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-chess-gold/20 transition-colors duration-300">
                  <perk.icon className="w-10 h-10 text-chess-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold mb-3 text-white group-hover:text-chess-gold transition-colors duration-300">
                  {perk.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-montserrat font-medium">
                  {perk.desc}
                </p>
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

      <section id="gallery" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-black mb-6 text-chess-gold leading-tight tracking-tight">
              Club Highlights
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-montserrat font-medium">
              Experience the best moments from our chess community
            </p>
          </motion.div>
          <motion.div
            className="h-[500px] md:h-[600px] lg:h-[700px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CircularGallery
              items={highlightsData}
              bend={3}
              borderRadius={0.15}
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
