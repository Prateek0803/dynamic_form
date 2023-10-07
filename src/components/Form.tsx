import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, selectFormData, clearFormData } from "../redux/formSlice";
import { Fields, FormFields } from "../utils/constants";
import {
  Button,
  Container,
  FieldGroup,
  FieldText,
  FormContainer,
  Row,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  ThankYou,
} from "./StyledElements";

const Form: FC = () => {
  const [showUiData, setShowUiData] = useState<boolean>(false);
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
    <StyledInput
      key={field.id}
      name={field.id}
      type={field.type}
      required={field.required}
      placeholder={field.placeholder}
      onChange={onChangeHandler}
      value={formData[field.id] || ""}
    />
  );

  const renderSelectField = (field: Fields) => (
    <StyledSelect
      key={field.id}
      name={field.id}
      required={field.required}
      value={formData[field.id] || ""}
      onChange={onChangeHandler}
    >
      <option value="" disabled>
        {field.placeholder}
      </option>
      {field.options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );

  const renderTextAreaField = (field: Fields) => (
    <StyledTextarea
      key={field.id}
      name={field.id}
      required={field.required}
      placeholder={field.placeholder}
      onChange={onChangeHandler}
      value={formData[field.id] || ""}
    />
  );

  const isFormValid = (formData: any) => {
    for (const field of FormFields) {
      if (Array.isArray(field)) {
        for (const subField of field) {
          if (subField.required && !formData[subField.id]) {
            return false;
          }
        }
      } else if (field.required && !formData[field.id]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (isFormValid(formData)) {
      setShowUiData(true);
    } else {
      alert("Form validation failed");
    }
  };

  const handleClear = () => {
    dispatch(clearFormData());
    setShowUiData(false);
  };

  return (
    <Container>
      <FormContainer>
        {!showUiData ? (
          <div>
            {FormFields.map((ins: any) => (
              <Row key={ins.id}>
                {Array.isArray(ins) ? (
                  ins.map((field) => (
                    <FieldGroup key={field.id}>
                      {field.type === "input"
                        ? renderInputField(field)
                        : field.type === "select"
                        ? renderSelectField(field)
                        : field.type === "textarea"
                        ? renderTextAreaField(field)
                        : null}
                    </FieldGroup>
                  ))
                ) : (
                  <FieldGroup key={ins.id}>
                    {ins.type === "input"
                      ? renderInputField(ins)
                      : ins.type === "select"
                      ? renderSelectField(ins)
                      : ins.type === "textarea"
                      ? renderTextAreaField(ins)
                      : null}
                  </FieldGroup>
                )}
              </Row>
            ))}
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        ) : (
          <div>
              <ThankYou>Thank you for submitting the form</ThankYou>
              {FormFields.map((ins: any, index) => (
                <Row key={index}>
                  {Array.isArray(ins) ? (
                    ins.map((field) => (
                      <FieldGroup key={field.id}>
                        <FieldText>{formData[field.id] || "-"}</FieldText>
                      </FieldGroup>
                    ))
                  ) : (
                    <FieldGroup key={ins.id}>
                      <FieldText>{formData[ins.id] || "-"}</FieldText>
                    </FieldGroup>
                  )}
                </Row>
              ))}
              <Button type="button" onClick={handleClear}>
                Close
              </Button>
          </div>
        )}
      </FormContainer>
    </Container>
  );
};

export default Form;
