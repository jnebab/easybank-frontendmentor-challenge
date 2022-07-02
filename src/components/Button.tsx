import cx from "classnames";

interface ButtonProps {
  label: string;
  handleClick: Function;
  classNames?: string;
}
export default function Button({
  label,
  handleClick,
  classNames,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={cx(
        "max-w-[163px] md:w-fit bg-primary-btn py-2 px-[30px] rounded-3xl text-white font-bold text-[14px] hover:lg:cursor-pointer hover:lg:opacity-40",
        classNames
      )}
    >
      {label}
    </button>
  );
}
