import { Experiment } from "../models/experiment";
import { Sample } from "../models/sample";

const samples = [
    new Sample("Ferrocene 1 mM", "ferrocene", 1, "stock", "vol100.png")
];
const actions = ["Dilution", "Cyclic Voltammetry"];
const experiment = new Experiment(samples, actions);

export default experiment;
