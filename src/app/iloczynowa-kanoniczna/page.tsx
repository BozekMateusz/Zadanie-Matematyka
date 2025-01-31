"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function IloczynowaKanoniczna() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-10 px-4 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-blue-100"
      }`}
    >
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg">
          <a
            href="#"
            className="bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text text-transparent 
             animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci iloczynowej do kanonicznej
          </a>
        </h1>
      </header>

      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700"
      >
        {isDarkMode ? "Jasny motyw" : "Ciemny motyw"}
      </button>

      <main className="flex flex-col space-y-12 w-full max-w-5xl px-6">
        <section className="bg-white dark:bg-slate-600 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-blue-600 dark:text-white space-y-2">
            <li>
              Postać iloczynowa: <span>f(x) = a(x - x<sub>1</sub>)(x - x<sub>2</sub>)</span>
            </li>
            <li>
              Postać kanoniczna: <span>f(x) = a(x - p)<sup>2</sup> + q</span>
            </li>
            <li>
              Wzory na współczynniki:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = <span className="inline-flex flex-col items-center"><span>x<sub>1</sub> + x<sub>2</sub></span><span className="border-t-2 w-full border-blue-700 dark:border-white"><a className="ml-5">2</a></span></span></span>
                </li>
                <li>
                  <span>q = f(p)</span>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-slate-600 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white">Przykład 1:</h2>
          <p className="mt-4 text-lg text-blue-600 dark:text-white">
            Dana jest funkcja w postaci iloczynowej: <span>f(x) = 2(x - 1)(x - 5)</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 dark:text-white space-y-2">
            <li>
              Oblicz współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = <span className="inline-flex flex-col items-center"><span>1 + 5</span><span className="border-t-2 w-full border-blue-700 dark:border-white"><a className="ml-4">2</a></span></span> = 3</span>
                </li>
                <li>
                  Oblicz q podstawiając p do funkcji:
                  <br />
                  <span>q = 2(3 - 1)(3 - 5) = 2(2)(-2) = -8</span>
                </li>
              </ul>
            </li>
            <li>
              Postać kanoniczna: <span>f(x) = 2(x - 3)<sup>2</sup> - 8</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-slate-600 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white">Przykład 2:</h2>
          <p className="mt-4 text-lg text-blue-600 dark:text-white">
            Dana jest funkcja w postaci iloczynowej: <span>f(x) = -4(x + 3)(x - 1)</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 dark:text-white space-y-2">
            <li>
              Oblicz współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = <span className="inline-flex flex-col items-center"><span>-3 + 1</span><span className="border-t-2 w-full border-blue-700 dark:border-white"><a className="ml-5">2</a></span></span> = -1</span>
                </li>
                <li>
                  Oblicz q podstawiając p do funkcji:
                  <br />
                  <span>q = -4(-1 + 3)(-1 - 1) = -4(2)(-2) = -16</span>
                </li>
              </ul>
            </li>
            <li>
              Postać kanoniczna: <span>f(x) = -4(x + 1)<sup>2</sup> - 16</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-slate-600 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white">Przykład 3:</h2>
          <p className="mt-4 text-lg text-blue-600 dark:text-white">
            Dana jest funkcja w postaci iloczynowej: <span>f(x) = 3(x - 2)(x + 4)</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 dark:text-white space-y-2">
            <li>
              Oblicz współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = <span className="inline-flex flex-col items-center"><span>2 + (-4)</span><span className="border-t-2 w-full border-blue-700 dark:border-white"><a className="ml-6">2</a></span></span> = -1</span>
                </li>
                <li>
                  Oblicz q podstawiając p do funkcji:
                  <br />
                  <span>q = 3(-1 - 2)(-1 + 4) = 3(-3)(3) = -27</span>
                </li>
              </ul>
            </li>
            <li>
              Postać kanoniczna: <span>f(x) = 3(x + 1)<sup>2</sup> - 27</span>.
            </li>
          </ol>
        </section>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            Wróć do strony głównej
          </Link>
        </div>
      </main>

      <footer className="mt-12 text-gray-600 text-sm text-center">
        Wykonał: Mateusz Bożek 4F
      </footer>
    </div>
  );
};
