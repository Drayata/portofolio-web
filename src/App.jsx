import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Skills />
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
    <section className="flex justify-center items-center h-[90dvh] gap-46 border-b-2 border-black box-border">
      <div className="w-100">
        <h1 className="font-bold text-3xl">Hello! I am Drayata!</h1>
        <p>
          Fullstack developer, and digital marketer. I'm ready to make something
          great!
        </p>
        <div className="flex gap-1 mt-2">
          <Button1 color="red-800">See My Work</Button1>
          <Button2 color="blue-300">Contact Me</Button2>
        </div>
      </div>

      <div className="w-80 h-80 box-border">
        <img
          src="hero.jpeg"
          alt="hero-image"
          className="w-full size-full rounded-full object-cover"
        />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="flex justify-center items-center h-dvh gap-46 border-b-2 border-black box-border">
      <div className="w-100">
        <h1 className="font-bold text-3xl">Hello! I am Drayata!</h1>
        <p>
          Fullstack developer, and digital marketer. I'm ready to make something
          great!
        </p>
        <div className="flex gap-1 mt-2">
          <Button1 color="red-800">See My Work</Button1>
          <Button2 color="blue-300">Contact Me</Button2>
        </div>
      </div>

      <div className="w-64 h-64 box-border">
        <img
          src="hero.jpeg"
          alt="hero-image"
          className="w-full size-full rounded-full object-cover"
        />
      </div>
    </section>
  );
}

function Button1({ children }) {
  return (
    <a className={`p-2 bg-blue-500 cursor-pointer rounded-xl`}>{children}</a>
  );
}

function Button2({ children }) {
  return (
    <a className={`p-2 border-blue-400 border cursor-pointer rounded-xl`}>
      {children}
    </a>
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 shadow-sm sticky top-0 z-50 h-[10dvh]">
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
