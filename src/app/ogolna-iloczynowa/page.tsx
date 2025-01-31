"use client";
import Link from "next/link";

export default function OgolnaIloczynowa() {
  const examples = [
    {
      id: 1,
      title: "Przykład 1",
      function: "f(x) = 2x² - 4x - 6",
      delta: "Δ = (-4)² - 4 ⋅ 2 ⋅ (-6) = 16 + 48 = 64",
      zeros: [
        { numerator: "4 - 8", denominator: "4", result: "-1" },
        { numerator: "4 + 8", denominator: "4", result: "3" },
      ],
      factorized: "f(x) = 2(x + 1)(x - 3)",
    },
    {
      id: 2,
      title: "Przykład 2",
      function: "f(x) = x² - 5x + 6",
      delta: "Δ = (-5)² - 4 ⋅ 1 ⋅ 6 = 25 - 24 = 1",
      zeros: [
        { numerator: "5 - 1", denominator: "2", result: "2" },
        { numerator: "5 + 1", denominator: "2", result: "3" },
      ],
      factorized: "f(x) = (x - 2)(x - 3)",
    },
    {
      id: 3,
      title: "Przykład 3",
      function: "f(x) = 3x² - 6x - 9",
      delta: "Δ = (-6)² - 4 ⋅ 3 ⋅ (-9) = 36 + 108 = 144",
      zeros: [
        { numerator: "6 - 12", denominator: "6", result: "-1" },
        { numerator: "6 + 12", denominator: "6", result: "3" },
      ],
      factorized: "f(x) = 3(x + 1)(x - 3)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gray-900 text-white transition-all duration-300">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg">
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-red-700 bg-clip-text text-transparent 
             animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci ogólnej do iloczynowej
          </a>
        </h1>
      </header>

      <main className="flex flex-col space-y-12 w-full max-w-5xl px-6">
        <section className="bg-slate-600 hover:scale-105 transform transition-transform duration-300 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-white">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-white space-y-2">
            <li>Postać ogólna: f(x) = ax² + bx + c</li>
            <li>Postać iloczynowa: f(x) = a(x - x₁)(x - x₂)</li>
            <li>Miejsca zerowe: x₁, x₂</li>
            <li>Wzór na deltę: Δ = b² - 4ac</li>
            <li>
              Wzory na miejsca zerowe:
              <ul className="list-disc pl-6">
                <li>
                  <div className="inline-flex items-center">
                    x₁ =
                    <div className="flex flex-col items-center ml-2">
                      <span>-b - √Δ</span>
                      <span className="border-t-2 border-white w-full"><a className="ml-4">2a</a></span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inline-flex items-center">
                    x₂ =
                    <div className="flex flex-col items-center ml-2">
                      <span>-b + √Δ</span>
                      <span className="border-t-2 border-white w-full"><a className="ml-4">2a</a></span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {examples.map((example) => (
          <section
            key={example.id}
            className="bg-slate-600 hover:scale-105 transform transition-transform duration-300 p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white">{example.title}:</h2>
            <p className="mt-4 text-lg text-white">Dana jest funkcja w postaci ogólnej: {example.function}</p>
            <ol className="list-decimal mt-4 pl-6 text-lg text-white space-y-4">
              <li>
                Obliczamy deltę:
                <p className="pl-6">{example.delta}</p>
              </li>
              <li>
                Obliczamy miejsca zerowe:
                <div className="pl-6 flex flex-col space-y-2">
                  {example.zeros.map((zero, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2">x{index + 1} =</span>
                      <div className="flex flex-col items-center">
                        <span>{zero.numerator}</span>
                        <span className="border-t-2 border-white w-full"><a className="ml-4">{zero.denominator}</a></span>
                      </div>
                      <span className="ml-2">= {zero.result}</span>
                    </div>
                  ))}
                </div>
              </li>
              <li>
                Postać iloczynowa funkcji:
                <p className="pl-6">{example.factorized}</p>
              </li>
            </ol>
          </section>
        ))}

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
}
