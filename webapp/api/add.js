module.exports = (req, res) => {
  const { query } = req;
  const a = parseFloat(query.a);
  const b = parseFloat(query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Both a and b must be numbers" });
  }

  res.status(200).json({ result: a + b });
};
