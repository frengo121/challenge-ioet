import "./styles.css";

const Description = () => {
  return (
    <div className="app-wrap">
      <h2 className="title">Challenge of IOET</h2>
      <p className="description">
        The company ACME offers their employees the flexibility to work the
        hours they want. They will pay for the hours worked based on the day of
        the week and time of day, according to the following table:
      </p>
      <table className="table-description">
        <thead>
          <tr>
            <th colSpan="2">Monday - Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00:01 - 09:00</td>
            <td>25 USD</td>
          </tr>
          <tr className="active-row">
            <td>09:01 - 18:00</td>
            <td>15 USD</td>
          </tr>
          <tr>
            <td>18:01 - 00:00</td>
            <td>20 USD</td>
          </tr>
        </tbody>
      </table>
      <table className="table-description">
        <thead>
          <tr>
            <th colSpan="2">Saturday and Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00:01 - 09:00</td>
            <td>30 USD</td>
          </tr>
          <tr className="active-row">
            <td>09:01 - 18:00</td>
            <td>20 USD</td>
          </tr>
          <tr>
            <td>18:01 - 00:00</td>
            <td>25 USD</td>
          </tr>
        </tbody>
      </table>
      <p className="description">
        The goal of this exercise is to calculate the total that the company has
        to pay an employee, based on the hours they worked and the times during
        which they worked. The following abbreviations will be used for entering
        data:
      </p>
      <p className="description">
        <span className="day-table">
          <b>MO:</b> Monday
        </span>
        <span className="day-table">
          <b>TU:</b> Tuesday
        </span>
        <span className="day-table">
          <b>WE:</b> Wednesday
        </span>
        <span className="day-table">
          <b>TH:</b> Thursday
        </span>
        <span className="day-table">
          <b>FR:</b> Friday
        </span>
        <span className="day-table">
          <b>SA:</b> Saturday
        </span>
        <span className="day-table">
          <b>SU:</b> Sunday
        </span>
      </p>
    </div>
  );
};

export default Description;
