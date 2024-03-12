export function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 100000000; // Ensure it's an 8-digit positive integer
  }

export function fetchName(hash: number): string{
    const NameTable: string[] = 
    ['Paul Gruber',
'Joshua Woods',
'Paul Wight II',
'Jamie White',
'Daniel Wheeler',
'Michael Wardlow',
'Vincent Marseglia',
'Cody Vance',
'Robert Szatkowski',
'Nicolas Dansereau',
'Mark Shepherd',
'Dustin Howard',
'Matthew Marinelli',
'Konosuke Takeshita',
'Matthew Korklan',
'Stephon Strickland',
'Christopher Lindsey',
'Steve Borden',
'Richard Starks',
'Aaron Solow',
'Schuyler Andrews',
'Satnam Bhamara',
'John Silver',
'Katsuyori Shibata',
'Jonathan Cruz Rivera',
'Simon Kippen',
'William Muñoz González',
'John Rivera',
'Joseph Robinson',
'Dustin Runnels',
'Jack Perry',
'Julian Micevski',
'Stephen Woltz',
'Benjamin Satterly',
'William Ospreay',
'Miguel Molina',
'Tyson Smith',
'Kazuchika Okada',
'Kyle Greenwood',
'Anthony Nese',
'Ezekwesiri Nduka Jr.',
'Jonathan Good',
'Julian Moriarty',
'Maxwell Friedman',
'Miroslav Barnyashev',
'Matthew Menard-Lee',
'Matthew Adams',
'Darius Martin',
'Dante Martin',
'Davis Passwood',
'Len Olson',
'Bruce Leaupepe',
'Jamar Shipman',
'Keith Lee',
'Kota Ibushi',
'Zak Bevis',
'Edward Moore',
'Nathan Blauvelt',
'Austin Matelson',
'Jasper Kange',
'Isiah Kassidy',
'Cole McKinney',
'Lee Johnson',
'John Hennigan',
'Nuufolau Seanoa',
'Christopher Irvine',
'Jeffrey Jarrett',
'Nicholas Massie',
'Matthew Massie',
'Tyler Senerchia',
'William Hobson',
'David Harwood',
'Matthew Hardy',
'Jeffrey Hardy',
'Donald Hager Jr.',
'Colten Sopp',
'Monty Sopp',
'Austin Sopp',
'Samuel Guevara',
'Marc Dionne',
'Garrett Griffith',
'Daniel Garcia',
'Kyle Fletcher',
'William Carr',
'Carlos Muñoz González',
'Shawn McBride',
'Bryan Danielson',
'Daniel Covell',
'Donovan Danhausen',
'Ariya Daivari',
'Brandon Bogle',
'Nicholas Comoroto',
'Christian Hubble',
'Max Caster',
'Claudio Castagnoli',
'James Cipperly',
'William Reso',
'Brian Button',
'Scott Colton',
'Andrew Williams',
'Bryan Keith',
'Joseph Fitzpatrick',
'Mark Pugh',
'Anthony Bowens',
'Thomas Wansaw Jr.',
'Parker Boudreaux',
'Jesse Guilmette',
'Tom Büdgen',
'William Morrissey',
'Gregory Marasciulo',
'Michael Bennett',
'Peter Hernandez',
'Lance Hoyt',
'Adam Bridle',
'Tyler Reber',
'Samuel Ratsch',
'Adam Copeland',
'Nicholas Wayne',
'Monica Beadnell',
'Anna Jernigan',
'Adrienne Reese',
'Lillian Bridget',
'Deonna Purrazzo',
'Priscilla Zuniga',
'Brittany Baker',
'Emi Motokawa',
'Dannielle Vidot',
'Hikaru Shida',
'Paige Wooding',
'Julia Hart',
'Kiera Hogan',
'Kristen Stadtlander',
'Catherine Guzman',
'Leyla Hirsch',
'Ashley Lomberger',
'Mariah Mead',
'Marina Shafir',
'Megan Doheny',
'Jazmin Benitez',
'Brandi Degroat',
'Paige VanZant',
'Olivia Hasler',
'Animata Sylla',
'Tanea Brooks',
'Stephanie Cardona',
'Dori Prange',
'Saraya Bevis',
'Serena Deeb',
'Skylar Dolecki',
'Taynara Guevara',
'Kira Magnin-Forster',
'Melissa Cervantes',
'Toni Rossall',
'Danielle Paultre',
'Yuka Sakazaki']

    return(NameTable[hash%NameTable.length])
}
export function fetchPlane(hash:number): string{
    hash = hash % 1000;
    return(`SIN${hash}`)
}
export function fetchStatus(hash:number): number{
    hash = hash % 6;
    return(hash)
}

export function fetchBelt(num: number): number {
  const numAsString = Math.abs(num).toString();
  
  if (numAsString.length >= 2) {
      return parseInt(numAsString.substring(0, 2))%50;
  } else {
      return num%50;
  }
}

export function fetchAirport(hash:number): string{
  const AirportCodeTable = ['ADL','AMD','AMS','AUC','BIA','BKK','BCN','PEK','BLN','BRU','BRE','PUS','CNS','CPT',
'DOH','LON','CKG','MAA','CDG','CHC','CMB','TFU','JFK','LGW','KUL','FRA','DXB','CGK','SGN','IST','HYD','HKG',
'IAH','LAX','KIX','MAN','PEN','PER','SYD','HKT','TPE','MEL','SFO','ICN','HND','ZRH']
  return(AirportCodeTable[hash%AirportCodeTable.length])
}