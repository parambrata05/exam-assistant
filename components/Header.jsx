export default function Header() {
  return (
    <header className="text-center py-6">
      <h1 className="text-4xl font-extrabold text-gray-800 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8 mr-3 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 
            4.242 0 1.172 1.025 1.172 2.687 0 
            3.712-.203.179-.43.326-.67.442-.745.361-1.45.575-2.222.607.772.032 
            1.477.246 2.222.607.24.116.467.263.67.442 1.172 
            1.025 1.172 2.687 0 3.712-1.171 
            1.025-3.071 1.025-4.242 0-1.172-1.025-1.172-2.687 
            0-3.712.203-.179.43-.326.67-.442.745-.361 
            1.45-.575 2.222-.607-.772-.032-1.477-.246-2.222-.607-.24-.116-.467-.263-.67-.442-1.171-1.025-3.071-1.025-4.242 
            0"
          />
        </svg>
        AI Quiz Generator
      </h1>
      <p className="text-gray-500 mt-2">
        Generate tailored quiz questions instantly from any source text.
      </p>
    </header>
  );
}
