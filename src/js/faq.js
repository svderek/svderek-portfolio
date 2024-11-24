import Accordion from "accordion-js";
import 'accordion-js/dist/accordion.min.css';

// Initialize Accordion
document.addEventListener("DOMContentLoaded", () => {
    // Створення нового акордеону
    new Accordion(".accordion-container", {
      duration: 400,       // Тривалість анімації в мілісекундах
      showMultiple: false, // Відкрито лише один елемент одночасно
      openOnInit: [0],     // Перший елемент відкрито за замовчуванням
    });
  });