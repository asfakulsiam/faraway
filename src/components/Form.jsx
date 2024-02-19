import { useContext, useState } from "react";
import { PackageContext } from "../utils/Context";

export default function Form() {
  const [initialItems, setInitialItems] = useContext(PackageContext);
  const [curInp, setInp] = useState("");
  const [curQuantity, setQuantity] = useState();

  const formHandler = (e) => {
    e.preventDefault();
    if (curInp) {
      setInitialItems([
        ...initialItems,
        {
          id: initialItems.length + 1,
          description: curInp,
          quantity: curQuantity,
          packed: false,
        },
      ]);
      setInp("");
      setQuantity("");
    } else {
      alert("Item name required!!");
      return;
    }
  };

  return (
    <form onSubmit={formHandler} action="#" className="add-form">
      <h3>What you need for your😍 trip!</h3>
      <select value={curQuantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={curInp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button className="">Add</button>
    </form>
  );
}
