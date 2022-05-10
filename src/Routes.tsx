import {
    BrowserRouter as Router,
    Routes, 
    Route,
  } from "react-router-dom";

import { Cart } from "./pages/Carrinho";
import { Catalog } from "./pages/Catalogo";

  
  export function AppRoutes() {
      return (
          <Router>
            <Routes>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/> }/>
            </Routes>
          </Router>
      )
    }