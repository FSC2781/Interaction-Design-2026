function hourMultiplier(_data, _hour) {
  const rows = _data.by_hour;
  if (!rows) {return 1};

  let total = 0;
  for (let r of rows) {
    total += r.crashes;
  }

  let row = null;
  for (let r of rows) {
    if (parseInt(r.hour) == _hour) {
      row = r;
      break;
    }
  }

  if (!row || total == 0) {return 1};
  return (row.crashes / total) * 24;
}

function weatherMultiplier(_data, _weatherIdx) {
  const rows = _data.by_weather;
  if (!rows) {return 1};

  const countFor = function (name) {
    for (let r of rows) {
      if (r.weather == name) {
        return r.crashes;
      }
    }
    return 0;
  };

  const clear = countFor("Clear");
  if (clear == 0) {return 1};
  const opt = weatherOptions[_weatherIdx];
  if (opt.farsName == "Clear") {return 1};
  return 1 + countFor(opt.farsName) / clear;
}