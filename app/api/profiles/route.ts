import {AppDataSource, checkDBConnection} from "@/db/typeorm.config";
import {NextResponse} from "next/server";
import {Profile} from "@/db/entities/Profile";

export async function GET() {
    try {
        await checkDBConnection();
        const userRepository = AppDataSource.getRepository(Profile);
        let users: Profile[] = [];
        users =   await userRepository.find();
        if(users.length===0){
            const newUser=userRepository.create({
                mainTile:"Web Development",
                title:"Make anything possible with",
                description:"Hello, I`m Sila. My experience is 2 years with web development. You can \\tcontact me if you want to build your website for your business."
                }
            );
            await userRepository.save(newUser);
        }
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.error();
    }
}
