import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainLayout: FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="max-w-7xl mx-auto p-5 shrink">
                <Header />
            </div>
            <hr />
            <div className="bg-slate-50 flex-[1_0_auto]">
                <main className="max-w-7xl h-full mx-auto p-5">
                    <Outlet />
                </main>
            </div>
            <div className="bg-slate-700 shrink">
                <div className="max-w-7xl mx-auto p-5">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
