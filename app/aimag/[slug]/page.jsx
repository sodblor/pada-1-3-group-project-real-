"use client";

import React, { useState } from "react";
import { FileOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, List, Tag } from "antd";
import { notFound, useParams } from "next/navigation";
import { AirVent } from "lucide-react";
import { Utensils } from "lucide-react";
import { Hotel } from "lucide-react";
import { Bus, Car, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import {
  SLUG_TO_AIMAG_ID,
  AIMAG_ID_TO_NAME,
  getAimagBySlug,
  getCategoryBySlug,
} from "../../components/data/data";

import { AimagDestinationDetails, AimagHotelDetails } from "../../components/AimagDestinationDetails";

import Link from "next/link";


const { Header, Content, Sider } = Layout;

const HERO_FALLBACKS = {
  khuvsgul: "https://images.unsplash.com/photo-1582719478248-54e9f2af4ec8",
  arkhangai: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  govi: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
};

const ACCENT_FALLBACKS = {
  khuvsgul: "#0ea5e9",
  arkhangai: "#8b5cf6",
  govi: "#f59e0b",
};

const getHeroImage = (aimag, slug) => {
  const attractionWithImage = aimag?.attractions?.find(
    (a) => a && typeof a === "object" && a.image
  );
  return (
    aimag?.heroImage ||
    attractionWithImage?.image ||
    HERO_FALLBACKS[slug] ||
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  );
};

const getAccentColor = (slug) => ACCENT_FALLBACKS[slug] || "#2563eb";

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const AttractionsSlider = ({ attractions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2; // Show 2 items at a time on desktop

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= attractions.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, attractions.length - itemsPerView) : prev - itemsPerView
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {attractions.map((item, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <AimagDestinationDetails attraction={item} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      {attractions.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ background: '#526D82', color: '#DDE6ED' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ background: '#526D82', color: '#DDE6ED' }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {attractions.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(attractions.length / itemsPerView) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx * itemsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === idx ? 'w-8' : ''
              }`}
              style={{ 
                background: Math.floor(currentIndex / itemsPerView) === idx ? '#526D82' : '#DDE6ED' 
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CafeContent = ({ borderRadiusLG, name, items = [], heroImage }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden mb-12" style={{ background: '#DDE6ED' }}>
        <img
          src={heroImage || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"}
          className="w-full h-full object-cover"
          alt="Cafes"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27374D] via-[#27374D]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight" style={{ color: '#DDE6ED' }}>
            Cafes in {name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#9DB2BF' }}>
            Discover cozy coffee shops, tea houses, and local cafes serving authentic flavors.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 32,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          borderColor: '#9DB2BF',
          borderWidth: '2px',
          borderStyle: 'solid'
        }}
      >
        {items && items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((c, idx) => (
              <div
                key={idx}
                className="group relative h-full flex flex-col rounded-3xl bg-white overflow-hidden hover:-translate-y-2 transition-all duration-300"
                style={{ border: '3px solid #DDE6ED' }}
              >
                {c.image && (
                  <div className="relative w-full h-56 overflow-hidden" style={{ background: '#DDE6ED' }}>
                    <img 
                      src={c.image} 
                      alt={c.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e';
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#9DB2BF' }}>
                        <svg className="w-5 h-5" style={{ color: '#27374D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl mb-3 line-clamp-2 transition-colors group-hover:scale-105" style={{ color: '#27374D' }}>
                    {c.name}
                  </h3>
                  {c.address && (
                    <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: '#526D82' }}>
                      {c.address}
                    </p>
                  )}
                  {c.link && (
                    <Link
                      href={c.link}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                      style={{ color: '#526D82' }}
                      onMouseEnter={(e) => e.target.style.color = '#27374D'}
                      onMouseLeave={(e) => e.target.style.color = '#526D82'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit cafe
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl" style={{ background: '#DDE6ED' }}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: '#9DB2BF' }}>
              <Utensils className="w-10 h-10" style={{ color: '#27374D' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#27374D' }}>No cafes listed yet</h3>
            <p className="max-w-md mx-auto" style={{ color: '#526D82' }}>We're working on adding the best cafes in {name}. Check back soon!</p>
          </div>
        )}
      </div>
    </Content>
  );
};

const RestaurantsContent = ({ borderRadiusLG, name, items = [], heroImage }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden mb-12" style={{ background: '#DDE6ED' }}>
        <img
          src={heroImage || "https://images.unsplash.com/photo-1559339352-11d035aa65de"}
          className="w-full h-full object-cover"
          alt="Restaurants"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27374D] via-[#27374D]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight" style={{ color: '#DDE6ED' }}>
            Restaurants in {name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#9DB2BF' }}>
            Savor authentic Mongolian cuisine and international flavors at the best dining spots.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 32,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
          borderColor: '#9DB2BF',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        {items && items.length > 0 ? (
          <div className="space-y-4">
            {items.map((r, idx) => (
              <div
                key={idx}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ border: '2px solid #DDE6ED' }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative w-full md:w-64 h-48 md:h-48 flex-shrink-0 overflow-hidden" style={{ background: '#DDE6ED' }}>
                    <img
                      src={r.image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4';
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-5 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2" style={{ color: '#27374D' }}>
                        {r.name}
                      </h3>
                      
                      {r.address && (
                        <div className="flex items-center gap-1.5 mb-3">
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="text-sm line-clamp-1" style={{ color: '#526D82' }}>
                            {r.address}
                          </p>
                        </div>
                      )}

                      {r.description && (
                        <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: '#526D82' }}>
                          {r.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#DDE6ED' }}>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4" style={{ color: '#526D82' }} />
                        <span className="text-xs" style={{ color: '#526D82' }}>Restaurant</span>
                      </div>
                      {r.link && (
                        <Link
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                          style={{ background: '#526D82', color: '#FFFFFF' }}
                        >
                          Visit restaurant
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl" style={{ background: '#DDE6ED' }}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: '#9DB2BF' }}>
              <Utensils className="w-10 h-10" style={{ color: '#27374D' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#27374D' }}>No restaurants listed yet</h3>
            <p className="max-w-md mx-auto" style={{ color: '#526D82' }}>We're working on adding the best restaurants in {name}. Check back soon!</p>
          </div>
        )}
      </div>
    </Content>
  );
};

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("fun");
  const params = useParams();
  const slug = params?.slug;

  const aimagId = SLUG_TO_AIMAG_ID[slug];
  if (!aimagId) return notFound();

  const name = AIMAG_ID_TO_NAME[aimagId] || slug;
  const aimag = getAimagBySlug(slug);
  const heroImage = getHeroImage(aimag, slug);
  const accentColor = getAccentColor(slug);
  const restaurants = getCategoryBySlug(slug, "restaurants");
  const cafes = getCategoryBySlug(slug, "cafes");
  const transports = getCategoryBySlug(slug, "transportOptions");

  const menuItems = [
    getItem("Fun things to do ", "fun", <AirVent className="w-2.5" />),
    getItem("Accommodation", "accom-1", <Hotel className="w-2.5" />),
    getItem("Food", "food", <Utensils className="w-2.5" />, [
      getItem("Restaurant", "food-1"),
      getItem("Cafe", "food-2"),
    ]),
    getItem("Transport", "transport", <FileOutlined className="w-2.5" />, [
      getItem("Bus", "transport-bus", <Bus className="w-2.5" />),
      getItem("Car", "transport-car", <Car className="w-2.5" />),
      getItem("Air", "transport-air", <Plane className="w-2.5" />),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const filterTransport = (items = [], kind) => {
    const q = (s) => (s || "").toLowerCase();
    switch (kind) {
      case "bus":
        return items.filter((i) => q(i.mode).includes("bus"));
      case "car":
        return items.filter((i) => q(i.mode).includes("car") || q(i.mode).includes("self"));
      case "air":
        return items.filter((i) => q(i.mode).includes("air") || q(i.mode).includes("flight"));
      default:
        return items;
    }
  };

  const filterCafes = (items = []) => {
    const q = (s) => (s || "").toLowerCase();
    return items.filter(
      (i) => q(i.name).includes("cafe") || q(i.name).includes("coffee") || q(i.name).includes("tea")
    );
  };

  const render = () => {
    switch (selectedTab) {
      case "fun":
        return (
          <FunContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            aimag={aimag}
            heroImage={heroImage}
            accentColor={accentColor}
            restaurantCount={restaurants?.length || 0}
            cafeCount={cafes?.length || 0}
            transportCount={transports?.length || 0}
          />
        );
      case "accom-1":
        return (
          <AccommodationContent
            borderRadiusLG={borderRadiusLG}
            aimag={aimag}
            name={name}
            heroImage={heroImage}
          />
        );
      case "food-1":
        return (
          <RestaurantsContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={restaurants}
            heroImage={heroImage}
          />
        );
      case "food-2":
        return (
          <CafeContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={cafes}
            heroImage={heroImage}
          />
        );
      case "transport-bus":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(transports, "bus")}
            heroImage={heroImage}
          />
        );
      case "transport-car":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(transports, "car")}
            heroImage={heroImage}
          />
        );
      case "transport-air":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(transports, "air")}
            heroImage={heroImage}
          />
        );
      default:
        return (
          <FunContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            aimag={aimag}
            heroImage={heroImage}
            accentColor={accentColor}
            restaurantCount={restaurants?.length || 0}
            cafeCount={cafes?.length || 0}
            transportCount={transports?.length || 0}
          />
        );
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 10% 20%, rgba(14,165,233,0.08), transparent 25%), radial-gradient(circle at 90% 10%, rgba(244,114,182,0.08), transparent 25%), #f7f7f9",
        paddingTop: "70px",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={240}
        style={{
          marginTop: 0,
          background: "rgba(255,255,255,0.9)",
          boxShadow: "2px 0 12px rgba(0,0,0,0.07)",
          borderRight: "1px solid #E5E7EB",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="h-16 flex items-center justify-center text-xl font-semibold text-gray-800">
          {collapsed ? "" : name}
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["fun"]}
          mode="inline"
          items={menuItems}
          style={{ marginTop: "20px", border: "none" }}
          onClick={({ key }) => setSelectedTab(key)}
        />
      </Sider>

      <Layout>{render()}</Layout>
    </Layout>
  );
}

const FunContent = ({
  borderRadiusLG,
  name,
  aimag,
  heroImage,
  accentColor,
  restaurantCount = 0,
  cafeCount = 0,
  transportCount = 0,
}) => {
  const stats = [
    { label: "Founded", value: aimag?.established || "—" },
    { label: "Center", value: aimag?.center || "—" },
    {
      label: "From Ulaanbaatar",
      value: aimag?.centerDistanceFromUlaanbaatar_km
        ? `${aimag.centerDistanceFromUlaanbaatar_km} km`
        : "—",
    },
    { label: "Restaurants", value: restaurantCount },
    { label: "Cafés", value: cafeCount },
    { label: "Transport options", value: transportCount },
  ];

  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-96 md:h-[520px] rounded-3xl overflow-hidden mb-12 md:mb-16" style={{ background: '#DDE6ED' }}>
        <img
          src={heroImage || "https://images.unsplash.com/photo-1597434429739-2574d7e06807"}
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27374D] via-[#27374D]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight" style={{ color: '#DDE6ED' }}>
            Explore {name}
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl" style={{ color: '#9DB2BF' }}>
            Vast horizons, nomadic culture, and timeless landscapes await.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 32,
          minHeight: 360,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
          borderColor: '#9DB2BF',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {stats.map((item, idx) => (
            <div
              key={item.label}
              className="group rounded-2xl px-4 py-4 hover:-translate-y-1 transition-all duration-300"
              style={{ border: '2px solid #DDE6ED', background: '#DDE6ED' }}
            >
              <p className="text-[10px] uppercase tracking-wide mb-2" style={{ color: '#526D82' }}>{item.label}</p>
              <p className="text-lg md:text-xl font-bold transition-colors" style={{ color: '#27374D' }}>{item.value}</p>
            </div>
          ))}
        </div>

        {aimag && (
          <div className="mb-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-5 items-start">
              <div className="md:col-span-3 space-y-2">
                <h2 className="text-lg md:text-xl font-semibold" style={{ color: '#27374D' }}>
                  About {name}
                </h2>
                {aimag.shortDescription && (
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: '#526D82' }}>
                    {aimag.shortDescription}
                  </p>
                )}
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-end">
                <div className="w-full max-w-xs rounded-2xl px-4 py-3 text-xs md:text-sm space-y-1" style={{ border: '1px solid #DDE6ED', background: '#DDE6ED' }}>
                  <p className="font-semibold mb-1" style={{ color: '#27374D' }}>Key info</p>
                  {aimag.established && (
                    <p style={{ color: '#526D82' }}>
                      <span className="font-medium">Established:</span> {aimag.established}
                    </p>
                  )}
                  {aimag.center && (
                    <p style={{ color: '#526D82' }}>
                      <span className="font-medium">Center:</span> {aimag.center}
                    </p>
                  )}
                  {typeof aimag.centerDistanceFromUlaanbaatar_km === "number" && (
                    <p style={{ color: '#526D82' }}>
                      <span className="font-medium">Distance from Ulaanbaatar:</span>{" "}
                      {aimag.centerDistanceFromUlaanbaatar_km} km
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="h-px" style={{ background: '#DDE6ED' }} />
          </div>
        )}

        {aimag?.attractions?.length > 0 && (
          <div className="mb-10">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#27374D' }}>Main Attractions</h2>
              <div className="w-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg, #526D82, #9DB2BF)' }}></div>
            </div>
            <AttractionsSlider attractions={aimag.attractions} />
          </div>
        )}

        {aimag?.tips?.length > 0 && (
          <div className="mt-10 pt-8" style={{ borderTop: '1px solid #DDE6ED' }}>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#27374D' }}>Travel Tips</h2>
              <div className="w-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg, #526D82, #9DB2BF)' }}></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {aimag.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: '#DDE6ED', border: '2px solid #9DB2BF' }}>
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#27374D' }}>{tip.note || tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Content>
  );
}

const TransportContent = ({ borderRadiusLG, name, items = [], heroImage }) => {
  const getTransportIcon = (mode) => {
    if (mode?.toLowerCase().includes('bus')) return <Bus className="w-6 h-6" />;
    if (mode?.toLowerCase().includes('car')) return <Car className="w-6 h-6" />;
    if (mode?.toLowerCase().includes('air') || mode?.toLowerCase().includes('flight')) return <Plane className="w-6 h-6" />;
    return <Bus className="w-6 h-6" />;
  };

  const getTransportColor = (mode) => {
    return 'from-[#526D82] to-[#27374D]';
  };

  const renderDetails = (opt) => {
    if (!opt.details) return null;
    
    const { 
      route, 
      departure, 
      schedule, 
      duration, 
      price, 
      contacts, 
      notes, 
      airlines, 
      vehicleTypes, 
      pricing, 
      rentalCompanies,
      flightDuration,
      priceRange,
      drivingTime,
      recommendation
    } = opt.details;

    return (
      <div className="mt-4 space-y-4">
        {recommendation && (
          <div className="p-3 rounded-lg" style={{ background: '#DDE6ED', border: '1px solid #9DB2BF' }}>
            <p className="text-sm" style={{ color: '#27374D' }}><span className="font-semibold">💡 Recommendation:</span> {recommendation}</p>
          </div>
        )}
        
        {route && (
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-sm font-medium" style={{ color: '#27374D' }}>{route}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {departure && (
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="text-xs" style={{ color: '#526D82' }}>Departure</span>
                <p className="text-sm font-medium" style={{ color: '#27374D' }}>{departure}</p>
              </div>
            </div>
          )}
          
          {(duration || flightDuration || drivingTime) && (
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-xs" style={{ color: '#526D82' }}>Duration</span>
                <p className="text-sm font-medium" style={{ color: '#27374D' }}>{duration || flightDuration || drivingTime}</p>
              </div>
            </div>
          )}
          
          {schedule && (
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="text-xs" style={{ color: '#526D82' }}>Schedule</span>
                <p className="text-sm font-medium" style={{ color: '#27374D' }}>{schedule}</p>
              </div>
            </div>
          )}
          
          {(price || priceRange) && (
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-xs" style={{ color: '#526D82' }}>Price</span>
                <p className="text-sm font-medium" style={{ color: '#27374D' }}>{price || priceRange}</p>
              </div>
            </div>
          )}
        </div>
        
        {airlines && airlines.length > 0 && (
          <div className="mt-3 p-3 rounded-lg" style={{ background: '#DDE6ED' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#27374D' }}>Airlines</p>
            <div className="space-y-2">
              {airlines.map((airline, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <span className="font-medium" style={{ color: '#27374D' }}>{airline.name}</span>
                  <a href={`tel:${airline.phone}`} className="hover:underline" style={{ color: '#526D82' }} onMouseEnter={(e) => e.target.style.color = '#27374D'} onMouseLeave={(e) => e.target.style.color = '#526D82'}>{airline.phone}</a>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {vehicleTypes && (
          <div className="mt-3">
            <p className="text-sm font-semibold mb-2" style={{ color: '#27374D' }}>Vehicle Types</p>
            <div className="flex flex-wrap gap-2">
              {vehicleTypes.map((type, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: '#DDE6ED', color: '#27374D' }}>
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {pricing && (
          <div className="mt-3">
            <p className="text-sm font-semibold mb-2" style={{ color: '#27374D' }}>Pricing</p>
            <ul className="space-y-1">
              {pricing.map((price, idx) => (
                <li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#526D82' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#526D82' }}></span>
                  {price}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {rentalCompanies && (
          <div className="mt-3 p-3 rounded-lg" style={{ background: '#DDE6ED' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#27374D' }}>Rental Companies</p>
            <div className="space-y-2">
              {rentalCompanies.map((company, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <span className="font-medium" style={{ color: '#27374D' }}>{company.name}</span>
                  <a href={`tel:${company.phone}`} className="hover:underline" style={{ color: '#526D82' }} onMouseEnter={(e) => e.target.style.color = '#27374D'} onMouseLeave={(e) => e.target.style.color = '#526D82'}>{company.phone}</a>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {contacts && (
          <div className="mt-3 p-3 rounded-lg" style={{ background: '#DDE6ED', border: '1px solid #9DB2BF' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#27374D' }}>Contact Information</p>
            <ul className="space-y-1">
              {contacts.map((contact, idx) => (
                <li key={idx} className="text-sm" style={{ color: '#526D82' }}>{contact}</li>
              ))}
            </ul>
          </div>
        )}
        
        {notes && (
          <div className="mt-3 p-3 rounded-lg" style={{ background: '#DDE6ED', border: '1px solid #9DB2BF' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#27374D' }}>Important Notes</p>
            <ul className="space-y-1">
              {notes.map((note, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2" style={{ color: '#526D82' }}>
                  <span className="mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden mb-12" style={{ background: '#DDE6ED' }}>
        <img
          src={heroImage || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"}
          className="w-full h-full object-cover"
          alt="Transport"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27374D] via-[#27374D]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight" style={{ color: '#DDE6ED' }}>
            Transport in {name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#9DB2BF' }}>
            {items.length > 0 ? `${items.length} transportation options available` : 'Getting around and traveling to/from this region'}
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 32,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
          borderColor: '#9DB2BF',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        {items && items.length > 0 ? (
          <div className="space-y-6">
            {items.map((opt, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl bg-white p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                style={{ border: '3px solid #DDE6ED' }}
              >
                <div className="absolute top-0 left-0 w-3 h-full" style={{ background: '#526D82' }}></div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: '#526D82' }}>
                    <div style={{ color: '#DDE6ED' }}>
                      {getTransportIcon(opt.mode)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform" style={{ color: '#27374D' }}>
                        {opt.mode}
                      </h3>
                    </div>
                    
                    {opt.note && (
                      <p className="mb-5 text-base leading-relaxed" style={{ color: '#526D82' }}>
                        {opt.note}
                      </p>
                    )}
                    
                    {renderDetails(opt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl" style={{ background: '#DDE6ED' }}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: '#9DB2BF' }}>
              <Bus className="w-10 h-10" style={{ color: '#27374D' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#27374D' }}>No transport information yet</h3>
            <p className="max-w-md mx-auto" style={{ color: '#526D82' }}>
              We're working on adding transportation options for {name}. Check back soon!
            </p>
          </div>
        )}
      </div>
    </Content>
  );
};

const AccommodationContent = ({ borderRadiusLG, aimag, name, heroImage }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden mb-12" style={{ background: '#DDE6ED' }}>
        <img
          src={heroImage || "https://images.unsplash.com/photo-1597434429739-2574d7e06807"}
          className="w-full h-full object-cover"
          alt="Luxury hotel in Mongolia"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27374D] via-[#27374D]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight" style={{ color: '#DDE6ED' }}>
            Hotels in {name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#9DB2BF' }}>
            Discover comfortable stays and exceptional hospitality across {name} province.
          </p>
        </div>
      </section>
      
      <div
        style={{
          padding: 32,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
          borderColor: '#9DB2BF',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#27374D' }}>Featured Stays</h2>
          <div className="w-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg, #526D82, #9DB2BF)' }}></div>
        </div>

        {aimag?.hotels?.length > 0 ? (
          <div className="space-y-4">
            {aimag.hotels.map((hotel) => (
              <div key={hotel.name}>
                <AimagHotelDetails hotel={hotel} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl" style={{ background: '#DDE6ED' }}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: '#9DB2BF' }}>
              <Hotel className="w-10 h-10" style={{ color: '#27374D' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#27374D' }}>No hotels listed yet</h3>
            <p className="max-w-md mx-auto" style={{ color: '#526D82' }}>We're working on adding the best accommodations in {name}. Check back soon!</p>
          </div>
        )}
      </div>
    </Content>
  );
};
