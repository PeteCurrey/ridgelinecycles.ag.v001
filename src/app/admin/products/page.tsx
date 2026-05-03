"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit2, MoreHorizontal, Filter } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import { products, Product } from "@/lib/products";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    toast.success("Product updated successfully");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search products by name or brand..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-brand-accent transition-all outline-none"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filters
            </Button>
          </div>

          <Sheet>
            <SheetTrigger render={<Button className="btn-primary bg-brand-accent hover:bg-opacity-90 flex items-center gap-2" />}>
              <Plus size={18} />
              Add Product
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-display font-bold">Add New Product</SheetTitle>
                <SheetDescription className="font-serif">
                  Fill in the details below to add a new product to your inventory.
                </SheetDescription>
              </SheetHeader>
              
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="e.g. Tarmac SL8 Expert" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trek">Trek</SelectItem>
                        <SelectItem value="specialized">Specialized</SelectItem>
                        <SelectItem value="cannondale">Cannondale</SelectItem>
                        <SelectItem value="giant">Giant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="road">Road</SelectItem>
                        <SelectItem value="mountain">Mountain</SelectItem>
                        <SelectItem value="gravel">Gravel</SelectItem>
                        <SelectItem value="ebike">E-Bike</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price (£)</Label>
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desc">Description</Label>
                  <textarea 
                    id="desc" 
                    className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    placeholder="Enter realistic product description..."
                  />
                </div>
              </div>
              
              <SheetFooter className="mt-8">
                <Button onClick={handleSave} className="w-full btn-primary bg-brand-accent">Save Product</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[80px] text-[10px] uppercase font-bold px-6">Img</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Product</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">SKU</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Category</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6 text-right">Price</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Stock</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Status</TableHead>
                <TableHead className="w-[50px] px-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => {
                const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);
                const isLowStock = totalStock <= 3;

                return (
                  <TableRow key={product.id} className="group">
                    <TableCell className="px-6 py-4">
                      <div className="w-10 h-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400 p-1 text-center">
                        IMG
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{product.name}</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">{product.brand}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <code className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">
                        {product.sku}
                      </code>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge variant="outline" className="text-[9px] uppercase font-bold border-gray-200 text-gray-600">
                        {product.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right text-sm font-bold">
                      £{product.price}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "text-xs font-bold",
                          isLowStock ? "text-amber-600" : "text-gray-900"
                        )}>
                          {totalStock}
                        </span>
                        {isLowStock && (
                          <Badge className="bg-amber-100 text-amber-700 text-[8px] font-black uppercase tracking-tighter hover:bg-amber-100">
                            Low
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge className={cn(
                        "text-[9px] uppercase font-bold border-none",
                        product.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                      )}>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger render={
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal size={16} />
                          </Button>
                        } />
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center gap-2 text-xs">
                            <Edit2 size={12} /> Edit Product
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 text-xs text-red-600">
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
