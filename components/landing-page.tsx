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
      <div className="relative z-10 flex flex-col w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-24 space-y-12 md:space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col gap-4">
          <BlurFade delay={delayBase} inView>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl text-black leading-tight text-balance">
              Gere sua Landing Page Profissional e Editável em 3 Passos.
            </h1>
          </BlurFade>
          <BlurFade delay={delayBase * 2} inView>
            <p className="text-lg sm:text-xl text-gray-800 md:text-2xl leading-relaxed">
              Tecnologia Vistra: Você preenche o briefing inteligente, nossa automação constrói o código.
            </p>
          </BlurFade>
          <BlurFade delay={delayBase * 2.5} inView>
            <a
              href="https://pay.kirvano.com/fd377826-0742-434b-9443-fc62aea26907"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // @ts-ignore
                if (typeof window !== "undefined" && window.fbq) {
                  // @ts-ignore
                  window.fbq('track', 'InitiateCheckout');
                }
              }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] w-full md:w-auto whitespace-nowrap mt-4 animate-pulse hover:animate-none min-h-[52px] touch-manipulation"
            >
              <span>QUERO MINHA MÁQUINA DE VENDAS</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </BlurFade>
        </section>

        {/* How it Works Section */}
        <section className="space-y-4 sm:space-y-6 bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
          <BlurFade delay={delayBase} inView>
            <h2 className="text-2xl font-bold text-black">Como funciona?</h2>
          </BlurFade>

          <div className="grid gap-4">
            <FeatureItem delay={delayBase * 2} text="Pagamento Seguro — Garanta sua licença vitalícia por R$ 39,90." />
            <FeatureItem delay={delayBase * 3} text="Briefing Guiado — Receba nosso formulário inteligente (via WhatsApp) para dizer o que você vende." />
            <FeatureItem delay={delayBase * 4} text="Processamento Automático — Nossa tecnologia compila seu site, instala o Pixel e te entrega o link com Painel Admin pronto para vender." />
            <FeatureItem delay={delayBase * 5} text="Entrega Expressa — Compilação e Hospedagem em até 4 horas (Geralmente em minutos)." />
          </div>
        </section>

        {/* Objection Handling */}
        <section className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200">
          <BlurFade delay={delayBase} inView>
            <h3 className="text-xl font-bold text-black">&quot;Mas por R$ 39,90 isso é impossível...&quot;</h3>
          </BlurFade>
          <BlurFade delay={delayBase * 2} inView>
            <div className="space-y-4 text-gray-800">
              <p>O Algoritmo Vistra já foi treinado com milhares de campanhas vencedoras.</p>
              <p>A estrutura não é aleatória; é baseada em dados de conversão.</p>
              <p className="font-medium text-black">Enquanto um designer chuta o que é bonito, nossa tecnologia aplica o que vende. O resultado? Landing pages de padrão premium por um preço que desafia a lógica do mercado.</p>
            </div>
          </BlurFade>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center text-center space-y-6 pt-8">
          <BlurFade delay={delayBase} inView>
            <a
              href="https://pay.kirvano.com/fd377826-0742-434b-9443-fc62aea26907"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // @ts-ignore
                if (typeof window !== "undefined" && window.fbq) {
                  // @ts-ignore
                  window.fbq('track', 'InitiateCheckout');
                }
              }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] w-full md:w-auto whitespace-nowrap animate-pulse hover:animate-none min-h-[52px] touch-manipulation"
            >
              <span>GERAR MEU SITE AUTOMÁTICO</span>
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

        {/* Admin Panel Section */}
        <section className="space-y-4 sm:space-y-6 bg-gray-900 text-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <BlurFade delay={delayBase} inView>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">VOCÊ NO CONTROLE (PAINEL INCLUSO)</h2>
            <p className="text-gray-300 mb-6">Diferente de agências que cobram para mudar uma vírgula, aqui você recebe acesso total ao Vistra Admin:</p>
          </BlurFade>

          <div className="grid gap-4 relative z-10">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-500/20 p-1.5 rounded-full">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <p className="text-gray-200"><span className="font-semibold text-white">Altere textos e preços na hora.</span></p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-500/20 p-1.5 rounded-full">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <p className="text-gray-200"><span className="font-semibold text-white">Troque links de Checkout/WhatsApp.</span></p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-500/20 p-1.5 rounded-full">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <p className="text-gray-200"><span className="font-semibold text-white">Acompanhe cliques e visitas.</span></p>
            </div>
          </div>

          <BlurFade delay={delayBase * 2} inView>
            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <p className="text-lg font-medium text-blue-300">Sua independência digital custa menos que um hambúrguer.</p>
            </div>
          </BlurFade>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 sm:space-y-8 pt-6 sm:pt-8">
          <BlurFade delay={delayBase} inView>
            <h2 className="text-2xl font-bold text-center text-black">FAQ - Matando Objeções</h2>
          </BlurFade>
          <div className="grid gap-6">
            <FaqItem
              delay={delayBase * 2}
              question="Como funciona?"
              answer="Pagamento Seguro > Briefing Inteligente > Site Pronto. Simples assim."
            />
            <FaqItem
              delay={delayBase * 3}
              question="Quanto tempo para entregar?"
              answer={
                <span>
                  <strong className="bg-yellow-200 px-1 text-black">Nosso recorde atual é de 3 minutos e 12 segundos.</strong> Mas pedimos até 4h caso a demanda esteja muito alta.
                </span>
              }
            />
            <FaqItem
              delay={delayBase * 4}
              question="Funciona em celular?"
              answer="Sim, nossa automação é 'Mobile First'. Seu site carrega mais rápido no 4G que o dos concorrentes."
            />
            <FaqItem
              delay={delayBase * 5}
              question="Tenho que pagar hospedagem?"
              answer="Não. Hospedagem de alta velocidade inclusa na oferta vitalícia."
            />
            <FaqItem
              delay={delayBase * 6}
              question="O que vem incluso?"
              answer="Site Completo + Hospedagem + Painel Admin + Suporte. Tudo vitalício."
            />
          </div>
        </section>

        {/* Closing Section */}
        <section className="flex flex-col items-center text-center space-y-8 pt-8 pb-12">
          <BlurFade delay={delayBase} inView>
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg max-w-2xl mx-auto space-y-4 sm:space-y-6">
              {/* Value Stack Anchoring */}
              <div className="text-left space-y-2 sm:space-y-3 mb-4 sm:mb-6 border-b border-gray-200 pb-4 sm:pb-6">
                <p className="font-bold text-gray-600 tracking-wide text-sm uppercase">Veja o que você está levando:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Landing Page Otimizada</span>
                    <span className="text-red-500 line-through decoration-red-500 font-medium">R$ 500,00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Hospedagem Vitalícia</span>
                    <span className="text-red-500 line-through decoration-red-500 font-medium">R$ 29,90/mês</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Painel Admin Vistra</span>
                    <span className="text-red-500 line-through decoration-red-500 font-medium">R$ 197,00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Certificado SSL (Cadeado)</span>
                    <span className="text-red-500 line-through decoration-red-500 font-medium">R$ 50,00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 font-bold text-lg text-gray-400 border-t border-gray-100 mt-2">
                  <span>VALOR TOTAL:</span>
                  <span className="text-red-500 line-through decoration-red-500">R$ 776,90</span>
                </div>
                <div className="w-full text-center pt-4">
                  <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">HOJE POR APENAS:</span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-green-600 drop-shadow-sm">
                  R$ 39,90
                </h2>
                <p className="text-2xl font-bold text-black">
                  não é o preço.
                </p>
              </div>
              <p className="text-lg sm:text-xl text-gray-800 font-medium">
                É o investimento mais inteligente que você vai fazer hoje.
              </p>
              <a
                href="https://pay.kirvano.com/fd377826-0742-434b-9443-fc62aea26907"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] w-full whitespace-normal text-center h-auto min-h-[56px] animate-pulse hover:animate-none touch-manipulation"
              >
                <span>ACESSAR TECNOLOGIA VISTRA POR R$ 39,90</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>
            </div>
          </BlurFade>
        </section>
      </div>
    </div>
  )
}

function FaqItem({ question, answer, delay }: { question: string; answer: string | React.ReactNode; delay: number }) {
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
