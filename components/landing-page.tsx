"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Check, ArrowRight } from "lucide-react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { SocialProofSection } from "@/components/social-proof-section"

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
        <BlurFade delay={delayBase} inView>
          <h2 className="text-2xl font-bold text-black">Cada página é:</h2>
        </BlurFade>
        
        <div className="grid gap-4">
          <FeatureItem delay={delayBase * 2} text="Desenhada do zero — Exclusiva, memorável, alinhada com sua marca" />
          <FeatureItem delay={delayBase * 3} text="Código limpo e profissional — Rápida, responsiva, otimizada para SEO" />
          <FeatureItem delay={delayBase * 4} text="Focada em conversão — Cada elemento pensado para transformar visita em venda" />
            <FeatureItem delay={delayBase * 5} text="Sua para sempre — Seu site online para sempre com seu dominio." />
          </div>
        </section>

      {/* Objection Handling */}
      <section className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <BlurFade delay={delayBase} inView>
          <h3 className="text-xl font-bold text-black">&quot;Mas por R$ 39,90 isso é impossível...&quot;</h3>
        </BlurFade>
        <BlurFade delay={delayBase * 2} inView>
          <div className="space-y-4 text-gray-800">
            <p>É exatamente o que pensei antes de criar isso.</p>
            <p>Automatizei o que é repetitivo. Mantenho o que é criativo.</p>
            <p className="font-medium text-black">O resultado? Landing pages de padrão premium por um preço que desafia a lógica do mercado.</p>
          </div>
        </BlurFade>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-8">
        <BlurFade delay={delayBase} inView>
          <a 
            href="https://pay.kirvano.com/39a8ae0c-5cce-4cdc-978a-e1847249bbe5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 w-full md:w-auto whitespace-nowrap"
          >
            <span>GARANTIR AGORA</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </BlurFade>
        <BlurFade delay={delayBase * 2} inView>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Não perca tempo (nem dinheiro).</p>
            <p>Sua concorrência já está na frente.</p>
          </div>
        </BlurFade>
      </section>

      <SocialProofSection />

      {/* FAQ Section */}
      <section className="space-y-8 pt-8">
        <BlurFade delay={delayBase} inView>
          <h2 className="text-2xl font-bold text-center text-black">FAQ</h2>
        </BlurFade>
        <div className="grid gap-6">
          <FaqItem 
            delay={delayBase * 2} 
            question="Como funciona?" 
            answer="Ao Realizar o Pagamento, vamos enviar em seu whatsapp um formulario, para você descrever como deseja sua Landing Page Profissional." 
          />
          <FaqItem 
            delay={delayBase * 3} 
            question="Quanto tempo para entregar?" 
            answer="Até 4 horas." 
          />
          <FaqItem 
            delay={delayBase * 4} 
            question="Posso pedir alterações?" 
            answer="Sim, desde que se encaixe nas alterações possiveis." 
          />
          <FaqItem 
            delay={delayBase * 5} 
            question="Funciona em celular?" 
            answer="100% responsivo. Perfeito em qualquer tela." 
          />
          <FaqItem 
            delay={delayBase * 6} 
            question="Como faço o pagamento?" 
            answer="Aceitamos Pix, Cartão de Credito e Debito." 
          />
          <FaqItem 
            delay={delayBase * 7} 
            question="O que vem incluso?" 
            answer="Fazemos o site completo e incluimos um /admin com dashboard de monitoramento e personalização de URLS e suporte, além de uma janela de 24h para solicitar alterações no site" 
          />
        </div>
      </section>

      {/* Closing Section */}
      <section className="flex flex-col items-center text-center space-y-8 pt-8 pb-12">
        <BlurFade delay={delayBase} inView>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-black">
                R$ 39,90
              </h2>
              <p className="text-2xl font-bold text-black">
                não é o preço.
              </p>
            </div>
            <p className="text-xl text-gray-800 font-medium">
              É o investimento mais inteligente que você vai fazer hoje.
            </p>
            <a 
              href="https://pay.kirvano.com/39a8ae0c-5cce-4cdc-978a-e1847249bbe5"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 w-full whitespace-nowrap"
            >
              <span>GARANTIR AGORA</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </BlurFade>
      </section>
      </div>
    </div>
  )
}

function FaqItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  return (
    <BlurFade delay={delay} inView>
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg text-black mb-2">{question}</h3>
        <p className="text-gray-700">{answer}</p>
      </div>
    </BlurFade>
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
