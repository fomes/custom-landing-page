interface FooterSocialIconProps {
  icon: string;
}

export function FooterSocialIcon({ icon }: FooterSocialIconProps) {
  return (
    <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent-default cursor-pointer transition-all duration-300">
      <i className={icon}></i>
    </div>
  );
}
