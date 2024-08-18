import { getPlaiceholder } from "plaiceholder";

export async function blurDataProvider(src) {
  try {
    //   const src = "https://images.unsplash.com/photo-1621961458348-f013d219b50c";

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    err;
  }
}
