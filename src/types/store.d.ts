type PersonType = "customer" | "employee";

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  type: PersonType;
};

type Employee = Person & {
  id: string;
  jobTitle: string;
  hasKeys: boolean;
  type: "employee";
};

type Product = {
  EAN: string;
  name: string;
  description: string;
  stock: number;
  price: number;
};

type Store = {
  id: string;
  employees: Employee[];
  products: Product[];
  address: string;
  businessNumber?: string;
};


