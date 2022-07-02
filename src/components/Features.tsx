import { features } from "../lib/features";

export default function Features() {
  return (
    <section className="pt-16 lg:pt-24 lg:px-[165px] w-full bg-neutral-light px-6 text-center lg:text-left">
      <div>
        <h2 className="text-[32px] lg:text-[40px] lg:leading-[64px] lg:-tracking-[0.71px] leading-9 -tracking-[0.57px] mb-4">
          Why Choose Easybank?
        </h2>
        <p className="lg:text-lg lg:leading-[28px] lg:-tracking-[0.28px] lg:w-[60ch]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="space-y-8 mt-14 pb-16 lg:flex lg:space-y-0 lg:space-x-[30px]">
        {features.map((f) => {
          return (
            <div
              key={f.src}
              className="grid place-items-center lg:place-items-start lg:max-w-[255px]"
            >
              <img src={f.src} alt={f.title} className="mb-6" />
              <h4 className="mb-4 text-xl leading-[28px]">{f.title}</h4>
              <p className="lg:text-base">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
