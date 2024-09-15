import { AppDataSource, checkDBConnection } from "@/db/typeorm.config";
import { Profile } from "@/db/entities/Profile";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { profileId: string } }) {
    try {
        await checkDBConnection();
        console.log("DB connection established");

        const reqBody = await req.json();
        const { profileId } = params;

        if (!profileId) {
            return new NextResponse("profileId is missing", { status: 400 });
        }

        const profileIdNum = parseInt(profileId, 10);
        if (isNaN(profileIdNum)) {
            return new NextResponse("Invalid profileId", { status: 400 });
        }

        const userRepository = AppDataSource.getRepository(Profile);
        const profile = await userRepository.findOneBy({ id: profileIdNum });

        if (profile) {
            profile.title = reqBody.title;
            await userRepository.save(profile);
            return NextResponse.json(profile, { status: 200 });
        } else {
            return new NextResponse("User not found", { status: 404 });
        }
    } catch (error) {
        console.error("Error updating profile:", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
