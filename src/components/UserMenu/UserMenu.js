import React, { useState } from 'react'

import "./userMenu.css"
import { Link } from 'react-router-dom'

const UserMenu = () => {

  const [userType, setUserType] = useState("Student")

  return (
    <div className='userMenu-container'>
      <div className='userMenu-options'>
        <Link to="/profile">Perfil</Link>
        <Link>Editar perfil</Link>
        {userType === "Student" ?
          <Link>
          </Link> :
          <Link>
          </Link>
        }
      </div>
      <div>
        <Link to="/">Cerrar sesión</Link>
      </div>

    </div>
  )
}

export default UserMenu