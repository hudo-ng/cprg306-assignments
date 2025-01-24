export default function ({ name, quantity, category }) {
  return (
    <div className=" w-96 p-3 m-3 bg-gray-500 rounded-md">
      <h2 className="text-2xl font-bold text-blue-400">{name}</h2>
      <p className="text-lg text-blue-200">{`Buy ${quantity} in ${category}`}</p>
    </div>
  );
}
