import React, { useState } from 'react';

function Navbar() {
    const [activeLink, setActiveLink] = useState('Home');

    // Function to handle link click
    const handleLinkClick = (e, link) => {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        setActiveLink(link);
    };


    const show = (e) => {
        e.preventDefault();
        const elements = document.getElementsByClassName("list2");

        for (let i = 0; i < elements.length; i++) {
            const x = elements[i];
            if (x.style.display === "none" || x.style.display === "") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }

    return (
        <div className='container-fluid px-0'>
            <div className='navbar nav d-flex justify-content-between align-items-center px-4'>
                <div className='logo text-muted'>
                    <h2>My Portfolio</h2>
                </div>
                <div className='list'>
                    <ul className='gap-5 d-flex justify-content-center align-items-center'>
                        <li className={`text-muted  ${activeLink === 'Home' ? 'active' : ''}`}>
                            <a href="#" onClick={(e) => handleLinkClick(e, 'Home')}>Home</a>
                        </li>
                        <li className={`text-muted  ${activeLink === 'About' ? 'active' : ''}`}>
                            <a href="#" onClick={(e) => handleLinkClick(e, 'About')}>About</a>
                        </li>
                        <li className={`text-muted  ${activeLink === 'Contact' ? 'active' : ''}`}>
                            <a href="#" onClick={(e) => handleLinkClick(e, 'Contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='search'>
                    <form className="d-flex justify-content-center align-items-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
                <div className='icontoggle'>
                    <i class="fa fa-bars text-white" onClick={show} aria-hidden="true"></i>
                </div>
                <div className='list2'>
                    <ul className='gap-5'>
                        <li><a to="#">Home</a></li>
                        <li><a to="#">About</a></li>
                        <li><a to="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
