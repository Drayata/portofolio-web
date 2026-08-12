import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main></main>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <Logo />
      <NavButton />
    </nav>
  );
}

function Logo() {
  return (
    <li>
      <img src="fav.ico" />
    </li>
  );
}

function NavButton() {
  return (
    <>
      <li>Home</li>
      <li></li>
      <li></li>
      <li></li>
    </>
  );
}

export default App;
