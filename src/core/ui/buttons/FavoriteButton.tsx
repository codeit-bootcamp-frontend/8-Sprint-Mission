import { useState } from 'react';

function FavoriteButton({ initCount = 0 }) {
  const [count, setCount] = useState(initCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button
      className="border border-gray-200 rounded-full"
      onClick={handleClick}
    >
      <div className="flex flex-row items-center px-3 py-1">
        {/* <IconHeart /> */}
        <p className="ml-1.5 text-base font-medium text-gray-800">{count}</p>
      </div>
    </button>
  );
}

export default FavoriteButton;
