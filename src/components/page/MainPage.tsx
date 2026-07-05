import { Card, CardContent, IconLink, TextLink } from "../ui";
import { ProjectCard, type ProjectCardProps } from "../custom";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconPin,
} from "@tabler/icons-react";
import { ActivityCard, type ActivityCardProps } from "../custom/ActivityCard";

const tempProjectData: ProjectCardProps = {
  tabs: [
    {
      value: "all",
      icon: "A",
      rows: [
        { name: "5hada/Website", href: "https://github.com/5hada/website" },
      ],
    },
  ],
};

const tempActivityData: ActivityCardProps = {
  tabs: [
    {
      value: "Contributions",
      icon: "none",
      rows: [
        { title: "Preparing...", desc: "" },
        // { title: "title", desc: "desc" },
        // { title: "title", desc: "desc" },
        // { title: "title", desc: "desc" },
        // { title: "title", desc: "desc" },
        // { title: "title", desc: "desc" },
      ],
    },
    {
      value: "Artworks",
      icon: "none",
      rows: [
        { title: "Preparing...", desc: "" },
        // { title: "title", desc: "desc" },
        // { title: "title", desc: "desc" },
        // { title: "title", desc: "desc" },
      ],
    },
  ],
};

function Header() {
  return (
    <header className="w-full h-fit">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 m-4">
        <section className="flex-1">
          <div className="flex flex-col items-start px-2 gap-0.5">
            <span className="text-2xl font-bold items-start">SHADA.ME</span>
            <span>hello, world</span>
          </div>
        </section>
        <section className="flex-1">
          <div className="flex items-start gap-5 mt-2 sm:mt-0">
            <Card className="min-w-25 min-h-25 aspect-square">
              <div className="w-full flex flex-row justify-end">
                <IconPin size={16} />
              </div>
              <CardContent className="flex flex-col gap-1">
                <IconBrandGithub size={20} />
                <div className="text-center">
                  <TextLink
                    href="https://github.com/5hada/website"
                    text="Website"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </header>
  );
}

function Content() {
  return (
    <main className="flex-1 w-full">
      <div className="h-full flex flex-col sm:flex-row pb-4 gap-4 sm:gap-6 md:gap-8 m-4">
        <section className="flex-1">
          <ProjectCard {...tempProjectData} />
        </section>
        <section className="flex-1">
          <ActivityCard {...tempActivityData} />
        </section>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="w-full h-fit">
      <div className="flex flex-row justify-end m-2 gap-2">
        <IconLink
          href="https://github.com/5hada"
          icon={<IconBrandGithub />}
        ></IconLink>
        <IconLink href="mailto:mail@shada.me" icon={<IconMail />}></IconLink>
        <IconLink href="https://x.com" icon={<IconBrandX />}></IconLink>
        <IconLink
          href="https://discord.com/users/611436422372786187"
          icon={<IconBrandDiscord />}
        ></IconLink>
      </div>
    </footer>
  );
}

export function MainPage() {
  return (
    <div className="flex flex-col size-full p-4">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
