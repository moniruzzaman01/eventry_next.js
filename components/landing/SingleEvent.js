import Image from "next/image";
import eventImage from "@/public/image.png";
import Link from "next/link";
import ActionButton from "../ActionButton";

export default function SingleEvent() {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={eventImage}
        height={200}
        width={200}
        alt="Event 1"
        className="w-full"
      />

      <div className="p-3">
        <Link href="/details/id" className="font-bold text-lg">
          Google I/O Extended
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>1k Interested</span>
          <span>|</span>
          <span>40K Going</span>
        </div>

        <ActionButton />
      </div>
    </div>
  );
}
