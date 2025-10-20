import Home from "@/components/Home";
import Client from "@/components/Client";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import ContactUs from "@/components/ContactUs";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Home />
      <Client />
      <AboutUs />
      <Service />
      <ContactUs />
    </div>
  );
}
