const metroList = [
  {
    metroName: 'Atlanta / Georgia',
    regions: [
      'All Atlanta / Georgia',
      'Atlanta',
      'Northeast Atlanta',
      'Northwest Atlanta',
      'Braselton',
      'South Atlanta',
      'Columbus',
      'Athens',
      'Alpharetta / Roswell',
      'Augusta',
      'N.GA Mountains / Wine Country',
      'Macon',
      'Swainsboro',
      'Northeast Georgia',
      'Northwest Georgia',
      'Pine Mountain',
      'Southwest Georgia',
      'Statesboro'
    ],
    eventKey: '1'
  },
  {
    metroName: 'Baltimore Area',
    regions: [
      'All Baltimore / Maryland',
      'Baltimore',
      'Baltimore Suburbs',
      'Ocean City / Delware Shore',
      'Greater Annapolis',
      'Eastern Shore',
      'Western MD',
      'Chambersburg'
    ],
    eventKey: '2'
  },
  {
    metroName: 'Boston / New England',
    regions: [
      'All Boston / New England',
      'Boston',
      'Boston Suburbs',
      'Central MA',
      'Western MA',
      'Southern MA',
      'Cape Cod and the Islands',
      'Maine',
      'Rhode Island',
      'Vermont',
      'New Hampshire'
    ],
    eventKey: '3'
  },
  {
    metroName: 'Chicago / Illinois',
    regions: [
      'All Chicago / Illinois',
      'Chicago',
      'North Suburbs',
      'Northwest Suburbs',
      'West Suburbs',
      'Southwest Suburbs',
      'Near West',
      'South Suburbs',
      'Central Illinois',
      'Galena',
      'Northwest Indiana',
      'Rockford',
      'Southern Illinois',
      'Rochelle',
      'Northwest Illinois',
      'Thomson',
      'Western Illinois'
    ],
    eventKey: '4'
  },
  {
    metroName: 'Dallas',
    regions: [
      'All Dallas - Fort Worth',
      'Dallas',
      'Dallas Suburbs',
      'Fort Worth',
      'Mid Cities',
      'Fort Worth Suburbs',
      'Greenville',
      'Montagua County',
      'Navarro County',
      'Sherman',
      'Stephenville',
      'Witchita Falls'
    ],
    eventKey: '5'
  },
  {
    metroName: 'Denver / Colorado',
    regions: [
      'All Denver / Colorado',
      'Denver',
      'Denver Suburbs',
      'Mountains',
      'Boulder Area',
      'Colorado Springs',
      'Fort Collins',
      'Durango',
      'Grand Junction / Western',
      'Estes Park',
      'Allenspark',
      'Southern Colorado'
    ],
    eventKey: '6'
  },
  {
    metroName: 'Detroit / Eastern Michigan',
    regions: [
      'All Detroit / Eastern Michigan',
      'Detroit',
      'Ann Arbor',
      'Windsor ON',
      'The Thumb',
      'Saginaw',
      'Jackson',
      'Southeast Michigan'
    ],
    eventKey: '7'
  },
  {
    metroName: 'Houston',
    regions: [
      'All Houston',
      'Houston',
      'The Woodlands',
      'Sugar Land',
      'Galveston',
      'East Texas',
      'Katy',
      'Brenham',
      'El Campo',
      'Conroe',
      'Port Lavaca',
      'Beaumont',
      'Kemah / Seabrook',
      'Port Arthur'
    ],
    eventKey: '8'
  },
  {
    metroName: 'Las Vegas',
    regions: [
      'All Las Vegas',
      'Las Vegas',
      'The Strip',
      'Summerlin',
      'Downtown',
      'Henderson',
      'Jean',
      'Lake Las Vegas',
      'South Las Vegas',
      'North Las Vegas',
      'Westside',
      'Boulder City',
      'Eastside',
      'Laughlin',
      'Elko',
      'Goodsprings',
      'Primm',
      'Southern Nevada'
    ],
    eventKey: '9'
  },
  {
    metroName: 'Los Angeles',
    regions: [
      'All Los Angeles',
      'Tejon Pass',
      'West Hollywood / Beverly Hills / Mid-Wilshire',
      'Westside',
      'Hollywood',
      'San Fernando Valley / Valencia',
      'Downtown / South & East LA',
      'Beach Cities',
      'Long Beach / Catalina',
      'Ventura County',
      'Inland Empire',
      'Pasadena / San Gabriel',
      'Antelope Valley'
    ],
    eventKey: '10'
  },
  {
    metroName: 'Miami / Southeast Florida',
    regions: [
      'All Miami / Southeast Florida',
      'Miami - Dade County',
      'Palm Beach County',
      'Ft. Lauderdale - Broward County'
    ],
    eventKey: '11'
  },
  {
    metroName: 'Minneapolis',
    regions: [
      'All Minneapolis - St. Paul',
      'Twin Cities / Minneapolis',
      'Twin Cities / Northern Suburbs',
      'Twin Cities / Southern Suburbs',
      'Twin Cities / Eastern Suburbs',
      'Twin Cities / Western Suburbs',
      'Twin Cities / St. Paul',
      'Rochester',
      'St. Cloud',
      'Duluth',
      'Mankato',
      'Albert Lea / Austin',
      'Central Minnesota',
      'Northwest Minnesota',
      'Southern Minnesota',
      'Southwest Minnesota'
    ],
    eventKey: '12'
  },
  {
    metroName: 'New Orleans / Louisiana',
    regions: [
      'All New Orleans / Louisiana',
      'New Orleans',
      'Houma',
      'Leesville',
      'Northshore'
    ],
    eventKey: '13'
  },
  {
    metroName: 'New York Area',
    regions: [
      'All New York / Tri-State Area',
      'Manhattan',
      'New Jersey - North',
      'New Jersey - Central',
      'Long Island / Hamptons',
      'Connecticut',
      'Upstate New York',
      'Westchester / Hudson Valley',
      'Brooklyn',
      'Queens',
      'Western New York',
      'Staten Island',
      'Bronx',
      'Central New York'
    ],
    eventKey: '14'
  },
  {
    metroName: 'Orlando / Central Florida East',
    regions: [
      'All Orlando / Central Florida East',
      'Orlando',
      'Daytona Beach',
      'Ocala / Gainesville',
      'Space Coast',
      'southeast',
      'Eustis',
      'Levy County',
      'Okeechobee'
    ],
    eventKey: '15'
  },
  {
    metroName: 'Philadelphia Area',
    regions: [
      'All Philadelphia / New Jersey Suburbs',
      'Philadelphia',
      'Delaware',
      'New Jersey Suburbs',
      'Western Suburbs',
      'Bucks County',
      'King of Prussia',
      'Lancaster County',
      'Hershey / Harrisburg',
      'Poconos Mountain Range',
      'Central Pennsylvania',
      'Lehigh Valley',
      'Gettysburg',
      'Trenton',
      'Reading / Berks County',
      'York',
      'South Central Pennsylvania',
      'Schuylkill County'
    ],
    eventKey: '16'
  },
  {
    metroName: 'Phoenix',
    regions: [
      'All Pheonix / Arizona',
      'Scottsdale',
      'Pheonix',
      'Central Arizona',
      'East Valley',
      'Gila County',
      'Lake Havasu City',
      'Northern Arizona',
      'Sedona / Flagstaff / Prescott',
      'Grand Canyon',
      'Pinetop-Lakeside',
      'West Valley',
      'Yuma'
    ],
    eventKey: '17'
  },
  {
    metroName: 'San Diego',
    regions: [
      'All San Diego',
      'San Diego',
      'North San Diego',
      'Temecula / Wine County',
      'East County',
      'Cuyamacas'
    ],
    eventKey: '18'
  },
  {
    metroName: 'San Fransisco Bay Area',
    regions: [
      'All San Fransisco Bay Area',
      'San Fransisco',
      'East Bay',
      'Peninsula',
      'Wine Country',
      'San Jose / Silicon Valley',
      'Marin',
      'Santa Cruz / Capitola / Aptos',
      'Humboldt County',
      'Mendocino',
      'Far North',
      'Lake County'
    ],
    eventKey: '19'
  },
  {
    metroName: 'Seattle Area',
    regions: [
      'All Seattle / Eastern Washington',
      'Seattle',
      'Eastside',
      'North of Seattle',
      'Tacoma',
      'Spokane',
      'South of Seattle',
      'East of Seattle',
      'Walla Walla',
      'Mt. Rainier',
      'Northeast Washington',
      'Olympia',
      'Long Beach Peninsula',
      'Whidbey Island',
      'Enumclaw',
      'Olympic and Kitsap Peninsulas',
      'Moses Lake',
      'North-Central Washington',
      'Northwest Washington',
      'Southeast Washington',
      'Tri-Cities',
      'Washington Coast'
    ],
    eventKey: '20'
  },
  {
    metroName: 'Tuscon',
    regions: [
      'All Tucson',
      'Sonoita',
      'Southeast Arizona',
      'Tucson'
    ],
    eventKey: '21'
  },
  {
    metroName: 'Washington DC',
    regions: [
      'All Washington D.C. Area',
      'District of Columbia',
      'Virginia - DC Suburbs',
      'Maryland - DC Suburbs'
    ],
    eventKey: '22'
  }
];

module.exports = metroList;
