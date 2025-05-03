import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import GraficoValores from "@/components/GraficoValores";
import Partialdata from "@/components/Partialdata";
import Sidebar from "@/components/sidebar";
import Linechart from "@/components/Linechart";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block"></BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="bold">
                    Pagina de Inicio
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-gray-400 p-4 border rounded-xl">
              <Linechart />
            </div>
            <div className="bg-gray-400 p-4 border rounded-xl">
              <GraficoValores />
            </div>
            <div className="bg-gray-400 p-4 border rounded-xl">
              <Partialdata />
            </div>
          </div>
          <div className="min-h-[100vh] gap-4 flex rounded-xl md:min-h-min">
            <div className="w-2/3 bg-gray-400 p-4 rounded-xl md:min-h-min">
              <div>
                <div className="space-y-1 p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">
                    LEADS
                  </h2>

                  {/* Guia de colunas */}
                  <div className="rounded-lg object-cover border flex items-center gap-4 font-semibold text-gray-600 px-4 py-2">
                    <span className="w-15">Icon</span>
                    <span className="w-40">Nome</span>
                    <span className="w-64">Email</span>
                    <span className="w-40">Telefone</span>
                  </div>

                  {[
                    {
                      name: "Larissa Moreira",
                      email: "larissa@ficticio.com",
                      phone: "(11) 9 9999-9999",
                      img: "img/larissa.jpeg",
                    },
                    {
                      name: "Carlos Silva",
                      email: "carlos@ficticio.com",
                      phone: "(21) 9 8888-8888",
                      img: "/img/carlos.jpeg",
                    },
                    {
                      name: "Marina Rocha",
                      email: "marina@ficticio.com",
                      phone: "(31) 9 7777-7777",
                      img: "/img/marina.jpeg",
                    },
                    {
                      name: "Thiago Oliveira",
                      email: "thiago@ficticio.com",
                      phone: "(41) 9 6666-6666",
                      img: "/img/tiago.jpeg",
                    },
                  ].map((person, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/70 p-4 rounded-lg shadow border"
                    >
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div className="flex gap-6 text-sm text-gray-800">
                        <p className="font-semibold whitespace-nowrap">
                          {person.name}
                        </p>
                        <p className="whitespace-nowrap flex w-60">
                          {person.email}
                        </p>
                        <p className="whitespace-nowrap flex w-60">
                          {person.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-1/3 bg-gray-500 p-4 flex flex-col items-center rounded-xl md:min-h-min">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 13 },
                      { id: 1, value: 37 },
                      { id: 2, value: 60 },
                    ],
                    innerRadius: 30,
                    outerRadius: 120,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -45,
                    endAngle: 280,
                    cx: 150,
                    cy: 150,
                  },
                ]}
                width={300}
                height={300}
              />
              <div className="mt-4 space-y-2 text-sm">
                {["Aguardando", "Finalizados", "Pendentes"].map(
                  (label, index) => {
                    const colors = [
                      "bg-red-500",
                      "bg-yellow-400",
                      "bg-blue-500",
                    ];
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${colors[index]}`}
                        />
                        <span className="text-white">{label}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="min-h-[100vh] gap-4 flex rounded-xl md:min-h-min">
            <div className="w-2/3 bg-gray-400 p-4 rounded-xl md:min-h-min">
              <Sidebar />
            </div>
            <div className="w-1/3 bg-gray-500 flex items-center rounded-xl">
              <Partialdata />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
