import AllNews from "../AllNews";
import NewsItem from "../NewsItem";
import AboutPage from "../../pages/AboutPage";

export const Pages = [
    {path: "/news", exact: true, component: AllNews},
    {path: "/new/:id", exact: true, component: NewsItem},
    {path: "/about", exact: true, component: AboutPage}
]