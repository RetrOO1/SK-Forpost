import AllNews from "../AllNews";
import NewsItem from "../NewsItem";

export const Pages = [
    {path: "/news", exact: true, component: AllNews},
    {path: "/new/:id", exact: true, component: NewsItem}
]