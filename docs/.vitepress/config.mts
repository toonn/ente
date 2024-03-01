import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Ente's Docs",
    description: "Help guide for apps from Ente",
    head: [
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        editLink: {
            pattern: "https://github.com/ente-io/docs/edit/main/docs/:path",
        },
        nav: [
            { text: "Photos", link: "/photos/index" },
            { text: "Authenticator", link: "/authenticator/index" },
        ],
        search: {
            provider: "local",
            options: {
                detailedView: true,
            },
        },
        sidebar: {
            "/": sidebarPhotos(),
            "/photos/": sidebarPhotos(),
            "/common/": sidebarPhotos(),
            "/authenticator/": sidebarAuth(),
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/ente-io/docs/" },
        ],
    },
});

function sidebarPhotos() {
    return [
        {
            text: "Welcome",
            items: [
                {
                    text: "About",
                    collapsed: true,
                    link: "/about/company",
                    items: [
                        { text: "Company", link: "/about/company" },
                        { text: "Products", link: "/about/products" },
                        { text: "Plans", link: "/about/plans" },
                        { text: "Support", link: "/about/support" },
                        { text: "Community", link: "/about/community" },
                        { text: "Open source", link: "/about/open-source" },
                        { text: "Contribute", link: "/about/contribute" },
                    ],
                },
                {
                    text: "Features",
                    collapsed: true,
                    items: [
                        {
                            text: "Family Plan",
                            link: "/photos/features/family-plan",
                        },
                        { text: "Albums", link: "/photos/features/albums" },
                        { text: "Archive", link: "/photos/features/archive" },
                        { text: "Hidden", link: "/photos/features/hidden" },
                        { text: "Map", link: "/photos/features/map" },
                        {
                            text: "Location Tags",
                            link: "/photos/features/location",
                        },
                        {
                            text: "Collect Photos",
                            link: "/photos/features/collect",
                        },
                        {
                            text: "Public links",
                            link: "/photos/features/public-links",
                        },
                        {
                            text: "Quick link",
                            link: "/photos/features/quick-link",
                        },
                        {
                            text: "Watch folder",
                            link: "/photos/features/watch-folder",
                        },
                        { text: "Trash", link: "/photos/features/trash" },
                        {
                            text: "Uncategorized",
                            link: "/photos/features/uncategorized",
                        },
                        {
                            text: "Referral Plan",
                            link: "/photos/features/referral",
                        },
                        {
                            text: "Live & Motion Photos",
                            link: "/photos/features/live-photos",
                        },
                        { text: "Cast", link: "/photos/features/cast" },
                    ],
                },
                {
                    text: "Troubleshoot",
                    collapsed: true,
                    link: "/photos/troubleshooting/files-not-uploading",
                    items: [
                        {
                            text: "Files not uploading",
                            link: "/photos/troubleshooting/files-not-uploading",
                        },
                        {
                            text: "Failed to play video",
                            link: "/photos/troubleshooting/video-not-playing",
                        },
                        {
                            text: "Report bug",
                            link: "/photos/troubleshooting/report-bug",
                        },
                    ],
                },
            ],
        },
    ];
}

function sidebarAuth() {
    return [
        {
            text: "About",
            collapsed: true,
            link: "/about/company",
            items: [
                { text: "Company", link: "/about/company" },
                { text: "Products", link: "/about/products" },
                { text: "Community", link: "/about/community" },
                { text: "Open source", link: "/about/open-source" },
                { text: "Contribute", link: "/about/contribute" },
            ],
        },
        {
            text: "FAQ",
            link: "/authenticator/faq/faq",
        },
        {
            text: "Contribute",
            link: "/authenticator/support/contribute",
        },
    ];
}
