
import Image from 'next/image';
import LogoImg from '../../public/logopreschool.png'

export default function HomeVideoPage() {
  return (
    <div className='pt-32 pb-10'>
    <div className="relative w-full h-screen overflow-hidden opacity-80   ">
      
        <video   loop   muted  autoPlay  playsInline
          className="absolute top-0 left-0 w-full  object-cover">
          <source src='../../public/video/video2.mp4' type="video/mp4" />
        
        </video>

      
        <div className="relative z-10 flex-center h-full">
        
            <div className="flex-between   text-white    ">
                    <Image src={LogoImg} alt='logo' className='w-96' />
                    <div>
                   
                      <h1 className='opacity-50 text-7xl'>Always </h1> 
                      <h1 className='opacity-70 text-7xl'> Prepared</h1>

                    </div> 
                  
            </div>

        </div>

    </div>
    </div>
  );
}
