"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

export default function NewNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();

    router.refresh();
    router.push("/?logout=true");
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-separator backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Link href={"/"} className="flex gap-2 items-center">
              <Image
                src={"/logo.png"}
                alt="logo"
                loading="eager"
                width={30}
                height={30}
                className="object-cover h-auto w-auto"
              />
              <h3 className="font-black text-lg">Slab.</h3>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>

          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          {!user && isPending && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/register"}>Register</Link>
              </li>
              <li>
                <Link href={"/login"}>
                  <Button variant="outline">Log In</Button>
                </Link>
              </li>
            </ul>
          )}
          {isPending ? null : !user ? (
            <ul className="flex items-center text-sm gap-5">
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/login">
                  <Button variant="outline">Log In</Button>
                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href={"/"} className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/all-tiles"} className="block py-2">
                All Tiles
              </Link>
            </li>

            <li>
              <Link href={"/profile"} className="block py-2">
                Profile
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {isPending ? null : !user ? (
                <ul className="flex items-center text-sm gap-5">
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                  <li>
                    <Link href="/login">
                      <Button variant="outline">Log In</Button>
                    </Link>
                  </li>
                </ul>
              ) : (
                <div className="flex gap-3">
                  <Button onClick={handleSignOut} size="sm" variant="danger">
                    SignOut
                  </Button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
