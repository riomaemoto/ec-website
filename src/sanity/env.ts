export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-04-24";

export const dataset = assertValue(
  "shop",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  "3cl8km4d",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
