export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "My Portfolio-Building Journey",
        date: "October 11, 2025",
        description: "I will be talking about my journey, utilizing CSS, HTML, and Javascript to design my first personal website.",
        image: "/websiteprojectpreview.PNG",
        imageAlt: "Preview image of website",
        slug: "my-portfolio-building-journey",
    },
    {
        title: "What Brought Me to the Field of Computer Science",
        date: "October 13, 2025",
        description: "I will discuss my computer science journey from the beginning, explaining what brought me here and why I continue to pursue this interest",
        image: "/personalgithubpreview.PNG",
        imageAlt: "Preview image of personal github repositories",
        slug: "what-brought-me-to-the-field-of-computer-science",
    },
];

export default blogs;

