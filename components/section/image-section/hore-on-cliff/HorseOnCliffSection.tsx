import React from 'react';
import HorseSection from "@/components/section/image-section/hore-on-cliff/HorseSection";
import CliffSection from "@/components/section/image-section/hore-on-cliff/CliffSection";
// bottom-[-250px] right-[-200px]
const HorseOnCliffSection = () => {
    return <div className="absolute bottom-[-300px] md:bottom-0 right-[-200px] md:right-0 z-[10]">
        <HorseSection/>
        <CliffSection/>
    </div>
};

export default HorseOnCliffSection;
