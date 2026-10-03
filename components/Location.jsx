'use client'
import React from 'react'

const locationList = [
  {
    title: 'Golf Course Ext. Road',
    time: '2 Mins',
    icon: 'fa-solid fa-location-dot',
  },
  {
    title: 'Golf Course Road',
    time: '10 Mins',
    icon: 'fa-solid fa-train-subway',
  },
  {
    title: 'Cyber Hub',
    time: '10 Mins',
    icon: 'fa-solid fa-building',
  },
  {
    title: 'NH-48',
    time: '15 Mins',
    icon: 'fa-solid fa-road',
  },
  {
    title: 'Golf Course',
    time: '16 Mins',
    icon: 'fa-regular fa-clock',
  },
  {
    title: 'IGI Airport',
    time: '25 Mins',
    icon: 'fa-solid fa-plane-departure',
  },
  {
    title: 'Top Schools',
    time: '5-15 Mins',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    title: 'Leading Hospitals',
    time: '5-15 Mins',
    icon: 'fa-solid fa-hospital',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[780px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#C05656] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#174D4B] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Location &amp; Connectivity
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (Thin Sleek Cards) / Right Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 8 Location Points (Slim & Thin Grid) */}
          <div className="flex flex-col gap-2 sm:gap-2.5 justify-center">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 30).toString()}
                className="group bg-white hover:bg-[#FBF2F2] border border-[#F7E8E8] hover:border-[#C05656]/60 rounded-[12px] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(192,86,86,0.14)] transition-all duration-200"
              >
                {/* Left side: Pin Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FBF2F2] group-hover:bg-[#C05656] text-[#C05656] group-hover:text-white flex items-center justify-center text-[12px] sm:text-[13px] shrink-0 transition-colors duration-200">
                    <i className={item.icon || 'fa-solid fa-location-dot'}></i>
                  </div>
                  <span className="text-[#174D4B] group-hover:text-[#C05656] font-semibold text-[13px] sm:text-[14px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#FBF2F2] group-hover:bg-[#C05656] text-[#C05656] group-hover:text-white font-bold text-[11px] sm:text-[12px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed */}
          <div 
            className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex flex-col"
            data-aos="fade-left"
          >
            <iframe
              src="https://maps.google.com/maps?q=Godrej+Verano+Sector+63A+Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Godrej Verano Sector 63A Google Maps Location"
              className="w-full h-full block flex-1"
            />
            {/* Direct Google Maps Navigation Button */}
            <div className="absolute bottom-3 right-3 z-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Godrej+Verano+Sector+63A+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#111111] hover:text-[#C05656] px-4 py-2 rounded-full text-xs font-bold shadow-md border border-gray-200 transition-colors backdrop-blur-sm cursor-pointer"
              >
                <i className="fa-solid fa-diamond-turn-right text-[#C05656]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
