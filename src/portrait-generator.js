import { pick } from './utils/random-utils.js';

const skinHairColours = {
    "#fce3c2": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#d84100", "#5e0000"],
    "#f8be73": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#d84100", "#5e0000"],
    "#dd820b": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#ffb595", "#d84100", "#5e0000"],
    "#7b4806": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#d84100", "#5e0000"],
    "#4f2e04": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#d84100", "#ffc56a", "#5e0000"],
    "#f8cf7d": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#ffb595", "#d84100", "#5e0000"],
    "#fbbea7": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#d84100", "#ffc56a", "#5e0000"],
    "#f89f7d": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#d84100", "#ffc56a", "#5e0000"],
    "#9e4828": ["#313131", "#bdbdbd", "#adb4b5", "#2c1b00", "#000000", "#c17700", "#ffb595", "#d84100", "#ffc56a", "#5e0000"]
};

const colours = {
    "#24682c": ["#d4ffd4", "#102e13", "#2b2b2b", "#868ca0"],
    "#51bad2": ["#d4f1ff", "#002f46", "#2b2b2b", "#868ca0"],
    "#800102": ["#ffd4d4", "#4d0101", "#2b2b2b", "#868ca0"],
    "#c70203": ["#fe9192", "#6f0001", "#2b2b2b", "#868ca0"],
    "#ea87b0": ["#f5c4d8", "#5e1031", "#2b2b2b", "#868ca0"],
    "#c30165": ["#ffafd9", "#4d0028", "#2b2b2b", "#868ca0"],
    "#760086": ["#dbaaff", "#4d1a45", "#2b2b2b", "#868ca0"],
    "#ffdd1f": ["#ffeb7c", "#b29700", "#2b2b2b", "#868ca0"],
    "#636edd": ["#aab0ed", "#0f1444", "#2b2b2b", "#868ca0"],
};

const lipColours = {
    male: ["#e5bc89", "#d4903b"],
    female: [...Object.keys(colours), "#15002b"]
};

const body = "M 50,105 c 0,5.3484 0,10 5,20 -5,-5 -15,-5 -15,5 l 5,25 c 0,5 5,10 10,5 5,15 10,25 25,30 v 10 c -15,0 -15,0 -19.546443,3.40433 C 60.453557,260 80,260 99.999999,260 120,260 139.54788,260 139.54788,203.40435 135,200 135,200 120,200 v -10 c 15,-5 20,-15 25,-30 5,5 10,0 10,-5 l 5,-25 c 0,-10 -10,-10 -15,-5 5,-10 5,-14.65458 5,-20 0,-45 -100,-45 -100,0 z";
const mouth = {
    male: {
        neutral: ["M 95,180 h 15 c 0,-3 -2,-5 -5,-5 H 90 c 0,3 2,5 5,5 z"],
        positive: ["M 105,175 c -1,-1 -4,-1 -8,0 -4,1 -4,-2 -7,-5 1,5 2,6 3,7 2,2 4,3 7,3 5,0 7,-3 5,-5 z"],
        negative: ["M 95,180 c 1,1 4,1 8,0 4,-1 4,2 7,5 -1,-5 -2,-6 -3,-7 -2,-2 -4,-3 -7,-3 -5,0 -7,3 -5,5 z"],
        talkative: ["M 90,180 c 3,2 17,2 20,0 3,-2 1,-4 0,-5 -5,-4 -15,-4 -20,0 -1,1 -3,3 0,5 z"]
    },
    female: {
        neutral: ["M 96,172 c -1,0 -4,2 -6,4 2,2 4,4 6,5 2,1 6,1 8,0 2,-1 4,-3 6,-5 -2,-2 -5,-4 -6,-4 -1,0 -2,0 -3,1 -1,1 -1,1 -2,0 -1,-1 -2,-1 -3,-1 z", "M 103,169 c -2,0 -2,1 -3,1 -1,0 -1,-1 -3,-1 -4,0 -6,7 -8,7 0,0 2,4 5,4 4,0 4,-4 7,-4 h -6 c 2,-1 2,-1 3,-2 0,0 1,1 2,1 1,0 2,-1 2,-1 1,1 1,1 3,2 h -4 c 2,0 3,2 6,2 4,0 4,-2 4,-2 -2,0 -4,-7 -8,-7 z"],
        positive: ["M 96,172 c -3,0 -4,4 -7,3 2,2 5,4 7,5 2,1 6,1 8,0 2,-1 7,-2 8,-10 -3,8 -5,2 -8,2 -1,0 -2,0 -3,1 -1,1 -1,1 -2,0 -1,-1 -2,-1 -3,-1 z"],
        negative: ["M 98,180 c 6,1 10,0 12,-1 -1,0 -3,-3 -3,-3 -2,-3 -5,-2 -7,1 -1,-3 -4,-4 -7,-1 -3,3 -3,5 -3,9 0,0 3,-6 8,-5 z"],
        talkative: ["M 106,171 c -1,-2 -4,-3 -6,-1 -2,-2 -5,-1 -6,1 -1,2 -2,6 -6,7 3,1 4,4 5,6 2,4 12,4 14,0 1,-2 2,-5 5,-6 -4,-1 -5,-5 -6,-7 z m -6,10 c 0,-1 -3,-3 -4,-3 2,-1 4,-2 4,-3 0,1 2,2 4,3 -1,0 -4,2 -4,3 z"]
    },
};

