import { SVGProps } from "react";

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.999 12h12.25l-5.25-5.25.664-.75 6.5 6.5-6.5 6.5-.664-.75 5.25-5.25H3.999v-1Z" />
  </svg>
);

export default ArrowIcon;
