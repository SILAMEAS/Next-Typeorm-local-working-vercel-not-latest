"use client";
import {useEffect, useState} from "react";
import EditTitleModal from "@/components/modal/EditTitleModal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <EditTitleModal />
        </>
    );
};
