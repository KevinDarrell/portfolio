import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "Experience", href: "#experience" },
        { name: "About", href: "#about" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 dark:border-zinc-800/50">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
                <Link className="flex items-center space-x-2" href="/">
                    <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">M Kevin Darrell</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                        key={link.name}
                        href={link.href}
                        className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm" className="px-4">
                            Resume
                        </Button>
                    </Link>
                </nav>

                <button className="flex md:hidden p-2 text-zinc-900 dark:text-zinc-100">
                    <span className="font-semibold text-sm">Menu</span>
                </button>
            </div>
        </header>
    );
}