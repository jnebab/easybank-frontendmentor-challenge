import { articles } from "../lib/articles";

export default function Articles() {
  return (
    <section className="py-[88px] text-center mx-6 lg:mx-[165px]">
      <h2 className="text-[32px] leading-9 -tracking-[0.57] mb-8 lg:text-left">
        Latest Articles
      </h2>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        {articles.map((a) => {
          return (
            <div key={a.title} className="bg-white px-0 pb-6 rounded-md">
              <img
                src={a.src}
                alt={a.title}
                className="w-full max-h-[200px] lg:h-[200px] mb-6 rounded-t-md md:object-cover"
              />
              <div className="px-8 lg:px-6 py-0 text-left">
                <p className="text-[10px] text-neutral leading-[18px] -tracking-[0.15625px] pb-2">{`By ${a.author}`}</p>
                <h4 className="pb-2 text-base text-dark font-light leading-5 -tracking-[0.29px]">
                  {a.title}
                </h4>
                <p className="text-[13px] leading-[18px] -tracking-[0.2px] text-normal">
                  {a.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
