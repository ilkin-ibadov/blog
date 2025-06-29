export default function sitemap() {
    return [
        {
            url: 'https://ilkinibadov.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://ilkinibadov.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://ilkinibadov.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://ilkinibadov.com/blog/add',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.4,
        },
        {
            url: 'https://ilkinibadov.com/admin',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.4,
        },
    ]
}