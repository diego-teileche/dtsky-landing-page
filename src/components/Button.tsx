interface Props {
  text: string
  href: string
  target?: string
}

const Button = ({ text, href, target }: Props) => {
  return (
    <a
      href={href}
      target={target}
      className="relative rounded-lg bg-gradient-to-b from-[#021E43] to-[#043D87] px-3 py-2 text-sm font-medium shadow-[0px_0px_12px_#0461D1]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0px_0px_10px_rgba(4,61,135,0.7)_inset]"></div>
      </div>
      <span>{text}</span>
    </a>
  )
}

export default Button
