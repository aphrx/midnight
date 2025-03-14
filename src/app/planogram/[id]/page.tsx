"use client"

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
import { useParams } from 'next/navigation';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Assuming you have an Accordion component
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Import ShadCN Table

export default function PlanogramDetail() {
  const { id } = useParams();

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
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Planogram</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Planogram {id}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col md:flex-row gap-4 p-4 pt-0">
          {/* Left Side: Image */}
          <div className="flex-1 rounded-xl">
            <img
              src="/1.png" // Referencing image from public folder
              alt={`Planogram ${id}`}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Right Side: Accordion Panels */}
          <div className="flex-1 space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="panel-1">
                <AccordionTrigger>Groups</AccordionTrigger>
                <AccordionContent>
                  {/* ShadCN Table in Panel 1 */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Header 1</TableHead>
                        <TableHead>Header 2</TableHead>
                        <TableHead>Header 3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Row 1, Cell 1</TableCell>
                        <TableCell>Row 1, Cell 2</TableCell>
                        <TableCell>Row 1, Cell 3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="panel-2">
                <AccordionTrigger>Products</AccordionTrigger>
                <AccordionContent>
                  {/* ShadCN Table in Panel 2 */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Column A</TableHead>
                        <TableHead>Column B</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Data A1</TableCell>
                        <TableCell>Data B1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Data A2</TableCell>
                        <TableCell>Data B2</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="panel-3">
                <AccordionTrigger>Materials</AccordionTrigger>
                <AccordionContent>
                  {/* ShadCN Table in Panel 3 */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Item 1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Item 2</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
