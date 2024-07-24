import Link from "next/link";
import Blogs from "./blogs/blogs.json";
import Image from "next/image";

export default function Home() {
  const mainArticles = Blogs;

  return (
    <div className="text-center items-center">
      <h2 className="text-zinc-500/80 lg:mt-9">B L O G</h2>
      <h1 className="lg:text-6xl max-sm:text-3xl font-bold max-sm:mb-6 lg:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-zinc-50 to-blue-500">
        Hello, I&apos;m Luiz!
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        {mainArticles.map((article, index) => {
          return (
            <Link key={index} href={`/blogs/${article.slug}`}>
              <div className="text-2xl">
                <div className="border overflow-hidden rounded-xl border-zinc-50/50 m-4 lg:pb-10">
                  <div className="relative w-full h-56">
                    <Image
                      className="w-full"
                      src={article.imageURL}
                      fill
                      alt={article.title}
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="text-lg">{article.title}</h2>
                    <p className="text-xs">
                      {article.description} - {article.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
