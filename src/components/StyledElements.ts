import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1rem;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

export const Button = styled.button`
  padding: 2%;
  background-color: white;
  color: #eeeee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width:100%;
  display:block;

  &:hover {
    background-color: #00a6e3;
    color: #fff;
  }
`;


export const ThankYou = styled.div`
margin: 20px 0;
font-size: 24px;
font-weight: bold;
`;

export const FieldText = styled.div`
margin: 10px;
padding: 10px;
`;