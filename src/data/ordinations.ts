export interface Ordination {
  /** Anchor id for the temple's card. */
  id: string
  /** What the temple is called on its own, e.g. on the timeline. */
  name: string
  temple: string
  /** Town or region, then country. */
  place: string
  flag: string
  /** ISO dates (YYYY-MM-DD). `end` is the last day of the program. */
  start: string
  end: string
  ceremony: string
  languages: string[]
}

export const ordinations: Ordination[] = [
  {
    id: 'belgium',
    name: 'Belgium',
    temple: 'Wat Phra Dhammakaya Belgium',
    place: 'Lede, Belgium',
    flag: '🇧🇪',
    start: '2027-06-12',
    end: '2027-06-30',
    ceremony: '2027-06-19',
    languages: ['English', 'German'],
  },
  {
    id: 'sjaelland',
    name: 'Sjælland',
    temple: 'Wat Phra Dhammakaya Sjælland',
    place: 'Zealand, Denmark',
    flag: '🇩🇰',
    start: '2027-07-05',
    end: '2027-07-18',
    ceremony: '2027-07-11',
    languages: ['English'],
  },
  {
    id: 'bavaria',
    name: 'Bavaria',
    temple: 'Wat Phra Dhammakaya Bavaria',
    place: 'Königsbrunn, Germany',
    flag: '🇩🇪',
    start: '2027-08-01',
    end: '2027-08-15',
    ceremony: '2027-08-08',
    languages: ['German'],
  },
  {
    id: 'london',
    name: 'London',
    temple: 'Wat Phra Dhammakaya London',
    place: 'Woking, United Kingdom',
    flag: '🇬🇧',
    start: '2027-08-15',
    end: '2027-08-29',
    ceremony: '2027-08-22',
    languages: ['English'],
  },
]

export const DAY_MS = 86_400_000

/* Dates are read and formatted as UTC so the build machine's time zone can never shift them a day. */
export const parseDate = (iso: string): Date => new Date(`${iso}T00:00:00Z`)

export function formatDate(iso: string, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', ...options }).format(parseDate(iso))
}

/** Counts both the first and last day. */
export function lengthInDays({ start, end }: Ordination): number {
  return Math.round((parseDate(end).getTime() - parseDate(start).getTime()) / DAY_MS) + 1
}

/** "12 to 30 June", or "28 June to 5 July" when it crosses a month. */
export function formatRange({ start, end }: Ordination): string {
  const sameMonth = start.slice(0, 7) === end.slice(0, 7)
  const from = formatDate(start, sameMonth ? { day: 'numeric' } : { day: 'numeric', month: 'long' })
  return `${from} to ${formatDate(end, { day: 'numeric', month: 'long' })}`
}
