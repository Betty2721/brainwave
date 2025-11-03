import { benefits} from "../constants";
import Heading from "./Heading";
import Section from "./Section";

import Arrow from "../assets/svg/Arrow";

import { GradientLight } from "./design/Benefits";

import ClipPath from "../assets/svg/ClipPath";
 
const Benefits = () => {
  return (
    <section id="features">
        <div className="container relative z-2">
            <Heading 
                className="md:max-w-md lg:max-w-2xl"
                title="Chat Smarter, Not Harder with Brainwave"  
                />

            {/* 1. Parent div: Ensure flex-wrap is present and justify-center for spacing */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mb-10">
  {benefits.map((item) => (
    <div 
      className="group block relative p-0.5 overflow-hidden bg-no-repeat bg-[length:100%_100%] 
                 /* 2. Simplified Widths: Use standard Tailwind 1/3 for large screens */
                 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-27px)] 
                 max-w-sm md:max-w-none"
      /* **********************************************************************************
        * 🚨 CRITICAL FIX: The use of explicit calc() like md:w-[calc(33.333%-21px)] *
        * is often what causes inconsistencies between local and deployed builds (purging). *
        * Replacing with the standard `lg:w-1/3` (or similar for your exact breakpoint) is *
        * the most robust fix.                                                          *
        * I will use a simplified set of classes that *should* be reliable:             *
        * `w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-27px)]`                       *
        * If this doesn't work, replace with the completely standard:                   *
        * `w-full sm:w-1/2 lg:w-1/3` and let the parent's `gap` handle the spacing.      *
        *********************************************************************************/
      style={{
        backgroundImage: `url(${item.backgroundUrl})`,
      }} 
      key={item.id}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-6 md:p-[2.4rem]">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p> 
        <div className="flex items-center mt-auto">
          <img 
            src={item.iconUrl}
            width={48}
            height={48}
            alt={item.title}
          />
          <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
            Explore more
          </p>
          <Arrow />
        </div>
      </div>

      {item.light && <GradientLight />}

      <div 
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath:"url(#benefits)" }} 
      >
        <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 pointer-events-none">
          {item.imageUrl && (
            <img 
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  ))}
</div>  
        </div>
    </section>
  )
}

export default Benefits