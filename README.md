# Turkish Restaurant Menu

A beautiful and modern restaurant menu page with complete categorization of main dishes, drinks, and appetizers featuring authentic Turkish cuisine.

## Features

- 🍽️ **Complete Categorization**: Main dishes, drinks, and appetizers
- 🖼️ **Beautiful Images**: Each menu item has an attractive image
- 💰 **Pricing**: Formatted price display
- 📝 **Complete Descriptions**: Includes ingredients and descriptions for each item
- ⭐ **Popular Items**: Special marking for featured items
- 📱 **Responsive Design**: Compatible with all screen sizes
- 🎨 **Modern Design**: Uses gradients and animations
- 🇹🇷 **Turkish Cuisine**: Authentic Turkish döner, kebap, and traditional dishes

## Installation and Setup

1. Install dependencies:

```bash
npm install
```

2. Run the project:

```bash
npm start
```

3. Open your browser and go to `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── menu-item.js          # Menu item component
│   ├── menu-item.css
│   ├── menu-category.js      # Category component
│   ├── menu-category.css
│   ├── restaurant-header.js  # Restaurant header
│   └── restaurant-header.css
├── data/
│   └── menu-data.js          # Menu data
├── App.js                    # Main component
├── App.css
├── index.js                  # Entry point
└── index.css
```

## Customization

To add new items or modify the menu, edit the `src/data/menu-data.js` file.

### Menu Item Structure:

```javascript
{
  id: 'unique-id',
  title: 'Turkish Name',
  titleEn: 'English Name',
  image: 'Image URL',
  ingredients: 'Ingredients',
  price: 250, // Price in Turkish Lira (TL)
  description: 'Description',
  isPopular: true // Is it popular?
}
```

## Technologies Used

- React 18
- CSS3 (Grid, Flexbox, Animations)
- Google Fonts (Playfair Display, Inter)
- Custom Turkish restaurant styling

## Restaurant Information

**OSMANLI DÖNER VE KOKOREÇ** - Authentic Turkish döner, kebap, and traditional Turkish fast food specialties.

## License

This project is released under the MIT license.
