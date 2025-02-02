import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainSidebar } from "@/components/MainSidebar"
import { Index } from "@/pages/Index"
import { Carousels } from "@/pages/Carousels"
import { ProductCards } from "@/pages/ProductCards"
import ProductPages from "@/pages/ProductPages"
import { NotFound } from "@/pages/NotFound"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <MainSidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/carousels" element={<Carousels />} />
            <Route path="/product-cards" element={<ProductCards />} />
            <Route path="/product-pages" element={<ProductPages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App