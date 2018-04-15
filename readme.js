const title = "uncodeference"
const description = "the free web development unconference in Austria"
const location = "Wattens, Tyrol"
const date = "May 25th, 2018"
const conferenceLink = "https://uncodeference.io"
const rsvpLink = `${conferenceLink}/rsvp`
const unconferenceBlogLink = "http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/"
const openSpaceLink = "https://en.wikipedia.org/wiki/Open_Space_Technology"
const codeOfConductLink = "http://confcodeofconduct.com/"
const locationLink = "https://www.google.com/maps/place/Werkst%C3%A4tte+Wattens/@47.287262,11.5905719,17z/data=!3m1!4b1!4m5!3m4!1s0x479d6467027ebc8d:0x97e24643b15d2bec!8m2!3d47.2872584!4d11.5927606"

let sponsors = []

// {...}
function tweet(it) {
    it.length > 280 ?
        console.error("twitter says NO, because you weren't concise enough") :
        console.log(it)
}

// {...}
function helloWorld() {
    tweet(`Hi everybody!\nJoin us at "${title}" (${conferenceLink}), ${description} next month! It's gonna be in ${location} on ${date}.\n\nWe would absolutely love to meet you there and talk about everything related to web development!`)
}

// {...}
function rsvpNow() {
    tweet(`Get your ticket free for "${title}", ${description} now! It's gonna take place on ${date} in ${location}.\n\n> ${rsvpLink}`)
}

// {...}
function whatIsAnUnconference() {
    tweet(`To learn more about unconferences: ${unconferenceBlogLink} is a great resource!`)
    tweet(`And to learn more about the Open Space Technology you may read: ${openSpaceLink}`)
}

function printCodeOfConduct() {
    tweet(`To make sure that everyone feels safe and can enjoy the event we expect people to adhere to: ${codeOfConductLink}`)
}

// {...}
function thankSponsor(i) {
    i < 0 || i > sponsors.length ?
        console.error("no no, that's not gonna work") :
        tweet(`Thanks a lot to ${sponsors[i].who} for providing the ${sponsors[i].what}! Visit them at ${sponsors[i].where}`)
}

// {...}
function ticketsLeft(number) {
    tweet(`There are only ${number} tickets left.\nGet yours at ${rsvpLink}, they are free!`)
}


/* ------------------------------------------------------ */

function prepareTweet(func, ...args) {
    console.log(`//> ${func.name}(${args.join(",")})`)
    func(args)
    console.log("\n\n")
}

prepareTweet(helloWorld)

prepareTweet(whatIsAnUnconference)

prepareTweet(printCodeOfConduct)

prepareTweet(rsvpNow)

sponsors.push({ who: "Gronda", where: "https://gronda.eu", what: "web & org" })
prepareTweet(thankSponsor, 0)

sponsors.push({ who: "WeDesignTrips", where: "https://wedesigntrips.com/", what: "merchandising" })
prepareTweet(thankSponsor, 1)

sponsors.push({ who: "Werkstätte Wattens", where: "http://www.werkstaette-wattens.at", what: "venue" })
prepareTweet(thankSponsor, 2)

// more sponsors

// tickets left
//prepareTweet(ticketsLeft, x)
