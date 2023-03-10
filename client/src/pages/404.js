import Image from "next/image";
export default () => {
  return (
    <div className="flex flex-col gap-4 w-[calc(100%-62px)] ml-auto px-2.5 md:px-5 pb-12 mt-[62px] pt-6 md:pt-12 relative items-center justify-center text-center">
      <Image
        quality={100}
        loading="eager"
        priority={true}
        height={50}
        width={180}
        className="object-cover w-auto h-auto"
        alt={"displaying duck"}
        src={`/1.png`}
      />
      <p className="max-w-sm text-sm leading-5 text-main-text/70">404: We couldn't find that page.</p>
    </div>
  );
};
