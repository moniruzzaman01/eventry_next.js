import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";
import { replaceMongoIdInArrayOfString } from "@/utils/db-utils";
import EventSchemaScript from "../meta/EventSchemaScript";
import { blurDataProvider } from "@/utils/blur_data_provider";

export default async function SingleEvent({ event }) {
  const { id, name, location, imageUrl, interested_ids, going_ids } =
    event || {};
  const blurData = await blurDataProvider(imageUrl);

  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventSchemaScript event={event} />
      <Image
        src={imageUrl}
        height={200}
        width={200}
        alt={imageUrl}
        className="w-full"
        placeholder="blur"
        blurDataURL={blurData}
      />

      <div className="p-3">
        <Link href={`/details/${id}`} className="font-bold text-lg">
          {name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{interested_ids?.length} Interested</span>
          <span>|</span>
          <span>{going_ids?.length} Going</span>
        </div>

        <ActionButton
          eventId={id}
          interested_ids={replaceMongoIdInArrayOfString(interested_ids)}
          going_ids={replaceMongoIdInArrayOfString(going_ids)}
        />
      </div>
    </div>
  );
}
