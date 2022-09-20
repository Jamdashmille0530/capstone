import tw, { styled } from "twin.macro";

export const CarouselPhoto = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  height: 35rem;
  /* transition: background-image 1.5s linear; */
  ${tw`
    bg-cover
    bg-no-repeat
    bg-center
  `}
`;
