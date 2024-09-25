export const NavBarIT = [
    {
        name: "Home",
        href: "/",
        dropdown: false,
    },
    {
        name: "Chi siamo",
        href: "",
        dropdown: true,
        multiplecolumns: false,
        subcat: [
            { name: "La scuola", href: "/p/about/#school" },
            { name: "Il Team", href: "/p/about/#team" },
        ]
    },
    {
        name: "Corsi",
        href: "",
        dropdown: true,
        multiplecolumns: true,
        columns: [
            {
                name: "Corsi Standard",
                subcat: [
                    { name: "Corso mensile", href: "/p/courses/#one" },
                    { name: "Corso trimestrale", href: "/p/courses/#three" },
                    { name: "Corso semestrale", href: "/p/courses/#six" },
                    { name: "Corso annuale", href: "/p/courses/#nine" }
                ]
            },
            {
                name: "Masterclass",
                subcat: [
                    { name: "Attivi", href: "/p/master/#active" },
                    { name: "Passati", href: "/p/master/#past" }
                ]
             }
        ]
    },
    {
        name: "Galleria",
        href: "/p/gallery",
        dropdown: false,
    },
    {
        name: "Contatti",
        href: "/p/contacts",
        dropdown: false,
    }
]

export const NavBarEN = [
    {
        name: "Home",
        href: "/",
        dropdown: false,
    },
    {
        name: "About Us",
        href: "",
        dropdown: true,
        multiplecolumns: false,
        subcat: [
            { name: "The school", href: "/p/about/#school" },
            { name: "Our Team", href: "/p/about/#team" },
        ]
    },
    {
        name: "Courses",
        href: "",
        dropdown: true,
        multiplecolumns: true,
        columns: [
            {
                name: "Standard Courses",
                subcat: [
                    { name: "One month course", href: "/p/courses/#one" },
                    { name: "Three months course", href: "/p/courses/#three" },
                    { name: "Six months course", href: "/p/courses/#six" },
                    { name: "Nine months course", href: "/p/courses/#nine" }
                ]
            },
            {
                name: "Masterclasses",
                subcat: [
                    { name: "Active", href: "/p/master/#active" },
                    { name: "Past classes", href: "/p/master/#past" }
                ]
             }
        ]
    },
    {
        name: "Gallery",
        href: "/p/gallery",
        dropdown: false,
    },
    {
        name: "Contacts",
        href: "/p/contacts",
        dropdown: false,
    }
]
