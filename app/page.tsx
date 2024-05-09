import Image from "next/image";
import { Background } from "./background";
import Contact from "./contact";
import ComingSoon from "./comingsoon";

export default function Home() {
  return (
    <div className="backgoundBlur w-full relative  h-fit ">
        <Background  />
        <ComingSoon />
        <Contact />
    </div>
  );
}
