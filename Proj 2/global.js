/// SETUP ///
let dataSet = {};
let stateArr = [];
let roomData = {width: 960,
  height: 540,
  screen: 0,
};

// Data from US census
const statePop = {
  "California":     39555703,
  "Texas":          29149498,
  "Florida":        21538207,
  "Georgia":        10713861,
  "North Carolina": 10441392,
  "Vermont": 647722,
  "Rhode Island": 1101183,
  "District of Columbia": 682559
};
let flagImgs = {};

/// WEATHER ///
let env = { hour: 12, weather: 0 };
const weatherOptions = [
  { label: "Clear", farsName: "Clear"},
  { label: "Cloudy", farsName: "Cloudy"},
  { label: "Rain", farsName: "Rain"},
  { label: "Fog", farsName: "Fog, Smog, Smoke"},
];

let backgrounds = {};

/// CHARACTERS ///
let plrArr = [];

/// BUTTONS ///
let buttons = [];