export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, roll, class: cls } = req.body;
    // do server-side validation
    res.status(200).json({ message: 'Validated!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
