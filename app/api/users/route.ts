// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {AppDataSource, checkDBConnection} from "@/db/typeorm.config";
import {NextResponse} from "next/server";
import {Profile} from "@/db/entities/Profile";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (!AppDataSource.isInitialized) {
//         await AppDataSource.initialize();
//     }
//
//     const userRepository = AppDataSource.getRepository(User);
//
//     if (req.method === 'GET') {
//         // Fetch all users
//         const users = await userRepository.find();
//         return res.status(200).json(users);
//     }
//
//     if (req.method === 'POST') {
//         // Create a new user
//         const { name, email } = req.body;
//         const newUser = userRepository.create({ name, email });
//         await userRepository.save(newUser);
//         return res.status(201).json(newUser);
//     }
//
//     return res.status(405).json({ message: 'Method not allowed' });
// }
export async function GET() {
    try {
        await checkDBConnection();
        const userRepository = AppDataSource.getRepository(Profile);
        let users: Profile[] = [];
        users =   await userRepository.find();
        //  @Column({default:"Make anything possible with"})
        //     title:string;
        //     @Column({default:"Web Development"})
        //     mainTile:string;
        //     @Column({default:"Hello, I`m Sila. My experience is 2 years with web development. You can \tcontact me if you want to build your website for your business."})
        if(users.length===0){
            users.push(userRepository.create({
                mainTile:"Web Development",
                title:"Make anything possible with",
                description:"Hello, I`m Sila. My experience is 2 years with web development. You can \\tcontact me if you want to build your website for your business."
                }
            ));
        }
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.error();
    }
}