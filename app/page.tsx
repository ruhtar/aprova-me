"use client"
import { AppSidebar } from "./components/app-sidebar";
import { MainPage } from "./pages/main-page";

export default function Home() {
  return (
    <div className="flex">
      <AppSidebar/>
    <MainPage/>
    </div>
  );
}
