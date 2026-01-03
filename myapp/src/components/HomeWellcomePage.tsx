
import Image from "next/image"

import Img3 from '../../public/pic3.jpg'

const HomeWellComePage = () => {

    return(
        <div className="flex-center p-12 bg-medium">

            <div className="text-left">

                <h1>  Welcome to Little Genius TechSchool</h1> 
                <br/>
                <br/>
                <p> 
                    Rated Excellent in all areas by the ISI in January 2023, 
                    Little Genius TechSchool is a small independent Day School and 
                    Preschool in Pakistan for girls and boys from 3 -11 years old. 
                </p>
                <br/>
                
                <p>

                    We are an inclusive, friendly, family-feel school which nurtures excellence in 
                    a diverse culture. We promote and celebrate wellbeing 
                    alongside academic attainment.
                </p>
                <br/>
                
                <p>

                    At Little Genius TechSchool we see and develop the potential in every child.
                    Our children engage enthusiastically with knowledge, embrace new ideas and 
                    are intellectually stimulated and extended beyond their age, resulting in 
                    excellent academic outcomes and confident independent learners.
                </p>
                <br/>
                
                <p>
                    We would be delighted to talk to you about our wonderful school and
                    share with you what a Little Genius TechSchool education has to offer
                    your child.
                </p>
                
                <div className=" mt-10">
                        
                        <button>Galary</button>
                </div>
                    
                
                

            </div>
            
            <div className="img-left">

                <Image src={Img3} alt="Image" className="w-[950px]  rounded-lg "/>

            </div>

            

        </div>
    )

}

export default HomeWellComePage;