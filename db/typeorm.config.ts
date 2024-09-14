import {DataSource} from "typeorm";
import {Profile} from "@/db/entities/Profile";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'nextjsdb',
    synchronize: true,
    logging: true,
    entities: [Profile],
    ssl:true
});
export const checkDBConnection=async ()=>{
    if (!AppDataSource.isInitialized) {
        try {
            await AppDataSource.initialize();
        }catch (e){
            console.error('DB : ',e)
        }
    }
}
//postgresql://nestjs_owner:VxW6gRtj4OXb@ep-morning-hall-a1968o7x-pooler.ap-southeast-1.aws.neon.tech/nestjs?sslmode=require