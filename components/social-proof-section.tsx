"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import Image from "next/image"

export function SocialProofSection() {
  const delayBase = 0.1

  return (
    <section className="space-y-12 py-12">
      <div className="space-y-4 text-center">
        <BlurFade delay={delayBase} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Não é sorte. É método.
          </h2>
        </BlurFade>
        <BlurFade delay={delayBase * 2} inView>
          <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Cada landing page que sai daqui passa por um processo que agências cobram milhares para executar — mas eu automatizei o que é técnico e concentrei energia no que realmente importa: fazer seu visitante virar cliente.
          </p>
        </BlurFade>
      </div>

      <div className="space-y-16">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <BlurFade delay={delayBase} inView className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image
                src="/Imagem-1-vistra.jpg"
                alt="Mapeamento da jornada do lead"
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
          <BlurFade delay={delayBase * 2} inView className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Mapeio a jornada mental do seu lead antes de desenhar qualquer coisa. A página é construída de dentro da cabeça do seu cliente para fora.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <BlurFade delay={delayBase} inView className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image
                src="/imagem-2-vistra.jpg"
                alt="Hierarquia visual e clareza"
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
          <BlurFade delay={delayBase * 2} inView className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Zero elementos desnecessários. Cada cor, cada espaçamento, cada botão guia o olho até o CTA. Hierarquia visual que funciona em 3 segundos.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <BlurFade delay={delayBase} inView className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image
                src="/imagem-3-vistra.jpg"
                alt="Copywriting e gatilhos mentais"
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
          <BlurFade delay={delayBase * 2} inView className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Palavras que removem objeções. Headlines testadas. CTAs sem fricção. A página não explica — ela vende a transformação.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
