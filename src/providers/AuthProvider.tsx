import React, { createContext} from "react";
import { LoggedUser, User} from "../types/@types"
import useLocalStorage from "../hooks/useLocalStorage";
import { RegisterInitialData } from "../constants/initialValues";

export interface IStateContext {
    user: User;
    login: (user: LoggedUser) => User|null
    register : (user:User)=>boolean;
    logout:()=>void;
}

interface IProps {
    children: React.ReactNode;
}
export const AuthContext = createContext<IStateContext>({
    user: RegisterInitialData, 
    login: () => null,
    register: () => false,
    logout:()=>null,
  });

export const AuthProvider = (props:IProps)=>{
    const [storedUsers, setStoredUsers] = useLocalStorage("users",[])
    const [loggedUser, setLoggedUser] = useLocalStorage("user","")
    const [doctors, setDoctors] =useLocalStorage("doctors",[]);
    const register = (newUser:User)=>{ 
        const allUsers = [...storedUsers, ...doctors];
        const existUser = allUsers.some((user:User)=>user.email === newUser.email);
        if(existUser){
            return true;
        }
        else{
            if(newUser.userType === "doctor"){
                setDoctors((oldDoctors: User[])=>[...oldDoctors, newUser]);
            }else{            
                setStoredUsers((oldUsers: User[])=>[...oldUsers,newUser]);
            }
            return false;
        }
    }

    const login = (newUser: LoggedUser):User|null=>{
        const allUsers = [...storedUsers, ...doctors];
        const existUser = allUsers.find((user:User)=>user.email === newUser.email);
        if (existUser && existUser.password === newUser.password) {
            setLoggedUser(existUser);
            return existUser; 
          }
          return null;
    }

    const logout=()=>{
        localStorage.removeItem('user');
    }
    return <AuthContext.Provider value={{register, login, user:loggedUser, logout}}>{props.children}</AuthContext.Provider>
}