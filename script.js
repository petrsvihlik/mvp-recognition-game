// Kentico MVP data with names, titles, companies, and photo URLs
const mvps = [
    {
        name: "Liam Goldfinch",
        title: "Principal Systems Developer",
        company: "IDHL",
        country: "UK",
        photo: "images/liam-goldfinch.jpg"
    },
    {
        name: "Ben Quinlan",
        title: "Director / Solution Architect",
        company: "Zeroseven",
        country: "AUS",
        photo: "images/ben-quinlan.jpg"
    },
    {
        name: "Elmar Höfinghoff",
        title: "Senior Web Engineer",
        company: "Schulte-Schlagbaum AG",
        country: "DE",
        photo: "images/elmar-hofinghoff.jpg"
    },
    {
        name: "Michael Eustace",
        title: "Head of Web Development",
        company: "Modern Citizens",
        country: "UK",
        photo: "images/michael-eustace.jpg"
    },
    {
        name: "Trevor Fayas",
        title: "Owner",
        company: "The Physics Classroom",
        country: "USA",
        photo: "images/trevor-fayas.jpg"
    },
    {
        name: "Andy Thompson",
        title: "CTO",
        company: "Luminary",
        country: "AUS",
        photo: "images/andy-thompson.jpg"
    },
    {
        name: "Derek Barka",
        title: "Chief Technology Officer",
        company: "SilverTech",
        country: "US",
        photo: "images/derek-barka.jpg"
    },
    {
        name: "Mike Wills",
        title: "Vice President of Technology",
        company: "BlueModus",
        country: "USA",
        photo: "images/mike-wills.jpg"
    },
    {
        name: "Wesley McChristian",
        title: "Kentico Practice VP",
        company: "Americaneagle.com",
        country: "USA",
        photo: "images/wesley-mcchristian.jpg"
    },
    {
        name: "Joe Peschardt",
        title: "Client Business Director",
        company: "Devotion Digital",
        country: "AUS",
        photo: "images/joe-peschardt.jpg"
    },
    {
        name: "Brian McKeiver",
        title: "Co-Owner",
        company: "BizStream",
        country: "USA",
        photo: "images/brian-mckeiver.jpg"
    },
    {
        name: "Jeroen Fürst",
        title: "Digital Experience Architect",
        company: "TrueLime",
        country: "NL",
        photo: "images/jeroen-furst.jpg"
    },
    {
        name: "Dmitry Bastron",
        title: "Head of Development",
        company: "ByteMinds",
        country: "ME",
        photo: "images/dmitry-bastron.jpg"
    },
    {
        name: "Roel Kuik",
        title: "Kentico Practice Lead",
        company: "Aviva Solutions",
        country: "NL",
        photo: "images/roel-kuik.jpg"
    },
    {
        name: "Łukasz Skowroński",
        title: "Senior Solutions Architect",
        company: "Konabos",
        country: "PL",
        photo: "images/lukasz-skowronski.jpg"
    }
];

// Game state
let currentStreak = 0;
let totalQuestions = 0;
let correctAnswers = 0;
let currentMvp = null;
let currentOptions = [];
let usedMvps = [];

// DOM elements
const streakElement = document.getElementById('streak');
const scoreElement = document.getElementById('score');
const mvpPhotoElement = document.getElementById('mvp-photo');
const photoPlaceholder = document.getElementById('photo-placeholder');
const submitBtn = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');
const winModal = document.getElementById('win-modal');
const finalScoreElement = document.getElementById('final-score');
const answerForm = document.getElementById('answer-form');

// Initialize game
function initGame() {
    currentStreak = 0;
    totalQuestions = 0;
    correctAnswers = 0;
    usedMvps = [];
    updateStats();
    loadNextQuestion();
}

// Update statistics display
function updateStats() {
    streakElement.textContent = currentStreak;
    scoreElement.textContent = `${correctAnswers}/${totalQuestions}`;
}

// Get random MVP that hasn't been used recently
function getRandomMvp() {
    // If we've used all MVPs, reset the used list
    if (usedMvps.length >= mvps.length) {
        usedMvps = [];
    }
    
    const availableMvps = mvps.filter(mvp => !usedMvps.includes(mvp.name));
    const randomIndex = Math.floor(Math.random() * availableMvps.length);
    const selectedMvp = availableMvps[randomIndex];
    
    usedMvps.push(selectedMvp.name);
    return selectedMvp;
}

