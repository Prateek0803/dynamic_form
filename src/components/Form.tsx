import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, selectFormData } from "../redux/formSlice";
import { Fields, FormFields } from "../utils/constants";

const Form: FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    dispatch(setFormData({ key: name, value }));
  };

  const renderInputField = (field: Fields) => (
    <input
      key={field.id}
      name={field.id}
      type={field.type}
      required={field.required}
      placeholder={field.placeholder}
      onChange={onChangeHandler}
      value={formData[field.id] || ""}
      style={{padding:'0.5rem', margin:'0.5rem'}}
    />
  );

  const renderSelectField = (field: Fields) => (
    <select
      key={field.id}
      name={field.id}
      required={field.required}
      value={formData[field.id] || ""}
      onChange={onChangeHandler}
      style={{padding:'0.5rem', margin:'0.5rem'}}
    >
      <option value="" disabled>
        {field.placeholder}
      </option>
      {field.options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const renderTextAreaField = (field: Fields) => (
    <textarea
      key={field.id}
      name={field.id}
      required={field.required}
      placeholder={field.placeholder}
      onChange={onChangeHandler}
      value={formData[field.id] || ""}
      style={{padding:'0.5rem', margin:'0.5rem'}}
    />
  );

  return (
    <div
      style={{
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {FormFields.map((ins) =>
        Array.isArray(ins) ? (
          <div key={ins[0].id}>
            {ins.map((field) =>
              field.type === "input"
                ? renderInputField(field)
                : field.type === "select"
                ? renderSelectField(field)
                : field.type === "textarea"
                ? renderTextAreaField(field)
                : null
            )}
          </div>
        ) : (
          <div>
            {ins.type === "input"
              ? renderInputField(ins)
              : ins.type === "select"
              ? renderSelectField(ins)
              : ins.type === "textarea"
              ? renderTextAreaField(ins)
              : null}
          </div>
        )
      )}
    </div>
  );
};

export default Form;
