import React from "react";
const TableBody = (props) => {
  const { data, onDelete, onInfo, onOpen } = props;
  return (
    <tbody>
      {data.map((dataItem) => (
        <tr key={dataItem.id}>
          <th>{dataItem.name}</th>
          <td>{dataItem.type}</td>
          <td>{dataItem.relativePath}</td>
          <td>{dataItem.modifiedDate}</td>
          <td>{dataItem.modifiedTime}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(dataItem)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-info" onClick={() => onInfo(dataItem)}>
              <i className="fa fa-info-circle"></i>
            </button>
          </td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => onOpen(dataItem)}
            >
              open
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
