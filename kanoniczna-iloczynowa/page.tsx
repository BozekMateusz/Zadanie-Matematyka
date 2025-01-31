"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BlockMath } from "react-katex"; // Importowanie BlockMath z react-katex
import "katex/dist/katex.min.css"; // Importowanie stylów dla KaTeX

export default function KanonicznaIloczynowa() {
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
            className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent 
             animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci kanonicznej do iloczynowej
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
              Postać kanoniczna: <BlockMath>{'f(x) = a(x - p)² + q'}</BlockMath>
            </li>
            <li>
              Postać iloczynowa: <BlockMath>{'f(x) = a(x - x₁)(x - x₂)'}</BlockMath>
            </li>
            <li>
              Wzór na miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <BlockMath>{'x₁ = p - √(-q / a)'}</BlockMath>
                </li>
                <li>
                  <BlockMath>{'x₂ = p + √(-q / a)'}</BlockMath>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 1:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <BlockMath>{'f(x) = 2(x - 3)² - 8'}</BlockMath>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <BlockMath>{'x₁ = 3 - √(8 / 2) = 1'}</BlockMath>
                </li>
                <li>
                  <BlockMath>{'x₂ = 3 + √(8 / 2) = 5'}</BlockMath>
                </li>
              </ul>
            </li>
            <li>
              Postać iloczynowa: <BlockMath>{'f(x) = 2(x - 1)(x - 5)'}</BlockMath>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 2:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <BlockMath>{'f(x) = -3(x + 2)² + 12'}</BlockMath>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <BlockMath>{'x₁ = -2 - √(-12 / -3) = -4'}</BlockMath>
                </li>
                <li>
                  <BlockMath>{'x₂ = -2 + √(-12 / -3) = 0'}</BlockMath>
                </li>
              </ul>
            </li>
            <li>
              Postać iloczynowa: <BlockMath>{'f(x) = -3(x + 4)(x)'}</BlockMath>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 3:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <BlockMath>{'f(x) = 5(x - 1)² - 20'}</BlockMath>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <BlockMath>{'x₁ = 1 - √(20 / 5) = -1'}</BlockMath>
                </li>
                <li>
                  <BlockMath>{'x₂ = 1 + √(20 / 5) = 3'}</BlockMath>
                </li>
              </ul>
            </li>
            <li>
              Postać iloczynowa: <BlockMath>{'f(x) = 5(x + 1)(x - 3)'}</BlockMath>.
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
