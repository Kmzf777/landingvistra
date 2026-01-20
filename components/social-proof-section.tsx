"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import Image from "next/image"

export function SocialProofSection() {
  const delayBase = 0.1

  return (
    <section className="space-y-8 sm:space-y-12 py-8 sm:py-12">
      <div className="space-y-4 text-center">
        <BlurFade delay={delayBase} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Não é sorte. É método.
          </h2>
        </BlurFade>
        <BlurFade delay={delayBase * 2} inView>
          <p className="mx-auto max-w-[700px] text-gray-800 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-2">
            O Sistema Vistra replica o processo que agências cobram milhares para executar — automatizando 100% da parte técnica e focando energia no que realmente importa: conversão.
          </p>
        </BlurFade>
      </div>

      <div className="space-y-10 sm:space-y-16">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-center">
          <BlurFade delay={delayBase} inView className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image
                src="/Imagem-1-vistra.jpg"
                alt="Mapeamento da jornada do lead"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </BlurFade>
          <BlurFade delay={delayBase * 2} inView className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                A tecnologia mapeia a jornada mental do seu lead antes de gerar o código. A página é construída com base em psicologia de consumo, guiando o cliente até a compra.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-4 sm:gap-8 items-center">
          <BlurFade delay={delayBase} inView className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image
                src="/imagem-2-vistra.jpg"
                alt="Hierarquia visual e clareza"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
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
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-center">
          <BlurFade delay={delayBase} inView className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image
                src="/imagem-3-vistra.jpg"
                alt="Copywriting e gatilhos mentais"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
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
