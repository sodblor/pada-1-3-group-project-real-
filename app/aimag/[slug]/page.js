"use client";

import React, { useState } from "react";
import { FileOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, List, Tag } from "antd";
import { SLUG_TO_AIMAG_ID, AIMAG_ID_TO_NAME } from "../../components/AimagData";
import { notFound } from "next/navigation";
import { use } from "react";
import { AirVent } from "lucide-react";
import { Utensils } from "lucide-react";
import { Hotel } from "lucide-react";
import { Bus, Car, Plane } from "lucide-react";
import AIMAG_DATA, {
  getAimagBySlug,
  getCategoryBySlug,
} from "../../components/data/data";

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
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {items && items.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(c) => (
              <List.Item
                actions={[
                  c.link ? (
                    <Link
                      href={c.link}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </Link>
                  ) : null,
                ]}
              >
                <List.Item.Meta title={c.name} description={c.address} />
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">
            No cafes listed for {name} yet.
          </p>
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
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(y) => (
              <List.Item
                actions={[
                  y.link ? (
                    <Link
                      href={y.link}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </Link>
                  ) : null,
                ]}
              >
                <List.Item.Meta title={y.name} description={y.address} />
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">
            No yurt stays listed for {name} yet.
          </p>
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
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(r) => (
              <List.Item
                actions={[
                  r.link ? (
                    <Link
                      href={r.link}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </Link>
                  ) : null,
                ]}
              >
                <List.Item.Meta title={r.name} description={r.address} />
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">
            No restaurants listed for {name} yet.
          </p>
        )}
      </div>
    </Content>
  );
};

const Placeholder = ({ title }) => (
  <Content style={{ margin: "24px" }}>
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">
        Content for this section will be added later.
      </p>
    </div>
  </Content>
);

export default function Page(props) {
  const [selectedTab, setSelectedTab] = useState("fun");
  const params = use(props.params);

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
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const filterTransport = (items = [], kind) => {
    const q = (s) => (s || "").toLowerCase();
    switch (kind) {
      case "bus":
        return items.filter((i) => q(i.mode).includes("bus"));
      case "car":
        return items.filter(
          (i) => q(i.mode).includes("car") || q(i.mode).includes("self")
        );
      case "air":
        return items.filter(
          (i) => q(i.mode).includes("air") || q(i.mode).includes("flight")
        );
      default:
        return items;
    }
  };

  const filterCafes = (items = []) => {
    const q = (s) => (s || "").toLowerCase();
    return items.filter(
      (i) =>
        q(i.name).includes("cafe") ||
        q(i.name).includes("coffee") ||
        q(i.name).includes("tea")
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
        return <FunContent borderRadiusLG={borderRadiusLG} name={name} />;
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
            items={filterCafes(getCategoryBySlug(slug, "restaurants"))}
          />
        );
      case "transport-bus":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(
              getCategoryBySlug(slug, "transportOptions"),
              "bus"
            )}
          />
        );
      case "transport-car":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(
              getCategoryBySlug(slug, "transportOptions"),
              "car"
            )}
          />
        );
      case "transport-air":
        return (
          <TransportContent
            borderRadiusLG={borderRadiusLG}
            name={name}
            items={filterTransport(
              getCategoryBySlug(slug, "transportOptions"),
              "air"
            )}
          />
        );
      default:
        return <FunContent borderRadiusLG={borderRadiusLG} name={name} />;
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
        ></Header>

        {render()}
      </Layout>
    </Layout>
  );
}

export const FunContent = ({ borderRadiusLG, name }) => {
  return (
    <Content style={{ margin: "24px" }}>
      <section className="relative w-full h-96 md:h-[560px] rounded-3xl overflow-hidden shadow-lg mb-16">
        <img
          src="https://images.unsplash.com/photo-1597434429739-2574d7e06807"
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-md">
            Explore {name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow">
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
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <p className="text-gray-700">
          Эндээс {name} аймагтай холбоотой контентээ filter-ээр харуулна.
        </p>
      </div>
    </Content>
  );
};

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
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(opt, idx) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <span className="flex items-center gap-2">
                      {opt.mode}
                      {opt.mode && <Tag color="blue">Option</Tag>}
                    </span>
                  }
                  description={opt.note}
                />
              </List.Item>
            )}
          />
        ) : (
          <p className="text-gray-500 text-center py-8">
            No transport information for {name} yet.
          </p>
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
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {aimag?.hotels?.length > 0 ? (
          aimag.hotels.map((hotel) => {
            console.log(hotel);

            return (
              <div
                key={hotel.name}
                className="flex items-center justify-between py-4 border-b last:border-0"
              >
                <div>
                  <h3 className="font-semibold text-lg">{hotel.name}</h3>
                  {hotel.address && (
                    <p className="text-sm text-gray-600 mt-1">
                      {hotel.address}
                    </p>
                  )}
                </div>
                <Link
                  href={hotel.link}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Visit
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center py-8">
            No hotels listed for {name} yet.
          </p>
        )}
      </div>
    </Content>
  );
};
