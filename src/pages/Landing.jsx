"use client"

import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ShoppingBag, User, UserCog, Home } from "lucide-react";
import { cn } from "../lib/utils";
import Logo from "../assets/logo.png"

// Navbar Component
function Navbar() {
  return (
    <header className="w-full border-b bg-[#fffdf7]">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 fill-black" />
          <span className="text-xl font-semibold">Jeevantu</span>
        </div>

        <nav className="hidden md:flex md:gap-6">
          <NavLink href="/" active>Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div>
          <Button className="bg-[#ffd966] text-black hover:bg-[#ffc933]">FAQ</Button>
        </div>
      </div>
    </header>
  );
}

function Hero(){
  return (
    <div className="h-[600px] w-full bg-black flex">
  {/* Left Side - Image Section */}
  <div className="w-1/2 flex flex-row bg-[#FCF3ED] h-full">
    <img src={Logo} alt=""/>
  </div>

  {/* Right Side - Styled Text */}
  <div className="w-1/2 flex flex-row h-full bg-[#FCF3ED]">
  <div className="text-center text-black font-light -ml-28">
    <h1 className="text-5xl md:text-7xl font-light mb-2 mt-36 " style={{ fontFamily: "'Neue Machina', sans-serif" }}>
      Welcome to our
    </h1>
    <h1 className="text-5xl md:text-7xl font-light">Jungle Adventure</h1>
    <p className="mt-2 pl-40 pr-40 pt-10">Efficiently manage and track your jungle safari shop’s inventory with our smart inventory management system, ensuring seamless stock control, reduced wastage, and a hassle-free shopping experience in the heart of the wild!</p>
    
  </div>
</div>

  </div>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}

// Landing Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFFDF1] to-white">

      {/* Navbar */}
      <Navbar />
      <Hero />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#264653] mb-6">
          Jungle Safari Souvenir Shop
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
          Explore our collection of handcrafted souvenirs and memorabilia from your unforgettable jungle safari adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Admin Login */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#2A9D8F] bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#2A9D8F] p-4 flex justify-center">
                <UserCog className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#264653] mb-3">Admin Portal</h2>
                <p className="text-gray-600 mb-6">
                  Manage inventory, sales, and reports with our comprehensive admin dashboard.
                </p>
                <Link href="/admin-login">
                  <Button className="w-full bg-[#2A9D8F] hover:bg-[#1E7268]">
                    Admin Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Cashier Login */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#E9C46A] bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#E9C46A] p-4 flex justify-center">
                <ShoppingBag className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#264653] mb-3">Cashier Portal</h2>
                <p className="text-gray-600 mb-6">
                  Generate bills and process sales transactions quickly and efficiently.
                </p>
                <Link href="/cashier-login">
                  <Button className="w-full bg-[#E9C46A] hover:bg-[#D9B45A]">
                    Cashier Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Online User Login */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#E76F51] bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#E76F51] p-4 flex justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#264653] mb-3">Online Shop</h2>
                <p className="text-gray-600 mb-6">
                  Browse our collection, add items to cart, and shop from the comfort of your home.
                </p>
                <Link href="/user-login">
                  <Button className="w-full bg-[#E76F51] hover:bg-[#D75F41]">
                    Customer Login
                  </Button>
                </Link>
                <div className="mt-2 text-center">
                  <Link href="/shop">
                    <Button variant="link" className="text-[#E76F51]">
                      Continue as Guest
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#150404] text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Jungle Safari Souvenir Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
