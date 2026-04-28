import React from 'react'; 

// 2. รับ props ชื่อ date และ setDate เข้ามาในปีกกา
function AddDate({ date, setDate }) { 
  return (
    <div className="w-full px-4 mb-3">
      <input
        type="text"
        value={date} // ใช้ค่าจากหน้าพ่อ
        onChange={(e) => setDate(e.target.value)} // ส่งค่ากลับไปให้หน้าพ่อ
        placeholder="yy-mm-dd (input your date)"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-inner outline-none focus:ring-2 focus:ring-gray-300 transition-all text-sm text-gray-500"
      />
    </div>
  );
}

export default AddDate;