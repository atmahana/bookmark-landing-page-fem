export function IconArrow({ isOpen, className }) {
  const stroke = isOpen ? "#fa5757" : "#5267DF";
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
    >
      <path fill="none" stroke={stroke} strokeWidth="3" d="M1 1l8 8 8-8" />
    </svg>
  );
}
