import React from "react";

const CustomFilePicker = (props) => {
  const { label, onFileSelect, classes } = props;

  return (
    <div className="custom-file">
      <input
        type="file"
        className={"custom-file-input " + classes}
        id="customFile"
        // webkitdirectory="webkitdirectory"
        onChange={(event) => {
          onFileSelect(event.target.files);
          event.target.value = null; // Reset the file input value.
        }}
      />
      <label className="custom-file-label " htmlFor="customFile">
        {label}
      </label>
    </div>
  );
};

export default CustomFilePicker;
