"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import 'katex/dist/katex.min.css';
import { InlineMath } from "react-katex";

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
        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-blue-600 space-y-2">
            <li>
              Postać iloczynowa: <InlineMath>{"f(x) = a(x - x_1)(x - x_2)"}</InlineMath>
            </li>
            <li>
              Postać kanoniczna: <InlineMath>{"f(x) = a(x - p)^2 + q"}</InlineMath>
            </li>
            <li>
              Wzory na współczynniki:
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath>{"p = \\frac{x_1 + x_2}{2}"}</InlineMath>
                </li>
                <li>
                  <InlineMath>{"q = f(p)"}</InlineMath>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 1:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci iloczynowej: <InlineMath>{"f(x) = 2(x - 1)(x - 5)"}</InlineMath>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath>{"p = \\frac{1 + 5}{2} = 3"}</InlineMath>
                </li>
                <li>
                  Oblicz <InlineMath>{"q"}</InlineMath> podstawiając <InlineMath>{"p"}</InlineMath> do funkcji:
                  <br />
                  <InlineMath>{"q = 2(3 - 1)(3 - 5) = 2(2)(-2) = -8"}</InlineMath>
                </li>
              </ul>
            </li>
            <li>
              Postać kanoniczna: <InlineMath>{"f(x) = 2(x - 3)^2 - 8"}</InlineMath>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 2:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci iloczynowej: <InlineMath>{"f(x) = -4(x + 3)(x - 1)"}</InlineMath>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath>{"p = \\frac{-3 + 1}{2} = -1"}</InlineMath>
                </li>
                <li>
                  Oblicz <InlineMath>{"q"}</InlineMath> podstawiając <InlineMath>{"p"}</InlineMath> do funkcji:
                  <br />
                  <InlineMath>{"q = -4(-1 + 3)(-1 - 1) = -4(2)(-2) = -16"}</InlineMath>
                </li>
              </ul>
            </li>
            <li>
              Postać kanoniczna: <InlineMath>{"f(x) = -4(x + 1)^2 - 16"}</InlineMath>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 3:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci iloczynowej: <InlineMath>{"f(x) = 3(x - 2)(x + 4)"}</InlineMath>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath>{"p = \\frac{2 + (-4)}{2} = -1"}</InlineMath>
                </li>
                <li>
                  Oblicz <InlineMath>{"q"}</InlineMath> podstawiając <InlineMath>{"p"}</InlineMath> do funkcji:
                  <br />
                  <InlineMath>{"q = 3(-1 - 2)(-1 + 4) = 3(-3)(3) = -27"}</InlineMath>
                </li>
              </ul>
            </li>
            <li>
              Postać kanoniczna: <InlineMath>{"f(x) = 3(x + 1)^2 - 27"}</InlineMath>.
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
}
