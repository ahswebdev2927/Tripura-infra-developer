'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 py-3"
        >
          <div className="container-custom flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Tripura</span> Infra
            </Link>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="border-primary text-primary">
                <Link href="tel:+918790806677">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Link>
              </Button>
              <Button asChild className="bg-primary">
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}