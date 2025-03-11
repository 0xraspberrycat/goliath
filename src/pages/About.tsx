import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, LineChart } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">About Us</h2>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="rounded-full bg-white/10 p-2 sm:p-3 md:p-3 mb-2 sm:mb-4 w-fit">
              <Code2 className="h-5 sm:h-6 md:h-6 w-5 sm:w-6 md:w-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-lg font-semibold">Experience</h3>
            <p className="mt-2 sm:mt-3 text-white/70 text-sm sm:text-base overflow-auto">
              5 years of expertise in Software Engineering and Quantitative Development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="rounded-full bg-white/10 p-2 sm:p-3 md:p-3 mb-2 sm:mb-4 w-fit">
              <Cpu className="h-5 sm:h-6 md:h-6 w-5 sm:w-6 md:w-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-lg font-semibold">Expertise</h3>
            <p className="mt-2 sm:mt-3 text-white/70 text-sm sm:text-base overflow-auto">
              Building systems your team can own with comprehensive documentation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="rounded-full bg-white/10 p-2 sm:p-3 md:p-3 mb-2 sm:mb-4 w-fit">
              <LineChart className="h-5 sm:h-6 md:h-6 w-5 sm:w-6 md:w-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-lg font-semibold">Vision</h3>
            <p className="mt-2 sm:mt-3 text-white/70 text-sm sm:text-base overflow-auto">
              70% cost reduction and triple sales capacity through optimization
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/3 overflow-hidden rounded-2xl flex-1"
          >
            <img
              src="/founder.jpg"
              alt="Ethan, Founder of FireLink"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-2/3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col justify-center overflow-auto"
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg overflow-auto">
                  I'm Ethan, and I spent 5 years in technical roles—Software Engineer to 
                  Quantitative Development at a market-making, high-frequency trading firm—working 
                  with cutting-edge technologies, AI-powered workflows, and custom integrations.
                </p>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg overflow-auto">
                  That gave me a unique perspective: automation should deliver measurable ROI 
                  through collaboration. I founded FireLink to make that happen. We build 
                  sophisticated Revenue Engines and Operations Autopilot systems that reduce 
                  operational costs by 70% [case study]—but we don't just deploy and disappear.
                </p>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg overflow-auto">
                  Our well-documented systems let your team understand, maintain, and extend 
                  them long after we're gone. We combine my quant finance expertise with 
                  practical automation methodologies, emphasizing transparent delivery and 
                  knowledge transfer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}