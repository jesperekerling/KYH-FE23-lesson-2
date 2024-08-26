import { Dispatch, FormEvent, SetStateAction } from "react";


type EmployeesProps = {
  store: Store;
  setStore: Dispatch<SetStateAction<Store>>;
};

function Employees({ store, setStore }: EmployeesProps) {
  function onEmployeeSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Form submitted')
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const address = formData.get("address") as string;
    const phone = formData.get("phone") as string;
    const id = formData.get("id") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const hasKeys = formData.get("hasKeys") === "on";

    const employee: Employee = {
      firstName,
      lastName,
      address,
      phone,
      id,
      jobTitle,
      hasKeys,
      type: "employee",
    };

    console.log("Employee created", employee);
    setStore((prev) => ({
      ...prev,
      employees: prev.employees.concat(employee),
    }));
  }

  return (
    <div>
      <h2 className="text-xl">Employees</h2>
      <form className="flex flex-col gap-2" onSubmit={onEmployeeSubmit}>
        <input name="firstName" placeholder="First Name" required />
        <input name="lastName" placeholder="Last Name" required />
        <input name="address" placeholder="Address" required />
        <input name="phone" placeholder="Phone" required type="tel" />
        <input name="id" placeholder="ID" required />
        <input name="jobTitle" placeholder="Job Title" required />
        <label>
          <input name="hasKeys" type="checkbox" />
          Has Keys
        </label>
        <button>Add Employee</button>
      </form>
      {store.employees.map((employee) => (
        <pre key={employee.id}>{JSON.stringify(employee, null, 2)}</pre>
      ))}
    </div>
  );
}

export default Employees;