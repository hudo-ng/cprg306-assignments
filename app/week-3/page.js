import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
  return (
    <div className="p-4 bg-gray-900">
      <h1 className="font-bold text-4xl text-blue-800 p-5">Shopping List</h1>
      <ItemList />
    </div>
  );
}
