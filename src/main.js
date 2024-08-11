import { makePortrait } from './portrait-generator.js';
import { pick } from './utils/random-utils.js';

const canvas = document.querySelector('[portrait]');
canvas.width = 514;
canvas.height = 836;
const ctx = canvas.getContext('2d');


const genderSelectorElement = document.querySelector("[gender_option]");
const moodSelectorElement = document.querySelector("[mood_option]");
const shadowInputElement = document.querySelector("[shadow_option]");
const regenerateButtonElement = document.querySelector("[regenerate_button]");
let image;

const draw = (shadow) => {

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(42, 120);
    ctx.scale(2.15, 2.15);

    if (shadow) {
        ctx.save();
        ctx.translate(-1, -5);
        ctx.scale(1.04, 1.04);
        const shadow = new Path2D();
        image.forEach((section) => {
            shadow.addPath(new Path2D(section.path));
        });
        ctx.filter = 'blur(4px)';
        ctx.fillStyle = '#00000060';
        ctx.fill(shadow);
        ctx.filter = 'none';
        ctx.restore();
    }

    image.forEach((section) => {
        const path = new Path2D(section.path);
        ctx.fillStyle = section.colour;
        ctx.fill(path);
    });

    ctx.restore();
};

const handleOptions = () => {
    generate(genderSelectorElement.value, moodSelectorElement.value);
};

const generate = (genderValue, moodValue) => {
    const gender = genderValue === "random" ? pick("male", "female") : genderValue;
    const mood = moodValue === "random" ? pick("neutral", "positive", "negative", "talkative") : moodValue;
    image = makePortrait(gender, mood);

    redraw();
};

const redraw = () => {
    let shadow = shadowInputElement.checked;
    draw(shadow);
};

genderSelectorElement.addEventListener('change', handleOptions);
moodSelectorElement.addEventListener('change', handleOptions);
shadowInputElement.addEventListener('change', redraw);
regenerateButtonElement.addEventListener('click', handleOptions);

generate("random", "random");