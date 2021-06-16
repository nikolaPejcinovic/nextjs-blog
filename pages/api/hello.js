export default function handler(req, res) {
  console.log(req.params);
  res.status(200).json({ text: "Hello" });
}
