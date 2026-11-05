import { render } from '@testing-library/react';
import App from './App';
import ShopContextProvider from './context/ShopContext';

test('renders the storefront and its shopping navigation', () => {
  const { container } = render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  );
  const headings = Array.from(container.getElementsByTagName('h1'));
  const menuLinks = Array.from(container.getElementsByClassName('nav-menu')[0].getElementsByTagName('a'));
  expect(headings.some((heading) => /Style that\s*feels like you\./.test(heading.textContent))).toBe(true);
  expect(menuLinks.some((link) => link.getAttribute('href') === '/womens')).toBe(true);
  expect(container.getElementsByClassName('nigeria-style-card')).toHaveLength(4);
  expect(container.getElementsByClassName('nigeria-style-credit')[0].textContent).toContain('CC BY-SA 4.0');
});
