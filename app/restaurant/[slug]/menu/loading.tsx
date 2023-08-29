import React from "react";

function LoadingRestaurantMenu() {
  return (
    <main>
      <div className="flex  m-auto w-[100%] justify-between items-start">
        <div className="bg-white w-[64rem] rounded p-3 shadow">
          <nav className="flex text-reg border-b pb-2">
            <p className="mr-7">Overview</p>
            <p className="mr-7">Menu</p>
          </nav>
          <div className="flex justify-between">
            <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[48%] h-28 rounded" />
            <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[48%] h-28 rounded" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoadingRestaurantMenu;
