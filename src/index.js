import express from 'express';
import db from './models/index.js';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import courseRoutes from './routes/course.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});