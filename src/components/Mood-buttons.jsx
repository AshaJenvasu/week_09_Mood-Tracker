import React from 'react';

const MoodButtons = ({ selectedMood, setMood }) => {
  const moods = ['🥰', '😡', '🤩', '😰', '😐'];

  return (
    <div className="flex justify-around w-full mb-8">
      {moods.map((emoji) => (
        <button
          key={emoji}
          onClick={() => setMood(emoji)}
          className={`text-4xl transition-all duration-200 hover:scale-125 ${
            selectedMood === emoji ? 'grayscale-0 scale-125' : 'grayscale'
          }`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default MoodButtons;