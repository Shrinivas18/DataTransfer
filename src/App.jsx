import { useState } from "react";
import "./App.css";
import Component from "./components/Component";
import RegForm from "./components/RegForm";
import AdvancedRegForm from "./components/AdvancedRegForm";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import ProductListCard from "./components/ProductListCard";
import MultiTabForm from "./components/MultiTabForm";

function App() {
  const [count, setCount] = useState(0);
  const [multiCount, setMult] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState(true);

  let name = ["Shrinivas", "Verma", "Sharma"];
  let BankDetails = {
    AccHolder: "Shrinivas",
    Salary: 500000,
    InterestPerAnnum: 12,
    yearsOfInvertment: 5,
    AccNumber: 125548484,
    Branch: "Dongargarh",
    HQ: "Delhi",
    AmountDetails() {
      let sal = this.Salary;
      let interest = 0;
      let total = 0;
      for (let i = 1; i <= this.yearsOfInvertment; i++) {
        interest = (this.InterestPerAnnum * sal) / 100;
        total += sal + interest;
        sal = total;
      }
      return Number(total);
    },
  };

  function resetCount() {
    return setCount(0);
  }
  function resetMult() {
    return setMult(1);
  }

  return (
    <>
      {/* in JSX in place of if we use ternary operator */}

      {/* <ProductList /> */}
      <MultiTabForm />
      {/* <>
      <div>
        Show Advanced Reg Form only
        <input
          type="checkbox"
          onChange={() => setVisibility(!visibility)}
          checked={visibility}
        />
      </div>

      <div>
        <AdvancedRegForm />
      </div>
      {visibility && (
        <>
          <div>
            <RegForm />
          </div>
          {loading ? "loading..." : "Not Loading"}

          <div>
            <p>
              <strong>Count: {count}</strong>
            </p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => resetCount()}>Reset</button>
          </div>
          <div>
            <p>MultCount: {multiCount}</p>
            <button onClick={() => setMult(multiCount * 10)}>*10</button>
            <button onClick={() => resetMult()}>Reset</button>
          </div>
          <div>
            <Component name={name} BankDetails={BankDetails} />
          </div>
        </>
      )}
      </> */}
    </>
  );
}

export default App;
