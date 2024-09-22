import { jost } from "@/app/assets/fonts/font_collection";
import Image from "next/image";

export default async function MainLogo() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src="/images/clear_logo.png"
                width={200}
                height={221.42}
                className="mb-14 logo-image"
                alt="Main logo of Parallel GPT"
            />
            <div className={`${jost.className} title logo-text`}>Parallel G<span className="red-title">P</span><span className="green-title">T</span></div>
        </div>
    );
}