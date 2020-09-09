import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Header = () => (
    <div class="linha-menu">
        <div class="container-fluid px-5">
            <div class="row linha-menu">
                <h1 class="text-light m-0">Logo</h1>
                <ul class="menu d-none d-lg-flex align-items-center">
                    <li class="item-menu"><a href="#">Home</a></li>
                    <li class="item-menu"><a href="#">Serviços</a></li>
                    <li class="item-menu"><a href="#">Sobre</a></li>
                    <li class="item-menu"><a href="#">Contato</a></li>
                    <li class="item-menu login"><Link to="/login">Login</Link></li>
                </ul>     
            </div>
        </div>
    </div>
);

export default Header