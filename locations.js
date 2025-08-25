// All 35 major school shootings in US history (4+ deaths)
// Coordinates are relative positions (0-1) where:
// x: 0 = far left, 1 = far right
// y: 0 = top, 1 = bottom

const massSchoolShootings = [
    {
        name: "Virginia Tech",
        x: 0.77, // Blacksburg, Virginia
        y: 0.52,
        details: `<strong>Date:</strong> April 16, 2007<br><strong>Location:</strong> Blacksburg, Virginia<br><strong>Casualties:</strong> 33 deceased (including shooter), 17 injured<br><br><strong>Incident:</strong> 23-year-old student Seung-Hui Cho killed thirty-two students and faculty members in two separate attacks on the Virginia Tech campus before taking his own life.`
    },
    {
        name: "Sandy Hook Elementary",
        x: 0.82, // Newtown, Connecticut
        y: 0.35,
        details: `<strong>Date:</strong> December 14, 2012<br><strong>Location:</strong> Newtown, Connecticut<br><strong>Casualties:</strong> 28 deceased (including shooter), 2 injured<br><br><strong>Incident:</strong> 20-year-old Adam Lanza killed twenty-six people at Sandy Hook Elementary School, including twenty first-grade children aged six and seven, and six adults.`
    },
    {
        name: "Robb Elementary",
        x: 0.35, // Uvalde, Texas
        y: 0.82,
        details: `<strong>Date:</strong> May 24, 2022<br><strong>Location:</strong> Uvalde, Texas<br><strong>Casualties:</strong> 22 deceased (including shooter), 18 injured<br><br><strong>Incident:</strong> 18-year-old Salvador Ramos killed 19 students between ages 9-11 and 2 teachers at Robb Elementary School before being killed by law enforcement.`
    },
    {
        name: "Marjory Stoneman Douglas High",
        x: 0.88, // Parkland, Florida
        y: 0.85,
        details: `<strong>Date:</strong> February 14, 2018<br><strong>Location:</strong> Parkland, Florida<br><strong>Casualties:</strong> 17 deceased, 18 injured<br><br><strong>Incident:</strong> 19-year-old former student Nikolas Cruz opened fire at Marjory Stoneman Douglas High School, killing 17 people and injuring 18 others.`
    },
    {
        name: "University of Texas Tower",
        x: 0.45, // Austin, Texas
        y: 0.75,
        details: `<strong>Date:</strong> August 1, 1966<br><strong>Location:</strong> Austin, Texas<br><strong>Casualties:</strong> 16 deceased (including shooter), 31 injured<br><br><strong>Incident:</strong> 25-year-old Charles Whitman fired from the UT clock tower for 96 minutes, killing 15 people and wounding 31 others before being killed by police.`
    },
    {
        name: "Columbine High School",
        x: 0.28, // Columbine, Colorado
        y: 0.50,
        details: `<strong>Date:</strong> April 20, 1999<br><strong>Location:</strong> Columbine, Colorado<br><strong>Casualties:</strong> 16 deceased (including both shooters), 20 injured<br><br><strong>Incident:</strong> Students Eric Harris and Dylan Klebold killed 12 students and 1 teacher before taking their own lives. The tragedy sparked nationwide discussions about school safety.`
    },
    {
        name: "Enoch Brown School",
        x: 0.75, // Greencastle, Pennsylvania
        y: 0.48,
        details: `<strong>Date:</strong> July 26, 1764<br><strong>Location:</strong> Greencastle, Pennsylvania<br><strong>Casualties:</strong> 11 deceased, 1 injured<br><br><strong>Incident:</strong> Four Delaware American Indians entered the schoolhouse and killed schoolmaster Enoch Brown and nine children during Pontiac's War.`
    },
    {
        name: "Santa Fe High School",
        x: 0.48, // Santa Fe, Texas
        y: 0.80,
        details: `<strong>Date:</strong> May 18, 2018<br><strong>Location:</strong> Santa Fe, Texas<br><strong>Casualties:</strong> 10 deceased, 14 injured<br><br><strong>Incident:</strong> 17-year-old Dimitrios Pagourtzis killed 10 people and injured 13 others at Santa Fe High School using weapons stolen from his father.`
    },
    {
        name: "Red Lake Senior High",
        x: 0.32, // Red Lake, Minnesota
        y: 0.25,
        details: `<strong>Date:</strong> March 21, 2005<br><strong>Location:</strong> Red Lake, Minnesota<br><strong>Casualties:</strong> 10 deceased (including shooter), 9 injured<br><br><strong>Incident:</strong> 16-year-old Jeff Weise killed his grandfather and girlfriend at home, then drove to Red Lake Senior High School where he killed 7 more people before taking his own life.`
    },
    {
        name: "Umpqua Community College",
        x: 0.05, // Roseburg, Oregon
        y: 0.32,
        details: `<strong>Date:</strong> October 1, 2015<br><strong>Location:</strong> Roseburg, Oregon<br><strong>Casualties:</strong> 10 deceased (including shooter), 8 injured<br><br><strong>Incident:</strong> 26-year-old Christopher Harper-Mercer opened fire on campus, killing eight students and one teacher before committing suicide.`
    },
    {
        name: "UC Santa Barbara",
        x: 0.08, // Isla Vista, California
        y: 0.70,
        details: `<strong>Date:</strong> May 23, 2014<br><strong>Location:</strong> Isla Vista, California<br><strong>Casualties:</strong> 7 deceased (including shooter), 14 injured<br><br><strong>Incident:</strong> 22-year-old Elliot Rodger attacked his roommates and drove around shooting at people before committing suicide.`
    },
    {
        name: "West Nickel Mines School",
        x: 0.75, // Nickel Mines, Pennsylvania
        y: 0.50,
        details: `<strong>Date:</strong> October 2, 2006<br><strong>Location:</strong> Nickel Mines, Pennsylvania<br><strong>Casualties:</strong> 7 deceased (including shooter), 4 injured<br><br><strong>Incident:</strong> 32-year-old Charles Roberts killed five Amish girls and wounded five others before killing himself.`
    },
    {
        name: "Oikos University",
        x: 0.05, // Oakland, California
        y: 0.58,
        details: `<strong>Date:</strong> April 2, 2012<br><strong>Location:</strong> Oakland, California<br><strong>Casualties:</strong> 7 deceased, 3 injured<br><br><strong>Incident:</strong> 43-year-old One L. Goh shot seven students at this Christian college before fleeing and being captured.`
    },
    {
        name: "Cal State Fullerton",
        x: 0.12, // Fullerton, California
        y: 0.72,
        details: `<strong>Date:</strong> July 12, 1976<br><strong>Location:</strong> Fullerton, California<br><strong>Casualties:</strong> 7 deceased, 2 injured<br><br><strong>Incident:</strong> 37-year-old custodian Edward Allaway killed seven people in the university library.`
    },
    {
        name: "Covenant School",
        x: 0.53, // Nashville, Tennessee
        y: 0.58,
        details: `<strong>Date:</strong> March 27, 2023<br><strong>Location:</strong> Nashville, Tennessee<br><strong>Casualties:</strong> 7 deceased (including shooter), 1 injured<br><br><strong>Incident:</strong> 28-year-old Aiden Hale entered the Covenant School and killed 3 students and 3 staff members before being killed by police.`
    },
    {
        name: "Cleveland Elementary",
        x: 0.08, // Stockton, California
        y: 0.60,
        details: `<strong>Date:</strong> January 17, 1989<br><strong>Location:</strong> Stockton, California<br><strong>Casualties:</strong> 6 deceased (including shooter), 31 injured<br><br><strong>Incident:</strong> 24-year-old Patrick Purdy fatally shot five children and wounded 32 others before taking his own life.`
    },
    {
        name: "Northern Illinois University",
        x: 0.55, // DeKalb, Illinois
        y: 0.38,
        details: `<strong>Date:</strong> February 14, 2008<br><strong>Location:</strong> DeKalb, Illinois<br><strong>Casualties:</strong> 6 deceased (including shooter), 17 injured<br><br><strong>Incident:</strong> 27-year-old Steven Kazmierczak shot multiple people in a lecture hall before taking his own life.`
    },
    {
        name: "Rancho Tehama Elementary",
        x: 0.05, // Rancho Tehama, California
        y: 0.50,
        details: `<strong>Date:</strong> November 14, 2017<br><strong>Location:</strong> Rancho Tehama, California<br><strong>Casualties:</strong> 6 deceased (including shooter), 11 injured<br><br><strong>Incident:</strong> 43-year-old Kevin Neal injured one student at the elementary school and killed five adults at several locations.`
    },
    {
        name: "Santa Monica College",
        x: 0.10, // Santa Monica, California
        y: 0.70,
        details: `<strong>Date:</strong> June 7, 2013<br><strong>Location:</strong> Santa Monica, California<br><strong>Casualties:</strong> 6 deceased (including shooter), 2 injured<br><br><strong>Incident:</strong> 23-year-old John Zawahri began a killing spree at home before driving to Santa Monica College where he continued shooting.`
    },
    {
        name: "Charleston High School",
        x: 0.68, // Charleston, West Virginia
        y: 0.55,
        details: `<strong>Date:</strong> December 13, 1898<br><strong>Location:</strong> Charleston, West Virginia<br><strong>Casualties:</strong> 6 deceased, 1+ injured<br><br><strong>Incident:</strong> During a school exhibition, a fight broke out that resulted in multiple deaths including students and injuries to others.`
    },
    {
        name: "University of Iowa",
        x: 0.47, // Iowa City, Iowa
        y: 0.38,
        details: `<strong>Date:</strong> November 1, 1991<br><strong>Location:</strong> Iowa City, Iowa<br><strong>Casualties:</strong> 6 deceased (including shooter), 1 injured<br><br><strong>Incident:</strong> 28-year-old former graduate student Gang Lu killed four faculty members and a research student before shooting himself.`
    },
    {
        name: "Westside Middle School",
        x: 0.50, // Craighead County, Arkansas
        y: 0.65,
        details: `<strong>Date:</strong> March 24, 1998<br><strong>Location:</strong> Craighead County, Arkansas<br><strong>Casualties:</strong> 5 deceased, 10 injured<br><br><strong>Incident:</strong> 13-year-old Mitchell Johnson and 11-year-old Andrew Golden killed a teacher and four students during a fire alarm.`
    },
    {
        name: "Rose-Mar College of Beauty",
        x: 0.25, // Mesa, Arizona
        y: 0.70,
        details: `<strong>Date:</strong> November 12, 1966<br><strong>Location:</strong> Mesa, Arizona<br><strong>Casualties:</strong> 5 deceased, 2 injured<br><br><strong>Incident:</strong> 18-year-old Robert Smith took seven people hostage and shot each in the head, killing four women and a 3-year-old girl.`
    },
    {
        name: "South Pasadena Schools",
        x: 0.12, // South Pasadena, California
        y: 0.71,
        details: `<strong>Date:</strong> May 6, 1940<br><strong>Location:</strong> South Pasadena, California<br><strong>Casualties:</strong> 5 deceased, 2 injured<br><br><strong>Incident:</strong> 38-year-old Verlin Spencer shot and killed school administrators and teachers following his dismissal.`
    },
    {
        name: "Marysville Pilchuck High",
        x: 0.02, // Marysville, Washington
        y: 0.20,
        details: `<strong>Date:</strong> October 24, 2014<br><strong>Location:</strong> Marysville, Washington<br><strong>Casualties:</strong> 5 deceased (including shooter), 1 injured<br><br><strong>Incident:</strong> 15-year-old Jaylen Fryberg shot five students in the school cafeteria before committing suicide.`
    },
    {
        name: "Thurston High School",
        x: 0.04, // Springfield, Oregon
        y: 0.28,
        details: `<strong>Date:</strong> May 21, 1998<br><strong>Location:</strong> Springfield, Oregon<br><strong>Casualties:</strong> 4 deceased, 25 injured<br><br><strong>Incident:</strong> 15-year-old Kip Kinkel killed his parents at home, then drove to Thurston High School where he killed two students and wounded 25 others.`
    },
    {
        name: "Lindhurst High School",
        x: 0.08, // Olivehurst, California
        y: 0.55,
        details: `<strong>Date:</strong> May 1, 1992<br><strong>Location:</strong> Olivehurst, California<br><strong>Casualties:</strong> 4 deceased, 10 injured<br><br><strong>Incident:</strong> 20-year-old former student Eric Houston killed three students and one teacher before surrendering to police.`
    },
    {
        name: "Kent State University",
        x: 0.65, // Kent, Ohio
        y: 0.40,
        details: `<strong>Date:</strong> May 4, 1970<br><strong>Location:</strong> Kent, Ohio<br><strong>Casualties:</strong> 4 deceased, 9 injured<br><br><strong>Incident:</strong> During Vietnam War protests, National Guard soldiers opened fire on unarmed students, killing four people.`
    },
    {
        name: "Olean High School",
        x: 0.72, // Olean, New York
        y: 0.35,
        details: `<strong>Date:</strong> December 30, 1974<br><strong>Location:</strong> Olean, New York<br><strong>Casualties:</strong> 4 deceased, 7 injured<br><br><strong>Incident:</strong> 17-year-old Anthony Barbaro opened fire from the third floor, killing four people including an unborn baby.`
    },
    {
        name: "Oxford High School",
        x: 0.58, // Oxford, Michigan
        y: 0.35,
        details: `<strong>Date:</strong> November 30, 2021<br><strong>Location:</strong> Oxford, Michigan<br><strong>Casualties:</strong> 4 deceased, 7 injured<br><br><strong>Incident:</strong> 15-year-old student Ethan Crumbley opened fire at Oxford High School, killing four students and wounding seven others before being arrested.`
    },
    {
        name: "Apalachee High School",
        x: 0.72, // Winder, Georgia
        y: 0.62,
        details: `<strong>Date:</strong> September 4, 2024<br><strong>Location:</strong> Winder, Georgia<br><strong>Casualties:</strong> 4 deceased, 7 injured<br><br><strong>Incident:</strong> 14-year-old student Colt Gray opened fire at Apalachee High School, killing two teachers and two students while injuring seven others.`
    },
    {
        name: "Michigan State University",
        x: 0.58, // East Lansing, Michigan
        y: 0.36,
        details: `<strong>Date:</strong> February 13, 2023<br><strong>Location:</strong> East Lansing, Michigan<br><strong>Casualties:</strong> 4 deceased (including shooter), 5 injured<br><br><strong>Incident:</strong> A man shot several people on the Michigan State University campus, killing three and wounding five before killing himself.`
    },
    {
        name: "University of Nevada Las Vegas",
        x: 0.18, // Las Vegas, Nevada
        y: 0.68,
        details: `<strong>Date:</strong> December 6, 2023<br><strong>Location:</strong> Las Vegas, Nevada<br><strong>Casualties:</strong> 4 deceased (including shooter), 3 injured<br><br><strong>Incident:</strong> A shooter opened fire at UNLV, killing three faculty members and injuring three others before being killed by police.`
    },
    {
        name: "Plain Dealing High School",
        x: 0.43, // Plain Dealing, Louisiana
        y: 0.75,
        details: `<strong>Date:</strong> March 26, 1893<br><strong>Location:</strong> Plain Dealing, Louisiana<br><strong>Casualties:</strong> 4 deceased, 1 injured<br><br><strong>Incident:</strong> During an evening school dance, a fight broke out resulting in multiple deaths and injuries.`
    },
    {
        name: "University of Arizona",
        x: 0.22, // Tucson, Arizona
        y: 0.73,
        details: `<strong>Date:</strong> October 28, 2002<br><strong>Location:</strong> Tucson, Arizona<br><strong>Casualties:</strong> 4 deceased (including shooter), 0 injured<br><br><strong>Incident:</strong> 40-year-old nursing student Robert Flores killed three assistant professors before turning the gun on himself.`
    }
];

// Optional: Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = massSchoolShootings;
}