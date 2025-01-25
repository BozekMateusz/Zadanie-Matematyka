"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function OgolnaIloczynowa() {
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

  const examples = [
    {
      id: 1,
      title: "Przykład 1",
      function: "f(x) = 2x^2 - 4x - 6",
      deltaSteps: [
        "\\Delta = (-4)^2 - 4 \\cdot 2 \\cdot (-6)",
        "\\Delta = 16 + 48 = 64",
      ],
      zeros: [
        "x_1 = \\frac{-(-4) - \\sqrt{64}}{2 \\cdot 2} = \\frac{4 - 8}{4} = -1",
        "x_2 = \\frac{-(-4) + \\sqrt{64}}{2 \\cdot 2} = \\frac{4 + 8}{4} = 3",
      ],
      factorized: "f(x) = 2(x + 1)(x - 3)",
    },
    {
      id: 2,
      title: "Przykład 2",
      function: "f(x) = x^2 - 5x + 6",
      deltaSteps: [
        "\\Delta = (-5)^2 - 4 \\cdot 1 \\cdot 6",
        "\\Delta = 25 - 24 = 1",
      ],
      zeros: [
        "x_1 = \\frac{-(-5) - \\sqrt{1}}{2 \\cdot 1} = \\frac{5 - 1}{2} = 2",
        "x_2 = \\frac{-(-5) + \\sqrt{1}}{2 \\cdot 1} = \\frac{5 + 1}{2} = 3",
      ],
      factorized: "f(x) = (x - 2)(x - 3)",
    },
    {
      id: 3,
      title: "Przykład 3",
      function: "f(x) = 3x^2 - 6x - 9",
      deltaSteps: [
        "\\Delta = (-6)^2 - 4 \\cdot 3 \\cdot (-9)",
        "\\Delta = 36 + 108 = 144",
      ],
      zeros: [
        "x_1 = \\frac{-(-6) - \\sqrt{144}}{2 \\cdot 3} = \\frac{6 - 12}{6} = -1",
        "x_2 = \\frac{-(-6) + \\sqrt{144}}{2 \\cdot 3} = \\frac{6 + 12}{6} = 3",
      ],
      factorized: "f(x) = 3(x + 1)(x - 3)",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-10 px-4 transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 to-blue-100"
      }`}
    >
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg">
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent 
               animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci ogólnej do iloczynowej
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
        <section className="bg-white dark:bg-blue-100  hover:scale-105 transform transition-transform duration-300 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-blue-600 space-y-2">
            <li>
              Postać ogólna:{" "}
              <InlineMath math="f(x) = ax^2 + bx + c" />
            </li>
            <li>
              Postać iloczynowa:{" "}
              <InlineMath math="f(x) = a(x - x_1)(x - x_2)" />
            </li>
            <li>
              Miejsca zerowe (korzenie równania kwadratowego):{" "}
              <InlineMath math="x_1, x_2" />
            </li>
            <li>
              Wzór na deltę:{" "}
              <InlineMath math="\Delta = b^2 - 4ac" />
            </li>
            <li>
              Wzory na miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath math="x_1 = \frac{-b - \sqrt{\Delta}}{2a}" />
                </li>
                <li>
                  <InlineMath math="x_2 = \frac{-b + \sqrt{\Delta}}{2a}" />
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {examples.map((example) => (
          <section
            key={example.id}
            className="bg-white dark:bg-blue-100  hover:scale-105 transform transition-transform duration-300 p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-bold text-blue-700">{example.title}:</h2>
            <p className="mt-4 text-lg text-blue-600">
              Dana jest funkcja w postaci ogólnej:{" "}
              <InlineMath math={example.function} />.
            </p>
            <ol className="list-decimal mt-4 pl-6 text-lg text-blue-600 space-y-4">
              <li>
                Obliczamy deltę:
                <p className="pl-6">
                  {example.deltaSteps.map((step, index) => (
                    <span key={index}>
                      <InlineMath math={step} />
                      <br />
                    </span>
                  ))}
                </p>
              </li>
              <li>
                Obliczamy miejsca zerowe:
                <p className="pl-6">
                  {example.zeros.map((zero, index) => (
                    <span key={index}>
                      <InlineMath math={zero} />
                      <br />
                    </span>
                  ))}
                </p>
              </li>
              <li>
                Postać iloczynowa funkcji:
                <p className="pl-6">
                  <InlineMath math={example.factorized} />
                </p>
              </li>
            </ol>
          </section>
        ))}

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
