import { createContext, useState } from "react";

export const PackageContext = createContext();

export default function Context(props) {
  const [initialItems, setInitialItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ]);

  return (
    <PackageContext.Provider value={[initialItems, setInitialItems]}>
      {props.children}
    </PackageContext.Provider>
  );
}
