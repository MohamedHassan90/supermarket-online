import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../UIKit/css/Input.css';

export default function AppTitle(props) {
  const [name, setName] = useState(props.appName);
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
          props.setAppName(name);
          localStorage.setItem("appName", name);
        }} 
        onChange={e => setName(e.target.value)}
        onKeyDown= {e => {
          if (e.code === "Enter") {
            setIsEditing(false);
            props.setAppName(name);
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