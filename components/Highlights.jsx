'use client'
import React from 'react'

const highlights = [
  {
    title: '11+ Acres Development',
    description: 'Spread across ~11 acres of premium land with a low-density community of only 4 towers.',
    icon: 'fa-solid fa-seedling'
  },
  {
    title: '80%+ Open Green Spaces',
    description: 'Over 8 acres of landscaped greens, manicured lawns, and panoramic Aravalli views.',
    icon: 'fa-solid fa-tree'
  },
  {
    title: 'Premium 3, 4 & 5 BHK',
    description: 'North India’s First Bay Living Residences inspired by the vibrant elegance of Miami.',
    icon: 'fa-solid fa-house-chimney'
  },
  {
    title: 'Resort-Style Clubhouse',
    description: 'Grand luxury clubhouse with infinity pool, spa, fitness club, and recreational lounges.',
    icon: 'fa-solid fa-hotel'
  },
  {
    title: '35+ World-Class Amenities',
    description: 'Curated wellness, sports, children play zones, and lifestyle amenities for every age group.',
    icon: 'fa-solid fa-shapes'
  },
  {
    title: 'Multi-Tier Security',
    description: 'Smart multi-tier surveillance and 24x7 security ensuring utmost safety and privacy.',
    icon: 'fa-solid fa-shield-halved'
  },
  {
    title: 'Excellent Connectivity',
    description: 'Strategically located on Golf Course Extension Road, Sector 63A, Gurugram.',
    icon: 'fa-solid fa-route'
  },
  {
    title: 'Sustainable Design',
    description: 'Contemporary eco-friendly architecture with expansive balconies and optimal ventilation.',
    icon: 'fa-solid fa-leaf'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#C05656] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#174D4B] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Highlights of Godrej Verano Sector 63A
          </h2>
        </div>

        {/* 8 Cards: 4 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#F7E8E8] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(192,86,86,0.16)] hover:border-[#C05656]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#FBF2F2] text-[#C05656] group-hover:bg-[#C05656] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#174D4B] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#C05656] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#C05656]/25 group-hover:bg-[#C05656] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
