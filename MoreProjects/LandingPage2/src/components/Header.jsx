import React from 'react'

function Header(props) {
  return (
    <div className="header">
      <h1 className="header-title">{props.company_name}</h1>
      <p className="header-text">{props.tag_line}</p>
    </div>
  );
}

export default Header