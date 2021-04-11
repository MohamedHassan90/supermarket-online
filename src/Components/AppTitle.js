import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "../Context/AppContext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../UIKit/css/Input.css';

export default function AppTitle(props) {
  const { name, setName } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();  
  }, [isEditing]);

  if (isEditing) {
    return (
      <input 
        type="text"
        ref={inputRef}
        className="input brand-input" 
        value={name} 
        onBlur={e => {
          setIsEditing(false)
          setName(name);
          localStorage.setItem("appName", name);
        }} 
        onChange={e => setName(e.target.value)}
        onKeyDown= {e => {
          if (e.code === "Enter") {
            setIsEditing(false);
            setName(name);
            localStorage.setItem("appName", name);
          }
        }}
      />
    );
  }
  return (<>
    <div className="brand-title">
      <Link to="/" className="nav-brand">{name}</Link>
      <i className="far fa-edit" onClick={e => setIsEditing(true)}></i>
    </div>
  </>);
};