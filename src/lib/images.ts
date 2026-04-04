interface ImageResult {
    url: string;
    alt: string;
    width: number;
    height: number;
    photographer?: string;
}

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = process.env.PEXELS_API_KEY;
const PIXABAY_KEY = process.env.PIXABAY_API_KEY;

export async function fetchUnsplashImages(
    query: string,
    count = 1,
): Promise<ImageResult[]> {
    if (!UNSPLASH_KEY) return [];

    try {
        const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
            {
                headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
                next: { revalidate: 86400 },
            },
        );
        if (!res.ok) return [];
        const data = await res.json();
        return (data.results ?? []).map(
            (p: Record<string, unknown> & { urls: Record<string, string>; user?: { name?: string } }) => ({
                url: (p.urls as Record<string, string>).regular,
                alt: (p.alt_description as string) || query,
                width: p.width as number,
                height: p.height as number,
                photographer: p.user?.name,
            }),
        );
    } catch {
        return [];
    }
}

export async function fetchPexelsImages(
    query: string,
    count = 1,
): Promise<ImageResult[]> {
    if (!PEXELS_KEY) return [];

    try {
        const res = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape&size=large`,
            {
                headers: { Authorization: PEXELS_KEY },
                next: { revalidate: 86400 },
            },
        );
        if (!res.ok) return [];
        const data = await res.json();
        return (data.photos ?? []).map(
            (p: Record<string, unknown> & { src: Record<string, string> }) => ({
                url: (p.src as Record<string, string>).large2x,
                alt: (p.alt as string) || query,
                width: p.width as number,
                height: p.height as number,
                photographer: p.photographer as string | undefined,
            }),
        );
    } catch {
        return [];
    }
}

export async function fetchPixabayImages(
    query: string,
    count = 1,
): Promise<ImageResult[]> {
    if (!PIXABAY_KEY) return [];

    try {
        const res = await fetch(
            `https://pixabay.com/api/?key=${encodeURIComponent(PIXABAY_KEY)}&q=${encodeURIComponent(query)}&per_page=${count}&image_type=photo&orientation=horizontal&min_width=1200`,
            { next: { revalidate: 86400 } },
        );
        if (!res.ok) return [];
        const data = await res.json();
        return (data.hits ?? []).map((p: Record<string, unknown>) => ({
            url: p.largeImageURL as string,
            alt: (p.tags as string) || query,
            width: p.imageWidth as number,
            height: p.imageHeight as number,
            photographer: p.user as string | undefined,
        }));
    } catch {
        return [];
    }
}
