export default function Title({ name }: { name: string }) {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="front-bold text-6xl text-black">{name}</h1>
    </div>
  );
}
