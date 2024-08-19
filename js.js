// Example JavaScript code for a simple website

// Get elements from the DOM
const navLinks = document.querySelectorAll('nav ul li a');

// Add event listeners to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the href attribute of the clicked link
    const targetId = link.getAttribute('href');

    // Find the corresponding element on the page
    const targetElement = document.querySelector(targetId);

    // Smoothly scroll to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Scroll-to-top functionality
window.onscroll = function() {
    let scrollToTop = document.getElementById("scrollToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

document.getElementById("scrollToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showNextItem() {
        index++;
        if (index >= items.length) {
            index = 0;
        }
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextItem, 3000); // Change slide every 3 seconds
});
// Define translations for both English and Arabic
const translations = {
    "pageTitle": {
        "EN": "Segment 101",
        "AR": "سيغمنت 101"
    },
    "aboutLink": {
        "EN": "About",
        "AR": "من نحن"
    },
    "servicesLink": {
        "EN": "Services",
        "AR": "الخدمات"
    },
    "contactLink": {
        "EN": "Contact",
        "AR": "اتصل"
    },
    "englishLink": {
        "EN": "EN",
        "AR": "إنجليزي"
    },
    "arabicLink": {
        "EN": "AR",
        "AR": "عربي"
    },
    "heroTitle": {
        "EN": "Customers",
        "AR": "عملائنا"
    },
    "testimonial1": {
        "EN": "\"Great service, will definitely come back!\"",
        "AR": "\"خدمة رائعة، سأعود بالتأكيد!\""
    },
    "testimonial2": {
        "EN": "\"Amazing experience, highly recommend!\"",
        "AR": "\"تجربة رائعة، أوصي بها بشدة!\""
    },
    "testimonial3": {
        "EN": "\"The best customer support I've ever had.\"",
        "AR": "\"أفضل دعم عملاء حصلت عليه على الإطلاق.\""
    },
    "recruitmentTitle": {
        "EN": "Recruitment",
        "AR": "التوظيف"
    },
    "recruitmentDesc": {
        "EN": "We connect you with top talent that fits your company’s needs and culture. From screening to placement, we handle the hiring process to ensure a smooth and efficient experience.",
        "AR": "نحن نوصلك بأفضل المواهب التي تناسب احتياجات وثقافة شركتك. من الفحص إلى التوظيف، نتولى عملية التوظيف لضمان تجربة سلسة وفعالة."
    },
    "trainingTitle": {
        "EN": "Training",
        "AR": "التدريب"
    },
    "trainingDesc": {
        "EN": "Our tailored training programs develop your team’s skills, addressing specific challenges to boost productivity and drive success. We focus on upskilling and onboarding to meet your goals.",
        "AR": "برامج التدريب المخصصة لدينا تطور مهارات فريقك، مع معالجة التحديات المحددة لزيادة الإنتاجية ودفع النجاح. نحن نركز على تعزيز المهارات والتدريب لبلوغ أهدافك."
    },
    "hrSetupTitle": {
        "EN": "HR Department Setup",
        "AR": "إعداد قسم الموارد البشرية"
    },
    "hrSetupDesc": {
        "EN": "We help you build your HR department from the ground up. From creating policies to setting up systems, we provide comprehensive support to establish an effective HR function tailored to your business needs.",
        "AR": "نساعدك على بناء قسم الموارد البشرية من الصفر. من إنشاء السياسات إلى إعداد الأنظمة، نقدم دعمًا شاملاً لإرساء وظيفة موارد بشرية فعالة مصممة وفقًا لاحتياجات عملك."
    },
    "aboutTitle": {
        "EN": "About Us",
        "AR": "من نحن"
    },
    "aboutDesc": {
        "EN": "Segment 101 is a dynamic startup specializing in recruitment and training services. We are dedicated to helping businesses find top talent and equipping them with the skills they need to succeed. Our approach is tailored to meet the unique needs of each client, ensuring effective and efficient solutions. At Segment 101, we believe in building strong partnerships to drive growth and success for all our stakeholders.",
        "AR": "سيغمنت 101 هي شركة ناشئة ديناميكية متخصصة في خدمات التوظيف والتدريب. نحن ملتزمون بمساعدة الشركات في العثور على أفضل المواهب وتجهيزهم بالمهارات التي يحتاجونها للنجاح. نهجنا مصمم لتلبية الاحتياجات الفريدة لكل عميل، مما يضمن حلولًا فعالة وفعالة. في سيغمنت 101، نؤمن ببناء شراكات قوية لدفع النمو والنجاح لجميع الأطراف المعنية."
    },
    "contactTitle": {
        "EN": "Contact Us",
        "AR": "اتصل بنا"
    },
    "contactEmail": {
        "EN": "Email: hr@segment.com",
        "AR": "البريد الإلكتروني: hr@segment.com"
    },
    "contactPhone": {
        "EN": "Phone: +90 551 083 91 50",
        "AR": "الهاتف: +90 551 083 91 50"
    },
    "footerText": {
        "EN": "&copy; 2024 Segment 101. All rights reserved.",
        "AR": "&copy; 2024 سيغمنت 101. جميع الحقوق محفوظة."
    },
    "telegramLink": {
        "EN": "Telegram",
        "AR": "تيليجرام"
    },
    "facebookLink": {
        "EN": "Facebook",
        "AR": "فيسبوك"
    },
    "linkedinLink": {
        "EN": "LinkedIn",
        "AR": "لينكد إن"
    },
    "phoneLink": {
        "EN": "Phone",
        "AR": "الهاتف"
    },
    "emailLink": {
        "EN": "Email",
        "AR": "البريد الإلكتروني"
    },
    "whatsappLink": {
        "EN": "WhatsApp",
        "AR": "واتساب"
    },
    "scrollToTop": {
        "EN": "Scroll to Top",
        "AR": "التمرير لأعلى"
    }
};

// Function to set language
function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.innerText = translations[key][lang];
        }
    });
}

// Language switcher
document.querySelectorAll('.language a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Initial language setup
setLanguage('EN'); // Default language
