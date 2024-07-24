import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-100 m-auto max-sm:p-4 lg:p-8 max-sm:hidden">
      <ul className="flex items-center flex-row max-sm:gap-8 lg:gap-16 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/felipalds/?locale=en_US">
            <Image
              className="mb-1"
              src="/linkedin.svg"
              alt="logo"
              width={32}
              height={32}

              // className="max-sm:w-20 lg:w-32"
            />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/Felipalds">
            <Image
              className="mb-1"
              src="/github.svg"
              alt="logo"
              width={32}
              height={32}
            />
          </a>
        </li>
      </ul>
    </header>
  );
}
