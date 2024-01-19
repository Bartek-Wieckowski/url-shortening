import styled from 'styled-components';

interface CardType {
  icon: string;
  title: string;
  desc: string;
}

function Card({ data }: { data: CardType }) {
  const { icon, title, desc } = data;
  return (
    <CardItem>
      <img src={icon} alt={title} />
      <div className="details">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </CardItem>
  );
}

export default Card;

const CardItem = styled.div`
  background: #fff;
  border-radius: var(--border-radius-sm);
  position: relative;
  max-width: 400px;
  width: 100%;
  min-height: 257px;
  padding: 0 2.5rem;
  position: relative;

  &:nth-child(1)::after,
  &:nth-child(2)::after {
    content: '';
    display: block;
    width: 10px;
    height: 110px;
    background-color: var(--color-primary-1);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  & img {
    background-color: var(--color-primary-2);
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 50%;
    padding: 2rem;
    position: absolute;
    left: 50%;
    top: -20%;
    transform: translateX(-50%);

    @media (min-width: 768px) {
      left: 10%;
      transform: unset;
    }
  }

  & .details {
    margin-top: 10rem;
    padding-bottom: 2rem;

    & h3 {
      margin-bottom: 1rem;
    }

    & p {
      color: var(--color-neutral-1);
      font-size: 1.6rem;
    }
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      align-self: flex-start;
    }
    &:nth-child(2) {
      align-self: center;
    }
    &:nth-child(3) {
      align-self: flex-end;
    }
    &:nth-child(1)::after,
    &:nth-child(2)::after {
      content: '';
      display: block;
      width: 110px;
      height: 10px;
      background-color: var(--color-primary-1);
      position: absolute;
      right: -110px;
      top: 150px;
      left: unset;
      transform: unset;
    }
    &:nth-child(2)::after {
      top: 90px;
    }
  }
`;
