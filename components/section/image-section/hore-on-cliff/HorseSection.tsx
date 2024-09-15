import React from 'react'
import Image from "next/image";

export default function HorseSection() {
    return <Image
        src="/horse.png"
        alt="horse"
        height={300}
        width={300}
        className="absolute right-55 top-40"
    />
}
