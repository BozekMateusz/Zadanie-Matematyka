"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function KanonicznaOgolna() {
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
            className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent 
             animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci kanonicznej do ogólnej
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
              Postać kanoniczna: <span>f(x) = a(x - p)² + q</span>
            </li>
            <li>
              Postać ogólna: <span>f(x) = ax² + bx + c</span>
            </li>
            <li>
              Wzór skróconego mnożenia <span>(a - b)² = a² - 2ab + 𝑏²</span>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 1:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <span>f(x) = 2(x - 3)² + 5</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Rozwiń nawias: <span>f(x) = 2(x² - 6x + 9) + 5</span>.
            </li>
            <li>
              Rozmnoż przez współczynnik: <span>f(x) = 2x² - 12x + 18 + 5</span>.
            </li>
            <li>
              Zredukuj wyrazy podobne: <span>f(x) = 2x² - 12x + 23</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 2:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <span>f(x) = -3(x + 2)² - 4</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Rozwiń nawias: <span>f(x) = -3(x² + 4x + 4) - 4</span>.
            </li>
            <li>
              Rozmnoż przez współczynnik: <span>f(x) = -3x² - 12x - 12 - 4</span>.
            </li>
            <li>
              Zredukuj wyrazy podobne: <span>f(x) = -3x² - 12x - 16</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 3:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <span>f(x) = 4(x - 1)² + 2</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Rozwiń nawias: <span>f(x) = 4(x² - 2x + 1) + 2</span>.
            </li>
            <li>
              Rozmnoż przez współczynnik: <span>f(x) = 4x² - 8x + 4 + 2</span>.
            </li>
            <li>
              Zredukuj wyrazy podobne: <span>f(x) = 4x² - 8x + 6</span>.
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
