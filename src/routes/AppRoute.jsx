import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Projects from "../pages/Projects";
import WhyChooseUs from "../pages/WhyChooseUs";
import Contact from "../pages/Contact";
import GetQuote from "../pages/GetQuote";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Blog from "../pages/Blog";

const AppRoute = [
  {path:"/", component:Home},
  {path:"/about", component:About},
  {path:"/products", component:Products},
  {path:"/projects", component:Projects},
  {path:"/blog", component:Blog},
  {path:"/why-aluzen", component:WhyChooseUs},
  {path:"/contact", component:Contact},
  {path:"/getQuote", component:GetQuote},
  {path:"/terms", component:TermsAndConditions},
  {path:"/privacy", component:PrivacyPolicy},
]
export default AppRoute;