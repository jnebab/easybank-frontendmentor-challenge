import Button from "./Button";

export default function Hero() {
  return (
    <section className="overflow-clip lg:overflow-y-visible lg:overflow-x-clip pb-[88px] lg:grid lg:grid-cols-2 lg:pb-0 lg:px-[165px] lg:relative lg:h-[736px] lg:bg-[#F2F2F2]">
      <div className="lg:overflow-y-clip bg-hero-mobile-bg lg:bg-hero-desktop-bg lg:bg-no-repeat lg:bg-[left_bottom_10rem] bg-cover h-fit lg:absolute lg:-right-[20px] lg:top-0">
        <img
          src="https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484349/easybank/image-mockups_zjdkth.png"
          alt="mobile-phones"
          className="relative -top-[130px] lg:-top-[100px] lg:w-full lg:right-[-112px]"
        />
      </div>
      <div className="md:mt-10 lg:mt-[170px] text-center lg:text-left px-6">
        <h1 className="text-[40px] lg:text-[56px] leading-[48px] lg:leading-[64px] lg:text-light mb-4">
          Next generation digital banking
        </h1>
        <p className="lg:text-lg lg:leading-[28px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button
          label="Request Invite"
          handleClick={() => {}}
          classNames="mt-8"
        />
      </div>
    </section>
  );
}
