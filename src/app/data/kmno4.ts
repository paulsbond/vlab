import { Experiment } from "../models/experiment";
import { Sample } from "../models/sample";

const samples = [
    new Sample("KMnO4 5.00E-4 Molar", "KMnO4", 0.0005, "stock", "vol100.png")
];
const actions = ["Dilution", "UV-Vis (Fixed)", "UV-Vis (Scanning)"];
const experiment = new Experiment(samples, actions);

export default experiment;
