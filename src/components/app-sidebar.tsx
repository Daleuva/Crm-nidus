"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Github,
  Linkedin,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Joalison",
    email: "JoJo@ficticio.com",
    avatar: "https://github.com/DaleUva.png",
  },
  teams: [
    {
      name: "Administrador",
      logo: GalleryVerticalEnd,
    },
    {
      name: "Back Office",
      logo: AudioWaveform,
    },
    {
      name: "Vendedor",
      logo: Command,
    },
  ],
  navMain: [
    {
      title: "Inicio",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Historico",
          url: "#",
        },
        {
          title: "Notificações",
          url: "#",
        },
        {
          title: "Configurações",
          url: "#",
        },
      ],
    },
    {
      title: "Inteligência Artificial",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Em andamento",
          url: "#",
        },
      ],
    },
    {
      title: "Documentos",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Pendentes",
          url: "#",
        },
        {
          title: "Vendas",
          url: "#",
        },
        {
          title: "Finalizados",
          url: "#",
        },
      ],
    },
  ],

  projects: [
    {
      name: "Github",
      url: "https://github.com/DaleUva",
      icon: Github,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/joalison-a-1537a8174/",
      icon: Linkedin,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
