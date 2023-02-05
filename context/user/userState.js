import UserContext from "./userContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { parseCookies } from "nookies";
import nookies from 'nookies'
import baseUrl from "../../database/baseUrl";

const UserState = (props) => {



  // console.log(getuser)
  const router = useRouter();
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [searchkey, setSearchkey] = useState('') //for search 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#20232a';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [user, setUser] = useState('');
  const [users, setUsers] = useState('');

  useEffect(() => {
    const cookie = parseCookies()
    setUser(cookie.user ? JSON.parse(cookie.user) : '')
  }, []);

  const logout = () => {
    Cookies.remove('user')
    Cookies.remove('token')
    setUser('')
    router.push('/login')
  }

  const token = Cookies.get('token');
  console.log(token);
  const [useUser, setUseUser] = useState('')

  useEffect(() => {
    const users = Cookies.get('user')
    setUseUser(users ? JSON.parse(users) : "")
  }, [])






  return (
    <UserContext.Provider value={{ toggleMode, mode, setSearchkey, searchkey, user, logout, setUser, user, users, setUsers, useUser, setUseUser , token }}>
      {props.children}
    </UserContext.Provider>
  )

}



export default UserState;