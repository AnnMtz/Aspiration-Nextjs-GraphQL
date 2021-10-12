import styled from "styled-components";

const TextStyles = styled.h1`
  margin-top: 50px;
  color: rebeccapurple;
`;

const TextVariant = () => {
  return (
    <TextStyles>
      GITHUB GRAPHQL env{process.env.NEXT_PUBLIC_APP_API_KEY}
    </TextStyles>
  );
};

export default TextVariant;
