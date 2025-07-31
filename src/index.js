import { connectDB } from "../db.js";
import { Contact } from "./db/models/contact.js";

const start = async () => {
  await connectDB();

  // 🔹 Створити контакт
  const newContact = await Contact.create({
    name: 'Anna Petrova',
    email: 'anna@example.com',
    phone: '+380991234567',
  });

  console.log("✅ Контакт створено:", newContact);

  // 🔹 Отримати всі контакти
  const allContacts = await Contact.find();
  console.log("📋 Всі контакти:", allContacts);

  // 🔹 Порахувати контакти
  const total = await Contact.countDocuments();
  console.log("🔢 Загальна кількість контактів:", total);
};

start();

