'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-10 md:py-14 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col lg:flex-row items-start lg:mx-[-12px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[470px] rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Godrej Verano Sector 63A" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] lg:pl-16">
            <div className="section-heading">
              <span className="text-[#b31c26] font-bold text-[14px] tracking-widest uppercase mb-3 block">
                Miami-Inspired Bay Living
              </span>
              <h2 className="text-[#111111] text-[25px] sm:text-[30px] md:text-[38px] font-extrabold leading-[1.2] mb-4">
                Overview
              </h2>
              <div className="mb-5 pr-0 lg:pr-6">
                <div className={`text-[#6c757d] text-[15px] leading-[1.7] text-justify ${!isExpanded ? 'line-clamp-5 overflow-hidden' : ''}`}>
                  <p className="m-0 mb-3">
                    <strong className="text-[#111111]">Godrej Verano</strong> is an upcoming premium residential project in Sector 63A, Gurgaon, strategically located along Golf Course Extension Road and envisioned as North India&apos;s First Bay Living Residences. Spread across approximately 11 acres, Godrej Verano Sector 63A Gurgaon offers premium 3, 4 &amp; 5 BHK residences in a low-density community featuring only four towers, over eight acres of landscaped greens, limited penthouses, expansive balconies, and stunning Aravalli views and city landscapes.
                  </p>
                  <p className="m-0">
                    Inspired by the vibrant elegance of Miami Bay Living, Godrej Sector 63A brings together contemporary architecture, open spaces, privacy and refined lifestyle experiences, making it a distinctive Godrej New Launch Project in Sector 63A for homebuyers seeking an exclusive and well-connected address in Gurugram.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#b31c26] font-semibold text-[14.5px] mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#b31c26]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Configuration</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">3, 4 &amp; 5 BHK</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#b31c26]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Land Parcel Area</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">~11 Acres (Only 4 Towers)</p>
                  </div>
                </div>
                {/* Feature 3 (From User SS: Green Living) */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#b31c26]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Green Living</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">8+ Acres Landscaped Greens</p>
                  </div>
                </div>
                {/* Feature 4 (From Brochure: Resort Clubhouse) */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#b31c26]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Resort Clubhouse</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">World-Class Amenities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
