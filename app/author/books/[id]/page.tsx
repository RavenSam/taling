import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { DownloadIcon, GearIcon } from "@radix-ui/react-icons"
import BookTabs from "@/components/section/BookTabs"

export default function SingleBookPage() {
   return (
      <>
         <main className="">
            <section className="relative">
               <BookHeader />
               <div className="absolute inset-0 overflow-hidden rounded-lg -z-[1]">
                  <Image
                     src={"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"}
                     alt={"Book"}
                     width={250}
                     height={330}
                     className="w-full h-full block object-cover transition-all blur-md"
                  />

                  <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 opacity-40"></div>
               </div>
            </section>

            <section className="mt-10 md:mt-0">
               <BookTabs />
            </section>
         </main>
      </>
   )
}

function BookHeader() {
   return (
      <div className="flex items-end max-w-4xl mx-auto py-5">
         <div className="overflow-hidden rounded-lg bg-slate-400 aspect-[1/1.6] w-[270px] md:-mb-16 shadow">
            <Image
               src={"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"}
               alt={"Book"}
               width={250}
               height={330}
               className="w-full h-full block object-cover transition-all"
            />
         </div>

         <div className="absolute top-0 right-0 p-4 flex items-center space-x-2">
            <Button variant="outline" size="icon">
               <DownloadIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
               <Link href="/author/books/1/settings">
                  <GearIcon className="h-4 w-4" />
               </Link>
            </Button>
         </div>

         <div className="p-4 space-y-6 flex-grow">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Book Title</h1>

            <div className="grid gap-4 md:grid-cols-3">
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Words Count</CardTitle>
                     <PlusIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">1000</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Chapters</CardTitle>
                     <PlusIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">10</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Pages</CardTitle>
                     <PlusIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">2</div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   )
}
