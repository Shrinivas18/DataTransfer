import { useState } from "react";

function MultiTabForm() {
  const [tabName, setTabName] = useState("Signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [expData, setExpData] = useState({
    companyName: "",
    designation: "",
    yearOfExp: "",
    currentSal: "",
    expectedSal: "",
    noticePeriod: "",
    noticePeriodDuration: "",
  });

  const [haveExp, setHaveExp] = useState(false);
  const [noticePeriod, setnoticePeriod] = useState("");
  expData.noticePeriod = noticePeriod;

  const handleSignupChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let isFormValid = formData.name && formData.email && formData.password;

  const [isExpFormValid, setIsExpFormValid] = useState(false);

  const isExpFormValidCheck = () => {
    if (!haveExp) {
      setIsExpFormValid(true);
      return;
    }

    if (
      expData.companyName.trim() !== "" &&
      expData.designation.trim() !== "" &&
      expData.yearOfExp.trim() !== "" &&
      expData.currentSal.trim() !== "" &&
      expData.expectedSal.trim() !== ""
    ) {
      setIsExpFormValid(true);
    } else {
      setIsExpFormValid(false);
    }
  };

  const handleExpChange = (e) => {
    setExpData((prevData) => {
      const newData = {
        ...prevData,
        [e.target.name]: e.target.value,
      };
      return newData;
    });

    isExpFormValidCheck(); // Call validation function after updating state
  };

  const handleNoticePeriodChange = (e) => {
    setnoticePeriod(e.target.value); // Update noticePeriod state
    setExpData((prevData) => ({
      ...prevData,
      noticePeriod: e.target.value,
    }));
  };

  return (
    <div>
      <div className="tabContainer">
        <p
          className={`${tabName === "Signup" ? "active tabs" : "tabs"}`}
          onClick={() => setTabName("Signup")}
        >
          Signup
        </p>
        <p
          className={`${tabName === "Experience" ? "active tabs" : "tabs"}`}
          onClick={() => setTabName("Experience")}
        >
          Experience
        </p>
        <p
          className={`${tabName === "Sinu" ? "active tabs" : "tabs"}`}
          onClick={() => setTabName("Sinu")}
        >
          Sinu
        </p>
        <p
          className={`${tabName === "Gaur" ? "active tabs" : "tabs"}`}
          onClick={() => setTabName("Gaur")}
        >
          Gaur
        </p>

        {/* <button>Open Sidebar</button> */}
      </div>

      <div>
        {/* <div className="sidebar">Navigation Panel</div> */}
        {tabName === "Signup" ? (
          <div className="formContainer">
            <form action="">
              <h1>Enter Valid Details to proceed</h1>
              <div className="inputContainer">
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleSignupChange}
                  type="text"
                  required
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="email">Email: </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleSignupChange}
                  type="email"
                  required
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="passkey">Password: </label>
                <input
                  id="passkey"
                  name="password"
                  value={formData.password}
                  onChange={handleSignupChange}
                  type="password"
                  required
                />
              </div>

              <div className="btn">
                <button
                  type="button"
                  onClick={() => {
                    if (isFormValid) setTabName("Experience");
                  }}
                  disabled={!isFormValid}
                >
                  Next
                </button>
              </div>
            </form>
            <div>
              <h2>Details</h2>
              <ul>
                <li>Name: {formData.name}</li>
                <li>Email: {formData.email}</li>
                <li>Password: {formData.password}</li>
              </ul>
            </div>
          </div>
        ) : tabName === "Experience" ? (
          <div className="formContainer">
            <form action="">
              <div>
                <label htmlFor="haveExp"></label>
                <input
                  id="haveExp"
                  name="haveExp"
                  value={expData.haveExp}
                  type="checkbox"
                  checked={haveExp}
                  onChange={() => setHaveExp(!haveExp)}
                  required
                />
              </div>
              {haveExp ? (
                <>
                  <div className="inputContainer">
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                      id="companyName"
                      name="companyName"
                      value={expData.companyName}
                      onChange={handleExpChange}
                      type="text"
                      required
                    />
                  </div>

                  <div className="inputContainer">
                    <label htmlFor="designation">Designation</label>
                    <input
                      id="designation"
                      name="designation"
                      value={expData.designation}
                      onChange={handleExpChange}
                      type="text"
                      required
                    />
                  </div>

                  <div className="inputContainer">
                    <label htmlFor="yearOfExp">Years of Experience</label>
                    <input
                      id="yearOfExp"
                      name="yearOfExp"
                      value={expData.yearOfExp}
                      onChange={handleExpChange}
                      type="number"
                      required
                    />
                  </div>

                  <div className="inputContainer">
                    <label htmlFor="currentSal">Current Style:</label>
                    <input
                      id="currentSal"
                      name="currentSal"
                      value={expData.currentSal}
                      onChange={handleExpChange}
                      type="number"
                      required
                    />
                  </div>

                  <div className="inputContainer">
                    <label htmlFor="expectedSal">Expected Salary: </label>
                    <input
                      id="expectedSal"
                      name="expectedSal"
                      value={expData.expectedSal}
                      onChange={handleExpChange}
                      type="number"
                      required
                    />
                  </div>

                  <div className="inputContainer">
                    <label htmlFor="noticePeriodYes">Yes:</label>
                    <input
                      id="noticePeriodYes"
                      name="noticePeriod"
                      value="Yes"
                      type="radio"
                      checked={noticePeriod === "Yes"}
                      onChange={handleNoticePeriodChange}
                    />
                  </div>

                  <div className="inputContainer">
                    <label htmlFor="noticePeriodNo">No</label>
                    <input
                      id="noticePeriodNo"
                      name="noticePeriod"
                      value="No"
                      type="radio"
                      checked={noticePeriod === "No"}
                      onChange={handleNoticePeriodChange}
                    />
                  </div>

                  {noticePeriod === "Yes" && (
                    <div className="inputContainer">
                      <label htmlFor="noticePeriodDuration">
                        Notice Period Duration:
                      </label>
                      <input
                        id="noticePeriodDuration"
                        name="noticePeriodDuration"
                        value={expData.noticePeriodDuration}
                        onChange={handleExpChange}
                        type="text"
                        required
                      />
                    </div>
                  )}

                  <div className="btn">
                    <button
                      type="button"
                      onClick={() => setTabName("Sinu")}
                      disabled={!isExpFormValid}
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <button type="button" onClick={() => setTabName("Sinu")}>
                  Next
                </button>
              )}
            </form>

            <div>
              <div>
                <p>{expData.companyName}</p>
                <p>{expData.designation}</p>
                <p>{expData.yearOfExp}</p>
                <p>{expData.currentSal}</p>
                <p>{expData.expectedSal}</p>
                <p>{expData.noticePeriod}</p>
                <p>{expData.noticePeriodDuration}</p>
              </div>
            </div>
          </div>
        ) : tabName === "Sinu" ? (
          <div className="formContainer">
            <form action="">
              <div className="inputContainer">
                <label htmlFor="name"></label>
                <input
                  id="name"
                  name="name"
                  value={tabName}
                  type="text"
                  disabled
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="email"></label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="inputContainer">
                <label htmlFor="passkey"></label>
                <input id="passkey" name="passkey" type="password" required />
              </div>
            </form>
          </div>
        ) : (
          <div className="formContainer">
            <form action="">
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                value="Signup"
                type="text"
                disabled
              />

              <label htmlFor="email"></label>
              <input id="email" name="email" type="email" required />

              <label htmlFor="passkey"></label>
              <input id="passkey" name="passkey" type="password" required />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiTabForm;
