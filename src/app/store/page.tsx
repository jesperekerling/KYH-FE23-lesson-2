"use client";
import Products from "@/components/Products";
import Employees from "@/components/Employees";
import { useState } from "react";

export default function StoreState() {
  const [store, setStore] = useState<Store>({
    employees: [],
    products: [],
    address: "3637 Cedar St",
    id: "1",
  });

  return (
    <main className="container mx-auto p-10">
      <h1>Store</h1>
      <Products store={store} setStore={setStore} />
      <Employees store={store} setStore={setStore} />

      {/* //TODO: employee form */}
    </main>
  );
}
