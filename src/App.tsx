import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainSidebar } from "@/components/MainSidebar"
import Index from "@/pages/Index"
import Carousels from "@/pages/Carousels"
import ProductCards from "@/pages/ProductCards"
import ProductPages from "@/pages/ProductPages"
import Reviews from "@/pages/Reviews"
import NotFound from "@/pages/NotFound"
import { SidebarProvider } from "./components/ui/sidebar"

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div className="flex">
          <MainSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/carousels" element={<Carousels />} />
              <Route path="/product-cards" element={<ProductCards />} />
              <Route path="/product-pages" element={<ProductPages />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </SidebarProvider>
  )
}

export default App