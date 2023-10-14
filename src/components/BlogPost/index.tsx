import Image, { StaticImageData } from "next/image";

interface BlogPostProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  subtitle: string;
  text: string;
  link: string;
}

export function BlogPost({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  text,
  link,
}: BlogPostProps) {
  return (
    <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
      <div className="relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="group-hover:scale-110 transition-all duration-500"
        />

        <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
          {title}
        </div>
      </div>

      <div className="px-5 py-6">
        <div className="mb-4">Jan 2, 2023</div>
        <h4 className="h4 mb-[10px]">{subtitle}</h4>
        <p className="font-light">{text}</p>
        <a href="" className="italic underline text-[#4c5354]">
          {link}
        </a>
      </div>
    </div>
  );
}
