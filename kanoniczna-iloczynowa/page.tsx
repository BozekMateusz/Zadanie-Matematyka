"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
              Postać kanoniczna: <span>f(x) = a(x - p)² + q</span>
            </li>
            <li>
              Postać iloczynowa: <span>f(x) = a(x - x₁)(x - x₂)</span>
            </li>
            <li>
              Wzór na miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <span>x₁ = p - √(-q / a)</span>
                </li>
                <li>
                  <span>x₂ = p + √(-q / a)</span>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 1:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <span>f(x) = 2(x - 3)² - 8</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <span>x₁ = 3 - √(8 / 2) = 1</span>
                </li>
                <li>
                  <span>x₂ = 3 + √(8 / 2) = 5</span>
                </li>
              </ul>
            </li>
            <li>
              Postać iloczynowa: <span>f(x) = 2(x - 1)(x - 5)</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 2:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <span>f(x) = -3(x + 2)² + 12</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <span>x₁ = -2 - √(-12 / -3) = -4</span>
                </li>
                <li>
                  <span>x₂ = -2 + √(-12 / -3) = 0</span>
                </li>
              </ul>
            </li>
            <li>
              Postać iloczynowa: <span>f(x) = -3(x + 4)(x)</span>.
            </li>
          </ol>
        </section>

        <section className="bg-white dark:bg-blue-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Przykład 3:</h2>
          <p className="mt-4 text-lg text-blue-600">
            Dana jest funkcja w postaci kanonicznej: <span>f(x) = 5(x - 1)² - 20</span>.
          </p>
          <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-2">
            <li>
              Oblicz miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <span>x₁ = 1 - √(20 / 5) = -1</span>
                </li>
                <li>
                  <span>x₂ = 1 + √(20 / 5) = 3</span>
                </li>
              </ul>
            </li>
            <li>
              Postać iloczynowa: <span>f(x) = 5(x + 1)(x - 3)</span>.
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
