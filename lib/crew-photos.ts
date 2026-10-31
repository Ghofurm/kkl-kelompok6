import { readdirSync } from "node:fs";
import { extname, join, parse } from "node:path";

const photoDirectory = join(process.cwd(), "public", "images", "crew");
const photoExtensions = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);

/**
 * Reads profile photos from public/images/crew at build time.
 * A file is matched to a member by its basename, e.g. 24670008.webp.
 */
export function getCrewPhotos(): Record<string, string> {
  try {
    return Object.fromEntries(
      readdirSync(photoDirectory, { withFileTypes: true })
        .filter(
          (entry) => entry.isFile() && photoExtensions.has(extname(entry.name).toLowerCase()),
        )
        .map((entry) => [parse(entry.name).name, `/images/crew/${entry.name}`]),
    );
  } catch {
    return {};
  }
}
