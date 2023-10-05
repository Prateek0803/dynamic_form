import { HTMLInputTypeAttribute } from "react";

export interface Fields {
  id: string ;
  placeholder?: string ;
  required?: boolean;
  type: HTMLInputTypeAttribute;
  options?: string[];
  value?: string;
}
type NestedField = Array<Fields>;

export const FormFields: Array<Fields | NestedField> = [
  [
    {
      id: "firstName",
      placeholder: "First name",
      required: true,
      type: "input",
      value: ''
    },
    {
      id: "lastName",
      placeholder: "Last name",
      required: true,
      type: "input",

    },
  ],
  {
    id: "email",
    required: true,
    type: "input",
    placeholder: 'example@gmail',
    
  },
  {
    id: "address1",
    placeholder: "Address 1",
    required: false,
    type: "input",
  },
  [
    {
      id: "city",
      type: "input",
      required: false,
      placeholder: "city",
    },
    {
      id: "state",
      type: "input",
      required: false,
      placeholder: "state",

    },
    {
      id: "zip",
      type: "input",
      required: false,
      placeholder: "zip",

    },
  ],
  {
    id: "phone",
    required: true,
    type: "input",
    placeholder: "phone",
    
  },
  {
    id: "jobTitle",
    options: [
      "Engineer - lead",
      "Engineer - mid level",
      "Engineer - junion",
      "Engineer - front end focused",
      "Engineer - backend focused",
      "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
    required: false,
    
  },
  {
    id: "reason",
    placeholder:
      "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
    required: false,
    
  },
];
