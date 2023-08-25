const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const db = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin", 12).then((hash) => {
    return hash;
  });
  console.log(password)
  try {
    await db.user.createMany({
      data: [
        {
          email: "test@test.com",
          name: "Test User",
          password: password,
        },
        {
          email: "admin",
          name: "admin",
          password: password,
        },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  }
}
main()
  .then(() => db.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
