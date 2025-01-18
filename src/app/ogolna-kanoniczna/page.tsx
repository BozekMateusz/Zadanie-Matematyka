"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function OgolnaKanoniczna() {
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
          Przejście z postaci ogólnej do kanonicznej
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
          <h2 className="text-2xl font-bold text-blue-700">Krok 1: Wyciąganie wspólnego czynnika</h2>
          <p className="mt-4 text-lg text-blue-600">
            Aby przekształcić funkcję kwadratową w postać kanoniczną, zaczynamy od wyciągnięcia wspólnego czynnika przed nawiasy dla składników kwadratowych i liniowych.
            Na przykład, mając funkcję ogólną: <strong>f(x) = ax² + bx + c</strong>, możemy wyciągnąć wspólny czynnik a, jeśli a ≠ 1.
          </p>
        </section>

        <section className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Krok 2: Uzupełnianie kwadratu</h2>
          <p className="mt-4 text-lg text-blue-600">
            Następnie, aby uzyskać postać kanoniczną, uzupełniamy kwadrat dla części zawierającej zmienną x. Możemy to zrobić, dodając i odejmując odpowiednią wartość wewnątrz nawiasu, aby uzyskać wyrażenie w postaci <strong>(x - p)²</strong>.
          </p>
        </section>

        <section className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">Krok 3: Przekształcanie do postaci kanonicznej</h2>
          <p className="mt-4 text-lg text-blue-600">
            Po uzupełnieniu kwadratu, funkcja kwadratowa przyjmuje postać kanoniczną: <strong>f(x) = a(x - p)² + q</strong>, gdzie p to przesunięcie na osi x, a q to przesunięcie na osi y.
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
