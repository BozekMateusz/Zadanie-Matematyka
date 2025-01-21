@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

/* Jasny motyw */
.light-theme {
  background-color: #f0f4f8; /* Jasne tło */
  color: #333; /* Ciemny tekst */
}

.light-theme .button {
  background-color: #007bff; /* Niebieski przycisk */
  color: white;
}

.light-theme .button:hover {
  background-color: #0056b3; /* Ciemniejszy niebieski przycisk */
}

/* Ciemny motyw */
.dark-theme {
  background-color: #121212; /* Ciemne tło */
  color: #e0e0e0; /* Jasny tekst */
}

.dark-theme .button {
  background-color: #1e1e1e; /* Ciemniejszy przycisk */
  color: #e0e0e0;
}

.dark-theme .button:hover {
  background-color: #333; /* Ciemniejszy przycisk */
}
