'use client';

import { useState } from "react";
import { AetherHero } from "@/components/ui/aether-hero";
import { LandingPage } from "@/components/landing-page";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeClient() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 z-10"
          >
            <AetherHero
              title="Você Jamais Viu Landing Pages Assim."
              subtitle={
                <>
                  Design único, código profissional, conversão garantida. Por{" "}
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-4">
                    R$ 39,90
                  </span>
                  . Sim, você leu certo. E não, não é template genérico.
                </>
              }
              ctaLabel="Descobrir"
              ctaHref="#"
              onCtaClick={(e) => {
                e.preventDefault();
                // @ts-ignore
                if (typeof window !== "undefined" && window.fbq) {
                  // @ts-ignore
                  window.fbq('track', 'ViewContent', { content_name: 'LandingPageReveal' });
                }
                setShowForm(true);
              }}
              align="left"
              overlayGradient="linear-gradient(180deg, #000000bb 0%, #00000055 40%, transparent)"
            />
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-20 min-h-screen"
          >
            <LandingPage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
