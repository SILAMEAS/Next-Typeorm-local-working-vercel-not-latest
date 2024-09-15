import React from 'react';
import Link from "next/link";

const CoupleButtonSection = () => {
    return <div className="flex-row flex gap-5 ">
        <Link
            href="/my-skills"
            className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-sm md:text-lg text-white max-w-[100px] md:max-w-[200px] lg:max-w-[200px]"
        >
            My skills
        </Link>
        <Link
            href="/my-projects"
            className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-sm md:text-lg text-white max-w-[120px] md:max-w-[200px] lg:max-w-[200px]"
        >
            <div
                className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
            My projects
        </Link>
    </div>
};

export default CoupleButtonSection;
