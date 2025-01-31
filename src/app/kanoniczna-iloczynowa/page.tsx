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
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Typowanie parametrów jako liczby
  interface Example {
    a: number;
    p: number;
    q: number;
    canonicalForm: string;
  }

  // Funkcja do obliczania miejsc zerowych
  const calculateRoots = (a: number, p: number, q: number): number[] => {
    const discriminant = -q / a;
    const sqrtDisc = Math.sqrt(discriminant);
    return [p - sqrtDisc, p + sqrtDisc];
  };

  // Przykłady z danymi
  const examples: Example[] = [
    { a: 2, p: 3, q: -8, canonicalForm: "f(x) = 2(x - 3)^2 - 8" },
    { a: -3, p: -2, q: 12, canonicalForm: "f(x) = -3(x + 2)^2 + 12" },
    { a: 5, p: 1, q: -20, canonicalForm: "f(x) = 5(x - 1)^2 - 20" },
  ];

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
            className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci kanonicznej do iloczynowej
          </a>
        </h1>
      </header>

      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
      >
        {isDarkMode ? "Jasny motyw" : "Ciemny motyw"}
      </button>

      <main className="flex flex-col space-y-12 w-full max-w-5xl px-6">
        <section className="bg-white dark:bg-slate-600 hover:scale-105 transform transition-transform duration-300 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-blue-600 dark:text-white space-y-2">
            <li>
              Postać kanoniczna: <span>f(x) = a(x - p)<sup>2</sup> + q</span>
            </li>
            <li>
              Postać iloczynowa: <span>f(x) = a(x - x<sub>1</sub>)(x - x<sub>2</sub>)</span>
            </li>
            <li>
              Wzór na miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <span>
                    x<sub>1</sub> = p - <a className="text-4xl absolute mt-2">√</a>
                    <span className="inline-flex flex-col items-center ml-5">
                      <span>(-q)</span>
                      <span className="border-t-2 border-blue-700 dark:border-white w-full text-center">a</span>
                    </span>
                  </span>
                </li>
                <li className="mt-2">
                  <span>
                    x<sub>2</sub> = p + <a className="text-4xl absolute mt-2">√</a>
                    <span className="inline-flex flex-col items-center ml-5">
                      <span>(-q)</span>
                      <span className="border-t-2 border-blue-700 dark:border-white w-full text-center">a</span>
                    </span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {examples.map((example, index) => {
          const roots = calculateRoots(example.a, example.p, example.q);
          return (
            <section key={index} className="bg-white dark:bg-slate-600 hover:scale-105 transform transition-transform duration-300 p-6 shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-white">Przykład {index + 1}:</h2>
              <p className="mt-4 text-lg text-blue-600 dark:text-white">
                Dana jest funkcja w postaci kanonicznej: <span>{example.canonicalForm}</span>.
              </p>
              <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 dark:text-white space-y-2">
                <li>
                  Oblicz miejsca zerowe:
                  <ul className="list-disc pl-6">
                    <li className="mt-5">
                      <span >
                        x<sub>1</sub> = {example.p} - <a className="text-4xl absolute mt-2">√</a>
                        <span className="inline-flex flex-col items-center ml-5">
                          <span className=""> (-{example.q})</span>
                          <span className="border-t-2 border-blue-700 dark:border-white w-full text-center">{example.a}</span>
                        </span> = {roots[0]}
                      </span>
                    </li>
                    <li>
                      <span>
                        x<sub>2</sub> = {example.p} +<a className="text-4xl absolute mt-2">√</a>
                        <span className="inline-flex flex-col items-center ml-5">
                          <span>(-{example.q})</span>
                          <span className="border-t-2 border-blue-700 dark:border-white w-full text-center">{example.a}</span>
                        </span> = {roots[1]}
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  Postać iloczynowa: <span>f(x) = {example.a}(x - {roots[0]})(x - {roots[1]})</span>.
                </li>
              </ol>
            </section>
          );
        })}

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300">
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
