"use client";
import { useState, useEffect } from "react";
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
       <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-blue-600 space-y-2">
            <li>
              Postać ogólna: <span>f(x) = ax² + bx + c</span>
            </li>
            <li>
              Postać kanoniczna: <span>f(x) = a(x - p)² + q</span>
            </li>
            <li>
              Wzór na p: <span>p = -b / (2a)</span>
            </li>
            <li>
              Wzór na q: <span>q = c - b² / (4a)</span>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 1:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci ogólnej: <span>f(x) = 2x² - 4x + 1</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz współrzędną wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = -(-4) / (2 * 2) = 1</span>
                </li>
                <li>
                  <span>q = 1 - (-4)² / (4 * 2) = -3</span>
                </li>
              </ul>
            </li>
            <li>
              Po podstawieniu do wzoru ostrzymujemy postać kanoniczną: <span>f(x) = 2(x - 1)² - 3</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 2:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci ogólnej: <span>f(x) = -3x² + 6x - 2</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz współrzędną wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = -(6) / (2 * -3) = -1</span>
                </li>
                <li>
                  <span>q = -2 - (6)² / (4 * -3) = 4</span>
                </li>
              </ul>
            </li>
            <li>
              Po podstawieniu do wzoru ostrzymujemy postać kanoniczną: <span>f(x) = -3(x + 1)² + 4</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 3:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci ogólnej: <span>f(x) = x² + 4x + 5</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz współrzędną wierzchołka:
              <ul className="list-disc pl-6">
                <li>
                  <span>p = -(4) / (2 * 1) = -2</span>
                </li>
                <li>
                  <span>q = 5 - (4)² / (4 * 1) = 1</span>
                </li>
              </ul>
            </li>
            <li>
              Po podstawieniu do wzoru ostrzymujemy postać kanoniczną: <span>f(x) = (x + 2)² + 1</span>.
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
