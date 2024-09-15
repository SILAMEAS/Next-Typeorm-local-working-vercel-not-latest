import React from 'react';
import TitleSection from "@/components/section/profile/pice/TitleSection";
import DescriptionSection from "@/components/section/profile/pice/DescriptionSection";
import CoupleButtonSection from "@/components/section/profile/pice/CoupleButtonSection";
import {ProfileDto} from "@/db/dto/ProfileDto";
import {Button} from "@/components/ui/button";

const TitleDescriptionSection = ({profile}:{profile?: ProfileDto}) => {
    return <div
        className="pl-5 md:lg:pl-20 md:pl-20 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <TitleSection profile={profile}/>
        <DescriptionSection profile={profile}/>
        <CoupleButtonSection/>
    </div>
};

export default TitleDescriptionSection;
