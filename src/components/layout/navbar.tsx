import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "Experience", href: "#experience" },
        { name: "About", href: "#about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <Link className="mr-6 flex items-center space-x-2" href="/">
                    <span className="font-bold text-lg tracking-tight">M Kevin Darrell</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                        key={link.name}
                        href={link.href}
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
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

                <button className="flex items-center space-x-2 md:hidden">
                    <span className="font-bold">Menu</span>
                </button>
            </div>
        </header>
    );
}