const frontHair = {
    male: [
        "M 100,95 c 5,5 10,5 10,5 20,10 30,10 35,25 5,10 20,5 15,-5 -5,-20 -20,-65 -45,-65 -5,0 -10,5 -10,5 C 100,50 95,50 90,50 60,50 45,95 40,120 c 0,10 10,15 15,5 10,-15 10,-15 35,-25 0,0 5,0 10,-5 z",
        "M 43,112 c -10,10 -5,20 5,15 10,-5 15,-15 20,-25 5,-5 15,-5 20,0 5,10 15,10 20,5 5,-5 5,-10 10,-10 20,0 10,15 20,25 10,10 25,5 25,-5 C 163,102 153,67 133,57 123,27 88,37 73,47 58,57 38,52 28,37 c 0,20 5,35 20,40 -10,10 -25,15 -35,5 0,15 10,30 30,30 z",
        "M 100,65 c -45,0 -55,30 -55,60 0,5 10,10 10,5 0,-10 5,-20 10,-25 5,15 20,20 35,20 15,0 30,-5 35,-20 5,5 10,15 10,25 0,5 10,0 10,-5 0,-30 -10,-60 -55,-60 z",
        "M 100,105 c 15,15 5,25 15,35 10,10 35,15 45,-5 5,-20 5,-45 -15,-65 C 130,55 110,40 95,55 90,60 90,65 80,60 55,45 10,125 60,155 c -10,-20 5,-40 20,-40 10,0 15,-5 20,-10 z"
    ],
    female: [
        "M 155,135 V 100 C 155,80 130,65 100,65 70,65 45,80 45,100 v 35 c 25,0 55,-5 55,-30 0,25 30,30 55,30 z",
        "M 155,135 V 100 C 155,80 130,65 100,65 70,65 45,80 45,100 v 35 z",
        "M 100,105 c 15,15 5,25 15,35 10,10 35,15 45,-5 5,-20 5,-45 -15,-65 C 130,55 110,40 95,55 90,60 90,65 80,60 55,45 10,125 60,155 c -10,-20 5,-40 20,-40 10,0 15,-5 20,-10 z"
    ]
};
const hairbob = [
    "M 135,65 C 135,45 115,25 95,25 75,25 60,45 60,65 c 0,20 20,20 45,20 25,0 30,0 30,-20 z"
];
const backHair = [
    "M 100,185 c 15,0 20,10 30,10 20,0 35,-40 35,-75 C 165,85 150,55 130,55 110,55 110,75 100,75 90,75 90,55 70,55 50,55 35,85 35,120 c 0,35 15,75 35,75 10,0 15,-10 30,-10 z",
    "M 100,185 c 15,0 20,10 30,10 20,0 35,-40 35,-75 0,-35 -15,-30 -35,-30 -20,0 -20,20 -30,20 -10,0 -10,-20 -30,-20 -20,0 -35,-5 -35,30 0,35 15,75 35,75 10,0 15,-10 30,-10 z",
    "M 130,230 c 20,-10 35,-75 35,-110 0,-35 -20,-25 -35,-30 -15,-5 -45,-5 -60,0 -15,5 -35,-5 -35,30 0,35 15,100 35,110 20,10 40,10 60,0 z",
    "M 150,180 c 10,-10 10,-25 0,-35 l -20,-25 c -10,10 -10,25 0,35 -10,10 -10,25 0,35 -10,10 -10,25 0,35 -10,10 -10,25 0,35 l 20,25 c 10,-10 10,-25 0,-35 10,-10 10,-25 0,-35 10,-10 10,-25 0,-35 z"
];

