// app.js
import express from 'express';
import astrologerRoutes from './routes/astrologer.routes';

const app = express();
app.use(express.json());

app.use('/astrologers', astrologerRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});