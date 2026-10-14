import Model from "./Model";
import "./FormStyle.css";
import { useState } from "react";

export default function Form() {
  const [errorMassage, setErrorMassage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [formInput, setFormInput] = useState({
    id: 1,
    name: "",
    phoneNumbre: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  function handelSubmitClick(e) {
    e.preventDefault();
    setErrorMassage(null);
    const { age } = formInput;
    const { phoneNumbre } = formInput;
    if (age < 18 || age > 100) {
      setErrorMassage("the age is not allowed");
    }
    if (phoneNumbre.length < 10 || phoneNumbre.length > 12) {
      setErrorMassage("the phone numbre is not allowed");
    }
    setShowModel(true);
  }
  function handelDevClick() {
    if (showModel) {
      setShowModel(false);
    }
  }
  const btnIsDisabled =
    formInput.name === "" ||
    formInput.phoneNumbre === "" ||
    formInput.age === "";

  return (
    <div
      className="flex"
      style={{ flexDirection: "column" }}
      onClick={handelDevClick}
    >
      <form
        className="flex"
        id="loan-form"
        style={{ flexDirection: "column" }}
        onSubmit={(event) => {
          event.preventDefault();
          alert("efose");
        }}
      >
        <h1>Requesting a loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={formInput.name}
          onChange={(evnet) =>
            setFormInput({ ...formInput, name: evnet.target.value })
          }
        />
        <label>Phone Numbre:</label>
        <input
          value={formInput.phoneNumbre}
          onChange={(evnet) =>
            setFormInput({ ...formInput, phoneNumbre: evnet.target.value })
          }
        />
        <label>Age:</label>
        <input
          value={formInput.age}
          onChange={(evnet) =>
            setFormInput({ ...formInput, age: evnet.target.value })
          }
        />
        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={formInput.isEmployee}
          onChange={(evnet) =>
            setFormInput({ ...formInput, isEmployee: evnet.target.checked })
          }
        />
        <label>Salary</label>
        <select
          value={formInput.salary}
          onChange={(evnet) =>
            setFormInput({ ...formInput, salary: evnet.target.value })
          }
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          id="submit-loan-btn"
          onClick={handelSubmitClick}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>

      <Model errorMassage={errorMassage} isVisibaled={showModel} />
    </div>
  );
}
