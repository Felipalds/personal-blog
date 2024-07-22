import Blogs from "./blogs/blogs.json";
import Image from "next/image";

export default function Home() {
  const mainArticles = Blogs;

  return (
    <div className="text-center items-center">
      <h2 className="text-zinc-500/80 mt-9">B L O G</h2>
      <h1 className="lg:text-6xl max-sm:text-3xl font-bold lg:mb-24 bg-clip-text text-transparent bg-gradient-to-r from-zinc-50 to-blue-500">
        Hello, I&apos;m Luiz!
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        {mainArticles.map((article, index) => {
          return (
            <div key={index} className="text-2xl">
              <div className="border overflow-hidden rounded-xl border-zinc-50/50 m-4 lg:pb-10">
                <Image
                  src={article.imageURL}
                  width={200}
                  height={200}
                  alt={article.title}
                />
                <h2 className="text-lg">{article.title}</h2>
                <p className="text-xs">
                  {article.description} - {article.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
