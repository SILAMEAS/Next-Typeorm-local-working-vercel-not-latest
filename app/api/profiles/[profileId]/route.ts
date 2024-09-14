import {AppDataSource, checkDBConnection} from "@/db/typeorm.config";
import {Profile} from "@/db/entities/Profile";
import {NextResponse} from "next/server";

export async function PATCH(  req: Request,
                              { params }: { params: { profileId: string } }) {
    try {
        await checkDBConnection();
        const reqBody = await req.json();
        const { profileId } = params;
        const userRepository = AppDataSource.getRepository(Profile);
        if(!profileId){
            return new NextResponse("profileId is missing", { status: 400 });
        }
        const profile = await userRepository.findOneBy({ id: +profileId });
        if (profile) {
            profile.title = reqBody.title;
            await userRepository.save(profile);
        } else {
            console.log("User not found");
        }
        return NextResponse.json(profile);
    } catch (error) {
        return NextResponse.error();
    }
}