import tw from "twin.macro";

export const Wrapper = tw.nav`
    shadow-md
    sticky
    top-0
    z-50
    bg-white
`;

export const Container = tw.div`
    flex
    mx-4
    justify-between
    py-4
`;

export const Navlinks = tw.div`
    flex
    items-center
    gap-4
`;
