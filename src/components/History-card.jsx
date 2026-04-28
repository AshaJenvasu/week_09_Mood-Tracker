import React from 'react';

const HistoryCard = ({ entry, index, onDelete }) => {
  return (
    <div className="flex items-center gap-3 group">
      {/* ตัวเลขลำดับด้านหน้า */}
      <span className="text-gray-400 text-xs italic w-4">{index + 1}</span>
      
      {/* การ์ดสีขาวแสดงข้อมูล */}
      <div className="bg-white flex-1 p-3 rounded-2xl shadow-sm flex items-center justify-between relative hover:shadow-md transition-shadow min-h-[70px]">
        {entry ? (
          <>
            <div className="flex items-center gap-4 w-full pr-6">
              <span className="text-3xl">{entry.mood}</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-gray-400 leading-tight">
                  {entry.date}
                </span>
                <p className="text-[12px] text-gray-700 leading-snug break-words line-clamp-2">
                  {entry.text}
                </p>
              </div>
            </div>
            {/* ปุ่มลบ (ถังขยะ) จะปรากฏเมื่อเอาเมาส์ไปวาง หรือแตะ */}
            <button 
              onClick={() => onDelete(entry.id)}
              className="absolute right-3 text-gray-300 hover:text-red-500 transition-colors"
            >
              🗑️
            </button>
          </>
        ) : (
          /* กรณีไม่มีข้อมูลให้โชว์เป็นเส้นว่างๆ ตามดีไซน์ */
          <div className="h-2 w-full bg-gray-50 rounded-full mx-4"></div>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;