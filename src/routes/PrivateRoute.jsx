import { Navigate, Outlet } from "react-router-dom";


const RouterPrivate = ({canLogin}) =>{

    console.log(canLogin)
    if(canLogin){
        return <Outlet/>
    }else{
        return <Navigate to="/login" replace={true}/>

    }
}


export default RouterPrivate;