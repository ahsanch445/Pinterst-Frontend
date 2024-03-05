import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext()
const UserProvider = ({children})=>{

    const [userAuth, setuserAuth] = useState({})
    const [UpdateAuth, setUpdateAuth] = useState({})
    const [isAuth, setisAuth] = useState(false)
 


    useEffect(() => {
     
      const getUser =async ()=>{
        const cookie = Cookies.get("token")
       try {
        let res =  await axios.get("https://pinterst-api.vercel.app/users/login",{
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${cookie}`
          },
          withCredentials:true
        })
    
       if(res.data.user.email){
        setisAuth(true)
       }
       setuserAuth(res.data.user)
      
       localStorage.setItem("token1", res?.data?.user?._id)
   
       } catch (error) {
   
        console.error({message:"some thing went wrong"})
       }
      }
      
 getUser()
        }, [UpdateAuth,isAuth])

const token = localStorage.getItem("token1")


return(

    <userContext.Provider value={{userAuth,  setUpdateAuth,setuserAuth ,  isAuth, setisAuth}}>
  {children}
</userContext.Provider>
)

}
export default  UserProvider
