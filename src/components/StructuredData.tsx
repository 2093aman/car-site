import Script from 'next/script';

interface OrganizationSchemaProps {
    name?: string;
    url?: string;
}

export function OrganizationSchema({
    name = "UMZE Autohaus",
    url = "https://www.umzeautohaus.com.au"
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        "name": name,
        "url": url,
        "logo": `${url}/images/PNG.png`,
        "image": `${url}/images/PNG.png`,
        "description": "Melbourne's trusted Japanese car import specialists. Premium JDM vehicle imports with full compliance and transparent pricing.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Melbourne",
            "addressRegion": "VIC",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -37.8136,
            "longitude": 144.9631
        },
        "telephone": "+61420790798",
        "email": "info@umzeautohaus.com",
        "priceRange": "$$$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "sameAs": [
            "https://instagram.com/umzeautohaus",
            "https://www.tiktok.com/@umze.autohaus",
            "https://facebook.com/umzeautohaus"
        ]
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ProductSchemaProps {
    vehicle: {
        brand: string;
        model: string;
        year: number;
        price?: number;
        priceMin?: number;
        priceMax?: number;
        images?: Array<{ url: string }>;
        description?: string;
        mileage?: number;
        fuelType?: string;
        transmission?: string;
    };
    url: string;
}

export function VehicleProductSchema({ vehicle, url }: ProductSchemaProps) {
    const price = vehicle.price || vehicle.priceMin || 0;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${vehicle.year} ${vehicle.brand} ${vehicle.model}`,
        "description": vehicle.description || `Premium ${vehicle.year} ${vehicle.brand} ${vehicle.model} imported from Japan`,
        "image": vehicle.images?.[0]?.url || "",
        "brand": {
            "@type": "Brand",
            "name": vehicle.brand
        },
        "offers": {
            "@type": "Offer",
            "url": url,
            "priceCurrency": "AUD",
            "price": price,
            "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "UMZE Autohaus"
            }
        },
        "vehicleModelDate": vehicle.year,
        "mileageFromOdometer": {
            "@type": "QuantitativeValue",
            "value": vehicle.mileage || 0,
            "unitCode": "KMT"
        },
        "fuelType": vehicle.fuelType,
        "vehicleTransmission": vehicle.transmission
    };

    return (
        <Script
            id="vehicle-product-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbSchemaProps {
    items: Array<{
        name: string;
        url: string;
    }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ArticleSchemaProps {
    title: string;
    description: string;
    publishedDate: string;
    modifiedDate?: string;
    authorName?: string;
    imageUrl?: string;
    url: string;
}

export function ArticleSchema({
    title,
    description,
    publishedDate,
    modifiedDate,
    authorName = "UMZE Autohaus",
    imageUrl,
    url
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": imageUrl,
        "datePublished": publishedDate,
        "dateModified": modifiedDate || publishedDate,
        "author": {
            "@type": "Organization",
            "name": authorName
        },
        "publisher": {
            "@type": "Organization",
            "name": "UMZE Autohaus",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.umzeautohaus.com.au/images/PNG.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };

    return (
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
