import { SVGProps } from "react";

const LibraryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.25 4.5v6a.748.748 0 0 1-.75.75h-6a.748.748 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75Zm8.25-.75h-6a.75.75 0 0 0-.75.75v6a.748.748 0 0 0 .75.75h6a.748.748 0 0 0 .75-.75v-6a.748.748 0 0 0-.75-.75Zm-9 9h-6a.748.748 0 0 0-.75.75v6a.75.75 0 0 0 .75.75h6a.748.748 0 0 0 .75-.75v-6a.748.748 0 0 0-.75-.75Zm9 0h-6a.748.748 0 0 0-.75.75v6a.748.748 0 0 0 .75.75h6a.748.748 0 0 0 .75-.75v-6a.748.748 0 0 0-.75-.75Z"
      // fillOpacity={0.6}
    />
  </svg>
);

export default LibraryIcon;
