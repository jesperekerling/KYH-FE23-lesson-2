import { generateEAN } from "@/product_data"
import { Dispatch, FormEvent, SetStateAction } from "react"

type ProductsProps = {
    store: Store;
    setStore: Dispatch<SetStateAction<Store>>
}

function Products({
    store,
    setStore
}: ProductsProps) {

    function onProductSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const name = formData.get("name") as string
        const price = Number(formData.get("price"))
        const stock = Math.round(Number(formData.get("stock")))
        const description = formData.get("description") as string
        
        const product: Product = {
            name,
            price,
            stock,
            description,
            EAN: generateEAN()
        }
        console.log("Product created", product.name)
        setStore(prev => ({
            ...prev,
            products: prev.products.concat(product)
        }))
    }
  return (
    <div>
      <h2 className="text-xl">Products</h2>
      <form className="flex flex-col gap-2" onSubmit={onProductSubmit}>
        <input name="name" id="name" placeholder="Name" required></input>
        <input name="price" type="number" placeholder="0" required></input>
        <input name="stock" type="number" placeholder="0" required></input>
        <textarea
          name="description"
          placeholder="Description"
          required
        ></textarea>
        <button>Add Product</button>
      </form>
      {store.products.map((product) => (
        <pre>{JSON.stringify(product, null, 2)}</pre>
      ))}
    </div>
  );
}


export default Products