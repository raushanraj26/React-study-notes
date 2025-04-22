




import { useState } from "react"

export default function LikeButton(){
   let [isLiked,setIsLisked]=useState(false);   //for updating like button on ui
   let [clicks,setClicks]=useState(0);   //updatinge like count on ui

   let toggleLike=()=>{
    setIsLisked(!isLiked);   //oposite value pass kro toggle ke jaisa
    setClicks(clicks+1);
   }

   //stle css
   let likeStyle={color:"red"};
    return(
        <div>
            <p>Like COunt={clicks}</p>
            <p onClick={toggleLike}>
                {/* isliked true pe solid heart show kro nii to empty heart */}
                  {isLiked? (<i className="fa-solid fa-heart" style={likeStyle}></i>):( <i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}