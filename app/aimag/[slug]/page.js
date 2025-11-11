"use client";

import { FileOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { AirVent, Hotel, Utensils } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { AIMAG_ID_TO_NAME, SLUG_TO_AIMAG_ID } from "../../components/AimagData";
import AIMAG_DATA from "../../components/data/data";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

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
  const aimag = Object.values(AIMAG_DATA).find(
    (data) => data.name.toLowerCase() === slug
  );

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
    getItem("Files", "files", <FileOutlined className="w-2.5" />),
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        return <Placeholder title="Yurt Accommodation" />;
      case "food-1":
        return <Placeholder title="Restaurants" />;
      case "food-2":
        return <Placeholder title="Cafes" />;
      case "files":
        return <Placeholder title="Files & Documents" />;
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
        >
          <h1 className="text-xl font-medium text-gray-800">{name}</h1>
        </Header>

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
                  // target="_blank"
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
