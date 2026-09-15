import Hirely from "@hirely/sdk";

const apiKey = process.env.HIRELY_API_KEY!;

export const hirely = new Hirely({
  apiKey,
  cache: { enabled: true, ttl: 900 },
});
