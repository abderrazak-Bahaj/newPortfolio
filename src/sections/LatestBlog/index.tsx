
import { Card } from "@/components";

const LatestBlog = () => {
  const posts = [
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons á€” four in total á€” were finally resolved in 2015 when gravitational.",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons á€” four in total á€” were finally resolved in 2015 when gravitational.",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl dark:text-white">
            Latest blog posts
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-x-hidden py-5">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-5">
            {posts.map((post, index) => (
              <Card
                key={index}
                details={post.desc}
                title={post.title}
                link={post.href}
                linkText="Read More"
                className="shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestBlog;
