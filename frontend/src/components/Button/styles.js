import tw, { styled } from "twin.macro";

export const Wrapper = styled.button`
  ${tw`
    py-3
    px-6
    rounded-xl
    font-semibold
    bg-green-700 hover:bg-green-400
    text-white
    cursor-pointer
  
   
`}

  ${({ secondary }) =>
    secondary &&
    tw`bg-transparent  text-green-700 ring-2 ring-green-700 ring-inset `}
`;
