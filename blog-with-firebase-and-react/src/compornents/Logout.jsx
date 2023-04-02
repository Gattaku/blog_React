import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({isAuth, setIsAuth}) => {
  const navigate = useNavigate();
  const logoutWithGoogle = () => {
    //ログアウト
    signOut(auth)
      .then(()=>{
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      })
  }

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logoutWithGoogle}>ログアウト</button>
    </div>
  )
}

export default Logout;