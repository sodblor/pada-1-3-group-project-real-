"use client";

import { FileOutlined } from "@ant-design/icons";
import { Layout, List, Menu, Tag, theme } from "antd";
import { AirVent, Bus, Car, ExternalLink, Heart, Hotel, MapPin, Plane, Utensils } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import { AIMAG_ID_TO_NAME, SLUG_TO_AIMAG_ID } from "../../components/AimagData";
import { getAimagBySlug, getCategoryBySlug } from "../../components/data/data";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const isMapsLink = (url = "") =>
  /google\.com\/maps|maps\.apple\.com|openstreetmap\.org/.test(url);

const RESTAURANT_IMAGES = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1521017432531-fbd92d0d8120?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1551782450-17144c44eefd?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60",
];

const CAFE_IMAGES = [
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=60",
];

const useFaves = (key) => {
  const [faves, setFaves] = useState([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setFaves(JSON.parse(raw));
    } catch {}
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(faves));
    } catch {}
  }, [key, faves]);

  const toggle = (id) => {
    setFaves((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return { faves, toggle };
};

const CardGrid = ({ title, items = [], imgSet = [], badge }) => {
  const { faves, toggle } = useFaves(`favorites:${title}`);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {items.map((it, idx) => {
        const id = it.name;
        const saved = faves.includes(id);
        const fallback = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=60";
        const imgSrc = it.image || (imgSet.length > 0 ? imgSet[idx % imgSet.length] : fallback);
        const showActivity = !!it.activity;

        return (
          <div
            key={id}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={imgSrc}
                alt={it.name}
                className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-95" />
              {badge && (
                <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-white/90 text-gray-800 border border-gray-200 shadow-sm">
                  {badge}
                </span>
              )}
              <button
                onClick={() => toggle(id)}
                className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-2 shadow"
                aria-label="Save"
              >
                <Heart className={`w-4 h-4 ${saved ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
              </button>
              <div className="absolute left-0 bottom-0 right-0 p-3">
                <h3 className="text-white text-base font-semibold drop-shadow line-clamp-2">{it.name}</h3>
                {showActivity && <p className="text-white/90 text-xs mt-1 line-clamp-1">{it.activity}</p>}
              </div>
            </div>

            <div className="p-4 space-y-3">
              {it.address && <p className="text-sm text-gray-600 line-clamp-2">{it.address}</p>}
              <div className="flex flex-wrap items-center gap-2">
                {it.tags?.slice(0, 3).map((t) => (
                  <Tag key={t} color="processing">{t}</Tag>
                ))}
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs text-gray-500">{it.distance && <span>{it.distance}</span>}</div>
                <div className="flex items-center gap-2">
                  {it.link && (
                    <Link
                      href={it.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900"
                    >
                      {isMapsLink(it.link) ? (
                        <>
                          <MapPin className="w-3.5 h-3.5" />
                          Map
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-3.5 h-3.5" />
                          Link
                        </>
                      )}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Grids
const RestaurantGrid = ({ name, items }) => <CardGrid title={`restaurants:${name}`} items={items} imgSet={RESTAURANT_IMAGES} />;
const CafeGrid = ({ name, items }) => <CardGrid title={`cafes:${name}`} items={items} imgSet={CAFE_IMAGES} />;
const HotelGrid = ({ name, items }) => <CardGrid title={`hotels:${name}`} items={items} />;
const YurtGrid = ({ name, items }) => <CardGrid title={`yurts:${name}`} items={items} />;

// Filters
const filterTransport = (items = [], kind) => {
  if (!items || !Array.isArray(items)) return [];
  const q = (s) => (s || "").toLowerCase();

  switch (kind) {
    case "bus":
      return items.filter((i) => q(i.mode).includes("bus"));
    case "car":
      return items.filter((i) => q(i.mode).includes("car") || q(i.mode).includes("self"));
    case "air":
      return items.filter((i) => q(i.mode).includes("air") || q(i.mode).includes("flight") || q(i.mode).includes("plane"));
    default:
      return items;
  }
};

const filterCafes = (items = []) => {
  const q = (s) => (s || "").toLowerCase();
  return items.filter((i) => q(i.name).includes("cafe") || q(i.name).includes("coffee") || q(i.name).includes("tea"));
};

const filterYurts = (items = []) => {
  const q = (s) => (s || "").toLowerCase();
  return items.filter(
    (i) => q(i.name).includes("yurt") || q(i.name).includes("ger") || q(i.name).includes("camp") || q(i.name).includes("lodge") || q(i.name).includes("resort")
  );
};

// Page Component
export default function Page(props) {
  const [selectedTab, setSelectedTab] = useState("accom-1");
  const params = use(props.params);
  console.log(params);
  
  const { slug } = params;

  const aimagId = SLUG_TO_AIMAG_ID[slug];
  if (!aimagId) return notFound();

  const name = AIMAG_ID_TO_NAME[aimagId] || slug;
  const aimag = getAimagBySlug(slug);

  const menuItems = [
    getItem("Fun things to do ", "fun", <AirVent className="w-2.5" />),
    getItem("Accommodation", "accom", <Hotel className="w-2.5" />, [
      getItem("Hotel", "accom-1"),
      getItem("Yurt", "accom-2"),
    ]),
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
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  const render = () => {
    switch (selectedTab) {
      case "fun": return <FunContent borderRadiusLG={borderRadiusLG} name={name} />;
      case "accom-1": return <AccomodationContent borderRadiusLG={borderRadiusLG} aimag={aimag} name={name} />;
      case "accom-2": return <YurtContent borderRadiusLG={borderRadiusLG} aimag={aimag} name={name} items={filterYurts(aimag?.hotels || [])} />;
      case "food-1": return <RestaurantsContent borderRadiusLG={borderRadiusLG} name={name} items={getCategoryBySlug(slug, "restaurants")} />;
      case "food-2": return <CafeContent borderRadiusLG={borderRadiusLG} name={name} items={filterCafes(getCategoryBySlug(slug, "restaurants"))} />;
      case "transport-bus": return <TransportContent borderRadiusLG={borderRadiusLG} name={name} items={filterTransport(getCategoryBySlug(slug, "transportOptions"), "bus")} />;
      case "transport-car": return <TransportContent borderRadiusLG={borderRadiusLG} name={name} items={filterTransport(getCategoryBySlug(slug, "transportOptions"), "car")} />;
      case "transport-air": return <TransportContent borderRadiusLG={borderRadiusLG} name={name} items={filterTransport(getCategoryBySlug(slug, "transportOptions"), "air")} />;
      default: return <AccomodationContent borderRadiusLG={borderRadiusLG} aimag={aimag} name={name} />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#F5F5F5" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={240} style={{ marginTop: "70px", background: "#FFFFFF", boxShadow: "2px 0 6px rgba(0,0,0,0.05)", borderRight: "1px solid #E5E7EB" }}>
        <div className="h-16 flex items-center justify-center text-xl font-semibold text-gray-800">
          {collapsed ? "MN" : "Mongolia"}
        </div>
        <Menu theme="light" defaultSelectedKeys={["accom-1"]} mode="inline" items={menuItems} style={{ marginTop: "20px", border: "none" }} onClick={({ key }) => setSelectedTab(key)} />
      </Sider>
      <Layout>
        <Header style={{ padding: "0 30px", background: colorBgContainer, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px", zIndex: 10 }} />
        {render()}
      </Layout>
    </Layout>
  );
}

// Content Components
export const FunContent = ({ borderRadiusLG, name }) => (
  <Content style={{ margin: "24px" }}>
    <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
      <img src="https://images.unsplash.com/photo-1597434429739-2574d7e06807" className="w-full h-full object-cover" alt="Fun" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Fun things to do in {name}</h1>
        <p className="text-base md:text-lg max-w-2xl drop-shadow">Explore activities coming soon.</p>
      </div>
    </section>
    <div style={{ padding: 24, background: "#FFFFFF", borderRadius: borderRadiusLG, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <p className="text-gray-500 text-center py-8">No fun activities available at the moment.</p>
    </div>
  </Content>
);

export const TransportContent = ({ borderRadiusLG, name, items = [] }) => (
  <Content style={{ margin: "24px" }}>
    <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="w-full h-full object-cover" alt="Transport" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Transport in {name}</h1>
        <p className="text-base md:text-lg max-w-2xl drop-shadow">Options to get in and around the province.</p>
      </div>
    </section>
    <div style={{ padding: 24, background: "#FFFFFF", borderRadius: borderRadiusLG, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      {items.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(opt) => (
            <List.Item>
              <List.Item.Meta
                title={<span className="flex items-center gap-2">{opt.mode}{opt.mode && <Tag color="blue">Option</Tag>}</span>}
                description={opt.note}
              />
            </List.Item>
          )}
        />
      ) : <p className="text-gray-500 text-center py-8">No transport information for {name} yet.</p>}
    </div>
  </Content>
);

export const YurtContent = ({ borderRadiusLG, name, items = [] }) => (
  <Content style={{ margin: "24px" }}>
    <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
      <img src="https://images.unsplash.com/photo-1552849393-cd6826f6c1b0" className="w-full h-full object-cover" alt="Yurt" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Yurt stays in {name}</h1>
        <p className="text-base md:text-lg max-w-2xl drop-shadow">Traditional ger camps, lodges and resorts.</p>
      </div>
    </section>
    <div style={{ padding: 24, background: "#FFFFFF", borderRadius: borderRadiusLG, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      {items.length > 0 ? <YurtGrid name={name} items={items} /> : <p className="text-gray-500 text-center py-8">No yurt stays listed for {name} yet.</p>}
    </div>
  </Content>
);

export const RestaurantsContent = ({ borderRadiusLG, name, items = [] }) => (
  <Content style={{ margin: "24px" }}>
    <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
      <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de" className="w-full h-full object-cover" alt="Restaurants" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Restaurants in {name}</h1>
        <p className="text-base md:text-lg max-w-2xl drop-shadow">Places to eat and drink.</p>
      </div>
    </section>
    <div style={{ padding: 24, background: "#FFFFFF", borderRadius: borderRadiusLG, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      {items.length > 0 ? <RestaurantGrid name={name} items={items} /> : <p className="text-gray-500 text-center py-8">No restaurants listed for {name} yet.</p>}
    </div>
  </Content>
);

export const CafeContent = ({ borderRadiusLG, name, items = [] }) => (
  <Content style={{ margin: "24px" }}>
    <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" className="w-full h-full object-cover" alt="Cafes" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Cafes in {name}</h1>
        <p className="text-base md:text-lg max-w-2xl drop-shadow">Coffee, tea and quick bites.</p>
      </div>
    </section>
    <div style={{ padding: 24, background: "#FFFFFF", borderRadius: borderRadiusLG, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      {items.length > 0 ? <CafeGrid name={name} items={items} /> : <p className="text-gray-500 text-center py-8">No cafes listed for {name} yet.</p>}
    </div>
  </Content>
);

export const AccomodationContent = ({ borderRadiusLG, aimag, name }) => (
  <Content style={{ margin: "24px" }}>
    <section className="relative w-full h-96 md:h-[560px] rounded-3xl overflow-hidden shadow-lg mb-16">
      <img src="https://images.unsplash.com/photo-1597434429739-2574d7e06807" className="w-full h-full object-cover" alt="Accommodation" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-md">Hotels in {name}</h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow">Comfortable stays across the province.</p>
      </div>
    </section>
    <div style={{ padding: 24, background: "#FFFFFF", borderRadius: borderRadiusLG, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      {aimag?.hotels?.length > 0 ? <HotelGrid name={name} items={aimag.hotels} /> : <p className="text-gray-500 text-center py-8">No hotels listed for {name} yet.</p>}
    </div>
  </Content>
);
