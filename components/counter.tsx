import React from 'react';

interface CounterProps {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
}

function Counter({ label, value, increment, decrement }: CounterProps) {
  return (
    <div className="flex flex-row gap-5 items-center justify-between mb-2">
      <div className="w-1/3 text-white">
        {label}
      </div>
      <div className="flex flex-row gap-3 items-center justify-center">
        <button
          className="w-8 h-8 flex items-center justify-center bg-white text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none"
          onClick={decrement}
        >
          <span className="text-xl">-</span>
        </button>
        <div className="text-white">{value}</div>
        <button
          className="w-8 h-8 flex items-center justify-center bg-white text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none"
          onClick={increment}
        >
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;