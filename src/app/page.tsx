import Image from "next/image";

export default function Home() {
  return (
    <div className=" from-stone-800 to-stone-700 bg-gradient-to-b min-h-screen overflow-auto">
      <div className="flex flex-col items-center justify-center h-[1000px]">
        <h1 className="font-bold text-4xl text-white">Create VN easly</h1>
        <br/>
        <button className="text-white font-bold bg-black rounded-2xl w-32 h-16 hover:border-2 hover:border-white duration-25">Get Started</button>
      </div>
    </div>
  );
}
