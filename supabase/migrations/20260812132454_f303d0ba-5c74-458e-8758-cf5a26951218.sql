INSERT INTO public.products (name, description, price, image_url, category, features)
VALUES (
  'YouTube Premium',
  'Assista aos vídeos que você adora sem anúncios. Inclui YouTube Music Premium e reprodução em segundo plano.',
  24.90,
  'https://www.gstatic.com/youtube/img/branding/youtubelogo/28w/youtube_logo_dark_rgb.png',
  'IPTV',
  ARRAY['Sem anúncios', 'YouTube Music Premium', 'Download de vídeos', 'Reprodução em segundo plano']
);

-- Grant privileges
GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;