import React from 'react';
import './header.scss';

export default function Header(props) {
    return (
        <header id="header">
        <div className="intro">
            <div className="container intro-text">
                <div className="col-md-8 col-md-offset-2 overlay">
                  <p>The website is to create for summary of each programming language, and how to code it.</p>
                </div>
            </div>
        </div>
      </header>
    );

}