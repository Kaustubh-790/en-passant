import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Crown, Trophy, Users, Calendar } from "lucide-react";

const AboutTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation for the timeline fill
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to timeline height percentage
  const timelineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const timelineEvents = [
    {
      year: "2022",
      title: "Formation",
      icon: Crown,
      content:
        "En Passant was founded by Akshay Bhaiya and his dedicated team with a simple but powerful vision: to promote the game of chess across our college. What began as a small community of passionate players soon grew into a vibrant forum.",
      tag: "First pawn move",
      side: "left",
    },
    {
      year: "April, 2023",
      title: "First Event: CheckUsOut",
      icon: Trophy,
      content:
        "CheckUsOut marked the beginning of something big — the event that put us on the college map. This inaugural tournament brought together students from all corners of the campus to celebrate the spirit of the game.",
      tag: "First tournament victory",
      side: "right",
    },
    {
      year: "2023",
      title: "Growth",
      icon: Users,
      content:
        "New team members joined, fresh players stepped into the community, and the forum evolved into a hub where both beginners and seasoned players could connect, compete, and grow together.",
      tag: "Community expansion",
      side: "left",
    },
    {
      year: "2024",
      title: "Expansion",
      icon: Calendar,
      content:
        "More events, workshops, and tournaments. The club expanded its reach with regular competitions, educational sessions, and strategic partnerships across the campus.",
      tag: "Strategic expansion",
      side: "right",
    },
    {
      year: "2025",
      title: "Present & Future",
      icon: Crown,
      content:
        "This is only the beginning. Many more moves to come. Today, En Passant is more than just a club—it's a thriving community built on camaraderie, learning, and a shared love for the timeless game of chess.",
      tag: "Infinite possibilities ahead",
      side: "left",
      isPresent: true,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 md:px-8 bg-slate-900 relative overflow-hidden min-h-screen"
      style={{
        background: "transparent",
      }}
    >
      {/* Background Pattern */}

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold mb-6 text-amber-400 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About En Passant
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our journey through the years, one move at a time.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Background Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700/50 transform md:-translate-x-0.5 rounded-full" />

          {/* Animated Gold Timeline Fill */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-600 transform md:-translate-x-0.5 rounded-full shadow-lg"
            style={{
              height: timelineHeight,
              filter: "drop-shadow(0 0 6px rgba(251, 191, 36, 0.6))",
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={`${event.year}-${index}`}
                event={event}
                index={index}
                totalEvents={timelineEvents.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ event, index, totalEvents }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  // Node animation progress
  const nodeProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const nodeScale = useTransform(nodeProgress, [0, 1], [0, 1]);
  const nodeOpacity = useTransform(nodeProgress, [0, 1], [0, 1]);

  // Content animation
  const contentX = useTransform(
    scrollYProgress,
    [0, 0.7],
    event.side === "left" ? [-50, 0] : [50, 0]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  const Icon = event.icon;

  return (
    <motion.div
      ref={itemRef}
      className={`relative flex items-center ${
        event.side === "right" ? "md:flex-row-reverse" : ""
      }`}
      style={{ opacity: contentOpacity }}
    >
      {/* Enhanced Timeline Node */}
      <motion.div
        className="absolute left-6 md:left-1/2 z-20"
        style={{
          x: "-50%",
          scale: nodeScale,
          opacity: nodeOpacity,
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className={`w-8 h-8 rounded-full border-4 border-slate-900 ${
            event.isPresent ? "bg-amber-400" : "bg-amber-500"
          }`}
          animate={
            event.isPresent
              ? {
                  boxShadow: [
                    "0 0 0 0 rgba(251, 191, 36, 0.7)",
                    "0 0 0 15px rgba(251, 191, 36, 0)",
                    "0 0 0 0 rgba(251, 191, 36, 0)",
                  ],
                }
              : {}
          }
          transition={
            event.isPresent
              ? {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }
              : {}
          }
        />

        {/* Inner icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Icon className="w-4 h-4 text-slate-900" />
        </motion.div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className={`ml-16 md:ml-0 md:w-1/2 ${
          event.side === "right" ? "md:pl-8" : "md:pr-8"
        }`}
        style={{ x: contentX }}
      >
        <motion.div
          className={`rounded-xl shadow-2xl p-8 backdrop-blur-sm border ${
            event.isPresent
              ? "bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-600/20 border-amber-400/30"
              : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            boxShadow: event.isPresent
              ? "0 25px 50px -12px rgba(251, 191, 36, 0.25)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                event.isPresent
                  ? "bg-amber-400/30 text-amber-300"
                  : "bg-amber-500/20 text-amber-400"
              }`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="w-7 h-7" />
            </motion.div>
            <div>
              <motion.h3
                className={`text-3xl font-bold ${
                  event.isPresent ? "text-amber-300" : "text-amber-400"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {event.year}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {event.title}
              </motion.p>
            </div>
          </div>

          {/* Content */}
          <motion.p
            className="text-gray-300 leading-relaxed mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
          >
            {event.content}
          </motion.p>

          {/* Tag */}
          <motion.div
            className={`flex items-center gap-3 text-sm ${
              event.isPresent ? "text-amber-300" : "text-amber-400"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={
              event.isPresent
                ? {
                    opacity: [1, 0.7, 1],
                  }
                : {}
            }
            transition={
              event.isPresent
                ? {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1 + 0.5,
                  }
                : {
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                  }
            }
          >
            <motion.div
              className={`w-2 h-2 rounded-full ${
                event.isPresent ? "bg-amber-300" : "bg-amber-400"
              }`}
              animate={
                event.isPresent
                  ? {
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }
                  : {}
              }
              transition={
                event.isPresent
                  ? {
                      duration: 2,
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <span className="font-medium">{event.tag}</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutTimeline;
