# How to Crop Food Images from Menu Screenshots

## Problem Identified

The current menu shows only 3 repeated images because many image files were corrupted (29 bytes). I've fixed the broken files with valid placeholders, but you need to replace them with actual food images from the provided menu screenshots.

## Step-by-Step Instructions

### 1. Open the Menu Screenshots

You have several menu screenshots that contain the correct food images. Use these to crop individual food items.

### 2. Image Cropping Tool

Use any image editing software:

- **Free options**: GIMP, Paint.NET, Canva
- **Paid options**: Photoshop, Affinity Photo
- **Online tools**: Canva, Photopea (free online Photoshop)

### 3. Crop Each Food Item

#### From the Main Menu Screenshots:

**Ana Yemekler (Main Dishes):**

- **Tereyağlı İskender + Salata** (270 TL) - Plate with Iskender kebab, tomato sauce, butter, yogurt, salad
- **Porsiyon Döner + Salata** (350 TL) - Plate with sliced döner meat and salad
- **Pilav Üstü Döner + Salata** (380 TL) - Plate with rice topped with döner meat and salad

**Döner Sandviçler (Döner Sandwiches):**

- **3 Çeyrek Et Döner** (300 TL) - Long sandwich with döner meat, onions, tomatoes
- **Tombik Et Döner** (220 TL) - Round bread sandwich with döner meat
- **Sandviç Et Döner** (220 TL) - Long sandwich with döner meat
- **Et Dürüm Döner** (230 TL) - Wrap with döner meat and vegetables

**Yan Yemekler & Çorbalar (Sides & Soups):**

- **Patates Tava** (50 TL) - Plate of golden french fries with ketchup
- **Patso** (50 TL) - Bread filled with french fries and sauces
- **Mercimek Çorbası** (100 TL) - Bowl of orange lentil soup with red spices
- **Tavuk Çorbası** (100 TL) - Bowl of creamy chicken soup

**Köfte & Kokoreç:**

- **Porsiyon Köfte + Salata** (360 TL) - Plate with meatballs, grilled vegetables, salad
- **Köfte Ekmek** (220 TL) - Sandwich with meatballs and tomatoes
- **Sebzeli Kokoreç** (230 TL) - Triangular bread with kokoreç and vegetables
- **Sade Yarım Kokoreç** (250 TL) - Half sandwich with kokoreç
- **Sade Porsiyon Kokoreç** (500 TL) - Plate with kokoreç and fresh vegetables
- **Sebzeli Porsiyon Kokoreç** (450 TL) - Plate with kokoreç mixed with vegetables
- **Sucuk Ekmek** (220 TL) - Sandwich with Turkish sausage and peppers

#### From the Chicken Menu Screenshots:

**Tavuk Döner (Chicken Doner):**

- **Tombik Tavuk Döner** (90 TL) - Round bread with chicken döner
- **Sandviç Tavuk Döner** (90 TL) - Long sandwich with chicken döner
- **Tavuk Döner Dürüm** (100 TL) - Wrap with chicken döner
- **Soslu Tavuk Dürüm** (150 TL) - Wrap with chicken döner and sauce
- **Zurna Tavuk Dürüm** (170 TL) - Large wrap with chicken döner and fries
- **Kaşarlı Tavuk Dürüm** (200 TL) - Wrap with chicken döner and cheese
- **Tam Ekmek Tavuk Döner** (170 TL) - Large bread with chicken döner
- **Tavuk Döner Porsiyon + Salata** (250 TL) - Plate with chicken döner and salad
- **Pilav Üstü Tavuk Döner + Salata** (300 TL) - Plate with rice, chicken döner, and salad

#### From the Menu Combo Screenshots:

**Et Menüler (Meat Menus):**

- **Menü 1** (330 TL) - Combo with meat sandwich, fries, Coca-Cola
- **Menü 2** (330 TL) - Combo with meat döner sandwich, fries, Coca-Cola
- **Menü 3** (350 TL) - Combo with meat wrap, fries, Coca-Cola

**Tavuk Menüler (Chicken Menus):**

- **Menü 1** (250 TL) - Combo with chicken sandwich, fries, Coca-Cola
- **Menü 2** (250 TL) - Combo with chicken döner in round bread, fries, Coca-Cola
- **Menü 3** (270 TL) - Combo with chicken wrap, fries, Coca-Cola

### 4. Image Specifications

- **Size**: 300x200 pixels (3:2 aspect ratio)
- **Format**: JPG
- **Quality**: High (80-90%)
- **Background**: Clean, preferably white or neutral

### 5. Save Instructions

1. Crop each food item from the screenshots
2. Resize to 300x200 pixels
3. Save as JPG with high quality
4. Use the exact filename from the list above
5. Save all files to `public/images/` directory

### 6. Files to Replace

Replace these placeholder files with actual cropped images:

- et-durum-doner.jpg
- kasarlı-tavuk-durum.jpg
- menu-3-et.jpg
- menu-3-tavuk.jpg
- mercimek-corbasi.jpg
- pilav-usti-doner-salata.jpg
- pilav-usti-tavuk-doner-salata.jpg
- sebzeli-kokorec.jpg
- sebzeli-porsiyon-kokorec.jpg
- tavuk-doner-durum.jpg

### 7. Verification

After replacing all images:

1. Refresh your menu application
2. Check that all items show unique, correct images
3. Verify that no items show empty white spaces
4. Ensure images match the food descriptions

## Current Status

✅ Fixed broken 29-byte files with valid placeholders
✅ Updated prices to match current menu
⏳ Need to replace placeholders with actual food images from screenshots

The menu will display properly once you replace the placeholder images with the actual cropped food images from the provided screenshots.


