import Item from "./item";
import initialList from "./items.json";

const result = {};

function groupByCategory(a, b) {
  if (b.category in a) {
    a[b.category].push(b);
  } else {
    a[b.category] = [];
    a[b.category].push(b);
  }
  return a;
}

function sortHelper(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
}

const newListObject = initialList.reduce(groupByCategory, result);
const newListArray = Object.entries(newListObject);
newListArray.sort((a, b) => a[0].localeCompare(b[0]));
newListArray.map((item) => item[1].sort(sortHelper));

export default function GroupedByCategoryItem() {
  return (
    <>
      {newListArray.map((item, index) => (
        <div key={index} className="p-2 border-blue-100 rounded-lg border-2">
          <h3 className="font-bold text-2xl capitalize text-white m-2">
            {item[0]}
          </h3>
          {item[1].map((product) => (
            <Item
              name={product.name}
              quantity={product.quantity}
              category={product.category}
              key={product.id}
            />
          ))}
        </div>
      ))}
    </>
  );
}
