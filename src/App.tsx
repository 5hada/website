import "./App.css";
import { Card } from "./components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <>
      <div className="grid grid-cols-[1fr_minmax(0,2fr)] h-screen">
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
                <TabsTrigger value="commits">Commits</TabsTrigger>
                <TabsTrigger value="artworks">Artworks</TabsTrigger>
              </TabsList>
              <TabsContent value="commits">
                <p>Content for commits</p>
                <p>Content for commits</p>
                <p>Content for commits</p>
              </TabsContent>
              <TabsContent value="artworks">
                <p>Content for artworks</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
