import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Package } from 'lucide-react';

const IconWrapper = ({ children, index }: { children: React.ReactNode; index: number }) => (
  <motion.div
    className="relative w-16 h-16 mb-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
      visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.23, 1, 0.32, 1]
        }
      }
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-xl transform rotate-45" />
    <div className="absolute inset-0 flex items-center justify-center">
      {children}
    </div>
  </motion.div>
);

const OfferCard = React.memo(({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.4 }
      }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.02] transform-gpu perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      
      <div className="relative z-10">
        <IconWrapper index={index}>
          <Icon className="h-8 w-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
        </IconWrapper>

        <motion.h3 
          className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
        >
          {title}
        </motion.h3>

        <motion.p 
          className="mt-4 text-white/70 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.2 }}
        >
          {description}
        </motion.p>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
});

OfferCard.displayName = 'OfferCard';

const Offers: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,178,0.02),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute -top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="font-mono text-4xl font-bold sm:text-5xl lg:text-6xl perspective-1000"
              initial={{ opacity: 0, y: 20, rotateX: -45 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 1,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
              viewport={{ once: true }}
            >
              Choose Your Solution
            </motion.h2>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Select the automation package that best fits your needs and transform your business operations.
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3 perspective-1000">
          <OfferCard
            icon={Zap}
            title="Revenue Engine"
            description="AI-powered automation from lead generation to booking, supercharging your sales pipeline with proven systems."
            index={0}
          />
          <OfferCard
            icon={Settings}
            title="Operations Autopilot"
            description="Streamline operations with AI-driven automation and project management that scales with your business."
            index={1}
          />
          <OfferCard
            icon={Package}
            title="Full-Stack System"
            description="Complete business transformation combining Revenue Engine and Operations Autopilot for maximum impact."
            index={2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Let's Discuss Your Business
          </h3>
          <p className="mt-4 text-lg text-white/70">
            Share your details below and we'll reach out for a brief discovery call. We'll quickly assess if we're the right fit before moving forward with a comprehensive strategy session.
          </p>
          <div className="mt-8">
            <iframe
              data-tally-src="https://tally.so/embed/3yzxax?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="542"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="FireLink Contact form"
              className="rounded-xl border border-white/10 bg-white/5 transform-gpu hover:border-white/20 transition-colors duration-300"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offers;