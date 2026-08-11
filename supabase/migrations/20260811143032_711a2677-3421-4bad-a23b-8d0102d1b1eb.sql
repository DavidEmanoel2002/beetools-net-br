DELETE FROM public.products;

INSERT INTO public.products (name, description, price, image_url, category, features)
VALUES 
('CapCut Pro', 'Editor de vídeo profissional com recursos avançados de IA.', 29.90, 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2670', 'Tools', ARRAY['Efeitos IA', 'Sem Marca dágua', '4K Export']),
('Gemini Advanced', 'IA generativa de última geração para produtividade.', 49.90, 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2670', 'Tools', ARRAY['Modelos Premium', 'Análise de Dados', 'Contexto Longo']),
('Freepik Premium', 'Milhões de recursos gráficos de alta qualidade.', 39.90, 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2670', 'Tools', ARRAY['Vetores Ilimitados', 'Fotos Stock', 'Templates PSD']),
('Envato Elements', 'O marketplace definitivo para criativos.', 59.90, 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2670', 'Tools', ARRAY['Músicas', 'Vídeos Stock', 'Web Templates']),
('Canva Pro', 'Design gráfico simplificado para todos.', 34.90, 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2671', 'Tools', ARRAY['Kit de Marca', 'Removedor de Fundo', 'Templates Pro']),
('Figma Professional', 'A ferramenta líder para design de interfaces.', 69.90, 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2574', 'Tools', ARRAY['Prototipagem Avançada', 'Dev Mode', 'Bibliotecas Compartilhadas']),
('Pluffy IPTV Premium', 'Milhares de canais, filmes e séries em HD/4K.', 25.00, 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2557', 'IPTV', ARRAY['4K/Full HD', 'Sem Travamentos', 'Suporte 24/7']);