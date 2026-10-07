import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[generate-routes] Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');

const PUBLIC_ROUTES = [
  {
    path: 'about',
    title: 'About Us & Our Story | THE STRONGS',
    description: 'Discover the founding story, mission, and vision of THE STRONGS.',
  },
  {
    path: 'what-we-do',
    title: 'What We Do | THE STRONGS',
    description: 'THE STRONGS brings innovation, research and practical technology closer to people and industries.',
  },
  {
    path: 'projects',
    title: 'Initiatives & Projects | THE STRONGS',
    description: 'Explore the initiatives and technology projects developed by THE STRONGS.',
  },
  {
    path: 'projects/strongsconnect',
    title: 'StrongsConnect | THE STRONGS',
    description: 'A pioneering healthcare and emergency support platform providing digital access to health information and emergency services.',
  },
  {
    path: 'projects/strong-soil',
    title: 'STRONG SOIL | THE STRONGS',
    description: 'Low-cost soil moisture sensor system integrating accessible IoT and local agronomy data for smallholder farming communities.',
  },
  {
    path: 'news',
    title: 'News & Milestone Announcements | THE STRONGS',
    description: 'Stay informed about core developments, project milestones, and research publications from THE STRONGS.',
  },
  {
    path: 'events',
    title: 'Events & Briefings | THE STRONGS',
    description: 'Participate in our virtual briefings, research workshops, and innovation announcements.',
  },
  {
    path: 'team',
    title: 'Our Team & Leadership | THE STRONGS',
    description: 'Meet the founders, researchers, and core contributors behind THE STRONGS.',
  },
  {
    path: 'partners',
    title: 'Partners & Collaboration | THE STRONGS',
    description: 'Meaningful innovation grows through collaboration. Partner with THE STRONGS to create practical solutions for a better tomorrow.',
  },
  {
    path: 'contact',
    title: 'Contact Us | THE STRONGS',
    description: 'Get in touch with THE STRONGS team for partnership, research collaborations, or general inquiries.',
  },
];

console.log(`[generate-routes] Generating static entry HTML files for ${PUBLIC_ROUTES.length} public routes...`);

for (const route of PUBLIC_ROUTES) {
  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  const canonicalUrl = `https://strongsinitiative.com/${route.path}`;
  
  let routeHtml = templateHtml
    .replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);

  const destFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(destFile, routeHtml, 'utf8');
  console.log(`[generate-routes] ✓ Created ${route.path}/index.html`);
}

// Generate 404.html as universal SPA fallback on GitHub Pages
const notFoundFile = path.join(distDir, '404.html');
fs.writeFileSync(notFoundFile, templateHtml, 'utf8');
console.log(`[generate-routes] ✓ Created 404.html (GitHub Pages universal fallback)`);

console.log('[generate-routes] All public route HTML files successfully created!');
