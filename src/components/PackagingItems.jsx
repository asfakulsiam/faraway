import { useContext } from "react";
import { PackageContext } from "../utils/Context";

export default function PackagingItems() {
  const [initialItems, setInitialItems] = useContext(PackageContext);

  const removeItem = (id) => {
    const updatedItems = initialItems.filter((item) => item.id !== id);
    setInitialItems(updatedItems);
  };

  const handlePacked = (id) => {
    const updatedItems = initialItems.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setInitialItems(updatedItems);
  };

  const clearListItem = () => {
    setInitialItems([])
  }

  return (
    <div className="list relative">
      <ul>
        {initialItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handlePacked(item.id)}
            />
            <span className={item.packed ? "line-through" : ""}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button className="hover:bg-orange-400 hover:text-white" onClick={clearListItem}>Reset</button>
    </div>
  );
}
