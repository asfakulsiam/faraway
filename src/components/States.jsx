// States.js
import { useContext, useEffect, useState } from "react";
import { PackageContext } from "../utils/Context";

const States = () => {
  const [initialItems] = useContext(PackageContext);
  const [packedItems, setPackedItems] = useState(Number(0));

  useEffect(() => {
    const count = initialItems.reduce((count, item) => {
      return item.packed ? count + 1 : count;
    }, 0);
    setPackedItems(count);
  }, [initialItems]);

  return (
    <footer className="stats">
      You have {initialItems.length} items on your list and you already packed{" "}
      {packedItems} {initialItems.length !== 0 ? `(${((packedItems / initialItems.length) * 100).toFixed(2)}%)` : `(0%)`}
    </footer>
  );
};

export default States;
