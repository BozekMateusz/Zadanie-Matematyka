"use client";
import { useState, useEffect } from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Link from "next/link";

export default function OgolnaKanoniczna() {
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
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
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
            className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent 
             animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci ogólnej do kanonicznej
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
        {/* Sekcja wzorów */}
        <section
          className={`bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl hover:scale-105 transform transition-transform duration-300 ${
            isDarkMode ? "shadow-neutral-400" : "shadow-black"
          }`}
        >
          <h2 className="text-2xl font-bold text-blue-700">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-blue-600 space-y-2">
            <li>Postać ogólna: <span>f(x) = ax² + bx + c</span></li>
            <li>Postać kanoniczna: <span>f(x) = a(x - p)² + q</span></li>
            <li>Wzór na p: <InlineMath>{"p = \\frac{-b}{2a}"}</InlineMath></li>
            <li>Wzór na q: <InlineMath>{"q = \\frac{b^2 - 4ac}{4a}"}</InlineMath></li>
          </ul>
        </section>

        {/* Przykłady */}
        {[
          {
            title: "Przykład 1",
            function: "f(x) = 2x² - 4x + 1",
            steps: [
              "p = \\frac{-(-4)}{2 \\cdot 2} = 1",
              "q = 1 - \\frac{(-4)^2}{4 \\cdot 2} = -1",
            ],
            result: "f(x) = 2(x - 1)² - 1",
          },
          {
            title: "Przykład 2",
            function: "f(x) = -3x² + 6x - 2",
            steps: [
              "p = \\frac{-6}{2 \\cdot (-3)} = -1",
              "q = -2 - \\frac{6^2}{4 \\cdot (-3)} = 1",
            ],
            result: "f(x) = -3(x + 1)² + 1",
          },
          {
            title: "Przykład 3",
            function: "f(x) = x² + 4x + 5",
            steps: [
              "p = \\frac{-4}{2 \\cdot 1} = -2",
              "q = 5 - \\frac{4^2}{4 \\cdot 1} = 1",
            ],
            result: "f(x) = (x + 2)² + 1",
          },
        ].map((example, index) => (
          <section
            key={index}
            className={`bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl hover:scale-105 transform transition-transform duration-300 ${
              isDarkMode ? "shadow-neutral-400" : "shadow-black"
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-700">{example.title}:</h2>
            <p className="mt-4 text-lg text-blue-600">
              Dana jest funkcja w postaci ogólnej: <span>{example.function}</span>.
            </p>
            <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
              <li>
                Oblicz współrzędną wierzchołka:
                <ul className="list-disc pl-6">
                  <li>
                    <InlineMath>{example.steps[0]}</InlineMath>
                  </li>
                  <li>
                    <InlineMath>{example.steps[1]}</InlineMath>
                  </li>
                </ul>
              </li>
              <li>
                Po podstawieniu do wzoru otrzymujemy postać kanoniczną:{" "}
                <span>{example.result}</span>.
              </li>
            </ol>
          </section>
        ))}

        {/* Link powrotu */}
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
