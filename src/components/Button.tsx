type ButtonProps = {
  href: string;
  text: string;
  target: string;
};

export function Button({ href, text, target }: ButtonProps) {
  return (
    <a href={href} target={target} rel="noreferrer">
      <button
        className="
    w-max 
    inline-block 
    text-primary 
    py-4 
    px-5 
    rounded-md
    border
    border-primary
    transition-custom
    ease-custom
    duration-custom
    cursor-pointer
    hover:bg-white hover:text-main hover:border-transparent
    "
      >
        {text}
      </button>
    </a>
  );
}
