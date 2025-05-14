// src/components/shared/HandPlatter.tsx
import type { SVGProps } from 'react';

// IMPORTANT: Replace the SVG content below with your actual HandPlatter SVG code.
// This component assumes you will provide the <path>, <circle>, etc. elements
// from your SVG.
export function HandPlatter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24" 
      height="24" 
      viewBox="0 0 24 24" // Adjust this viewBox to match your SVG's original viewBox
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spreads other props like className, onClick, etc.
    >
      {/* 
        !!! REPLACE THIS ENTIRE COMMENT BLOCK AND THE <path>S BELOW 
        WITH THE <path>, <circle>, <rect>, etc. elements from YOUR SVG code. 
        Do NOT include another <svg> tag inside here.

        Example placeholder paths (DELETE THESE AND USE YOUR OWN):
      */}
      <path d="M21.3827 14.9403C21.3827 18.3443 17.2597 21.0963 12.0001 21.0963C6.74038 21.0963 2.61743 18.3443 2.61743 14.9403C2.61743 11.5362 6.74038 8.78418 12.0001 8.78418C17.2597 8.78418 21.3827 11.5362 21.3827 14.9403Z" />
      <path d="M6 10L7.5 4H16.5L18 10" />
      {/* End of placeholder SVG content */}
    </svg>
  );
}
