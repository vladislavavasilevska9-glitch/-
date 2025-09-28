/* Сайт розроблено студенткою Владиславою Василевською, група ФЕМП 3з */

// Динамічний список послуг
const services = [
  { name: "Еспресо", price: "40 грн" },
  { name: "Капучино", price: "55 грн" },
  { name: "Лате", price: "60 грн" },
  { name: "Американо", price: "45 грн" },
  { name: "Чізкейк", price: "85 грн" },
  { name: "Круасан", price: "50 грн" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Якщо є список послуг
  const list = document.getElementById("services-list");
  if (list) {
    services.forEach(service => {
      const li = document.createElement("li");
      li.textContent = `${service.name} — ${service.price}`;
      list.appendChild(li);
    });
  }

  // Форма зворотного зв’язку
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const response = document.getElementById("form-response");

      if (name && email && message) {
        response.textContent = "Дякуємо за ваше повідомлення!";
        form.reset();
      } else {
        response.textContent = "Будь ласка, заповніть усі поля.";
      }
    });
  }
});
