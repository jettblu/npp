import ImageWithBlur from "../../components/images/ImageWithBlur";

export default function Gallery() {
  const imagePaths: string[] = [];
  return (
    <div className="max-w-7xl mx-auto">
      {imagePaths.map((src: string, i: number) => (
        <ImageWithBlur
          width={100}
          height={100}
          alt="Gallery image"
          src={src}
          className="object-cover max-w-sm h-[100px] md:w-[200px] md:max-w-2xl  md:h-[200px]"
        />
      ))}
    </div>
  );
}
