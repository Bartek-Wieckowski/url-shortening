import styled from 'styled-components';
import Form from '../../ui/Form';
import FormResultsList from '../../ui/FormResultsList';
import { useState } from 'react';
import { LinksType } from './FormLinks.type';

function FormSection() {
  const [links, setNewLinks] = useState<LinksType[]>([]);

  const addNewLink = (newLink: LinksType) => {
    setNewLinks([...links, newLink]);
  };
  return (
    <FormSectionStyles>
      <Form onAddLink={addNewLink} />
      <FormResultsList linksList={links} />
    </FormSectionStyles>
  );
}

export default FormSection;

const FormSectionStyles = styled.section`
  position: relative;
  background-color: var(--color-setion-bg);
  padding-bottom: 2rem;
`;
