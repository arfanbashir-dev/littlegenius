
import Image from "next/image"
import Img2 from '../../public/pic2.jpg'
import Img4 from '../../public/pic4.jpg'
import Img5 from  '../../public/pic5.jpg'

export default function HomeDetailPage(){
    return(
        

        <div>

                
                <div className="flex-center p-10 gap-16">

                    <div className="text">
                        <h1>Prepared for </h1>
                        <h1> ACADEMIC SUCCESS</h1>
                        <br/>
                        <p className="text-left" > 
                            Our broad and creative curriculum challenges pupils on a daily basis, 
                            building confidence and curiosity and helping them to discover 
                            a life-long love of learning.

                        </p>
                        <a href="#"> Academic Excellence </a>
                    </div>
                    <div>
                        <Image src={Img4} alt='Img4'  className="rounded-lg  w-[950px]"/>
                    </div>

                </div>


                 <div className="flex-center p-10 gap-16">

                    <div className="text">
                        <Image src={Img2} alt='Img4'  className="rounded-lg w-[1200px]"/>
                    </div>
                    <div>
                        
                        <h1>Prepared for </h1>
                        <h1> PUPIL WELLBEING</h1>
                        <br/>
                        <p className="text-left"> 
                            As a school which values academic attainment and pupil wellbeing 
                            equally, the environment we have created at Little Genius TechSchool Prep ensures 
                            that every child feels valued, included, and represented.

                        </p>
                        <a href="#"> Wellbeing </a>
                    </div>

                </div>


                <div className="flex-center p-10 gap-16">

                    <div className="text">
                        <h1>Prepared for </h1>
                        <h1> 11 PLUS</h1>
                        <br/>
                        <p className="text-left"> 
                            Hendon Prep pupils consistently achieve excellent results at 11+, 
                            enabling them to move on to some of the most selective senior 
                            schools in the country.

                        </p>
                        <a href="#"> 11+ Preparation </a>
                    </div>
                    <div>
                        <Image src={Img5} alt='Img4'  className="rounded-lg w-[950px]"/>
                    </div>

                </div>


        </div>
            

        
    )
}