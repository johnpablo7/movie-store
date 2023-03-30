import { SVGProps } from "react";

const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 3.375A14.625 14.625 0 1 0 32.625 18 14.642 14.642 0 0 0 18 3.375Zm0 27A12.375 12.375 0 1 1 30.375 18 12.389 12.389 0 0 1 18 30.375Zm3.003-16.601L16.307 18l4.696 4.226a1.126 1.126 0 1 1-1.506 1.673l-5.625-5.063a1.126 1.126 0 0 1 0-1.672l5.625-5.063a1.125 1.125 0 0 1 1.506 1.673Z" />
  </svg>
);

export default LeftArrowIcon;
