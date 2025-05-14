// src/components/shared/HandPlatterIcon.tsx
import type { SVGProps } from 'react';

export function HandPlatterIcon(props: SVGProps<SVGSVGElement>) {
  // IMPORTANT: Replace the SVG content below with your actual HandPlatter SVG code.
  // Make sure your SVG's <svg> tag includes attributes like width, height, viewBox.
  // If you want the icon to inherit color from its parent (like text color),
  // set 'stroke="currentColor"' or 'fill="currentColor"' on the relevant SVG elements.
  return (
    <svg
      // Default width/height, can be overridden by className in Logo.tsx (e.g., "h-7 w-7")
      // Ensure these match your SVG's intended aspect ratio if not overridden.
      width="24" 
      height="24" 
      viewBox="0 0 24 24" // Adjust this viewBox to match your SVG's original viewBox
      fill="none" // Often 'none' for icons that use stroke, or a specific color
      stroke="currentColor" // Default, makes the icon adopt text color. Adjust as needed.
      strokeWidth="1.5" // Adjust as needed
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spreads other props like className, onClick, etc.
    >
      {/* 
        !!! REPLACE THIS ENTIRE COMMENT BLOCK AND THE <path>S BELOW 
        WITH THE <path>, <circle>, <rect>, etc. elements from YOUR SVG code. 
        Do NOT include another <svg> tag inside here.
      */}
      <path d="M21.3827 14.9403C21.3827 18.3443 17.2597 21.0963 12.0001 21.0963C6.74038 21.0963 2.61743 18.3443 2.61743 14.9403C2.61743 11.5362 6.74038 8.78418 12.0001 8.78418C17.2597 8.78418 21.3827 11.5362 21.3827 14.9403Z" />
      <path d="M6 10L7.5 4H16.5L18 10" />
      {/* End of placeholder SVG content */}
    </svg>
  );
}
