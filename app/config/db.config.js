module.exports = {
  HOST: "db.ykqrfpbkxnnohffjdbdt.supabase.co",
  USER: "postgres",
  PASSWORD: "Chandan1@singh",
  DB: "postgres",
  dialect: "postgres",
  PORT: 5432,  // 👈 add this
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false  // 👈 important for Supabase/Render
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
