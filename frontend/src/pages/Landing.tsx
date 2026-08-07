import { motion } from 'framer-motion';
import { Hero } from '@/components/landing/Hero';
import { Timeline } from '@/components/landing/Timeline';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Benefits } from '@/components/landing/Benefits';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

export function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <div id="how">
        <HowItWorks />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </motion.div>
  );
}
