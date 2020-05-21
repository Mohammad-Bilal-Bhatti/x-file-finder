import React from "react";
const List = (props) => {
  const { items, selected, onClick } = props;

  function calClass(item) {
    return item.key === selected ? "list-group-item active" : "list-group-item";
  }

  return (
    <ul className="list-group hand-cursor">
      {items.map((item) => (
        <li
          key={item.key}
          className={calClass(item)}
          onClick={() => onClick(item)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default List;
