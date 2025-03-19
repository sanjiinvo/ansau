import React from "react"; 
import {} from 'react-bootstrap-icons'
const IconColor = ({Icon, Size})=>{
 return(
        <svg width={Size} height={Size} viewBox="0 0 16 16">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8f1927" />
        <stop offset="100%" stopColor="#3a060f" />
      </linearGradient>
    </defs>
    <Icon width="100%" height="100%" fill="url(#gradient1)" />
  </svg>
 )

}

export default IconColor;