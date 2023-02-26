import tw from 'tailwind-styled-components';

export const StyledStats = tw.div`
  grid
  w-full
  grid-flow-row
  grid-cols-1
  gap-x-6
  rounded-2xl
  border-gray-700
  bg-gray-800
`;

export const StyledStat = tw.div`
  grid
  w-full
  grid-cols-1
  gap-x-6
  border-b-[1px]
  border-gray-700
  px-6
  py-4
`;
