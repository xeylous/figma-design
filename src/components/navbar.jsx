'use client'
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Final Reports");

  const tabs = [
    { name: "Atten. Team (Admin)", disabled: false },
    { name: "Org. Details (Admin)", disabled: false },
    { name: "In/Out Logs", disabled: false },
    { name: "Finalize Atten.", disabled: false },
    { name: "Manage Employees", disabled: false },
    { name: "Final Reports", disabled: false },
    { name: "Error Reports", disabled: false },
  ];

  return (
    <div className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="flex w-full">
        <div className="flex w-full h-10">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => !tab.disabled && setActiveTab(tab.name)}
              className={`px-0.5 h-full text-[10px] transition-all flex-shrink flex-grow-0 basis-[12%] ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed bg-gray-50 border-r border-gray-200"
                  : activeTab === tab.name
                  ? "text-blue-600 bg-blue-50 border-x border-blue-600 font-medium"
                  : "text-gray-700 hover:text-black hover:bg-gray-50 border-r border-gray-200"
              }`}
            >
              <span className="line-clamp-2 text-center px-0.5">{tab.name}</span>
            </button>
          ))}
          <a href="#" className="px-1 flex items-center justify-center text-blue-600 text-[10px] font-medium basis-[8%] border-l border-gray-200">
            Attendance Module
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;