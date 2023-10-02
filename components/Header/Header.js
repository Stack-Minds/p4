import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <div className='header_left'>
            <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2Fgt5bF82UsX_yHpT4MxZJ2Zdu8yZyr6DSjdlD53UKa7izRvLSKTqMm8KdZW0z-OSU8&usqp=CAU"/>
            <h3>StackMinds</h3>
        </div>
        <div className='header_center'>
            <ul className='header_lists'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <div className='header_center_menu'>
                    <button>TechStack</button>
                    <div className='drop_down_header'>
                        <a href="#">HTML</a>
                        <a href="#">CSS</a>
                        <a href="#">JavaScript</a>
                        <a href="#">React.js</a>
                    </div>
                </div>
                <li><a href="#">Login</a></li>
                <li><a href="#">SignUp</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
