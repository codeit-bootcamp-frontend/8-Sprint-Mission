import Image, { StaticImageData } from "next/image";

interface Data {
  label: string;
  title: string;
  content: string;
  image: StaticImageData;
  alt: string;
}

interface IntroCardProps {
  data: Data;
}

function IntroCard({ data }: IntroCardProps) {
  const { label, title, content, image, alt } = data;

  return (
    <section className="flex items-center justify-center gap-16 pb-[8.6rem] pt-[8.6rem]">
      <Image className="" src={image} alt={alt} width={588} height={444} />
      <div className="">
        <p className="mb-3 text-lg font-bold text-brand-blue">{label}</p>
        <h1 className="mb-5 text-[2.5rem] font-bold text-gray-700">{title}</h1>
        <h2 className="text-2xl font-medium text-gray-700">{content}</h2>
      </div>
    </section>
  );
}

export default IntroCard;
