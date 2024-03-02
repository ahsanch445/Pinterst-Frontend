import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Upload from './Components/Uploads/Upload';
import Home from './Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ProfileUpdate from './Components/Profile/ProfileUpdate';
import Profile from './Components/Profile/Profile';
import { useContext } from 'react';
import { userContext } from './context/Context-api';
import Cookies from 'js-cookie';
function App() {
  const { isAuth,setisAuth ,userAuth } = useContext(userContext);
  let cok= Cookies.get("token")
  console.log("coookie",cok)
// const  token = localStorage.getItem("token1") 

const token = Cookies.get("token")
useEffect(() => {
if(token){
  setisAuth(true)
}
 
}, [])

  return (
    <Router>
      <Routes>
        <>
          {


        isAuth||  token  ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Upload />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/ProfileUpdate" element={<ProfileUpdate />} />
             
       

                
              </>
            ) : (
              <>

<Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
       
         <Route path="/" element={<SignUp />} />
         <Route path="/" element={< Login />} />
        
       
          

              </>


            )
            
            
            }
 
           </> 


      </Routes>
    </Router>
  );
}

export default App;











