export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor picks",
        hreg: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivale",
        hreg: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        hreg: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        hreg: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivale Icons",
        hreg: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        hreg: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
