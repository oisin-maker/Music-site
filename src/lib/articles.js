// Loads our own articles from src/content/news/*.md
const modules = import.meta.glob('../content/news/*.md', { eager: true });

export const sections = [
  { id: 'news', label: 'News' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'interviews', label: 'Interviews' },
  { id: 'thought', label: 'Thought' },
];

export function getArticles() {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/').pop().replace(/\.md$/, '');
      return { slug, ...mod.frontmatter, Content: mod.Content, headings: mod.getHeadings ? mod.getHeadings() : [] };
    })
    .filter((a) => !a.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
