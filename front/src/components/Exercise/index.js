import { useState } from "react";

import "./styles.css";

const Exercise = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("schedules", selectedFile);
    fetch("http://localhost:4000/api/readfile", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setResponse(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="wrap-exercise">
      <h3 className="subtitle">Application:</h3>
      <div className="wrap-input">
        <label htmlFor="file">Choose the .txt file:</label>
        <div>
          <input type="file" name="file" onChange={changeHandler} />
          <div>
            <button
              disabled={isSelected ? "" : "disabled"}
              onClick={handleSubmission}
            >
              Submit
            </button>
          </div>
        </div>
        {response && (
          <div>
            <h3 className="subtitle">Results:</h3>
            {data.length > 0 ? (
              <table className="table-description">
                <thead>
                  <tr>
                    <th>Name:</th>
                    <th>Ammount:</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((employee, index) => {
                      const id = index + 1;
                      return (
                        <tr
                          key={index}
                          className={id % 2 === 0 ? "active-row" : ""}
                        >
                          <td>{employee.name}</td>
                          <td>{employee.pay} USD</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            ) : (
              <p>No results...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
