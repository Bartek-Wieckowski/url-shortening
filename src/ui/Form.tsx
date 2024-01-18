import styled from 'styled-components';
import formBg from '../assets/images/bg-shorten-desktop.svg';
import Button from './Button';
import { useRef, useState } from 'react';

function Form() {
  const [error, setError] = useState<string | null>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    const newLink = linkRef.current?.value;

    if (!newLink) {
      setError('Please add link');
      return;
    }

    //    TODO: zrobić dodanie linka

    setError(null);
    linkRef.current.value = '';
  };
  return (
    <FormWrapper>
      <form onSubmit={handleAddLink}>
        <label htmlFor="link">
          <input
            ref={linkRef}
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link here..."
            className={`${error ? 'error-accent' : ''}`}
          />
          {error && <small className="error-txt">{error}</small>}
        </label>
        <Button size="large" variation="primary" roundedtype="roundedSmall">
          Shorten It!
        </Button>
      </form>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.div`
  background: url(${formBg}) no-repeat;
  background-size: cover;
  background-color: var(--color-primary-2);
  border-radius: var(--border-radius-sm);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -8rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 320px;
  width: 100%;
  height: 17rem;
  padding: 0 1.5rem;

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

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 0 1.5rem;

    & label {
      flex-grow: 1;
      width: 100%;
      & .error-txt {
        color: orangered;
      }
    }
    & input {
      width: 100%;
      height: 4.2rem;
      border-radius: var(--border-radius-sm);
      padding-left: 1.5rem;
      &::placeholder {
        padding-left: 1.5rem;
        font-weight: 500;
        color: var(--color-neutral-1);
      }
      &:focus {
        outline: 2px solid var(--color-primary-1);
        outline-offset: -1px;
      }
      &.error-accent {
        border: 1px solid orangered;
        &::placeholder {
          color: orangered;
        }
      }
    }
    & ${Button} {
      width: 100%;
    }
    @media (min-width: 768px) {
      flex-direction: row;

      & label {
        width: unset;
        & .error-txt {
          position: absolute;
          bottom: 3rem;
          left: 3rem;
        }
      }

      & ${Button} {
        width: unset;
      }
    }
  }
`;
