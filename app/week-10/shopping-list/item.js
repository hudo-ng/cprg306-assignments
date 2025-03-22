export default function Item({
  name,
  quantity,
  category,
  handleClick,
  handleDelete,
  id,
}) {
  return (
    <div>
      <div className=" min-w-80 p-3 m-3 bg-gray-500 rounded-md ">
        <h2 className="text-2xl font-bold text-blue-400">{name}</h2>
        <p className="text-lg text-blue-200">{`Buy ${quantity} in ${category}`}</p>
        <div className="buttons mt-2 flex justify-between">
          <button
            onClick={handleClick}
            className=" text-white font-medium border-2 border-solid border-white cursor-pointer rounded-md p-2
            hover:text-green-500 hover:border-green-500"
          >
            Suggested Meals
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="p-2 text-white font-medium border-2 border-solid rounded-md border-white cursor-pointer
            hover:text-red-400 hover:border-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
