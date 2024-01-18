import styled from 'styled-components';
import Form from '../../ui/Form';

function FormSection() {
  return (
    <FormSectionStyles>
      <Form />
    </FormSectionStyles>
  );
}

export default FormSection;

const FormSectionStyles = styled.section`
  position: relative;
  background-color: var(--color-neutral-1);
  height: 100vh;
`;
