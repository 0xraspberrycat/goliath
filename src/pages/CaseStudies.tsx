import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  title: string;
  founder: string;
  result: string;
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "Outreach Insider",
    title: "Giving the Founder Time Back",
    founder: "Caiden",
    result: "More personal freedom, streamlined operations",
    description: "Caiden was spending most of his time managing operations, limiting his ability to focus on growth. We stepped in and built a fully automated backend for Outreach Insider, handling client onboarding, campaign tracking, and reporting. Within 3 months, Caiden was able to step away from daily operations and even take a vacation — all while the agency kept running smoothly."
  },
  {
    id: 2,
    client: "The Deal Lab",
    title: "Scaling to $400K/Month Seamlessly",
    founder: "Kellen",
    result: "Scalable systems, 6-month revenue growth",
    description: "Kellen's agency helps businesses find message-market fit, but their internal operations were slowing growth. We built a customized operational framework that automated client onboarding, streamlined fulfillment, and improved team coordination. As a result, The Deal Lab scaled from $280K to $400K/month in just 6 months without adding operational complexity."
  },
  {
    id: 3,
    client: "Core Conversions",
    title: "Rapid Growth in 90 Days",
    founder: "Nick",
    result: "3-month revenue and operational growth",
    description: "Nick's lead generation agency was scaling fast, but operational bottlenecks were slowing progress. We built a seamless workflow for cold email, LinkedIn outreach, and cold calling — allowing his team to handle significantly more leads without added stress. In 90 days, Core Conversions increased revenue by 40% and cut Nick's time spent in operations by over 60%."
  }
];

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleStudyChange = (newId: number) => {
    setDirection(newId > activeStudy ? 1 : -1);
    setActiveStudy(newId);
  };

  const scrollToForm = () => {
    const form = document.querySelector('iframe[data-tally-src]');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Case Studies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Real results from real clients. See how we've helped businesses transform their operations and scale efficiently.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
          {/* Navigation Sidebar */}
          <div className="flex flex-col gap-4">
            {caseStudies.map((study) => (
              <motion.button
                key={study.id}
                onClick={() => handleStudyChange(study.id)}
                className={`h-[180px] w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeStudy === study.id
                    ? 'border-white/30 bg-white/10 backdrop-blur-sm'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{study.client}</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                    activeStudy === study.id ? 'rotate-90' : ''
                  }`} />
                </div>
                <p className="mt-2 text-sm text-white/70">{study.title}</p>
              </motion.button>
            ))}
          </div>

          {/* Case Study Content */}
          <div className="relative h-[580px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {caseStudies.map((study) => (
                study.id === activeStudy && (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, x: direction * 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 200 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 p-8 lg:p-12"
                  >
                    <div className="h-full flex flex-col">
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                            Client: {study.client}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                            Founder: {study.founder}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold mb-4 text-white/90">
                          Result: {study.result}
                        </h4>
                        <p className="text-white/70 leading-relaxed">
                          {study.description}
                        </p>
                      </div>

                      <motion.button
                        onClick={scrollToForm}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-8 button-primary self-start"
                      >
                        <span className="flex items-center gap-2">
                          Explore Offers <ArrowRight className="h-4 w-4" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}