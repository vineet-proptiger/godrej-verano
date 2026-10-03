'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Godrej Verano Sector 63A?',
    answer: (
      <>
        Godrej Verano Sector 63A offers spacious <strong className="font-semibold text-[#222222]">3 BHK, 4 BHK and 5 BHK luxury residences</strong> with modern layouts, expansive balconies, premium interiors, and breathtaking Aravalli views. The homes are envisioned as North India&apos;s First Bay Living Residences inspired by Miami elegance.
      </>
    ),
  },
  {
    question: 'Is Godrej Verano Sector 63A RERA registered?',
    answer: (
      <>
        Yes, <strong className="font-semibold text-[#222222]">Godrej Verano Sector 63A</strong> is registered with the Haryana Real Estate Regulatory Authority (HARERA) under RERA Registration No: <strong className="font-semibold text-[#222222]">RC/REP/HARERA/GGM/1081/813/2026/53</strong>.
      </>
    ),
  },
  {
    question: 'How big is Godrej Verano Sector 63A and how many towers does it have?',
    answer:
      'Godrej Verano is spread across approximately 11 acres of premium land featuring a low-density community with only 4 towers, over 8 acres of landscaped greens, limited penthouses, and world-class resort amenities.',
  },
  {
    question: 'Where exactly is Godrej Verano Sector 63A located?',
    answer: (
      <>
        Godrej Verano is strategically located on <strong className="font-semibold text-[#222222]">Sector 63A, Golf Course Extension Road, Gurugram</strong>, offering excellent connectivity to <strong className="font-semibold text-[#222222]">Rapid Metro, Cyber City, Sohna Road, SPR, and IGI Airport</strong>.
      </>
    ),
  },
  {
    question: 'Is Godrej Verano Sector 63A a good investment?',
    answer:
      "Yes, Godrej Verano Sector 63A is considered a top-tier investment due to Godrej Properties' trusted legacy, its prime Golf Course Extension Road location, North India's first Miami-inspired Bay Living design, and rapid capital appreciation in Gurugram.",
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#C05656] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#e5f0ff] text-[#0052cc] font-semibold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
