export const menuData = {
  categories: [
    {
      id: "foods",
      name: "غذاهای اصلی",
      nameEn: "Main Dishes",
      items: [
        {
          id: "kebab-koobideh",
          title: "کباب کوبیده",
          titleEn: "Koobideh Kebab",
          image:
            "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
          ingredients: "گوشت چرخ کرده، پیاز، نمک، فلفل، زعفران",
          price: 450000,
          description: "کباب کوبیده سنتی با گوشت تازه و ادویه‌های مخصوص",
          isPopular: true,
        },
        {
          id: "joojeh-kebab",
          title: "جوجه کباب",
          titleEn: "Joojeh Kebab",
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
          ingredients: "سینه مرغ، ماست، پیاز، زعفران، زردچوبه",
          price: 380000,
          description: "جوجه کباب معطر با سس مخصوص و برنج ایرانی",
          isPopular: false,
        },
        {
          id: "ghormeh-sabzi",
          title: "قورمه سبزی",
          titleEn: "Ghormeh Sabzi",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
          ingredients: "سبزی قورمه، گوشت، لوبیا قرمز، لیمو عمانی",
          price: 320000,
          description: "خورش سنتی ایرانی با سبزی‌های تازه و گوشت نرم",
          isPopular: true,
        },
        {
          id: "fesenjan",
          title: "فسنجان",
          titleEn: "Fesenjan",
          image:
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
          ingredients: "گردو، انار، مرغ، پیاز، شکر",
          price: 400000,
          description: "خورش مجلسی با سس گردو و انار و طعم بی‌نظیر",
          isPopular: false,
        },
      ],
    },
    {
      id: "drinks",
      name: "نوشیدنی‌ها",
      nameEn: "Beverages",
      items: [
        {
          id: "doogh",
          title: "دوغ",
          titleEn: "Doogh",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          ingredients: "ماست، آب، نمک، نعنا",
          price: 25000,
          description: "نوشیدنی سنتی ایرانی خنک و گوارا",
          isPopular: true,
        },
        {
          id: "ayran",
          title: "آیران",
          titleEn: "Ayran",
          image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
          ingredients: "ماست، آب، نمک، نعنا خشک",
          price: 20000,
          description: "نوشیدنی ترکی خنک و مقوی",
          isPopular: false,
        },
        {
          id: "fresh-juice",
          title: "آب میوه تازه",
          titleEn: "Fresh Juice",
          image:
            "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
          ingredients: "میوه‌های تازه، یخ",
          price: 35000,
          description: "آب میوه طبیعی و تازه با میوه‌های درجه یک",
          isPopular: true,
        },
        {
          id: "tea",
          title: "چای",
          titleEn: "Tea",
          image:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
          ingredients: "برگ چای، آب جوش، شکر",
          price: 15000,
          description: "چای داغ و معطر ایرانی",
          isPopular: false,
        },
      ],
    },
    {
      id: "appetizers",
      name: "پیش‌غذاها",
      nameEn: "Appetizers",
      items: [
        {
          id: "mast-o-khiar",
          title: "ماست و خیار",
          titleEn: "Mast-o-Khiar",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          ingredients: "ماست، خیار، نعنا، نمک، فلفل",
          price: 45000,
          description: "پیش‌غذای سنتی ایرانی خنک و گوارا",
          isPopular: true,
        },
        {
          id: "kashk-e-bademjan",
          title: "کشک بادمجان",
          titleEn: "Kashk-e-Bademjan",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
          ingredients: "بادمجان، کشک، گردو، پیاز، نعنا",
          price: 55000,
          description: "پیش‌غذای محلی با بادمجان کبابی و کشک",
          isPopular: false,
        },
        {
          id: "mirza-ghasemi",
          title: "میرزا قاسمی",
          titleEn: "Mirza Ghasemi",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
          ingredients: "بادمجان، گوجه، سیر، تخم مرغ",
          price: 50000,
          description: "پیش‌غذای شمالی با بادمجان و گوجه کبابی",
          isPopular: true,
        },
        {
          id: "salad-shirazi",
          title: "سالاد شیرازی",
          titleEn: "Shirazi Salad",
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
          ingredients: "خیار، گوجه، پیاز، نعنا، آبلیمو",
          price: 30000,
          description: "سالاد تازه و خنک با سبزی‌های معطر",
          isPopular: false,
        },
      ],
    },
  ],
};

