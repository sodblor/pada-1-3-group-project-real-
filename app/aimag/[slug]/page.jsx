"use client";

import React, { useState } from "react";
import { FileOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, List, Tag } from "antd";
import { notFound, useParams } from "next/navigation";
import { AirVent } from "lucide-react";
import { Utensils } from "lucide-react";
import { Hotel } from "lucide-react";
import { Bus, Car, Plane } from "lucide-react";
import {
  SLUG_TO_AIMAG_ID,
  AIMAG_ID_TO_NAME,
  getAimagBySlug,
  getCategoryBySlug,
} from "../../components/data/data";

import { AimagDestinationDetails, AimagHotelDetails } from "../../components/AimagDestinationDetails";

import Link from "next/link";


const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}
export const CafeContent = ({ borderRadiusLG, name, items = [] }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          className="w-full h-full object-cover"
          alt="Cafes"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
            Cafes in {name}
          </h1>
          <p className="text-base md:text-lg max-w-2xl drop-shadow">
            Coffee, tea and quick bites.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 24,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
        }}
        className="border border-gray-100"
      >
        {items && items.length > 0 ? (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
            dataSource={items}
            renderItem={(c) => (
              <List.Item>
                <div className="h-full flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition shadow-gray-100">
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1 line-clamp-2">
                      {c.name}
                    </h3>
                    {c.address && (
                      <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">
                        {c.address}
                      </p>
                    )}
                  </div>
                  {c.link && (
                    <Link
                      href={c.link}
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      View details
                    </Link>
                  )}
                </div>
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">No cafes listed for {name} yet.</p>
        )}
      </div>
    </Content>
  );
};

export const YurtContent = ({ borderRadiusLG, name, items = [] }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
        <img
          src="https://images.unsplash.com/photo-1552849393-cd6826f6c1b0"
          className="w-full h-full object-cover"
          alt="Yurt"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
            Yurt stays in {name}
          </h1>
          <p className="text-base md:text-lg max-w-2xl drop-shadow">
            Traditional ger camps, lodges and resorts.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 24,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {items && items.length > 0 ? (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
            dataSource={items}
            renderItem={(y) => (
              <List.Item>
                <div className="h-full flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{y.name}</h3>
                    {y.address && (
                      <p className="text-sm text-gray-600 mb-2">{y.address}</p>
                    )}
                  </div>
                  {y.link && (
                    <Link
                      href={y.link}
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      View camp
                    </Link>
                  )}
                </div>
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">No yurt stays listed for {name} yet.</p>
        )}
      </div>
    </Content>
  );
};

export const RestaurantsContent = ({ borderRadiusLG, name, items = [] }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
          className="w-full h-full object-cover"
          alt="Restaurants"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
            Restaurants in {name}
          </h1>
          <p className="text-base md:text-lg max-w-2xl drop-shadow">
            Places to eat and drink.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 24,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {items && items.length > 0 ? (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
            dataSource={items}
            renderItem={(r) => (
              <List.Item>
                <div className="h-full flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition shadow-gray-100">
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1 line-clamp-2">
                      {r.name}
                    </h3>
                    {r.address && (
                      <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">
                        {r.address}
                      </p>
                    )}
                  </div>
                  {r.link && (
                    <Link
                      href={r.link}
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      View restaurant
                    </Link>
                  )}
                </div>
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">No restaurants listed for {name} yet.</p>
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

  const filterYurts = (items = []) => {
    const q = (s) => (s || "").toLowerCase();
    return items.filter(
      (i) =>
        q(i.name).includes("yurt") ||
        q(i.name).includes("ger") ||
        q(i.name).includes("camp") ||
        q(i.name).includes("lodge") ||
        q(i.name).includes("resort")
    );
  };

  const render = () => {
    switch (selectedTab) {
      case "fun":
        return <FunContent borderRadiusLG={borderRadiusLG} name={name} aimag={aimag} />;
      case "accom-1":
        return (
          <AccomodationContent
            borderRadiusLG={borderRadiusLG}
            aimag={aimag}
            name={name}
          />
        );
      case "accom-2":
        return (
          <YurtContent
            borderRadiusLG={borderRadiusLG}
            aimag={aimag}
            name={name}
            items={filterYurts(aimag?.hotels || [])}
          />
        );
      case "food-1":
        return (
          <RestaurantsContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={getCategoryBySlug(slug, "restaurants")}
          />
        );
      case "food-2":
        return (
          <CafeContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={getCategoryBySlug(slug, "cafes")}
          />
        );
      case "transport-bus":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(getCategoryBySlug(slug, "transportOptions"), "bus")}
          />
        );
      case "transport-car":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(getCategoryBySlug(slug, "transportOptions"), "car")}
          />
        );
      case "transport-air":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(getCategoryBySlug(slug, "transportOptions"), "air")}
          />
        );
      default:
        return <FunContent borderRadiusLG={borderRadiusLG} name={name} aimag={aimag} />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#F5F5F5" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={240}
        style={{
          marginTop: "70px",
          background: "#FFFFFF",
          boxShadow: "2px 0 6px rgba(0,0,0,0.05)",
          borderRight: "1px solid #E5E7EB",
        }}
      >
        <div className="h-16 flex items-center justify-center text-xl font-semibold text-gray-800">
          {collapsed ? "MN" : "Mongolia"}
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

      <Layout>
        <Header
          style={{
            padding: "0 30px",
            background: colorBgContainer,
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
            zIndex: 10,
          }}
        >
        </Header>

        {render()}
      </Layout>
    </Layout>
  );
}

