"use client";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gray-900 text-white transition-all duration-300">
      {/* Nagłówek */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-200 drop-shadow-lg">
          Funkcja kwadratowa
        </h1>
        <p className="text-gray-200 mt-4 text-lg">
          Przekształcanie funkcji kwadratowej w różne postaci.
        </p>
      </header>

      {/* Sekcja główna */}
      <main className="flex flex-col space-y-12 w-full max-w-5xl px-6">
        {/* Prostokąt 1 */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-neutral-400">
          <p className="text-lg md:text-xl font-medium">Postać ogólna:</p>
          <div className="text-2xl md:text-3xl font-bold">
            f(x) = ax² + bx + c
          </div>
        </div>

        {/* Strzałki */}
        <div className="flex flex-row items-center justify-center space-x-4 w-full">
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium text-green-400">
              Jak przejść do
            </span>
            <span className="text-3xl font-bold text-green-400">↓</span>
            <Link
              href="/ogolna-kanoniczna"
              className="mt-2 text-green-400 text-sm underline hover:text-green-700"
            >
              Postać kanoniczna?
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium text-indigo-500">
              Jak przejść do
            </span>
            <span className="text-3xl font-bold text-indigo-500">↑</span>
            <Link
              href="/kanoniczna-ogolna"
              className="mt-2 text-indigo-500 text-sm underline hover:text-indigo-700"
            >
              Postać ogólna?
            </Link>
          </div>
        </div>

        {/* Prostokąt 2 */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-neutral-400">
          <p className="text-lg md:text-xl font-medium">Postać kanoniczna:</p>
          <div className="text-2xl md:text-3xl font-bold">
            f(x) = a(x - p)² + q
          </div>
        </div>

        {/* Strzałki */}
        <div className="flex flex-row items-center justify-center space-x-4 w-full">
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium text-orange-400">
              Jak przejść do
            </span>
            <span className="text-3xl font-bold text-orange-400">↓</span>
            <Link
              href="/kanoniczna-iloczynowa"
              className="mt-2 text-orange-400 text-sm underline hover:text-orange-500"
            >
              Postać iloczynowa?
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium text-teal-500">
              Jak przejść do
            </span>
            <span className="text-3xl font-bold text-teal-500">↑</span>
            <Link
              href="/iloczynowa-kanoniczna"
              className="mt-2 text-teal-500 text-sm underline hover:text-teal-700"
            >
              Postać kanoniczna?
            </Link>
          </div>
        </div>

        {/* Prostokąt 3 */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-neutral-400">
          <p className="text-lg md:text-xl font-medium">Postać iloczynowa:</p>
          <div className="text-2xl md:text-3xl font-bold">
            f(x) = a(x - x₁)(x - x₂)
          </div>
        </div>

        {/* Strzałki */}
        <div className="flex flex-row items-center justify-center space-x-4 w-full">
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium text-purple-400">
              Jak przejść do
            </span>
            <span className="text-3xl font-bold text-purple-400">↓</span>
            <Link
              href="/iloczynowa-ogolna"
              className="mt-2 text-purple-400 text-sm underline hover:text-purple-600"
            >
              Postać ogólna?
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium text-red-500">
              Jak przejść do
            </span>
            <span className="text-3xl font-bold text-red-500">↑</span>
            <Link
              href="/ogolna-iloczynowa"
              className="mt-2 text-red-500 text-sm underline hover:text-red-700"
            >
              Postać iloczynowa?
            </Link>
          </div>
        </div>

        {/* Prostokąt 4 */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-neutral-400">
          <p className="text-lg md:text-xl font-medium">Postać ogólna:</p>
          <div className="text-2xl md:text-3xl font-bold">
            f(x) = ax² + bx + c
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 via-green-300 to-blue-500 text-white shadow-lg rounded-xl p-6 shadow-neutral-400">
          <h2 className="text-2xl font-bold mb-4">Wzory do obliczeń:</h2>
          <ul className="text-lg space-y-2">
            <li>
              Postać ogólna:{" "}
              <span className="font-bold">f(x) = ax² + bx + c</span>
            </li>
            <li>
              Postać kanoniczna:{" "}
              <span className="font-bold">f(x) = a(x - p)² + q</span>
            </li>
            <li>
              Postać iloczynowa:{" "}
              <span className="font-bold">f(x) = a(x - x₁)(x - x₂)</span>
            </li>
            <li>
              Wzory na współrzędne wierzchołka:
              <ul className="list-disc pl-6">
                <div className="flex flex-row ">
                  <li className="mt-3 mr-1">p = </li>
                  <li className="flex flex-col items-left">
                    <span className="font-bold">-b</span>
                    <div className="w-6 border-t-2 border-white text-left">
                      <span className="font-bold">2a</span>
                    </div>
                  </li>
                </div>
                <li>
                  <span className="font-bold">q = f(p)</span>
                </li>
              </ul>
            </li>
            <li>
              Wzory na miejsca zerowe (jeśli Δ ≥ 0):
              <ul className="list-disc pl-6">
                <div className="flex flex-row ">
                  <li className="mt-3 mr-1">x₁ = </li>
                  <li className="flex flex-col items-left">
                    <span className="font-bold">-b - √Δ</span>
                    <div className="w-14 border-t-2 border-white text-left">
                      <span className="font-bold ml-5">2a</span>
                    </div>
                  </li>
                </div>
                <div className="flex flex-row ">
                  <li className="mt-3 mr-1">x₂ = </li>
                  <li className="flex flex-col items-left">
                    <span className="font-bold">-b + √Δ</span>
                    <div className="w-14 border-t-2 border-white text-left">
                      <span className="font-bold ml-5">2a</span>
                    </div>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              Wzór na deltę (Δ):
              <span className="font-bold"> Δ = b² - 4ac</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Stopka */}
      <footer className="mt-12 text-gray-600 text-sm text-center">
        Wykonał: Mateusz Bożek 4F | 31.01.2025
      </footer>
    </div>
  );
}
