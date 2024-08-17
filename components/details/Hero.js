import Image from "next/image";
import ActionButton from "../ActionButton";

export default function Hero({ eventDetails }) {
  const { name, location, interested_ids, going_ids, imageUrl } =
    eventDetails || {};

  return (
    <>
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={imageUrl}
          alt="Event 1"
          className="h-[450px] mx-auto"
          height={900}
          width={900}
        />
      </div>
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{interested_ids?.length} Interested</span>
            <span>|</span>
            <span>{going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButton />
      </div>
    </>
  );
}
