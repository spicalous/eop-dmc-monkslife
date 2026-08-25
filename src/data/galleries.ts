import type { ImageMetadata } from 'astro'

/*
 * Gallery photos live in src/assets so that Astro processes them: each is
 * emitted as AVIF/WebP at several widths instead of being served as the
 * original multi-megabyte JPEG.
 *
 * `original/` holds the unresized sources and is excluded: an eager glob pulls
 * every match into the build output whether or not anything renders it, so
 * matching those would ship several MB of unused full-size JPEGs.
 */
const files = import.meta.glob<ImageMetadata>(
  ['../assets/images/**/*.{jpg,jpeg,png,webp}', '!../assets/images/**/original/**'],
  { eager: true, import: 'default' },
)

/** Resolves a path relative to src/assets/images, failing the build if it is missing. */
function image(path: string): ImageMetadata {
  const resolved = files[`../assets/images/${path}`]
  if (!resolved) {
    throw new Error(`Gallery image not found: src/assets/images/${path}`)
  }
  return resolved
}

/** Builds `count` paths by interpolating 1..count into `template`. */
function sequence(count: number, template: (n: number) => string): ImageMetadata[] {
  return Array.from({ length: count }, (_, i) => image(template(i + 1)))
}

export interface Gallery {
  year: number
  /** Describes the set as a whole; individual photos have no captions of their own. */
  alt: string
  photos: ImageMetadata[]
}

export const galleries: Gallery[] = [
  {
    year: 2026,
    alt: 'European Ordination Program 2026',
    photos: sequence(21, (n) => `2026/${String(n).padStart(2, '0')}.jpeg`),
  },
  {
    year: 2025,
    alt: 'European Ordination Program 2025',
    photos: [
      '1754780415260-min.jpg',
      '1754780574722-min.jpg',
      '1754780455185-min.jpg',
      '1754780441931-min.jpg',
      '1754780398305-min.jpg',
      '1754780483541-min.jpg',
      '1754780473183-min.jpg',
      '1765495926274-min.jpg',
      '1754780036003-min.jpg',
      '1754780046733-min.jpg',
      '1754780068006-min.jpg',
      '1754780013070-min.jpg',
      '1754779935458-min.jpg',
      '1754780678482-min.jpg',
      '1754780688150-min.jpg',
      '1754780871137-min.jpg',
      '1754780918399-min.jpg',
      '1754779959914-min.jpg',
      '1754780296061-min.jpg',
    ].map((file) => image(`2025/${file}`)),
  },
  {
    year: 2023,
    alt: 'European Ordination Program 2023',
    photos: sequence(17, (n) => `2023/${n}.jpg`),
  },
  {
    year: 2022,
    alt: 'European Ordination Program 2022',
    photos: [
      '1658050027481.jpg',
      '1658050028792.jpg',
      '1658050029183.jpg',
      '1658050029617.jpg',
      '1658050031862.jpg',
      '1658050032351.jpg',
      '1658050033218.jpg',
      '1658050033986.jpg',
      '1658050034811.jpg',
      '1658050035174.jpg',
      '1658050036446.jpg',
      '1658050036816.jpg',
      '1658050037198.jpg',
      '1658050037678.jpg',
      '1658050038089.jpg',
      '1658050038492.jpg',
      '1658050039004.jpg',
      '1658050039414.jpg',
      '1658050039816.jpg',
      '1658050040236.jpg',
      '1658050040693.jpg',
      '1658050041153.jpg',
      '1658050041560.jpg',
    ].map((file) => image(`2022/${file}`)),
  },
  {
    year: 2019,
    alt: 'European Ordination Program 2019',
    photos: sequence(10, (n) => `2019/misc/${n}.jpg`),
  },
]

export const galleryByYear = new Map(galleries.map((gallery) => [gallery.year, gallery]))

/** Portraits of the 2018 participants, keyed by the path stored in programs.ts. */
export const portrait = (path: string): ImageMetadata => image(path)
