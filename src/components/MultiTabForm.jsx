import React, { useState } from "react";

function MultiTabForm() {
  const [isActive, setIsActive] = useState("Sonam");

  return (
    <div>
      <div className="tabContainer">
        <p
          className={`${isActive === "Sonam" ? "active tabs" : "tabs"}`}
          onClick={() => setIsActive("Sonam")}
        >
          Sonam
        </p>
        <p
          className={`${isActive === "Verma" ? "active tabs" : "tabs"}`}
          onClick={() => setIsActive("Verma")}
        >
          Verma
        </p>
        <p
          className={`${isActive === "Sinu" ? "active tabs" : "tabs"}`}
          onClick={() => setIsActive("Sinu")}
        >
          Sinu
        </p>
        <p
          className={`${isActive === "Gaur" ? "active tabs" : "tabs"}`}
          onClick={() => setIsActive("Gaur")}
        >
          Gaur
        </p>

        <button>Open Sidebar</button>
      </div>

      <div>
        <div className="sidebar">Sinu sidebar</div>
        {isActive === "Sonam" ? (
          <p>Sonam</p>
        ) : isActive === "Verma" ? (
          <p>Verma</p>
        ) : isActive === "Sinu" ? (
          <p>Sinu</p>
        ) : (
          <p>Gaur</p>
        )}
      </div>
    </div>
  );
}

export default MultiTabForm;
