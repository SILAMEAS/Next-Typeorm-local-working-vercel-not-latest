"use client"
import React from 'react';
import {Loading} from "@/components/Loading";
import useGetProfile from "@/components/hooks/useGetProfile";
import TitleDescriptionSection from "@/components/section/profile/pice/TitleDescriptionSection";

const ProfileSection = () => {
    const {profile,isLoading}=useGetProfile();
    return <div className={'absolute top-36 md:top-48 lg:top-28'}>
        {
            (isLoading || !profile) ? <Loading className={'p-0 md:pl-20'}/> : <div className={''}>
                {/*<ProfileImageSection/>*/}
                <TitleDescriptionSection profile={profile}/>
            </div>
        }

    </div>
};





{/*<div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5 hidden">*/}
{/*    <Link*/}
{/*        href="/my-skills"*/}
{/*        className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"*/}
{/*    >*/}
{/*        My skills*/}
{/*    </Link>*/}

{/*    <Link*/}
{/*        href="/my-projects"*/}
{/*        className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"*/}
{/*    >*/}
{/*        My projects*/}
{/*    </Link>*/}

{/*</div>*/}

export default ProfileSection;
