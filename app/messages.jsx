// app/messages.js
export const messages = {
  en: {
    // Header
    home: "Home",
    blog: "Blog",
    resources: "Resources",
    contact: "Contact",
    signin: "Sign In",
    
    // Blog page
    blogHero: "Travel Blog",
    all: "All",
    
    // Tags
    tags: {
      Adventure: "Adventure",
      Travel: "Travel",
      Food: "Food",
      Nature: "Nature",
      City: "City",
      Beach: "Beach",
    },
    
    // Blog posts
    blogPosts: {
      post1Title: "Hiking the Altai Mountains",
      post1Excerpt: "An unforgettable journey through Mongolia's stunning mountain ranges",
      
      post2Title: "Exploring Ulaanbaatar",
      post2Excerpt: "A guide to Mongolia's vibrant capital city and its hidden gems",
      
      post3Title: "Beach Paradise in Thailand",
      post3Excerpt: "Crystal clear waters and pristine beaches await in southern Thailand",
      
      post4Title: "Street Food Adventures",
      post4Excerpt: "Tasting the world's best street food across Asian cities",
      
      post5Title: "Solo Backpacking Guide",
      post5Excerpt: "Tips and tricks for traveling alone through Southeast Asia",
      
      post6Title: "National Parks of Mongolia",
      post6Excerpt: "Discover the untouched wilderness and wildlife of Mongolia",
      
      post7Title: "Tokyo Food Scene",
      post7Excerpt: "From ramen to sushi: exploring Tokyo's incredible culinary landscape",
      
      post8Title: "Gobi Desert Experience",
      post8Excerpt: "Camping under the stars in one of the world's largest deserts",
      
      post9Title: "Island Hopping Philippines",
      post9Excerpt: "A two-week adventure across the beautiful Philippine islands",
      
      post10Title: "Seoul Nightlife Guide",
      post10Excerpt: "The best bars, clubs, and night markets in South Korea's capital",
      
      post11Title: "Rock Climbing in Vietnam",
      post11Excerpt: "Scaling limestone cliffs in Halong Bay's stunning landscape",
      
      post12Title: "Wildlife Safari Mongolia",
      post12Excerpt: "Spotting rare species in the Mongolian steppes",
      
      post13Title: "Bangkok City Adventures",
      post13Excerpt: "Navigating the bustling streets and temples of Bangkok",
      
      post14Title: "Kyoto Traditional Cuisine",
      post14Excerpt: "Experience authentic Japanese kaiseki and tea ceremonies",
      
      post15Title: "Bali Surfing Paradise",
      post15Excerpt: "Catching waves and enjoying beach life in Indonesia",
    },
    
    // Blog detail
    blogDetail: {
      backToBlog: "← Back to Blog",
      writtenBy: "Written by",
      publishedOn: "Published on",
      relatedPosts: "Related Posts",
      readMore: "Read More",
    },
    
    // Contact page
    contactPage: {
      title: "Get In Touch",
      subtitle: "We'd love to hear from you. Send us a message about your questions or partnership opportunities.",
      email: "Email",
      phone: "Phone",
      address: "Address",
      addressText: "Ulaanbaatar, Sukhbaatar District",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject (optional)",
      messagePlaceholder: "Your Message...",
      sendButton: "Send Message",
      sending: "Sending...",
      errorRequired: "Please fill in your name, email, and message.",
      successMessage: "Message sent successfully! We'll get back to you soon.",
      errorMessage: "An error occurred. Please try again.",
    },
    
    // Travel Resources page
    heroTitle: "Plan Your Adventure",
    infoCards: {
      capitalCity: "Capital City",
      ulaanbaatar: "Ulaanbaatar",
      writingSystem: "Writing System",
      mongolianCyrillic: "Mongolian Cyrillic",
      demographics: "Demographics",
      mongolKazakh: "Mongol, Kazakh, Other",
      religion: "Religion",
      buddhismIslam: "Buddhism, Islam, Shamanism",
    },
    currencySectionTitle: "Currency & Payment",
    currency: {
      officialCurrency: "Official Currency: Mongolian Tögrög (MNT)",
      taxFree: "Tax-Free Shopping: Foreign visitors can enjoy tax-free shopping under Mongolia's VAT refund system.",
      learnMore: "Learn more",
      paymentMethods: "Payment Methods: Credit cards are widely accepted in Ulaanbaatar, but cash is needed in remote areas. Apple Pay works; other mobile payments may be limited.",
      tippingCulture: "Tipping Culture: Tipping isn't expected but appreciated. Small gifts like food or souvenirs are thoughtful in rural areas.",
    },
    seasonsTitle: "Seasons and Holidays",
    seasons: {
      winter: "Winter",
      spring: "Spring",
      summer: "Summer",
      autumn: "Autumn",
    },
    weatherData: [
      {
        months: "Dec – Feb",
        temp: "-30 °C to -10 °C",
        description: "Frozen lakes, snowy steppes, Blue Pearl Ice Festival and Thousand Camel Festival.",
      },
      {
        months: "Mar – May",
        temp: "-5 °C to 15 °C",
        description: "Blossoming valleys, Tsagaan Sar, Spring Golden Eagle Festival.",
      },
      {
        months: "Jun – Aug",
        temp: "15 °C to 30 °C",
        description: "Naadam Festival, Yak Festival, Danshig Religious Festival, Tsaatan Reindeer Festival.",
      },
      {
        months: "Sep – Nov",
        temp: "0 °C to 15 °C",
        description: "Steppe turns golden, Golden Eagle Festival, fewer crowds.",
      },
    ],
    currentWeather: "Current Weather",
    allCategory: "All",
    visitLink: "Visit",
    
    // Resource categories
    resourceCategories: {
      visaEntry: "Visa & Entry",
      healthcare: "Healthcare & Safety",
      transportation: "Transportation",
      travelTools: "Travel Tools & Planning",
    },
    
    // Resource names
    resourceNames: {
      mongoliaVisaInfo: "Mongolia Visa Info",
      mongoliaEVisa: "Mongolia E-Visa",
      consularVisaPortal: "Consular Visa Portal",
      cdcTravelersHealth: "CDC Travelers' Health – Mongolia",
      travelInsurance: "Travel Insurance",
      healthcareTips: "Healthcare Tips",
      miatAirlines: "MIAT Mongolian Airlines",
      busTrainInfo: "Bus & Train Info",
      carRentals: "Car Rentals",
      mapsMe: "Maps.me",
      tripPlanner: "Trip Planner",
      currencyConverter: "Currency Converter",
    },
    
    // Resource descriptions
    resourceDescriptions: {
      mongoliaVisaInfoDesc: "Official site for visa requirements and travel information for Mongolia.",
      mongoliaEVisaDesc: "Apply for an electronic visa (eVisa) online for eligible countries.",
      consularVisaPortalDesc: "General Visa information for tourists, including requirements and applications.",
      cdcTravelersHealthDesc: "Vaccination and health recommendations for travelers to Mongolia.",
      travelInsuranceDesc: "World Nomads, Allianz, or local providers to cover medical emergencies.",
      healthcareTipsDesc: "Official healthcare tips from the Embassy of the United Kingdom.",
      miatAirlinesDesc: "National airline of Mongolia for flights to and from Ulaanbaatar.",
      busTrainInfoDesc: "National online ticketing system for easy use.",
      carRentalsDesc: "Reliable cars and experienced drivers are essential for your Mongolian adventure.",
      mapsMeDesc: "Offline maps for Mongolia, useful for rural travel.",
      tripPlannerDesc: "A travel planning website specialized for Mongolia.",
      currencyConverterDesc: "Official daily foreign exchange rates tracker maintained by Mongolbank.",
    },
  },
  
  mn: {
    // Header
    home: "Нүүр",
    blog: "Блог",
    resources: "Нөөц",
    contact: "Холбоо барих",
    signin: "Нэвтрэх",
    
    // Blog page
    blogHero: "Аялалын Блог",
    all: "Бүгд",
    
    // Tags
    tags: {
      Adventure: "Адал явдал",
      Travel: "Аялал",
      Food: "Хоол",
      Nature: "Байгаль",
      City: "Хот",
      Beach: "Далайн эрэг",
    },
    
    // Blog posts
    blogPosts: {
      post1Title: "Алтайн уулсаар явган аялал",
      post1Excerpt: "Монголын гайхамшигтай уулсаар мартагдашгүй аялал",
      
      post2Title: "Улаанбаатар хотыг судлах",
      post2Excerpt: "Монголын нийслэлийн нуугдмал үзэсгэлэнт газруудын гарын авлага",
      
      post3Title: "Тайландын далайн эргийн диваажин",
      post3Excerpt: "Өмнөд Тайландын тунгалаг ус, цэвэр эрэг таныг хүлээж байна",
      
      post4Title: "Гудамжны хоолны адал явдал",
      post4Excerpt: "Азийн хотуудын дэлхийн хамгийн сайхан гудамжны хоолыг амтлах",
      
      post5Title: "Ганцаараа аялах гарын авлага",
      post5Excerpt: "Зүүн өмнөд Ази дамжин ганцаараа аялах зөвлөмж",
      
      post6Title: "Монголын үндэсний цэцэрлэгт хүрээлэнгүүд",
      post6Excerpt: "Монголын хөндөгдөөгүй байгаль, амьтдыг нээж илрүүлээрэй",
      
      post7Title: "Токиогийн хоолны үзэсгэлэн",
      post7Excerpt: "Рамэнээс суши хүртэл: Токиогийн гайхалтай хоолны соёлыг судлах",
      
      post8Title: "Говийн цөлийн туршлага",
      post8Excerpt: "Дэлхийн хамгийн том цөлд одны дор буудаллах",
      
      post9Title: "Филиппиний арлуудаар аялах",
      post9Excerpt: "Үзэсгэлэнт Филиппиний арлуудаар хоёр долоо хоногийн аялал",
      
      post10Title: "Сөүлийн шөнийн амьдралын гарын авлага",
      post10Excerpt: "Өмнөд Солонгосын нийслэлийн шилдэг бар, клуб, шөнийн зах",
      
      post11Title: "Вьетнамд хаднаас авирах",
      post11Excerpt: "Халонг булангийн гайхамшигтай байгальд шохойн хадан дээр авирах",
      
      post12Title: "Монголын зэрлэг амьтдын сафари",
      post12Excerpt: "Монголын тал хээрт ховор төрөл зүйлийг үзэх",
      
      post13Title: "Бангкок хотын адал явдал",
      post13Excerpt: "Бангкокийн хөл хөдөлгөөн ихтэй гудамж, сүм хийдүүдээр явах",
      
      post14Title: "Киотогийн уламжлалт хоол",
      post14Excerpt: "Жинхэнэ Японы кайсэки, цайны ёслолыг мэдрээрэй",
      
      post15Title: "Балигийн серфингийн диваажин",
      post15Excerpt: "Индонезид долгион барьж, далайн эргийн амьдралаас таашаал ав",
    },
    
    // Blog detail
    blogDetail: {
      backToBlog: "← Блог руу буцах",
      writtenBy: "Зохиогч",
      publishedOn: "Нийтэлсэн огноо",
      relatedPosts: "Холбоотой нийтлэлүүд",
      readMore: "Дэлгэрэнгүй",
    },
    
    // Contact page
    contactPage: {
      title: "Бидэнтэй холбогдох",
      subtitle: "Санал хүсэлт, хамтын ажиллагааны талаар бидэнд бичээрэй.",
      email: "И-мэйл",
      phone: "Утас",
      address: "Хаяг",
      addressText: "Улаанбаатар хот, Сүхбаатар дүүрэг",
      namePlaceholder: "Таны нэр",
      emailPlaceholder: "Таны и-мэйл",
      subjectPlaceholder: "Гарчиг (сонголттой)",
      messagePlaceholder: "Таны мессеж...",
      sendButton: "Мэссэж илгээх",
      sending: "Илгээж байна...",
      errorRequired: "Та нэр, и-мэйл, мессежээ бөглөнө үү.",
      successMessage: "Мэссэж амжилттай илгээгдлээ! Бид удахгүй холбогдоно.",
      errorMessage: "Алдаа гарлаа. Дахин оролдоно уу.",
    },
    
    // Travel Resources page
    heroTitle: "Аялалаа төлөвлө",
    infoCards: {
      capitalCity: "Нийслэл хот",
      ulaanbaatar: "Улаанбаатар",
      writingSystem: "Бичгийн систем",
      mongolianCyrillic: "Монгол кирилл",
      demographics: "Хүн ам",
      mongolKazakh: "Монгол, Казах, Бусад",
      religion: "Шашин",
      buddhismIslam: "Буддизм, Ислам, Шаманизм",
    },
    currencySectionTitle: "Валют ба төлбөр",
    currency: {
      officialCurrency: "Албан ёсны валют: Монгол төгрөг (MNT)",
      taxFree: "НӨАТ-аас чөлөөлөгдсөн худалдан авалт: Гадаадын жуулчид Монголын НӨАТ буцаан олголтын системийг ашиглан татваргүй худалдан авалт хийх боломжтой.",
      learnMore: "Илүү мэдээлэл",
      paymentMethods: "Төлбөрийн арга: Улаанбаатарт кредит карт өргөнөөр хүлээн авагддаг, харин алслагдмал газруудад бэлэн мөнгө шаардлагатай. Apple Pay ажиллана; бусад мобайл төлбөрийн боломж хязгаарлагдмал байж болно.",
      tippingCulture: "Зоогийн соёл: Зоог өгөх шаардлагагүй, гэхдээ талархал илэрхийлэхэд зохистой. Жижиг бэлэг, хоол, дурсгалын зүйл нь хөдөө орон нутагт талархал илэрхийлэх сайн арга юм.",
    },
    seasonsTitle: "Улирлууд ба Ёслолууд",
    seasons: {
      winter: "Өвөл",
      spring: "Хавар",
      summer: "Зун",
      autumn: "Намар",
    },
    weatherData: [
      {
        months: "12-2 сар",
        temp: "-30 °C - -10 °C",
        description: "Хөлдсөн нуур, цастай тал хээр, Мөсөн сувдын баяр, Мянган тэмээний баяр.",
      },
      {
        months: "3-5 сар",
        temp: "-5 °C - 15 °C",
        description: "Цэцэглэсэн хөндий, Цагаан сар, Хаврын бүргэдийн баяр.",
      },
      {
        months: "6-8 сар",
        temp: "15 °C - 30 °C",
        description: "Наадам, Сарлагийн баяр, Даншиг, Цаатны цаа бугын баяр.",
      },
      {
        months: "9-11 сар",
        temp: "0 °C - 15 °C",
        description: "Алтан тал хээр, Бүргэдийн баяр, цөөн жуулчид.",
      },
    ],
    currentWeather: "Одоогийн цаг агаар",
    allCategory: "Бүгд",
    visitLink: "Очих",
    
    // Resource categories
    resourceCategories: {
      visaEntry: "Виз ба нэвтрэх",
      healthcare: "Эрүүл мэнд ба аюулгүй байдал",
      transportation: "Тээвэр",
      travelTools: "Аялалын хэрэгсэл ба төлөвлөлт",
    },
    
    // Resource names
    resourceNames: {
      mongoliaVisaInfo: "Монголын визний мэдээлэл",
      mongoliaEVisa: "Монголын цахим виз",
      consularVisaPortal: "Консулын газрын визний портал",
      cdcTravelersHealth: "CDC аялагчдын эрүүл мэнд – Монгол",
      travelInsurance: "Аялалын даатгал",
      healthcareTips: "Эрүүл мэндийн зөвлөмж",
      miatAirlines: "МИАТ Монголын агаарын тээвэр",
      busTrainInfo: "Автобус ба галт тэрэгний мэдээлэл",
      carRentals: "Машин түрээслэх",
      mapsMe: "Maps.me",
      tripPlanner: "Аялал төлөвлөгч",
      currencyConverter: "Валютын хөрвүүлэгч",
    },
    
    // Resource descriptions
    resourceDescriptions: {
      mongoliaVisaInfoDesc: "Монгол улсын визний шаардлага болон аялалын мэдээллийн албан ёсны сайт.",
      mongoliaEVisaDesc: "Эрх бүхий улс орнуудын иргэдэд цахим виз (eVisa) онлайнаар хүсэлт гаргах.",
      consularVisaPortalDesc: "Жуулчдад зориулсан ерөнхий визний мэдээлэл, шаардлага ба хүсэлт.",
      cdcTravelersHealthDesc: "Монгол руу аялагчдад зориулсан вакцин болон эрүүл мэндийн зөвлөмж.",
      travelInsuranceDesc: "Эмнэлгийн яаралтай тусламжийн даатгал: World Nomads, Allianz эсвэл орон нутгийн үйлчилгээ.",
      healthcareTipsDesc: "Их Британийн Элчин сайдын яамнаас гаргасан албан ёсны эрүүл мэндийн зөвлөмж.",
      miatAirlinesDesc: "Улаанбаатар хот руу болон хотоос нислэг үйлдэх Монголын үндэсний агаарын тээвэр.",
      busTrainInfoDesc: "Хялбар хэрэглээтэй үндэсний онлайн тасалбар захиалгын систем.",
      carRentalsDesc: "Найдвартай машин, туршлагатай жолооч Монголын аялалд зайлшгүй шаардлагатай.",
      mapsMeDesc: "Монголд зориулсан офлайн газрын зураг, хөдөө аялалд ашигтай.",
      tripPlannerDesc: "Монгол орны аялалд тусгайлсан аялал төлөвлөх вэбсайт.",
      currencyConverterDesc: "Монголбанкны хянадаг өдөр тутмын гадаад валютын ханшийн мэдээлэл.",
    },
  },
};