const baseClothes = {
    male: [
        "M 20,245 c 0,0 25,65 25,80 5,15 15,20 25,20 h 60 c 10,0 20,-5 25,-20 0,-15 25,-80 25,-80 0,-40 -30,-50 -80,-50 -50,0 -80,5 -80,50 z"
    ],
    female: [
        "m 150,310 10,-35 c 25,-5 35,-30 30,-55 l -55,-20 c 0,0 -15,5 -35,5 -20,0 -35,-5 -35,-5 l -55,20 c -5,25 5,50 30,55 l 10,35 c 0,45 100,45 100,0 z",
        "M 35,285 c 5,25 11,60 30,60 h 35 35 c 19,0 25,-35 30,-60 15,-10 30,-15 40,-35 0,-35 -10,-40 -35,-55 -10,-5 -40,-5 -40,15 -5,10 -15,0 -15,10 -10,5 -5,0 -15,0 -10,0 -5,5 -15,0 0,-10 -10,0 -15,-10 0,-20 -30,-20 -40,-15 -25,15 -35,20 -35,55 10,20 25,25 40,35 z"
    ]
};

//const beard = "M 130,180 c 0,-15 -5,-15 -30,-15 -25,0 -30,0 -30,15 5,20 25,20 30,40 5,-20 20,-20 30,-40 z";

const shirt = "M 130,210 c 0,-15 -5,-15 -30,-15 -25,0 -30,0 -30,15 5,20 25,20 30,40 5,-20 20,-20 30,-40 z";
const bottomShirt = "M 100,312 c -10,0 -15,33 -15,33 h 30 c 0,0 -5,-33 -15,-33 z";
const collar = "M 120,190 c -10,5 -30,5 -40,0 v 6 c 10,5 30,5 40,0 z";
const tie = "M 110,275 c 0,-45 -5,-80 -5,-80 H 95 c 0,0 -10,65 -10,75 5,5 25,5 25,5 z";
const underTie = "M 100,250 c 6,-15 7,-12 7,-20 0,-18 -2,-35 -2,-35 H 95 c 0,0 -5,25 -5,35 0,8 5,5 10,20 z";
const bowtie = "M 125,180 c -5,0 -15,10 -23,13 -2,1 1,-1 -2,-1 -3,0 0,2 -2,1 -8,-3 -18,-13 -23,-13 -5,5 -5,25 0,30 5,0 15,-5 23,-9 2,-1 -1,1 2,1 3,0 0,-2 2,-1 8,4 18,9 23,9 5,-5 5,-25 0,-30 z";
const cleavage = [
    "M 65,200 c 5,5 5,5 5,10 5,10 10,15 10,25 15,5 10,10 20,10 10,0 5,-5 20,-10 0,-10 5,-15 10,-25 0,-5 0,-5 5,-10 z",
    "M 80,195 h 40 c -10,25 -30,25 -40,0 z",
    "M 65,200 c 25,-10 45,-10 70,0 25,40 -20,5 -35,53 C 85,205 40,240 65,200 Z",
    "M 70,210 c 25,5 35,5 60,0 25,35 -25,10 -30,43 -5,-33 -55,-8 -30,-43 z"
];
const lace = "M 124,243 c 0,-5 -3,-11 -7,-10 -4,1 -9,5 -12,9 -1,-2 -3,-2 -5,-2 -2,0 -4,0 -5,2 -3,-4 -8,-8 -12,-9 -4,-1 -7,5 -7,10 v 5 c 1,5 2,10 7,10 3,0 8,-4 12,-7 0,6 -8,12 -15,12 0,1 3,4 4,4 -1,1 -4,2 -4,4 10,-1 15,-4 20,-11 5,7 10,10 20,11 0,-2 -3,-3 -4,-4 1,0 4,-3 4,-4 -7,0 -15,-6 -15,-12 4,3 9,7 12,7 4,0 6,-5 7,-10 z m -38,7 c -3,0 -5,-1 -5,-4 0,-3 2,-4 5,-4 3,0 8,3 8,4 0.0493,0 -5,4 -8,4 z m 28,0 c -3,0 -8,-4 -8,-4 0,-1 5,-4 8,-4 3,0 5,1 5,4 0,3 -2,4 -5,4 z";

