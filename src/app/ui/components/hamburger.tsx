"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Hamburger() {
  const [click, setClick] = useState(false);

  return (
    <div className="m-auto p-4 lg:hidden">
      <button onClick={() => setClick(!click)}>
        <Image src={"/hamburger.svg"} alt="Hamburger" width={24} height={24} />
      </button>

      <div>
        {click && (
          <div
            className={`absolute top-0 left-0 w-full h-full bg-zinc-900 z-50`}
          >
            <ul className="flex flex-col items-center p-6 h-full gap-4">
              <button onClick={() => setClick(!click)}>
                <Image
                  src={"/close.svg"}
                  alt="Hamburger"
                  width={18}
                  height={18}
                />
              </button>
              <li>
                <Link href="/" onClick={() => setClick(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" onClick={() => setClick(false)}>
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setClick(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about-me" onClick={() => setClick(false)}>
                  About me
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/felipalds/?locale=en_US"
                  onClick={() => setClick(false)}
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/Felipalds"
                  onClick={() => setClick(false)}
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
