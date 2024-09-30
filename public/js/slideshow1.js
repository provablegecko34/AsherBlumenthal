const imageUrls = [
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEIgqjZIaf7DwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGXOx_3WMcOEAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHRy1-e4Fg_WwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEWLR4GmOaJuwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHZ4Wf6xV0HSwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGVWi9wKwYVGgmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEIgqjZIaf7DwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHhDdkhTX2--wmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YFeaeqDbpcm9gmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEVapUYlhQ2kgmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGaKQPdk0F1dQmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGIsirBByCdLwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGXOx_3WMcOEAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEqedSkowVt4AmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGq_bHDS4FYuQmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGCn8GCSNDRJAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YE9pRlhRNnRNAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YFCUp6WaVHYeAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGiIzxPr20Q8AmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEHGwmhtKdFbwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YF2grDK4X11nwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YG2GPV1oggVUwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YE-Xni4k_rLjgmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGfTuArTe_fVAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGAzoudtNUVWAmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YG8Dd_MEOpZggmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGVF7x02yOY-QmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YF8iQIumPvYEwmtoKug6n4_ivYORwFHej4/item.JPG',
    'https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YG8QDzY1zGwEwmtoKug6n4_ivYORwFHej4/item.JPG'
];

let currentIndex = 0;

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle the images
shuffleArray(imageUrls);

function showImage(index) {
    const imgElement = document.getElementById('slideshow-image');
    if (imgElement) {
        imgElement.src = imageUrls[index];
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    showImage(currentIndex);
}

// Initialize slideshow
showImage(currentIndex);

// Optional: Automatic slide change every 5 seconds
setInterval(nextImage, 5000);

// Attach event listeners for next/prev buttons if they exist
document.getElementById('next-btn')?.addEventListener('click', nextImage);
document.getElementById('prev-btn')?.addEventListener('click', prevImage);