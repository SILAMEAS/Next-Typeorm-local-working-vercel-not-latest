import React from 'react';
import {Edit} from "lucide-react";
import {ProfileDto} from "@/db/dto/ProfileDto";
import {useModal} from "@/hooks/store/use-modal-store";

const TitleSection = ({profile}:{profile?: ProfileDto}) => {
    const { onOpen } = useModal();
    return <h1 className="text-[22px] md:text-[50px] lg:text-[50px] text-white font-semibold z-50">
        {profile?.title} <Edit
        onClick={() => onOpen('editTitle', {profile})}
        className={
            "text-zinc-300 inline z-100 cursor-pointer"
        }
    />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                      {" "}
            {profile?.mainTile}
                        </span>
    </h1>
};

export default TitleSection;
