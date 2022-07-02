export interface Feature {
  src: string;
  title: string;
  desc: string;
}

export const features = [
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484346/easybank/icon-online_dpkpad.svg",
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484344/easybank/icon-budgeting_q5yjci.svg",
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.",
  },
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484346/easybank/icon-onboarding_t7qyit.svg",
    title: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484344/easybank/icon-api_y0pjgr.svg",
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
] as Feature[];
