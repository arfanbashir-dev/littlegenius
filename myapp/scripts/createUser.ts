import dotenv from 'dotenv'
dotenv.config({path:'.env'});

// import {PrismaClient} from '../src/generated/prisma/index'
//  const prisma = new PrismaClient()

import {prisma} from '@/lib/prisma'
import bcrypt from 'bcryptjs'

async function createUser() {
    
    const userObj = {
        
        user_name : 'Arfan Bashir',
        user_email: 'admin@gmail.com',
        user_password:'admin@123',
        user_role:'admin'
    }

    try {

       await prisma.$disconnect();

       const existingUser = await prisma.user.findUnique({where:{user_email:userObj.user_email}});

       if(existingUser) return null;

       const hashed_password = await bcrypt.hash(userObj.user_password,10);

       const newUser = {...userObj,user_password:hashed_password}

       const seedUser = await prisma.user.create({data:newUser})

       console.log(`${userObj.user_name.toUpperCase()} as 
            ${userObj.user_role.toUpperCase()} has been created successfully`
        );

    } catch (error) {

        console.log('Server Error',error);
        return null;
        
    }finally{
        await prisma.$disconnect();
    }
}

createUser();