import { Experiment } from "../models/experiment";
import { Sample } from "../models/sample";

const samples = [
    new Sample("Caffeine 100 μg/mL", "caffeine", 100, "stock", "vol100.png"),
    new Sample("Builders Tea", "caffeine", 281.25, "unknown", "tea.png"),
    new Sample("Expresso Coffee", "caffeine", 825.0, "unknown", "coffee.png"),
    new Sample("Americano", "caffeine", 307.5, "unknown", "coffee.png"),
    new Sample("Decaf Tea", "caffeine", 18.75, "unknown", "tea.png"),
    new Sample("Decaf Americano", "caffeine", 13.89, "unknown", "coffee.png"),
    new Sample("Green Tea", "caffeine", 246.53, "unknown", "tea.png"),
    new Sample("Earl Grey", "caffeine", 166.67, "unknown", "tea.png"),
    new Sample("Everyday Tea", "caffeine", 106.25, "unknown", "tea.png"),
    new Sample("Latte", "caffeine", 197.92, "unknown", "coffee.png"),
];
const actions = ["Dilution", "HPLC"];
const experiment = new Experiment(samples, actions);

export default experiment;
