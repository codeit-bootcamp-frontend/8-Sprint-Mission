import { useEffect, useState } from "react";

function NavButton({ children, className, path }) {
  const [color, setColor] = useState("var(--gray-600)");

  useEffect(() => {
    if (path === "/items") {
      setColor("var(--blue)");
    }
  }, [path]);

  return (
    <span className={className} style={{ color: color }}>
      {children}
    </span>
  );
}

export default NavButton;
