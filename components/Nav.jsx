"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src=" /assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia 2</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex">
        {isSignedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              onClick={() => {
                setIsSignedIn((current) => !current);
              }}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src=" /assets/images/logo.svg"
                width={37}
                height={37}
                className="rouded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                setIsSignedIn((current) => !current);
              }}
            >
              Sign In
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden relative">
        {isSignedIn ? (
          <div className="flex">
            <Image
              src=" /assets/images/logo.svg"
              width={37}
              height={37}
              className="rouded-full"
              alt="profile"
              onClick={() => {
                setToggleDropdown((current) => !current);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    setIsSignedIn((current) => !current);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                setIsSignedIn((current) => !current);
              }}
              className="black_btn"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
