import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav/Nav'
import { auth } from '../../firebase'
import { useSelector } from 'react-redux/es/exports'
import { selectUser } from '../../features/userSlice'

function ProfileScreen() {
    const user = useSelector(selectUser)

  return (
    <div className='profile-screen'>
        <Nav/>
            <div  className='profilescreen-body'>
                <h1>Edit Profile</h1>
                <div className='profilescreen-info'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="avatar"/>
                    <div className='profilescreen-details'>
                        <h2>{user.email}</h2>
                        <div className='profilescreen-plans'>
                            <h3>Plans</h3>
                            
                            <button onClick={()=>auth.signOut()} className='profilescreen-signout'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProfileScreen