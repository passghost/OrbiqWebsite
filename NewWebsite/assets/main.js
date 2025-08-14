// Dynamically load features and screenshots
const features = [
  {
    title: '3D Rotating Sphere',
    description: 'Icons arranged on a beautiful 3D sphere that you can rotate with mouse drag.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  },
  {
    title: 'System Tray Integration',
    description: 'Runs quietly in the background, accessible via system tray.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  },
  {
    title: 'Global Hotkey',
    description: 'Press Ctrl+Alt+Space to instantly show/hide the sphere.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  },
  {
    title: 'Wheel Cycling',
    description: 'Use mouse wheel to cycle through different shortcut collections.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  },
  {
    title: 'Move Mode',
    description: 'Double-click center handle to reposition sphere anywhere on screen.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  },
  {
    title: 'Fully Configurable',
    description: 'Customize shortcuts, hotkeys, sphere size, and animation settings.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  },
  {
    title: 'Standalone',
    description: 'No .NET installation required - all dependencies included.',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/SphereIcon.png'
  }
];

const screenshots = [
  {
    title: 'Main 3D Sphere Interface',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/main3d.gif'
  },
  {
    title: 'Adding A Shortcut or Folder',
    img: 'https://passghost.github.io/OrbiqWebsite/Images/addingIcon.gif'
  }
];

window.addEventListener('DOMContentLoaded', () => {
  // Features
  const featuresList = document.querySelector('.features-list');
  features.forEach(f => {
    const div = document.createElement('div');
    div.className = 'feature';
    div.innerHTML = `<img src="${f.img}" alt="${f.title}"><h3>${f.title}</h3><p>${f.description}</p>`;
    featuresList.appendChild(div);
  });

  // Screenshots
  const screenshotsList = document.querySelector('.screenshots-list');
  screenshots.forEach(s => {
    const div = document.createElement('div');
    div.className = 'screenshot';
    div.innerHTML = `<img src="${s.img}" alt="${s.title}"><h4>${s.title}</h4>`;
    screenshotsList.appendChild(div);
  });
});
