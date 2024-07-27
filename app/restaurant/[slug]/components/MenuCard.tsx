import { Item } from "@prisma/client";

export default function MenuCard({item}: {item: Item}) {
  return (
    <div className="border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg text-black">{item.name}</h3>
      <p className="font-light mt-1 text-sm text-black">
        {item.description}
      </p>
      <p className="mt-7 text-black">{item.price}</p>
    </div>
  );
}
