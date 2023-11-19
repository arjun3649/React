/* eslint-disable react/prop-types */
import  { useState } from "react";
import UserContext from "./Usercontext";

const UsercontextProvider=({children})=>{
    const [user,setuser]=useState(null)
    return(
        <>
        {/* everything is happeining here
        v are setting some global variables which is accessible by the 
        components which are wrapped inside the UserContextProvider*/}
        <UserContext.Provider value={{user,setuser}}>
            {children}{/*children is nothing but the values that v r passing to*/}
        </UserContext.Provider>
        
        </>
    )

}

export default UsercontextProvider;