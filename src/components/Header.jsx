import React from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <MdShoppingBasket />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>
          <HiPencil />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

