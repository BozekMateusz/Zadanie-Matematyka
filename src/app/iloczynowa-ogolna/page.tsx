"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function IloczynowaOgolna() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Funkcja do przełączania motywu
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Zapisanie wyboru motywu w localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Zapisz motyw w localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // Zastosowanie odpowiednich klas do body
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
          Przejście z postaci iloczynowej do ogólnej
        </h1>
      </header>

      {/* Przycisk zmiany motywu */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700"
      >
        {isDarkMode ? "Jasny motyw" : "Ciemny motyw"}
      </button>

      <main className="flex flex-col space-y-12 w-full max-w-5xl px-6">
        <section className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Krok 1: Rozwijanie iloczynu</h2>
          <p className="mt-4 text-lg text-blue-600">
            Aby przekształcić funkcję kwadratową z postaci iloczynowej <strong>f(x) = a(x - x₁)(x - x₂)</strong> do postaci ogólnej, musimy rozwinąć nawiasy.
            Przykład: <strong>a(x - x₁)(x - x₂) = a(x² - (x₁ + x₂)x + x₁x₂)</strong>.
          </p>
        </section>

        <section className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Krok 2: Obliczanie współczynników</h2>
          <p className="mt-4 text-lg text-blue-600">
            Po rozwinięciu nawiasów, funkcja będzie w postaci ogólnej: <strong>f(x) = ax² - a(x₁ + x₂)x + ax₁x₂</strong>.
            Teraz obliczamy wartości współczynników b i c, porównując z postacią ogólną <strong>f(x) = ax² + bx + c</strong>.
          </p>
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
