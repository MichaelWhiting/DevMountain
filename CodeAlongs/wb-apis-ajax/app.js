import express from 'express';
import ViteExpress from 'vite-express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

app.post('/order-cookies', (req, res) => {
  const qty = Number(req.body.qty);
  const cookieType = req.body.cookieType;
  if (Number.isNaN(qty) || qty < 1) {
    res.json({ msg: 'Invalid Order', total: 0 });
  } else {
    const unitPrice = qty > 6 ? 1.8 : 2.0;
    res.json({
      msg: `Your order of ${qty} ${cookieType} cookies is confirmed`,
      total: unitPrice * qty,
    });
  }
});

ViteExpress.listen(app, port, () => console.log(`Server running on http://localhost:${port}`));
