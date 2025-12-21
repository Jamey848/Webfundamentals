import express from 'express';
import cors from 'cors';

// Import your routers using ESM syntax
import usersRouter from './routes/users.js';
import receiptRouter from './routes/receipt.js';
import receiptitemsRouter from './routes/receiptitems.js';
import metricsRouter from './routes/metrics.js';
import dashboardRouter from './routes/dashboard.js';
import recommendationsRouter from './routes/recommendations.js';
import permavaluesRouter from './routes/permavalues.js';

const app = express();

app.use(cors());
app.use(express.json());

// Use routers
app.use("/users", usersRouter);
app.use("/receipt", receiptRouter);
app.use("/receiptitems", receiptitemsRouter);
app.use("/metrics", metricsRouter);
app.use("/dashboard", dashboardRouter);
app.use("/recommendations", recommendationsRouter);
app.use("/permavalues", permavaluesRouter);

app.listen(3000, () => console.log("Server running on port 3000"));