import { SVGProps } from "react";

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.7 16.494c-.555-.957-1.219-2.775-1.219-5.994v-.665c0-4.152-3.33-7.554-7.425-7.585H12a7.49 7.49 0 0 0-7.48 7.5v.75c0 3.219-.664 5.036-1.22 5.994a1.5 1.5 0 0 0 1.293 2.256h3.657a3.75 3.75 0 1 0 7.5 0h3.658a1.5 1.5 0 0 0 1.294-2.256ZM12 21a2.253 2.253 0 0 1-2.25-2.25h4.5A2.253 2.253 0 0 1 12 21Z" />
  </svg>
);

export default NotificationIcon;
