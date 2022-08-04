import { Experiment } from "../models/experiment";
import { Sample } from "../models/sample";

const samples = [
    new Sample("Ethanol 100%", "ethanol", 100, "stock", "ethanol.png"),
    new Sample("Lager", "ethanol", 2.9, "unknown", "pint.png"),
    new Sample("IPA", "ethanol", 4.6, "unknown", "pint.png"),
    new Sample("Stout", "ethanol", 3.6, "unknown", "pint.png"),
    new Sample("Cider", "ethanol", 5.3, "unknown", "pint.png"),
    new Sample("Shiraz", "ethanol", 14.2, "unknown", "wine.png"),
    new Sample("Sauvignon Blanc", "ethanol", 13.6, "unknown", "wine.png"),
    new Sample("Cabernet Sauvignon", "ethanol", 12.4, "unknown", "wine.png"),
    new Sample("Pinot Grigio", "ethanol", 13.9, "unknown", "wine.png"),
    new Sample("Gin", "ethanol", 37.5, "unknown", "spirit.png"),
    new Sample("Vodka", "ethanol", 40.2, "unknown", "spirit.png"),
    new Sample("Whisky", "ethanol", 38.5, "unknown", "spirit.png"),
    new Sample("Tequila", "ethanol", 36.4, "unknown", "spirit.png"),
    new Sample("Rum & Coke", "ethanol", 4.2, "unknown", "mixer.png"),
    new Sample("Gin & Tonic", "ethanol", 9.7, "unknown", "mixer.png"),
    new Sample("Vodka & Diet Coke", "ethanol", 7.4, "unknown", "mixer.png"),
    new Sample("Schnapps & Lemonade", "ethanol", 6.7, "unknown", "mixer.png"),
];
const actions = ["Dilution", "Gas Chromatography"];
const experiment = new Experiment(samples, actions);

export default experiment;
