// filename: src/components/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/members", label: "MEMBERS" },
    { href: "/works", label: "WORKS" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="gnb-container">
      <Link href="/" className="logo">
        <Image src="/images/logo_seopyeong.png" alt="법무법인 서평" width={160} height={60} priority />
      </Link>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
        <Image src="/images/btn_hamburger.png" alt="메뉴" width={24} height={18} />
      </button>
      <nav className={`nav-list${menuOpen ? " open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
