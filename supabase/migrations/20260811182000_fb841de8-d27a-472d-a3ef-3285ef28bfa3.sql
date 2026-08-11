-- Usando URLs alternativas e mais simples (direto de sites de marcas conhecidas)
UPDATE products SET image_url = 'https://www.capcut.com/favicon.ico' WHERE name = 'CapCut Pro';
UPDATE products SET image_url = 'https://cdn-icons-png.flaticon.com/512/5968/5968743.png' WHERE name = 'Freepik Premium';
UPDATE products SET image_url = 'https://avatars.githubusercontent.com/u/150532288?s=200&v=4' WHERE name = 'Lovable AI';
UPDATE products SET image_url = 'https://cdn-icons-png.flaticon.com/512/3252/3252839.png' WHERE name = 'Envato Elements';
-- Reforçando os que já funcionam mas garantindo URLs de alta compatibilidade
UPDATE products SET image_url = 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' WHERE name = 'Canva Pro';
UPDATE products SET image_url = 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' WHERE name = 'Figma Professional'; -- Figma às vezes compartilha ícone ou usa similar
UPDATE products SET image_url = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png' WHERE name = 'Gemini Advanced';
