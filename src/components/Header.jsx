"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <Link href="/" className="logo">
                        <span className="logo-icon">⚔</span>
                        <span>God of War</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="nav">
                        <Link
                            href="/"
                            className={`nav-link ${
                                pathname === "/"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/apiinfo"
                            className={`nav-link ${
                                pathname === "/apiinfo"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            API Info
                        </Link>
                        <Link
                            href="/characters"
                            className={`nav-link ${
                                pathname === "/characters" || pathname.startsWith("/characters/")
                                    ? "active"
                                    : ""
                            }`}
                        >
                            Personagens
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
