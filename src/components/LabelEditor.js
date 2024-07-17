// components/LabelEditor.js
import React from 'react';

const LabelEditor = ({ labelPosition, isInverted, isOutside, onUpdateSettings, applyToAll, onApplyToAllChange }) => {
  return (
    <div className="border p-4 my-4">
      <div className="mb-4">
        <span className="font-bold text-lg">Edit</span>
      </div>
      <div className="space-y-4">
        <button
          onClick={() => onUpdateSettings({ isInverted: !isInverted })}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isInverted ? 'bg-blue-700' : ''
          }`}
        >
          {isInverted ? 'Normal Colors' : 'Invert Colors'}
        </button>
        <button
          onClick={() => onUpdateSettings({ labelPosition: 'top' })}
          className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
            labelPosition === 'top' ? 'bg-gray-500' : ''
          }`}
        >
          Top
        </button>
        <button
          onClick={() => onUpdateSettings({ labelPosition: 'bottom' })}
          className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
            labelPosition === 'bottom' ? 'bg-gray-500' : ''
          }`}
        >
          Bottom
        </button>
        <button
          onClick={() => onUpdateSettings({ isOutside: !isOutside })}
          className={`w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
            isOutside ? 'bg-purple-700' : ''
          }`}
        >
          {isOutside ? 'Inside' : 'Outside'}
        </button>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={applyToAll}
            onChange={(e) => onApplyToAllChange(e.target.checked)}
          />
          <span className="ml-2 text-sm">Apply to all</span>
        </label>
      </div>
    </div>
  );
};

export default LabelEditor;