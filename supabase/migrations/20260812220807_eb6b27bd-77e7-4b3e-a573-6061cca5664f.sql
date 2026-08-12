-- Adicionar novos perfis de Freepik
INSERT INTO public.products (name, description, price, image_url, category, features)
VALUES 
('Freepik Premium (2 Meses)', 'Recurso premium apenas para downloads.', 59.90, '/__l5e/assets-v1/949e4a25-8d37-45b9-b7eb-33f42d89cfde/freepik.avif', 'Tools', ARRAY['Vetores Ilimitados', 'Fotos Stock', 'Templates PSD', 'Acesso por 2 Meses']),
('Freepik Premium (3 Meses)', 'Recurso premium apenas para downloads.', 79.90, '/__l5e/assets-v1/949e4a25-8d37-45b9-b7eb-33f42d89cfde/freepik.avif', 'Tools', ARRAY['Vetores Ilimitados', 'Fotos Stock', 'Templates PSD', 'Acesso por 3 Meses']);

-- Adicionar novos perfis de Envato
INSERT INTO public.products (name, description, price, image_url, category, features)
VALUES 
('Envato Elements (2 Meses)', 'Recurso premium apenas para downloads.', 59.90, '/__l5e/assets-v1/1455815a-1a9b-459a-a403-85634dd2be50/envato-logo-v2.jpg', 'Tools', ARRAY['Músicas e Vídeos', 'Stock Web Templates', 'Downloads Ilimitados', 'Acesso por 2 Meses']),
('Envato Elements (3 Meses)', 'Recurso premium apenas para downloads.', 79.90, '/__l5e/assets-v1/1455815a-1a9b-459a-a403-85634dd2be50/envato-logo-v2.jpg', 'Tools', ARRAY['Músicas e Vídeos', 'Stock Web Templates', 'Downloads Ilimitados', 'Acesso por 3 Meses']);
