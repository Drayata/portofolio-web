import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

// function Navbar() {
//   return (
//     <nav>
//       <Logo />
//       <NavButton />
//     </nav>
//   );
// }

function Hero() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div cl>
        <h1>Hello! I am Drayata!</h1>
        <p>
          Fullstack developer, and digital marketer. I'm ready to make something
          great!
        </p>
        <Button color="red-800">Contact Me</Button>
        <Button color="blue-300">See My Work</Button>
      </div>
      <img />
      <div></div>
    </section>
  );
}

function Button({ children, color }) {
  return <button className={`p-2 bg-${color} rounded-xl`}>{children}</button>;
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600 tracking-tight">
              BrandLogo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium transition-all shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-b border-gray-200 px-4 pt-2 pb-4 space-y-2 transition-all">
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
          >
            Features
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

export default App;
