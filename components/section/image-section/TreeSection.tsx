import React from 'react';
import Image from "next/image";

const TreeSection = () => {
    return <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className="w-full h-full"
        />
    </div>
};

export default TreeSection;
