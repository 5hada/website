import {
  Card,
  IconLink,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui";
import { CommitsTable } from "../custom/CommitsTable";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="flex flex-row justify-end m-4">
      <IconLink
        href="https://github.com/5hada"
        icon={<IconBrandGithub />}
      ></IconLink>
      <IconLink href="mailto:mail@shada.me" icon={<IconMail />}></IconLink>
      <IconLink href="https://x.com" icon={<IconBrandX />}></IconLink>
      <IconLink href="discord.com" icon={<IconBrandDiscord />}></IconLink>
    </footer>
  );
}

export function MainPage() {
  return (
    <div className="flex flex-col h-screen place-content-between">
      <div className="grid grid-cols-[1fr_minmax(0,2fr)]">
        <section className="flex flex-row gap-4 p-4">
          <div className="flex flex-col items-start m-4">
            <span className="text-2xl font-bold items-start">SHADA.ME</span>
            <span>hello, world</span>
          </div>
        </section>
        <section className="flex flex-col gap-4 p-4 h-full m-4">
          <div className="flex items-start space-x-5 m-4">
            <Card className="min-w-25 min-h-25">githublink</Card>
            <Card className="min-w-25 min-h-25">githublink</Card>
            <Card className="min-w-25 min-h-25">githublink</Card>
          </div>
          <div className="recents m-4">
            <Tabs>
              <TabsList>
                <TabsTrigger value="commits">Contributes</TabsTrigger>
                <TabsTrigger value="artworks">Artworks</TabsTrigger>
              </TabsList>
              <TabsContent value="commits">
                <CommitsTable />
              </TabsContent>
              <TabsContent value="artworks">
                <p>Preparing...</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
