
// export default function Page() {
//   return (
//     <h1 className="text-4xl text-red-500 font-bold">Tailwind Test</h1>
//   );
// }


import React from "react"

import {
        //  HomeVideoPage, 
         HomeWellComePage,
         HomeDetailPage, 
        //  HomeKeyFeaturePage, 
        //  HomeSchoolInfoPage, 
        //  HomeFacilitiesPage, 
        //  HomeMenuPage
        } from "@/components"


export default function HomePage(){   

      return(
          <div>

            {/* <HomeVideoPage /> */}
            <HomeWellComePage />
            <HomeDetailPage />
            {/* <HomeKeyFeaturePage /> */}
            {/* <HomeSchoolInfoPage /> */}
            {/* <HomeFacilitiesPage /> */}
            {/* <HomeMenuPage /> */}

          </div>
      )  
  
}
