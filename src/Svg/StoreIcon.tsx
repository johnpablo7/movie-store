import { SVGProps } from "react";

const StoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.25 14.25a8.25 8.25 0 1 1-16.5 0c0-2.177.72-4.41 2.14-6.64a.75.75 0 0 1 1.091-.19l2.415 1.86 2.65-7.286a.75.75 0 0 1 1.164-.336c.288.223 7.04 5.556 7.04 12.592Z"
      // fillOpacity={0.6}
    />
  </svg>
);

export default StoreIcon;
