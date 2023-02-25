import { Link } from "react-router-dom";
import React from 'react'
import "./Divisions.css"

import Tippy from '@tippyjs/react';
export default function Divisions() {
  return (
  
      <div className="divisions">
        <Link to='/artificialintellicenter' style={{
            textDecoration: "none",
            color: '#000000', 
            fontWeight: 600
          }}>
        <div className="division__in">
        
            <span>Artificial Intelligence Center</span>
            
        </div>
          </Link>
          <Link to='/cryptointellicenter' style={{
            textDecoration: "none",
            color: '#000000', 
            fontWeight: 600
          }}>
        <div className="division__in">
            <span>Crypto Technology Center</span>
        </div>
        </Link>
        <Link to='/webdevelopementcenter' style={{
            textDecoration: "none",
            color: '#000000', 
            fontWeight: 600
          }}>
        <div className="division__in">
            <span>Web/Mobile Application Suite</span>
        </div>
        </Link>
      </div>

  )
}