export const FunContent = ({ borderRadiusLG, name, aimag }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-96 md:h-[520px] rounded-3xl overflow-hidden shadow-lg mb-12 md:mb-16">
        <img
          src="https://images.unsplash.com/photo-1597434429739-2574d7e06807"
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-md">
            Explore {name}
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl drop-shadow">
            Vast horizons, nomadic culture, and timeless landscapes await.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
        }}
        className="border border-gray-100"
      >
        {aimag && (
          <div className="mb-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-5 items-start">
              <div className="md:col-span-3 space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  About {name}
                </h2>
                {aimag.shortDescription && (
                  <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                    {aimag.shortDescription}
                  </p>
                )}
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-end">
                <div className="w-full max-w-xs rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-xs md:text-sm text-gray-700 space-y-1">
                  <p className="font-semibold text-gray-800 mb-1">Key info</p>
                  {aimag.established && (
                    <p>
                      <span className="font-medium">Established:</span> {aimag.established}
                    </p>
                  )}
                  {aimag.center && (
                    <p>
                      <span className="font-medium">Center:</span> {aimag.center}
                    </p>
                  )}
                  {typeof aimag.centerDistanceFromUlaanbaatar_km === "number" && (
                    <p>
                      <span className="font-medium">Distance from Ulaanbaatar:</span>{" "}
                      {aimag.centerDistanceFromUlaanbaatar_km} km
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-100" />
          </div>
        )}

        {aimag?.attractions?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Main attractions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {aimag.attractions.map((item, idx) => {
                const isObject = item && typeof item === "object";
                const title = isObject ? item.name : item;
                const note = isObject ? item.note : undefined;
                const image = isObject ? item.image : undefined;

                return (
                  <AimagDestinationDetails key={idx} attraction={item} />
                );
              })}
            </div>
          </div>
        )}

        {aimag?.tips?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Travel tips</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
              {aimag.tips.map((tip, idx) => (
                <li key={idx}>{tip.note || tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Content>
  );
}

export const TransportContent = ({ borderRadiusLG, name, items = [] }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-10">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="w-full h-full object-cover"
          alt="Transport"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
            Transport in {name}
          </h1>
          <p className="text-base md:text-lg max-w-2xl drop-shadow">
            Options to get in and around the province.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 24,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {items && items.length > 0 ? (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
            dataSource={items}
            renderItem={(opt) => (
              <List.Item>
                <div className="h-full flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition shadow-gray-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm md:text-base">
                        {opt.mode}
                      </span>
                      {opt.mode && <Tag color="blue">Option</Tag>}
                    </div>
                    {opt.note && (
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {opt.note}
                      </p>
                    )}
                  </div>
                </div>
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">No transport information for {name} yet.</p>
        )}
      </div>
    </Content>
  );
};

export const AccomodationContent = ({ borderRadiusLG, aimag, name }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-96 md:h-[560px] rounded-3xl overflow-hidden shadow-lg mb-16">
        <img
          src="https://images.unsplash.com/photo-1597434429739-2574d7e06807"
          className="w-full h-full object-cover"
          alt="Accommodation"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-md">
            Hotels in {name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow">
            Comfortable stays across the province.
          </p>
        </div>
      </section>

      <div
        style={{
          padding: 24,
          background: "#FFFFFF",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
        }}
        className="border border-gray-100"
      >
        {aimag?.hotels?.length > 0 ? (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
            dataSource={aimag.hotels}
            renderItem={(hotel) => (
              <List.Item key={hotel.name}>
                <AimagHotelDetails hotel={hotel} />
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">
            No hotels listed for {name} yet.
          </p>
        )}
      </div>
    </Content>
  );
};
