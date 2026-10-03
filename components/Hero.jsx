'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import LeadForm from './LeadForm'
import { heroSlides } from '../lib/images'
import { RERA_NO, PHONE_NUMBER } from '../lib/config'

// Slides extended with clones at both ends for seamless infinite circular loop
const extendedSlides = [
  heroSlides[heroSlides.length - 1],
  ...heroSlides,
  heroSlides[0],
]

const Hero = ({ setIsOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Infinite circular auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      // Reached the clone at the end -> jump back to real first slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(1)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    } else if (currentIndex <= 0) {
      // Reached the clone at start -> jump back to real last slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(extendedSlides.length - 2)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    }
  }

  // Active slide index (0 to 3) for highlighting tabs
  const activeSlide = (currentIndex - 1 + heroSlides.length) % heroSlides.length

  return (
    <section
      id="home"
      className="hero-section relative bg-gradient-to-br from-[#0e2726] via-[#091a19] to-[#040c0c] text-white overflow-hidden"
      style={{
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      <div className="w-full pt-[82px] pb-8 sm:pt-[88px] sm:pb-10 lg:pt-[98px] lg:pb-12 relative z-10">

        {/* Ambient subtle glow in background (static) */}
        <div className="absolute top-0 right-1/4 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#C05656]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-3.5 sm:px-6" style={{ maxWidth: '1380px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* ══════════════════════════════════════════════════════
                LEFT 50% (7 cols on lg): Pure Visual & Info
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Heading & Brand Identity */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3.5 mb-1.5 flex-wrap sm:flex-nowrap">
                  <h1 className="text-white font-black tracking-tight leading-tight text-[22px] min-[390px]:text-[26px] sm:text-[36px] md:text-[44px] m-0">
                    Godrej Verano
                  </h1>
                  <span className="text-[9.5px] sm:text-[11px] uppercase tracking-[1px] font-semibold text-[#f2aeae] bg-[#C05656]/20 border border-[#C05656]/40 px-2 sm:px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    By Godrej Properties
                  </span>
                </div>

                {/* Brand Tagline & Location Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-[13.5px] text-white/75 mt-1 sm:mt-1.5">
                  <span className="text-white/90 font-medium tracking-[1.5px] sm:tracking-[2px] uppercase text-[11px] sm:text-xs">
                    Miami-Inspired Bay Living
                  </span>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="inline-flex items-start sm:items-center gap-1.5 text-white/80 font-medium">
                    <i className="fas fa-location-dot text-[#C05656] text-[11px] mt-0.5 sm:mt-0 shrink-0" />
                    <span>Sector 63A, Golf Course Extension Road, Gurugram</span>
                  </span>
                </div>
              </div>

              {/* ── 100% CLEAN IMAGE (Infinite circular carousel) ── */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-black">
                <div 
                  onTransitionEnd={handleTransitionEnd}
                  className={`flex w-full ${
                    isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'
                  }`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {extendedSlides.map((slide, idx) => (
                    <div 
                      key={`${slide.id}-${idx}`} 
                      className="relative w-full h-[220px] xs:h-[250px] sm:h-[310px] md:h-[350px] lg:h-[370px] flex-shrink-0"
                    >
                      <Image
                        src={slide.img}
                        alt={slide.name}
                        fill
                        priority={idx === 1}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SIMPLE CLEAN BUTTONS (Below image) ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setIsTransitioning(true)
                        setCurrentIndex(idx + 1)
                      }}
                      className={`py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center border truncate ${
                        isActive
                          ? 'bg-[#C05656] text-white border-[#C05656] shadow-md'
                          : 'bg-white/10 text-white/75 border-transparent hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{slide.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* Project RERA Number Box */}
              <div className="mt-4">
                <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-white/[0.06] border border-white/15 rounded-lg py-2 px-3 sm:py-2.5 sm:px-4 shadow-sm backdrop-blur-sm max-w-full transition-all hover:border-white/30">
                  <div className="inline-flex items-center gap-1.5 shrink-0">
                    <i className="fas fa-shield-halved text-emerald-400 text-[12px] sm:text-[13px]" />
                    <span className="text-white/70 font-medium text-xs sm:text-[13.5px] whitespace-nowrap">
                      RERA No :
                    </span>
                  </div>
                  <span className="text-white font-bold tracking-normal sm:tracking-wider text-[11px] sm:text-[13.5px] break-all">
                    {RERA_NO}
                  </span>
                </div>
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════
                RIGHT 50% (5 cols on lg): Conversion Console Card
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 mt-2 lg:mt-0 flex flex-col">

              {/* Key Quick Specs Strip (Moved above the form) */}
              <div className="flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-3 sm:gap-4 lg:gap-5 p-2.5 sm:p-4 mb-5 rounded-2xl bg-white/5 border border-white/30 text-xs sm:text-sm shadow-lg w-full">
                <div className="flex-shrink-0">
                  <span className="text-white/60 text-[9.5px] sm:text-[10.5px] uppercase block mb-0.5">Price</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C05656] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C05656]"></span>
                    </span>
                    <strong className="blink-price font-black text-[14.5px] sm:text-[19px] whitespace-nowrap tracking-tight">
                      ₹ 5.91 Cr* Onwards
                    </strong>
                  </div>
                </div>
                <div className="border-l border-white/20 pl-2 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-white/60 text-[9.5px] sm:text-[10.5px] uppercase block mb-0.5">Typology</span>
                  <strong className="text-white font-bold text-[12px] sm:text-[14px] whitespace-nowrap">3, 4 &amp; 5 BHK</strong>
                </div>
                <div className="border-l border-white/20 pl-2 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-white/60 text-[9.5px] sm:text-[10.5px] uppercase block mb-0.5">Status</span>
                  <strong className="text-emerald-400 font-bold text-[12px] sm:text-[14px] whitespace-nowrap">New Launch</strong>
                </div>
              </div>

              <div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(11, 28, 27, 0.94)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.65)',
                  borderTop: '4px solid #C05656',
                }}
              >
                {/* Header */}
                <div className="text-center mb-4 sm:mb-5">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-white tracking-tight m-0">
                    Get Instant Cost Sheet &amp; Plans
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/70 mt-1 font-normal">
                    Delivered on WhatsApp &amp; Email in 60s
                  </p>
                </div>

                {/* LeadForm */}
                <LeadForm formName="Godrej Verano Hero Form" btnText="Get Cost Sheet on WhatsApp" />

                {/* Instant Actions (Call & Visit on Mobile) */}
                <div className="mt-3.5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11.5px] sm:text-xs text-white/80">
                  <button
                    type="button"
                    onClick={() => setIsOpen && setIsOpen(true)}
                    className="text-[#d93843] hover:underline flex items-center gap-1.5 font-semibold cursor-pointer"
                  >
                    <i className="fas fa-calendar-check text-[11px]" />
                    <span>Book VIP Visit</span>
                  </button>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-emerald-400 hover:underline flex items-center gap-1.5 font-semibold"
                  >
                    <i className="fas fa-phone text-[11px]" />
                    <span>Call Sales Desk</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
