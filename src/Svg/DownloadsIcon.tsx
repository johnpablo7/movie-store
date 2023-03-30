import { SVGProps } from "react";

const DownloadsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.267 11.108a1.125 1.125 0 0 1 1.591-1.591l2.017 2.017V3.747a1.125 1.125 0 1 1 2.25 0v7.787l2.017-2.017a1.125 1.125 0 0 1 1.591 1.59l-3.938 3.938a1.125 1.125 0 0 1-1.59 0l-3.938-3.937ZM21 11.625a1.125 1.125 0 0 0-1.125 1.125v6.375H4.125V12.75a1.125 1.125 0 0 0-2.25 0v6.75a1.877 1.877 0 0 0 1.875 1.875h16.5a1.877 1.877 0 0 0 1.875-1.875v-6.75A1.125 1.125 0 0 0 21 11.625Z" />
  </svg>
);

export default DownloadsIcon;
