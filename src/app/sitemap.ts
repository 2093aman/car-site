import { MetadataRoute } from 'next';
import { getVehicles } from '@/lib/vehicle-service';

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
        '/privacy-policy',
        '/terms-of-service',
        '/view-auctions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog posts
    const blogPosts = [
        '/blog/japanese-car-imports-australia-complete-guide',
        '/blog/auction-vs-dealer-stock-why-direct-importing-saves-you-thousands',
        '/blog/the-compliance-headache-how-new-sevs-rules-affect-your-next-import',
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

    // Fetch dynamic vehicle pages safely
    let vehiclePages: MetadataRoute.Sitemap = [];
    try {
        const { vehicles } = await getVehicles({ limit: 100 });
        if (vehicles && Array.isArray(vehicles)) {
            vehiclePages = vehicles.map((vehicle: any) => ({
                url: `${baseUrl}/vehicles-for-import/${vehicle._id}`,
                lastModified: new Date(vehicle.updatedAt || vehicle.createdAt || Date.now()),
                changeFrequency: 'daily' as const,
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error('Error fetching vehicles for sitemap:', error);
    }

    return [...staticPages, ...blogPosts, ...vehiclePages];
}
