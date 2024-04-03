import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import seafood from '../img/seafood.webp';

function Navbar() {
  return (
    <header>
            <div class="container">
                <div class="row align-items-center">
                    <div class="logo">
                        <a href="cooking.html">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            <img src={seafood} alt="logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li class="active dropdown">
                                <a href="#">Home</a>
                                <div class="dropdown-menu">
                                    <a href="#">home 1</a>
                                    <a href="#">home 2</a>
                                    <a href="#">home 3</a>
                                    <a href="#">home 4</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="#">Features</a>
                                <div class="dropdown-menu">
                                    <a href="gallery.html">Gallery</a>
                                    <a href="#">Pages</a>
                                    <a href="service.html">service plus</a>
                                </div>
                            </li>
                            <li>
                                <a href="recipes.html">Recipes</a>
                            </li>
                            <li class="dropdown">
                                <a href="#">Blog</a>
                                <div class="dropdown-menu">
                                    <a href="#">Classic</a>
                                    <a href="#">Masonry Style</a>
                                    <a href="#">Portfolio Style</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a href="#">About</a>
                                <div class="dropdown-menu">
                                    <a href="#">About 1</a>
                                    <a href="#">About 2</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="contact.html">Contacts</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="serch">
						<ul>
							<li>
							<a href="#">
							    <i class="fas fa-search"></i>
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>
			        </div>
			    </div>
            </div>

        </header>
  )
}

export default Navbar