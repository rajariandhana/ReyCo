export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <img
          src="founders.png"
          alt="Founders"
          className="object-cover p-1 rounded-full size-32 md:size-48 z-0"
        />
        <p className="text-justify mt-4">
          <span className="text-rose-300">ReyCo</span> is a fictional company
          that operates in the IT field, providing services ranging from
          creating websites, cyber security, and game development. Started by our founders, Rey and Coco, since{" "}
          <span className="text-rose-300">1967</span> ReyCo has been trusted by
          satisfied clients all over the world.
        </p>
      </div>
    </>
  );
}
