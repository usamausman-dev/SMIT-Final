import React from "react";

function ManagersRow(props) {
  console.log(props);
  return (
    <>
      {props.managers.map((manager) => {
        return (
          <tr>
            <td>1</td>
            <td>{manager.email}</td>
            <td>{manager.password}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ManagersRow;
