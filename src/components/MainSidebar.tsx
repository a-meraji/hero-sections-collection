import { Home, Image, LayoutGrid, ShoppingBag, Layout, MessageSquare } from "lucide-react"
import { useLocation, Link } from "react-router-dom"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Heroes",
    url: "/heroes",
    icon: Layout,
  },
  {
    title: "Carousels",
    url: "/carousels",
    icon: Image,
  },
  {
    title: "Product Cards",
    url: "/product-cards",
    icon: LayoutGrid,
  },
  {
    title: "Product Pages",
    url: "/product-pages",
    icon: ShoppingBag,
  },
  {
    title: "Reviews",
    url: "/reviews",
    icon: MessageSquare,
  },
]

export function MainSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-xl font-bold">Components</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <Link key={item.url} to={item.url}>
              <SidebarMenuItem active={location.pathname === item.url}>
                <SidebarMenuButton>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}