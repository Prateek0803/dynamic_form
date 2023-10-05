import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  [key: string]: string;
}

interface FormState {
  formData: FormData;
}

const initialState: FormState = {
  formData: {}
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<{ key: string; value: string }>) => {
      state.formData[action.payload.key] = action.payload.value;
    },
  },
});

export const { setFormData } = formSlice.actions;
export const selectFormData = (state: { form: FormState }) => state.form.formData;
export default formSlice.reducer;