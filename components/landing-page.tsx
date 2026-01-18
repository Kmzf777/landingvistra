"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Check, ArrowRight } from "lucide-react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export function LandingPage() {
  const delayBase = 0.1

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "fixed inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="relative z-10 flex flex-col w-full max-w-3xl mx-auto px-6 py-12 md:py-24 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-4">
        <BlurFade delay={delayBase} inView>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Enquanto outros cobram R$ 500, R$ 1.000 ou mais por landing pages genéricas...
          </h1>
        </BlurFade>
        <BlurFade delay={delayBase * 2} inView>
          <p className="text-xl text-gray-800 md:text-2xl leading-relaxed">
            Você está a um clique de ter uma página profissional, otimizada e pronta para vender — pelo preço de um lanche 🍔.
          </p>
        </BlurFade>
      </section>

      {/* Features Section */}
      <section className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm">
        <BlurFade delay={delayBase * 3} inView>
          <h2 className="text-2xl font-bold text-black">Cada página é:</h2>
        </BlurFade>
        
        <div className="grid gap-4">
          <FeatureItem delay={delayBase * 4} text="Desenhada do zero — Exclusiva, memorável, alinhada com sua marca" />
          <FeatureItem delay={delayBase * 5} text="Código limpo e profissional — Rápida, responsiva, otimizada para SEO" />
          <FeatureItem delay={delayBase * 6} text="Focada em conversão — Cada elemento pensado para transformar visita em venda" />
          <FeatureItem delay={delayBase * 7} text="Sua para sempre — Você recebe os arquivos completos, sem amarras" />
        </div>
      </section>

      {/* Objection Handling */}
      <section className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <BlurFade delay={delayBase * 8} inView>
          <h3 className="text-xl font-bold text-black">&quot;Mas por R$ 39,90 isso é impossível...&quot;</h3>
        </BlurFade>
        <BlurFade delay={delayBase * 9} inView>
          <div className="space-y-4 text-gray-800">
            <p>É exatamente o que pensei antes de criar isso.</p>
            <p>Automatizei o que é repetitivo. Mantenho o que é criativo.</p>
            <p className="font-medium text-black">O resultado? Landing pages de padrão premium por um preço que desafia a lógica do mercado.</p>
          </div>
        </BlurFade>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-8">
        <BlurFade delay={delayBase * 10} inView>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 w-full md:w-auto">
            <span>QUERO MINHA LANDING PAGE POR R$ 39,90</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </BlurFade>
        <BlurFade delay={delayBase * 11} inView>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Não perca tempo (nem dinheiro).</p>
            <p>Sua concorrência já está na frente.</p>
          </div>
        </BlurFade>
      </section>
      </div>
    </div>
  )
}

function FeatureItem({ text, delay }: { text: string; delay: number }) {
  const [title, description] = text.split(" — ")
  return (
    <BlurFade delay={delay} inView>
      <div className="flex items-start gap-3">
        <div className="mt-1 bg-green-100 p-1 rounded-full">
          <Check className="h-4 w-4 text-green-600" />
        </div>
        <p className="text-gray-800">
          <span className="font-semibold text-black">{title}</span>
          {description && <span className="text-gray-700"> — {description}</span>}
        </p>
      </div>
    </BlurFade>
  )
}
