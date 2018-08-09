import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
        <div id='nav'>
            <nav class='navbar-custom'>
                <div class='container'>
                <div class='navbar-header'></div>
                    <div>
                    <ul class='nav navbar-list'>
                        <li> <a class='page-scroll' href='#about'>About</a> </li>
                        <li> <a class='page-scroll' href='#skills'>Skills</a> </li>
                        <li> <a class='page-scroll' href='#portfolio'>Portfolio</a> </li>
                        <li> <a class='page-scroll' href='#resume'>Resume</a> </li>
                        <li> <a class='page-scroll' href='#contact'>Contact</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}
export default Navigation;
