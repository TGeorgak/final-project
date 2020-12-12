// https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:*&key=YOUR_KEY_GOES_HERE

const BASE_URL = "https://api.census.gov/data/2019/pep/population"
const endpoint_state_populations = "?get=NAME,POP&for=state:*&key="
const CENSUS_API_KEY = process.env.REACT_APP_CENSUS_API_KEY;

const fetchStateCensusPopulations = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_state_populations}${CENSUS_API_KEY}`)
        const data = await response.json()
        console.log(data)
        return data;
    } catch(error) {
        console.log(error)
    } 
}

export {fetchStateCensusPopulations};

// [["NAME","POP","state"],
// ["Mississippi","2976149","28"],
// ["Missouri","6137428","29"],
// ["Montana","1068778","30"],
// ["Nebraska","1934408","31"],
// ["Nevada","3080156","32"],
// ["New Hampshire","1359711","33"],
// ["New Jersey","8882190","34"],
// ["New Mexico","2096829","35"],
// ["New York","19453561","36"],
// ["North Carolina","10488084","37"],
// ["North Dakota","762062","38"],
// ["Ohio","11689100","39"],
// ["Oklahoma","3956971","40"],
// ["Oregon","4217737","41"],
// ["Pennsylvania","12801989","42"],
// ["Rhode Island","1059361","44"],
// ["South Carolina","5148714","45"],
// ["South Dakota","884659","46"],
// ["Tennessee","6829174","47"],
// ["Texas","28995881","48"],
// ["Vermont","623989","50"],
// ["Utah","3205958","49"],
// ["Virginia","8535519","51"],
// ["Washington","7614893","53"],
// ["West Virginia","1792147","54"],
// ["Wisconsin","5822434","55"],
// ["Wyoming","578759","56"],
// ["Puerto Rico","3193694","72"],
// ["Alabama","4903185","01"],
// ["Alaska","731545","02"],
// ["Arizona","7278717","04"],
// ["Arkansas","3017804","05"],
// ["California","39512223","06"],
// ["Colorado","5758736","08"],
// ["Delaware","973764","10"],
// ["District of Columbia","705749","11"],
// ["Connecticut","3565287","09"],
// ["Florida","21477737","12"],
// ["Georgia","10617423","13"],
// ["Idaho","1787065","16"],
// ["Hawaii","1415872","15"],
// ["Illinois","12671821","17"],
// ["Indiana","6732219","18"],
// ["Iowa","3155070","19"],
// ["Kansas","2913314","20"],
// ["Kentucky","4467673","21"],
// ["Louisiana","4648794","22"],
// ["Maine","1344212","23"],
// ["Maryland","6045680","24"],
// ["Massachusetts","6892503","25"],
// ["Michigan","9986857","26"],
// ["Minnesota","5639632","27"]]