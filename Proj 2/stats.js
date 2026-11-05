function hourMultiplier(d, hour) {
  const rows = d.by_hour;
  if (!rows) {return 1};
  const total = rows.reduce((s, r) => s + r.crashes, 0);
  const row = rows.find(r => parseInt(r.hour) == hour);
  if (!row || total == 0) {return 1};
  return (row.crashes / total) * 24;
}

function weatherMultiplier(data, weatherIdx) {
  const rows = data.by_weather;
  if (!rows) {return 1};

  const countFor = function (name) {
    const row = rows.find(function (r) { return r.weather == name; });
    return row ? row.crashes : 0;
  };

  const clear = countFor("Clear");
  if (clear == 0) {return 1};

  const opt = weatherOptions[weatherIdx];
  if (opt.farsName == "Clear") {return 1};

  return 1 + countFor(opt.farsName) / clear;
}