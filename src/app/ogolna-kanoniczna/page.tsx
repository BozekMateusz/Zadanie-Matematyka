"use client";
import Link from "next/link";

export default function OgolnaKanoniczna() {
  const examples = [
    {
      title: "Przykład 1",
      function: "f(x) = 2x² - 4x + 1",
      steps: [
        <div key="step1" className="flex flex-row">
          <span>p = </span>
          <span className="flex flex-col items-center">
            <span className="ml-5">-(-4)</span>
            <span className="ml-5 border-t-2 border-white w-full text-center">2 · 2</span>
          </span>
        </div>,
        "p = 1",
        <div key="step2" className="flex flex-row">
          <span>q = </span>
          <span className="flex flex-col items-center">
            <span className="ml-5">1 - (-4)²</span>
            <span className="ml-5 border-t-2 border-white w-full text-center">4 · 2</span>
          </span>
        </div>,
        "q = -1",
      ],
      result: "f(x) = 2(x - 1)² - 1",
    },
    {
      title: "Przykład 2",
      function: "f(x) = -3x² + 6x - 2",
      steps: [
        <div key="step1" className="flex flex-row">
          <span>p = </span>
          <span className="flex flex-col items-center">
            <span className="ml-5">-6</span>
            <span className="ml-5 border-t-2 border-white w-full text-center">2 · -3</span>
          </span>
        </div>,
        "p = -1",
        <div key="step2" className="flex flex-row">
          <span>q = </span>
          <span className="flex flex-col items-center">
            <span className="ml-5">-2 - 6²</span>
            <span className="ml-5 border-t-2 border-white w-full text-center">4 · -3</span>
          </span>
        </div>,
        "q = 1",
      ],
      result: "f(x) = -3(x + 1)² + 1",
    },
    {
      title: "Przykład 3",
      function: "f(x) = x² + 4x + 5",
      steps: [
        <div key="step1" className="flex flex-row">
          <span>p = </span>
          <span className="flex flex-col items-center">
            <span className="ml-5">-4</span>
            <span className="ml-5 border-t-2 border-white w-full text-center">2 · 1</span>
          </span>
        </div>,
        "p = -2",
        <div key="step2" className="flex flex-row">
          <span>q = </span>
          <span className="flex flex-col items-center">
            <span className="ml-5">5 - 4²</span>
            <span className="ml-5 border-t-2 border-white w-full text-center">4 · 1</span>
          </span>
        </div>,
        "q = 1",
      ],
      result: "f(x) = (x + 2)² + 1",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gray-900 text-white transition-all duration-300">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg">
          <a
            href="#"
            className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x bg-gradient-size"
          >
            Przejście z postaci ogólnej do kanonicznej
          </a>
        </h1>
      </header>

      <main className="flex flex-col space-y-12 w-full max-w-5xl px-6">
        <section className="bg-slate-600 p-6 shadow-lg rounded-xl hover:scale-105 transform transition-transform duration-300">
          <h2 className="text-2xl font-bold text-white">Wzory, których używamy:</h2>
          <ul className="mt-4 text-lg text-white space-y-2">
            <li>Postać ogólna: f(x) = ax² + bx + c</li>
            <li>Postać kanoniczna: f(x) = a(x - p)² + q</li>
            <div className="flex flex-row">
                <span className="mr-2">wzór na p:</span>
                <li className="mt-3 mr-1">p = </li>
                <li className="flex flex-col items-center">
                  <span className="">-b</span>
                  <span className="w-14 border-t-2 border-white text-center">2a</span>
                </li>
            </div>
            <div className="flex flex-row">
                <span className="mr-2">wzór na q:</span>
                <li className="mt-3 mr-1">q = </li>
                <li className="flex flex-col items-center">
                  <span className="ml-1">b² - 4ac</span>
                  <span className="w-20 border-t-2 border-white text-center">4a</span>
                </li>
            </div>
          </ul>
        </section>

        {examples.map((example, index) => (
          <section
            key={index}
            className="bg-slate-600 p-6 shadow-lg rounded-xl hover:scale-105 transform transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold text-white">{example.title}:</h2>
            <p className="mt-4 text-lg text-white">
              Dana jest funkcja w postaci ogólnej: {example.function}.
            </p>
            <ol className="list-decimal mt-4 pl-6 text-lg text-white space-y-2">
              <li>
                Oblicz współrzędną wierzchołka:
                <ul className="list-disc pl-6">
                  {example.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </li>
              <li>
                Po podstawieniu do wzoru otrzymujemy postać kanoniczną: {example.result}.
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
