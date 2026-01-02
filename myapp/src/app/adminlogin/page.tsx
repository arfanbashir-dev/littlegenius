'use client'

import { useState,useEffect,ChangeEvent,FormEvent } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

export default function AdminLogin(){

    const form_initial_state = {user_email:'', user_password:''}

    const [form,setForm] = useState(form_initial_state);
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    const router = useRouter();
    const {data: session} = useSession();
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setForm(prev => ({...prev,[name]:value}))

    }

    // useEffect(() => {
    //     // if(session?.user.role === 'admin'|| session?.user.role ==='user'){
    //     //     router.push('/dashboard')
    //     // }
    //     if(session?.user?.role ==='admin'){ router.push('/dashboard') }
    // },[session,router]);


    async function handleSubmit(e: FormEvent) {
      e.preventDefault();
      setMessage('');
      setLoading(true);

  try {
    const res = await signIn('credentials', {
      redirect: false,
      user_Email: form.user_email,
      user_Password: form.user_password,
    });

    if (res?.ok && !res.error) {
      setMessage('Login successful');
      router.push('/dashboard2');
      setForm(form_initial_state);
    } else {
      setMessage(res?.error || 'Invalid credentials');
    }
  } catch (err) {
    setMessage(err instanceof Error ? err.message : 'Server Error');
  } finally {
    setLoading(false);
  }
}


    return (
    
    <div className="pt-32">
            <div className="p-10 bg-yellow-500">
                <form onSubmit={handleSubmit} className="p-10 w-[600px] bg-yellow-700 rounded-lg">

                    <div className="flex-column">
                        <label htmlFor="user_email">Admin Email</label>
                        <input name='user_email' type="email" className="w-96" required
                            onChange={handleChange} value={form.user_email}
                        />
                    </div>
                    <div className="flex-column">
                        <label htmlFor="user_password">Admin Password</label>
                        <input name="user_password" type="password" className="w-96" required
                            onChange={handleChange} value={form.user_password}
                        />
                    </div>

                    <div className="py-5">
                        
                        <button type="submit"  className="w-96"
                        >   {loading? 'Submitting...':'submit'}
                        </button>
                        <p>{message}</p>
                    </div>

                </form>
            </div>
        </div>
    )
}
