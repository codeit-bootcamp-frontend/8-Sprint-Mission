import Image from "next/image";
import { useRouter } from "next/router";
import { banners } from "@/lib/placeholder-component";

export default function Banner({ top }: { top?: boolean; bottom?: boolean }) {
  const router = useRouter();
  const banner = top ? banners.top : banners.bottom;
  return (
    <section className='flex flex-col items-center h-banner px-1 overflow-hidden lg:flex-row lg:justify-center lg:px-4 xl:container xl:mx-auto'>
      <div
        className={`flex-grow grid grid-flow-row ${
          top ? "auto-rows-[3.1875rem_3.1875rem]" : ""
        } w-full sm:auto-rows-fr sm:justify-items-center`}>
        <h1 className='flex justify-center items-center font-bold xs:text-xl md:text-3xl lg:text-4xl lg:whitespace-pre-wrap'>
          {banner.title}
        </h1>
        {top && (
          <button
            className='btn btn-primary sm:btn-large lg:self-end'
            onClick={() => router.push("/more")}>
            구경하러 가기
          </button>
        )}
      </div>
      <Image
        priority
        className='min-w-max object-cover lg:self-end'
        src={banner.src}
        alt={banner.alt}
        width={banner.width}
        height={banner.height}
      />
    </section>
  );
}
