import  CredentialsProvider  from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import {prisma} from '@/lib/prisma'



export const authOptions :NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                user_Email:{label:'User Email',type:'email'},
                user_Password:{label:'User Password',type:'password'}
            },
            async authorize(credentials:any){

                if(!credentials.user_Email || !credentials.user_Password){
                    return null
                };

                const dbUser = await prisma.user.findUnique({where:{user_email:credentials.user_Email}});

                if(!dbUser) return null;

                const ispasswordValid = await bcrypt.compare(credentials.user_Password,dbUser.user_password);

                if(!ispasswordValid) return null;

                return {
                    id: dbUser.user_id,
                    email:dbUser.user_email,
                    role:dbUser.user_role,
                }                
            }
        })
    ],
    callbacks:{
        async jwt({user,token}:any){
            if(user){
                token.sub = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({token,session}:any){
            if(token){
                session.user.id = token.sub;
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages:{ signIn: '/adminlogin'},
    session:{strategy:'jwt'}
}