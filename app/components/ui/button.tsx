import Link from "next/link";
import { jost } from "@/app/assets/fonts/font_collection";

export default function Button(props: any) {
    return (
        <div className="w-full">
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex-auto rounded"> */}
            <Link href={props.href}>
                <button className={`${jost.className} ${props.type}-button w-full h-14 rounded-lg border-none align-center font-semibold`}>
                    {props.text}
                </button>
            </Link>
        </div>
    );
}