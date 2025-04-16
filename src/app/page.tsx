"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { AsciiGroup, asciiTable } from "@/lib/ascii";
import { DataTable } from "./ascii/data-table";
import { columns } from "./ascii/columns";
import { Briefcase, Github, Linkedin, Moon, Sun } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const [activeTab, setActiveTab] = useState("alphabet");
  const { setTheme } = useTheme();

  const grouped = asciiTable.reduce((acc, el) => {
    if (!acc[el.type]) {
      acc[el.type] = [];
    }
    acc[el.type].push(el);
    return acc;
  }, {} as Record<string, typeof asciiTable>);

  const uniqueTypes = Array.from(new Set(asciiTable.map((el) => el.type)));

  useEffect(() => {
    const fetchActiveTab = () =>
      setActiveTab(localStorage.getItem("active-tab") ?? "alphabet");

    fetchActiveTab();
  }, []);

  return (
    <>
      <div className="mt-4 ms-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex justify-center mt-20 h-screen font-[family-name:var(--font-geist-sans)] relative">
        <div className="flex flex-col gap-20">
          <main className="flex flex-col row-start-2 items-center sm:items-start w-[20rem] sm:w-[30rem] md:w-[45rem] xl:w-[70rem]">
            <header>
              <h1 className="text-6xl mb-4">ASCII Table</h1>
            </header>
            <section className="w-full overflow-clip">
              <Tabs
                value={activeTab}
                onValueChange={(val) => {
                  setActiveTab(val);
                  localStorage.setItem("active-tab", val);
                }}
              >
                <ScrollArea>
                  <div className="w-full relative h-10">
                    <TabsList className="flex absolute h-10">
                      {uniqueTypes.map((type) => {
                        const el = asciiTable.find((e) => e.type === type);
                        return (
                          <TabsTrigger key={type} value={type}>
                            {el?.name ?? type}
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
                {Object.entries(grouped).map(([type, entries]) => (
                  <TabsContent key={type} value={type}>
                    {entries.map((el, idx) => (
                      <div key={idx} className="mb-4">
                        <DataTable columns={columns} data={el.table} />
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </section>
          </main>
          <footer className="row-start-3 flex gap-[24px] md:flex-row items-center justify-center flex-col">
            <h3 className="text-slate-600">Johcel Gene T. Bitara</h3>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="http://genbit-portfolio.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Briefcase size={18} />
              Portfolio
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/genebit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              Github
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://linkedin.com/in/gene-bitara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              Linkedin
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
