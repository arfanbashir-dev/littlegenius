// 'use client'

// import { NavbarObj } from "../constants/NavObj2"
// import Image from "next/image"
// import LogoImg from '../../public/logopreschool.png'
// import Link from "next/link"
// import { FaCaretDown } from "react-icons/fa"
// import { signOut, useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"




// export default function Navbar(){

//     const router = useRouter();
//     const {data:seesion,status} = useSession();

//     const handleSignOut  = async () => { await signOut({redirect:false})
//         router.push('/adminlogin')
//     }
    
//     return(
//         <div className="h-32 bg-yellow-500 text-purple-600">
            
//             <div className="flex flex-col">

//                 <div  className="flex justify-between">

//                     <div className=" flex justify-center gap-1 items-center">
//                         <Image src={LogoImg} alt="LogoImg" className="w-24"/>
//                         <span>Little Geniuos Tech School</span>
//                     </div>
//                     <div className="p-5">
//                         {/* <label htmlFor="">Search</label> */}
//                         <input type="text" className="w-60 rounded-md placeholder-black bg-yellow-700" 
//                             placeholder="Type to search" 
//                             />
//                     </div>

//                 </div>
                

//                 <div className="">

//                     <ul className=" flex flex-row gap-16 justify-center font-bold">
//                         {NavbarObj.map((item) => (
//                             <li key={item.id} className=" relative group">
//                                 <Link href={item.href} className=" flex justify-center items-center gap-1 hover:text-black"
//                                 >   {item.title}
//                                     {item.submenu && (<FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />)} 
                                    
//                                 </Link>

//                                 {item.submenu && (
//                                 <ul 
//                                     className="hidden absolute text-purple-500 bg-yellow-500 w-60 rounded-lg group-hover:block p-2">
//                                     {item.submenu.map((subitem) => (
//                                         <li key={subitem.id} >
//                                             <Link href={subitem.href} className=" hover:text-black"
//                                             >{subitem.subtitle}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                             </li>
                            
//                         ))}

//                         <div className="">
//                             {status === 'loading' && ( <span>Loading...</span>)}
//                             {seesion? (
//                                 <div>
//                                     <Link href='/dashboard' className="hover:text-black"
//                                     >Dashboard
//                                     </Link>
//                                     <button 
//                                         onClick={handleSignOut}
//                                         className="text-black"
//                                     >LogOut
//                                     </button>

//                                 </div>
//                             ) : (
//                                 <Link href='/adminlogin'>LogIn</Link>
//                             )}

//                         </div>
//                     </ul>

//                 </div>

//             </div>

//         </div>
//     )
// }