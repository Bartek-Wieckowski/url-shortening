import styled from 'styled-components';
import { LinksType } from '../features/FormSection/FormLinks.type';
import Button from './Button';
import { useState } from 'react';

function FormResultsList({ linksList }: { linksList: LinksType[] }) {
  const [clickedItem, setClickedItem] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setClickedItem(index);
  };
  return (
    <ResultWrapper>
      {linksList.map((link, index) => (
        <ResultItem key={index}>
          <div className="old-link">{link.oldLink}</div>
          <hr />
          <div className="short-link">{link.newLink}</div>
          <Button
            size="medium"
            variation={clickedItem === index ? 'secondary' : 'primary'}
            roundedtype="roundedSmall"
            onClick={() => handleLinkClick(index)}
          >
            {clickedItem === index ? 'Copied!' : 'Copy'}
          </Button>
        </ResultItem>
      ))}
    </ResultWrapper>
  );
}

export default FormResultsList;

const ResultWrapper = styled.div`
  padding-top: 10rem;
  margin: 0 auto;
  max-width: 320px;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 500px;
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 992px) {
    max-width: 900px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1540px) {
    max-width: 1440px;
  }
`;
const ResultItem = styled.div`
  background: #fff;
  border-radius: var(--border-radius-sm);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  & hr {
    margin: 0.5rem auto;
    width: 100%;
    color: var(--color-neutral-2);
  }

  & .old-link {
    font-weight: 500;
  }
  & .short-link {
    color: var(--color-primary-1);
    font-weight: 700;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 400px 100px;

    & hr {
      display: none;
    }
  }
`;
