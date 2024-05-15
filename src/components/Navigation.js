import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p><Link  className="f3 dim black db pointer"  to="/">Sign Out</Link></p>
        </nav>
  )
}

export default Navigation;