export const makePortrait = (gender, mood) => {
    const skinColour = pick(...Object.keys(skinHairColours));
    const hairColour = pick(...skinHairColours[skinColour]);
    const lipColour = pick(...lipColours[gender]);
    const portrait = [...makeBackHair(gender, hairColour)];
    portrait.push({ path: body, colour: skinColour });
    portrait.push(...makeFrontHair(gender, hairColour));
    portrait.push({ path: pick(...mouth[gender][mood]), colour: lipColour });
    // if (pick(true, false, gender === "male")) {
    //     portrait.push(...makeFacialFeatures(gender));
    // }
    portrait.push(...makeClothes(gender, skinColour, lipColour));
    return portrait;
};

const makeBackHair = (gender, colour) => {
    const hair = [];
    if (gender === "female" && pick(true, false)) { //Only Females can have a hairbob thingy
        hair.push({ path: hairbob, colour });
    }
    if (gender === "female" && pick(true, true, false)) {
        hair.push({ path: pick(...backHair), colour });
    }
    return hair;
};
const makeFrontHair = (gender, colour) => {
    const hair = [];
    if (pick(true, true, gender === "female")) { //Females always get front hair
        hair.push({ path: pick(...frontHair[gender]), colour });
    }
    return hair;
};

const makeClothes = (gender, skinColour, lipColour) => {
    const accentColour = (gender === "male" || pick(true, false)) ? pick(...Object.keys(colours)) : lipColour;
    const relevantAccentColour = colours[accentColour] ? accentColour : pick(...Object.keys(colours));
    const clothesColour = gender === "male" ? pick(...colours[relevantAccentColour].slice(1)) : pick(...colours[relevantAccentColour]);
    const shirtColour = colours[relevantAccentColour][0];
    const tieColour = pick(accentColour, ...Object.keys(colours));

    const clothes = [{ path: pick(...baseClothes[gender]), colour: clothesColour }];
    const hasShirt = gender === "male" && pick(true, false);
    const hasBottomShirt = gender === "male" && hasShirt && pick(true, false);
    const hasTie = gender === "male" && pick(true, false);
    const hasBowTie = gender === "male" && !hasTie && pick(true, false);
    const hasChoker = gender === "female" && pick(true, false, false);
    const hasCleavage = gender === "female" && pick(true, false);
    const hasLace = gender === "female" && pick(true, false);

    if (hasShirt) {
        clothes.push({ path: shirt, colour: shirtColour });
    } else if (gender === "male") {
        clothes.push({ path: shirt, colour: skinColour });
    }
    if (hasBottomShirt) {
        clothes.push({ path: bottomShirt, colour: shirtColour });
    }
    if (hasTie) {
        clothes.push({ path: collar, colour: tieColour });
        clothes.push({ path: hasShirt ? underTie : tie, colour: tieColour });
    }
    if (hasBowTie) {
        clothes.push({ path: bowtie, colour: tieColour });
    }
    if (hasCleavage) {
        clothes.push({ path: pick(...cleavage), colour: skinColour });
        if (hasLace) {
            clothes.push({ path: lace, colour: relevantAccentColour });
        }
    }
    if (hasChoker) {
        clothes.push({ path: collar, colour: relevantAccentColour });
    }
    return clothes;
};