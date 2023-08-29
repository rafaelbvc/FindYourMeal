import React from "react";
import Header from "../components/header";

function LoadingSearch() {
  return (
    <>
      <Header />
      <div className="flex py-4 w-2/3 m-auto justify-between items-start">
        <div className="w-1/5">
          <div className="boder-b pb-4 flex flex-col">
            <h1 className="mb-2">Cuisine</h1>
            {[1, 2, 3].map((itens) => (
              <div
                key={itens}
                className={
                  "overflow-hidden animate-pulse bg-slate-200 mb-1 rounded border cursor-pointer w-42 h-6"
                }
              ></div>
            ))}
          </div>
          <div className="boder-b pb-4 flex flex-col">
            <h1 className="mb-2">Price</h1>

            {[1, 2, 3].map((itens) => (
              <div
                key={itens}
                className={
                  "overflow-hidden animate-pulse bg-slate-200 mb-1 rounded border cursor-pointer w-42 h-6"
                }
              ></div>
            ))}
          </div>
        </div>
        <div className="w-5/6">
          <div className="overflow-hidden animate-pulse bg-slate-200 mb-3 cursor-pointer w-120 h-60 ml-6 border rounded"></div>
        </div>
      </div>
    </>
  );
}

export default LoadingSearch;
