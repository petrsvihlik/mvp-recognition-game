# 🏆 Kentico MVP Recognition Game

A fun and interactive game to help Kentico employees learn and remember the names and faces of Kentico MVPs (Most Valuable Professionals).

## 🎮 How to Play

1. **Look at the Photo**: Each round shows you a photo of one of the 15 Kentico MVPs
2. **Choose the Correct Name**: Select from three multiple-choice options
3. **Build Your Streak**: Correct answers increase your streak counter
4. **Reach the Goal**: Win by achieving a streak of 15 (identifying all MVPs correctly in a row)
5. **Learn from Mistakes**: Wrong answers reset your streak but show the correct information

## 🚀 Getting Started

Simply open `index.html` in your web browser - no server or installation required!

The game includes locally stored avatar images for all MVPs, ensuring fast loading and offline compatibility.

## ✨ Features

- **Real MVP Images**: Uses locally stored avatar images for all 15 current MVPs
- **Modern UI**: Clean, responsive design with smooth animations
- **Smart Randomization**: Ensures you see all MVPs without immediate repeats
- **Progress Tracking**: Tracks your current streak and overall score
- **Educational Feedback**: Shows MVP details (title, company) when you answer
- **Win Celebration**: Special congratulations modal when you complete the challenge
- **Mobile Friendly**: Works great on all device sizes
- **Offline Ready**: All images and resources work without internet connection

## 📊 Game Mechanics

- **Streak Counter**: Shows consecutive correct answers
- **Target**: 15 (total number of Kentico MVPs)
- **Score**: Overall correct/total ratio
- **Win Condition**: Achieve a streak of 15
- **Reset Condition**: Any wrong answer resets streak to 0

## 👥 Current Kentico MVPs (2025)

The game includes all 15 current Kentico MVPs with their avatar images:

1. **Liam Goldfinch** - Principal Systems Developer at IDHL (UK)
2. **Ben Quinlan** - Director / Solution Architect at Zeroseven (AUS)
3. **Elmar Höfinghoff** - Senior Web Engineer at Schulte-Schlagbaum AG (DE)
4. **Michael Eustace** - Head of Web Development at Modern Citizens (UK)
5. **Trevor Fayas** - Owner at The Physics Classroom (USA)
6. **Andy Thompson** - CTO at Luminary (AUS)
7. **Derek Barka** - Chief Technology Officer at SilverTech (US)
8. **Mike Wills** - Vice President of Technology at BlueModus (USA)
9. **Wesley McChristian** - Kentico Practice VP at Americaneagle.com (USA)
10. **Joe Peschardt** - Client Business Director at Devotion Digital (AUS)
11. **Brian McKeiver** - Co-Owner at BizStream (USA)
12. **Jeroen Fürst** - Digital Experience Architect at TrueLime (NL)
13. **Dmitry Bastron** - Head of Development at ByteMinds (ME)
14. **Roel Kuik** - Kentico Practice Lead at Aviva Solutions (NL)
15. **Łukasz Skowroński** - Senior Solutions Architect at Konabos (PL)

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