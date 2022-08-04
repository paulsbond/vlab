import { Experiment } from "../models/experiment";
import { Sample } from "../models/sample";

const samples = [
    new Sample("0.5 M Aqueous NaCl", "NaCl", 0.5, "stock", "vol250.png"),
    new Sample("Cheeseburger", "NaCl", 0.002665, "unknown", "burger.png"),
    new Sample("Chips", "NaCl", 0.0005557, "unknown", "chips.png"),
    new Sample("Margherita Pizza", "NaCl", 0.001096, "unknown", "margherita.png"),
    new Sample("Pepperoni Pizza", "NaCl", 0.001071, "unknown", "pepperoni.png"),
    new Sample("Chicken Korma and Rice", "NaCl", 0.0008053, "unknown", "curry.png"),
];
const actions = ["Dilution", "Conductivity"];
const experiment = new Experiment(samples, actions);

export default experiment;
