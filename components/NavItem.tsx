import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Header.module.css";

export default function NavItem({ href, pathname, children }: { href: string, pathname:string, children: ReactNode }) {
  const isOnPath = (pathname === href) || (pathname.slice(0, href.length + 1) === (href + '/'));

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <li className={isOnPath ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        {children}
      </li>
    </Link>
  )
}