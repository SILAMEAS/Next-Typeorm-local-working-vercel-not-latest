import {useEffect, useState} from 'react';
import {ProfileDto} from "@/db/dto/ProfileDto";

const useGetProfile = () => {
    const [profile, setProfile] = useState<ProfileDto | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
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
    return {profile,isLoading}
};

export default useGetProfile;
