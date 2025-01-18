import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
        <div>404 Page Not Found</div>
        <button onClick={()=> navigate('/')}>Home</button>
    </>
  )
}

export default NotFound