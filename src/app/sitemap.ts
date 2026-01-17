import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.umzeautohaus.com.au';

    // Static pages
    const staticPages = [
        '',
        '/about-us',
        '/vehicles-for-import',
        '/import-process',
        '/calculator',
        '/blog',
        '/contact-us',
        '/finance-options',
        '/import-now',
        '/faqs',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog posts
    const blogPosts = [
        '/blog/japanese-auction-grading-system',
        '/blog/how-to-read-auction-sheet',
        '/blog/benefits-of-importing-from-japan',
        '/blog/common-mistakes-people-make-when-importing-cars-from-japan',
        '/blog/what-cars-can-be-imported-into-australia-rules-restrictions-common-confusion',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Fetch dynamic vehicle pages
    let vehiclePages: MetadataRoute.Sitemap = [];
    try {
        const res = await fetch(`${baseUrl}/api/vehicles?limit=100`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });
        if (res.ok) {
            const data = await res.json();
            vehiclePages = data.vehicles.map((vehicle: any) => ({
                url: `${baseUrl}/vehicles-for-import/${vehicle._id}`,
                lastModified: new Date(vehicle.updatedAt || vehicle.createdAt),
                changeFrequency: 'daily' as const,
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error('Error fetching vehicles for sitemap:', error);
    }

    return [...staticPages, ...blogPosts, ...vehiclePages];
}
