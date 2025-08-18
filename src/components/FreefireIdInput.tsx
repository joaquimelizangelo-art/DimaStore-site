import React, { useState } from 'react';
import { User } from 'lucide-react';

interface FreefireIdInputProps {
  onIdChange?: (id: string) => void;
  className?: string;
}

const FreefireIdInput: React.FC<FreefireIdInputProps> = ({ onIdChange, className = '' }) => {
  const [id, setId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    if (onIdChange) {
      onIdChange(value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="freefire-id" className="block text-sm font-medium text-gray-700 mb-2">
        ID do Free Fire
      </label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          id="freefire-id"
          value={id}
          onChange={handleChange}
          placeholder="Digite seu ID do Free Fire"
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Exemplo: 123456789
      </p>
    </div>
  );
};

export default FreefireIdInput;