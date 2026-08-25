export interface Participant {
  name: string
  dob?: string
  location: string
  flag: string
  /** Path relative to src/assets/images. */
  portrait: string
}

export const programs: Record<number, Participant[]> = {
  2018: [
    {
      name: 'Sven-Olov Brobäck',
      location: 'Sweden',
      flag: '🇸🇪',
      portrait: '2018/portraits/1.png',
    },
    {
      name: 'Martin Fedorski',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/2.png',
    },
    {
      name: 'Michael Petersen',
      dob: '24 February 1966',
      location: 'Denmark',
      flag: '🇩🇰',
      portrait: '2018/portraits/3.png',
    },
    {
      name: 'David Gauny',
      location: 'Luxembourg',
      flag: '🇱🇺',
      portrait: '2018/portraits/4.png',
    },
    {
      name: 'Kris Van Hauwermeiren',
      location: 'Belgium',
      flag: '🇧🇪',
      portrait: '2018/portraits/5.png',
    },
    {
      name: 'Marc',
      location: 'Netherlands',
      flag: '🇳🇱',
      portrait: '2018/portraits/6.png',
    },
    {
      name: 'Gordon Craig',
      dob: '15 August 1973',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/7.png',
    },
    {
      name: 'Jimmy Ekman',
      dob: '21 June 1976',
      location: 'Sweden',
      flag: '🇸🇪',
      portrait: '2018/portraits/8.png',
    },
    {
      name: 'Komsan Audta',
      dob: '27 February 1977',
      location: 'France',
      flag: '🇫🇷',
      portrait: '2018/portraits/9.png',
    },
    {
      name: 'Phakhin Kosin',
      location: 'Czech Republic',
      flag: '🇨🇿',
      portrait: '2018/portraits/10.png',
    },
    {
      name: 'Elvis Taylor',
      dob: '31 January 1978',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/11.png',
    },
    {
      name: 'Thomas Morris',
      dob: '08 June 1984',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/12.png',
    },
    {
      name: 'Thanatporn Samutkota',
      dob: '8 August 1986',
      location: 'Germany',
      flag: '🇩🇪',
      portrait: '2018/portraits/13.png',
    },
    {
      name: 'Kevin Schmid',
      dob: '19 September 1989',
      location: 'Germany',
      flag: '🇩🇪',
      portrait: '2018/portraits/14.png',
    },
    {
      name: 'Chatchai Noijaidee',
      dob: '6 January 1990',
      location: 'Sweden',
      flag: '🇸🇪',
      portrait: '2018/portraits/15.png',
    },
    {
      name: 'Anant Charoenpanit',
      dob: '29 July 1992',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/16.png',
    },
    {
      name: 'Ben Lertlumprasertkul',
      dob: '12 September 1992',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/17.png',
    },
    {
      name: 'Eric Irving',
      dob: '16 September 1992',
      location: 'France',
      flag: '🇫🇷',
      portrait: '2018/portraits/18.png',
    },
    {
      name: 'Ratchata Nararak',
      dob: '26 February 1994',
      location: 'Germany',
      flag: '🇩🇪',
      portrait: '2018/portraits/19.png',
    },
    {
      name: 'Pete Chitvicheankul',
      dob: '4 April 1994',
      location: 'United Kingdom',
      flag: '🇬🇧',
      portrait: '2018/portraits/20.png',
    },
    {
      name: 'Natthawut Thavornsalee',
      location: 'Sweden',
      flag: '🇸🇪',
      portrait: '2018/portraits/21.png',
    },
    {
      name: 'Paworn Saen',
      dob: '11 October 1995',
      location: 'Germany',
      flag: '🇩🇪',
      portrait: '2018/portraits/22.png',
    },
    {
      name: 'Than Zaw Lin Hantheim',
      dob: '03 April 1998',
      location: 'Netherlands',
      flag: '🇳🇱',
      portrait: '2018/portraits/23.png',
    },
    {
      name: 'Tanagon Orlandin',
      dob: '11 April 1998',
      location: 'Switzerland',
      flag: '🇨🇭',
      portrait: '2018/portraits/24.png',
    },
    {
      name: 'Suphawin Satjeen',
      dob: '7 May 1998',
      location: 'Netherlands',
      flag: '🇳🇱',
      portrait: '2018/portraits/25.png',
    },
  ],
}
