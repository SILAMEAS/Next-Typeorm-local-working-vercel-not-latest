"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {ProfileDto} from "@/db/dto/ProfileDto";
import {Loading} from "@/components/Loading";
import {Edit} from "lucide-react";
import {useModal} from "@/hooks/store/use-modal-store";
import {ActionTooltip} from "@/components/action-tooltip";

export default function Home() {
    const [profile, setProfile] = useState<ProfileDto | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const { onOpen } = useModal();
    const getData = async () => {
        await fetch('/api/profiles')
            .then((res) => res.json())
            .then((data) => {
                const {id, ...res} = data[0];
                setProfile(res)
                setLoading(false);
            });
    }
    useEffect(() => {
        setLoading(true);
        getData().then(r => r);
    }, []);
    if (isLoading || !profile) {
        return <Loading/>
    }
    return (
        <main className="w-screen h-screen relative">
            <div
                className="flex items-center w-full h-full bg-cover bg-center"
                style={{backgroundImage: "url(/main-bg.webp)"}}
            >

            </div>

            <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5 hidden">
                <Link
                    href="/my-skills"
                    className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
                >
                    My skills
                </Link>

                <Link
                    href="/my-projects"
                    className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
                >
                    My projects
                </Link>

            </div>

            <div className="absolute bottom-0 right-0 z-[10] invisible md:visible ">
                <Image
                    src="/horse.png"
                    alt="horse"
                    height={300}
                    width={300}
                    className="absolute right-55 top-40"
                />

                <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
            </div>
            <div className={'absolute top-20 '}>
                <div className={'flex flex-col space-y-3'}>
                    <Image src="/profile.png" alt="cliff" width={540} height={480}/>
                    <p className="text-gray-200 visible md:invisible ">
                        {profile?.description}    <ActionTooltip label={"Edit"}>
                        <Edit
                            onClick={()=>onOpen('editTitle',{profile})}
                            className={
                                "hidden group-hover:block w-4 h-4 text-zinc-500 hover:to-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                            }
                        />
                    </ActionTooltip>
                    </p>
                    <div
                        className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] invisible md:visible">
                        <h1 className="text-[50px] text-white font-semibold">
                            {profile?.title}  <Edit
                            onClick={()=>onOpen('editTitle', {profile})}
                            className={
                                "text-zinc-300 inline"
                            }
                        />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
                                {profile?.mainTile}
            </span>
                        </h1>
                        <p className="text-gray-200  md:block">
                            Hello, I`m Sila. My experience is 2 years with web development. You can contact me if you
                            want
                            to build
                            your website for your business.
                        </p>
                        <div className="flex-col md:flex-row hidden md:flex gap-5">
                            <Link
                                href="/my-skills"
                                className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
                            >
                                My skills
                            </Link>
                            <Link
                                href="/my-projects"
                                className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
                            >
                                <div
                                    className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
                                My projects
                            </Link>
                            {/*<Link*/}
                            {/*  href="/contact-me"*/}
                            {/*  className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"*/}
                            {/*>*/}
                            {/*  <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />*/}
                            {/*  Contact me*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 z-[5] w-full h-auto">
                <Image
                    src="/trees.webp"
                    alt="trees"
                    width={2000}
                    height={2000}
                    className="w-full h-full"
                />
            </div>

            <Image
                src="/stars.png"
                alt="stars"
                height={300}
                width={300}
                className="absolute top-0 left-0 z-[10]"
            />
        </main>
    );
}
