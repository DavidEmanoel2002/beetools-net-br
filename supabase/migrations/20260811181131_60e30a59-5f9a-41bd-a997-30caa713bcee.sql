DO $$ 
BEGIN
    IF EXISTS (SELECT 1 FROM public.products WHERE name = 'Lovable AI') THEN
        UPDATE public.products 
        SET image_url = 'https://twaufsbubrzdxbrxbopj.supabase.co/storage/v1/object/public/lovable-assets/lovable-logo.png' 
        WHERE name = 'Lovable AI';
    ELSE
        INSERT INTO public.products (name, description, price, category, image_url, features) 
        VALUES (
          'Lovable AI', 
          'A ferramenta de desenvolvimento de software mais rápida do mundo, alimentada por IA.', 
          99.00, 
          'Tools', 
          'https://twaufsbubrzdxbrxbopj.supabase.co/storage/v1/object/public/lovable-assets/lovable-logo.png', 
          ARRAY['Desenvolvimento rápido', 'Full-stack React', 'Deploy instantâneo']
        );
    END IF;
END $$;