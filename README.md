# 🏆 Kentico MVP Recognition Game

A fun and interactive game to help Kentico employees learn and remember the names and faces of Kentico MVPs (Most Valuable Professionals).

## 🎮 How to Play

1. **Look at the Photo**: Each round shows you a real photo of one of the 15 Kentico MVPs
2. **Choose the Correct Name**: Select from three multiple-choice options
3. **Build Your Streak**: Correct answers increase your streak counter
4. **Reach the Goal**: Win by achieving a streak of 15 (identifying all MVPs correctly in a row)
5. **Learn from Mistakes**: Wrong answers reset your streak but show the correct information

## 🚀 Getting Started

Simply open `index.html` in your web browser - no server or installation required!

The game includes **real MVP photos** downloaded directly from the [official Kentico community programs page](https://community.kentico.com/community/programs), ensuring accurate representation of all current MVPs.

## ✨ Features

- **Authentic MVP Photos**: Real professional photos from the Kentico community site
- **Smart Randomization**: Ensures all MVPs are seen without immediate repeats
- **Beautiful UI**: Clean, responsive design with smooth animations
- **Streak System**: Build momentum by answering correctly in a row
- **Instant Feedback**: Learn MVP details immediately after each answer
- **Win Condition**: Achieve the ultimate goal of a 15-question perfect streak
- **Fallback System**: Automatic fallback to generated avatars if photos fail to load

## 📊 MVP Coverage

The game includes all **15 current Kentico MVPs for 2025**:
- Liam Goldfinch (UK) - IDHL
- Ben Quinlan (AUS) - Zeroseven  
- Elmar Höfinghoff (DE) - Schulte-Schlagbaum AG
- Michael Eustace (UK) - Modern Citizens
- Trevor Fayas (USA) - The Physics Classroom
- Andy Thompson (AUS) - Luminary
- Derek Barka (US) - SilverTech
- Mike Wills (USA) - BlueModus
- Wesley McChristian (USA) - Americaneagle.com
- Joe Peschardt (AUS) - Devotion Digital
- Brian McKeiver (USA) - BizStream
- Jeroen Fürst (NL) - TrueLime
- Dmitry Bastron (ME) - ByteMinds
- Roel Kuik (NL) - Aviva Solutions
- Łukasz Skowroński (PL) - Konabos

## 🎯 Game Mechanics

- **Question Pool**: 15 unique MVPs
- **Answer Choices**: 3 options per question (1 correct, 2 incorrect)
- **Scoring**: Current streak and overall accuracy tracking
- **Win Condition**: Streak of 15 (perfect game)
- **Reset**: Wrong answers reset streak to 0

## 💡 Tips for Success

- Study the faces carefully - some MVPs may look similar at first glance
- Pay attention to the feedback after each answer to learn names and companies
- The game gets easier as you build familiarity with the MVP community
- Challenge colleagues to beat your best streak!

Built with ❤️ for the Kentico community

## 🛠 Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Local Image Storage** - All MVP avatars stored in `images/` folder
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Fallback Images** - Uses generated avatars if local images fail to load
- **Modern CSS** - Gradient backgrounds, smooth animations, custom radio buttons
- **Accessible** - Proper form labels and keyboard navigation

## 📁 Project Structure

```
mvp_app/
├── index.html          # Main game interface
├── styles.css          # Game styling and animations
├── script.js           # Game logic and MVP data
├── README.md           # This documentation
└── images/             # MVP avatar images
    ├── liam-goldfinch.jpg
    ├── ben-quinlan.jpg
    ├── elmar-hofinghoff.jpg
    └── ... (all 15 MVP avatars)
```

## 🎨 Customization

You can easily customize the game by modifying:

- **Colors**: Update CSS custom properties for branding
- **MVP Data**: Edit the `mvps` array in `script.js` to add/remove/update MVPs
- **MVP Images**: Replace files in the `images/` folder with new photos
- **Game Rules**: Modify win conditions, scoring, or streak requirements
- **Styling**: Adjust the CSS for different visual themes

## 📱 Browser Support

Works in all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔗 Data Source

MVP information is sourced from the official [Kentico Community Programs page](https://community.kentico.com/community/programs).

---

**Have fun learning about the amazing Kentico MVP community! 🎉** 