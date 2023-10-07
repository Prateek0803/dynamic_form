import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    clearFormData: (state) => {
      state.formData = {}
    }
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export const selectFormData = (state: { form: FormState }) => state.form.formData;
export default formSlice.reducer;