// Generate three random options with one correct answer
function generateOptions(correctMvp) {
    const options = [correctMvp];
    const otherMvps = mvps.filter(mvp => mvp.name !== correctMvp.name);
    
    // Add two random incorrect options
    while (options.length < 3) {
        const randomIndex = Math.floor(Math.random() * otherMvps.length);
        const randomMvp = otherMvps[randomIndex];
        
        if (!options.some(option => option.name === randomMvp.name)) {
            options.push(randomMvp);
        }
    }
    
    // Shuffle the options
    return shuffleArray(options);
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load next question
function loadNextQuestion() {
    // Clear previous feedback
    feedbackElement.className = 'feedback';
    feedbackElement.textContent = '';
    
    // Reset form and re-enable all inputs
    answerForm.reset();
    submitBtn.disabled = true;
    
    // Re-enable all radio buttons
    document.querySelectorAll('input[name="mvp-choice"]').forEach(input => {
        input.disabled = false;
    });
    
    // Show placeholder while loading
    photoPlaceholder.style.display = 'flex';
    mvpPhotoElement.style.display = 'none';
    
    // Get random MVP and generate options
    currentMvp = getRandomMvp();
    currentOptions = generateOptions(currentMvp);
    
    // Update option texts
    currentOptions.forEach((option, index) => {
        document.getElementById(`option-${index}`).textContent = option.name;
    });
    
    // Load MVP photo (using placeholder images for now)
    loadMvpPhoto(currentMvp);
}

// Load MVP photo with fallback
function loadMvpPhoto(mvp) {
    const img = new Image();
    
    img.onload = function() {
        mvpPhotoElement.src = this.src;
        mvpPhotoElement.style.display = 'block';
        photoPlaceholder.style.display = 'none';
    };
    
    img.onerror = function() {
        // Use a fallback generated avatar if local image fails to load
        mvpPhotoElement.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mvp.name)}&size=200&background=667eea&color=fff&font-size=0.6`;
        mvpPhotoElement.style.display = 'block';
        photoPlaceholder.style.display = 'none';
    };
    
    // Try to load the local photo, fallback to generated avatar if needed
    img.src = mvp.photo;
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const selectedValue = document.querySelector('input[name="mvp-choice"]:checked').value;
    const selectedOption = currentOptions[parseInt(selectedValue)];
    const isCorrect = selectedOption.name === currentMvp.name;
    
    totalQuestions++;
    
    if (isCorrect) {
        correctAnswers++;
        currentStreak++;
        showFeedback(true, `Correct! That's ${currentMvp.name}, ${currentMvp.title} at ${currentMvp.company}.`);
        
        // Check for win condition
        if (currentStreak >= mvps.length) {
            setTimeout(() => {
                showWinModal();
            }, 2000);
            return;
        }
    } else {
        currentStreak = 0;
        showFeedback(false, `Incorrect. That's ${currentMvp.name}, ${currentMvp.title} at ${currentMvp.company}. Your streak has been reset.`);
    }
    
    updateStats();
    
    // Load next question after delay
    setTimeout(() => {
        loadNextQuestion();
    }, 3000);
}

// Show feedback message
function showFeedback(isCorrect, message) {
    feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'} show`;
    feedbackElement.textContent = message;
    
    // Disable form
    submitBtn.disabled = true;
    document.querySelectorAll('input[name="mvp-choice"]').forEach(input => {
        input.disabled = true;
    });
}

// Show win modal
function showWinModal() {
    finalScoreElement.textContent = `${correctAnswers}/${totalQuestions} (${Math.round((correctAnswers/totalQuestions) * 100)}%)`;
    winModal.classList.add('show');
}

// Restart game
function restartGame() {
    winModal.classList.remove('show');
    
    // Re-enable form inputs
    document.querySelectorAll('input[name="mvp-choice"]').forEach(input => {
        input.disabled = false;
    });
    
    initGame();
}

// Event listeners
answerForm.addEventListener('submit', handleSubmit);

// Enable submit button when an option is selected
document.querySelectorAll('input[name="mvp-choice"]').forEach(input => {
    input.addEventListener('change', () => {
        submitBtn.disabled = false;
    });
});

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initGame); 