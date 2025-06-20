const images = [
  // Forest
  { category: 'forest', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1B5v8z5MRG2amGpqXLKp54o9DZfixyPpDQ&s', label: 'Forest Path' },
  { category: 'forest', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoU5j4BYImIYsE988Lp7Y7O9K684w25og2g&s', label: 'Trees & Sunlight' },
  { category: 'forest', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ijP4sc1UBNXS62nDMFf5ajcozyhMet9Gng&s', label: 'Misty Forest' },
  { category: 'forest', url: 'https://media.istockphoto.com/id/670536592/photo/green-forest-in-spring.jpg?s=612x612&w=0&k=20&c=mh3x_eCI7evwjGHO3YuZYTK2l7kImPHI-g53R99sgFI=', label: 'Green Woods' },
  { category: 'forest', url: 'https://files.aptuitivcdn.com/voZlvmzLpe-884/images/trails/IMG_20200607_125940-128.1744996344.jpg', label: 'Forest Trail' },

  // Animals
  { category: 'animals', url: 'https://thumbs.dreamstime.com/b/happy-dog-face-golden-retriever-park-game-play-fetch-grass-field-backyard-labrador-animal-pet-companion-357035568.jpg', label: 'Happy Dog' },
  { category: 'animals', url: 'https://media.istockphoto.com/id/1041987488/photo/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-hands-scratching-her-ear.jpg?s=612x612&w=0&k=20&c=NKGf8nmXVdksmNS0Ay696cVPNSIfCJJ1yu_y9jFGBsM=', label: 'Cute Cat' },
  { category: 'animals', url: 'https://www.favoriteworldpress.com/wp-content/uploads/2022/01/Elephant-phalanx.jpg', label: 'Elephant Walk' },
  { category: 'animals', url: 'https://media.istockphoto.com/id/139887669/photo/big-male-african-lion.jpg?s=612x612&w=0&k=20&c=yf9um4dM5_vNu6KiCgXE9trGDnLH3WZGW0TsgweVUis=', label: 'Lion in Grass' },
  { category: 'animals', url: 'https://t4.ftcdn.net/jpg/07/96/64/59/360_F_796645990_DBndS32LWvC5LkNwAynQWxCGDUo1ilCh.jpg', label: 'Colorful Bird' },

  // Nature
  { category: 'nature', url: 'https://images.pexels.com/photos/2745258/pexels-photo-2745258.jpeg?cs=srgb&dl=pexels-nickkwanhk-2745258.jpg&fm=jpg', label: 'Lake & Mountains' },
  { category: 'nature', url: 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg', label: 'Sunset Field' },
  { category: 'nature', url: 'https://media.istockphoto.com/id/155161188/photo/rainbow-over-idyllic-hilly-landscape.jpg?s=612x612&w=0&k=20&c=64eojmcoTQiutK1_R_VrLbbMnmAYR9O5ccUCs8tcTi0=', label: 'Sky Over Hills' },
  { category: 'nature', url: 'https://www.shutterstock.com/image-photo/foliage-park-autumn-fall-leaves-260nw-2499419501.jpg', label: 'Autumn Leaves' },
  { category: 'nature', url: 'https://media.istockphoto.com/id/154996769/photo/cliffs-of-moher.jpg?s=612x612&w=0&k=20&c=53GOeEkG8GFBQyj8-P0qIgs4I1kZXaz0894tRXn7n-4=', label: 'Ocean Cliff' },

  // People
  { category: 'people', url: 'https://media.istockphoto.com/id/1443543154/photo/smiling-mature-woman-standing-in-a-park-outdoors-in-the-summertime.jpg?s=612x612&w=0&k=20&c=HOHi2rD00zuWrQswFIlOzxjJOiB0XKHfEPZXKBm51kE=', label: 'Woman Portrait' },
  { category: 'people', url: 'https://thumbs.dreamstime.com/b/free-happy-woman-beach-enjoying-nature-natural-beauty-girl-outdoor-freedom-enjoyment-concept-mixed-race-caucasian-asian-girl-40248621.jpg', label: 'Happy Woman' },
  { category: 'people', url: 'https://media.istockphoto.com/id/1312447551/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=AE2Pew-VIYVSmY4wOZcK6bPV2AKgbwSRUVGMnFhyS-Y=', label: 'Businesswoman' },
  { category: 'people', url: 'https://media.istockphoto.com/id/1195079320/photo/i-never-thought-id-say-it-but-i-think-autumns-my-favourite-season.jpg?s=612x612&w=0&k=20&c=vZ0qlImUEWNOkEadS9UpfFwJAf-kmgNDHefebKZ0cRg=', label: 'Man in Beanie' },
  { category: 'people', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7qb-RkVbkrY1w9yEaf7aJpUcDIP7wJSyVQ&s', label: 'Portrait Smile' },

  // Country
  { category: 'country', url: 'https://media.istockphoto.com/id/1400458273/photo/view-of-famous-hallstatt-mountain-village-in-the-austrian-alps-at-beautiful-light-in-summer.jpg?s=612x612&w=0&k=20&c=MJimq8I5Lh3ZjoSoSD68N91VOzCK4KrRHhpA2M4Lc9U=', label: 'Mountain Village' },
  { category: 'country', url: 'https://static.vecteezy.com/system/resources/thumbnails/048/445/320/small/serene-countryside-retreat-rolling-green-hills-grazing-sheep-and-picturesque-farmhouse-free-photo.jpg', label: 'Countryside Farm' },
  { category: 'country', url: 'https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_640.jpg', label: 'Castle Landscape' },
  { category: 'country', url: 'https://media.istockphoto.com/id/534314106/photo/asphalt-road-in-green-fields-on-blue-cloudy-sky-background.jpg?s=612x612&w=0&k=20&c=aFeQZsRzW3xvs0e4jpMLxbjXtIZ89uClHmcbNIPcWlE=', label: 'Open Road' },
  { category: 'country', url: 'https://media.istockphoto.com/id/1178802119/photo/english-rolling-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=EHpnwyjBATXIOWFWsNNlpV0Ogq_mt7a3n1AY_oLDhxQ=', label: 'Farmland Hills' },
];

const gallery = document.querySelector('.gallery');

function renderGallery(filter = 'all') {
  gallery.innerHTML = '';
  const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);
  filtered.forEach(({ url, label, category }) => {
    const div = document.createElement('div');
    div.className = `item ${category} transition-transform duration-300 transform hover:scale-105 hover:shadow-xl`;
    div.innerHTML = `
      <img src="${url}" alt="${label}" class="w-full rounded-lg shadow-md cursor-pointer transition-opacity duration-300 hover:opacity-80">
      <p class="mt-2 text-center text-sm text-gray-600">${label}</p>
    `;
    div.querySelector('img').addEventListener('click', () => openLightbox(url));
    gallery.appendChild(div);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn =>
  btn.addEventListener('click', () => renderGallery(btn.dataset.filter))
);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
}

// Initial load
renderGallery();
