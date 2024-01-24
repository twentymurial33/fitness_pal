function handler(res, req) {
  const activityData = [
    {
      activityKind: "running",
      unit: "miles",
      value: "10",
    },
    {
      activityKind: "swimming",
      unit: "miles",
      value: "5",
    },
    {
      activityKind: "axe throwing",
      unit: "miles",
      value: "2",
    },
    {
      activityKind: "jogging",
      unit: "miles",
      value: "5",
    },
  ];
  res.status(200).json({ activityData });
}

export default handler;
