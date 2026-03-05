"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit2, Trash2, Eye } from "lucide-react";
import { DifficultyIndicator } from "./difficulty-indicator";

export interface MockInterviewTemplate {
  id: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  status: "Published" | "Draft";
  questions: number;
  difficulty: string;
  difficultyLevel: number;
  createdAt: string;
}

interface InterviewsTableProps {
  data: MockInterviewTemplate[];
  totalCount: number;
}

export const InterviewsTable = ({ data, totalCount }: InterviewsTableProps) => {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#111111]/50 border-b border-white/10">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs font-semibold text-slate-400 uppercase tracking-wider h-12 px-6">Template Title</TableHead>
              <TableHead className="text-xs font-semibold text-slate-400 uppercase tracking-wider h-12">Status</TableHead>
              <TableHead className="text-xs font-semibold text-slate-400 uppercase tracking-wider h-12">Questions</TableHead>
              <TableHead className="text-xs font-semibold text-slate-400 uppercase tracking-wider h-12">Difficulty</TableHead>
              <TableHead className="text-xs font-semibold text-slate-400 uppercase tracking-wider h-12">Created</TableHead>
              <TableHead className="text-xs font-semibold text-slate-400 uppercase tracking-wider h-12 text-right px-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((interview) => (
                <TableRow 
                  key={interview.id} 
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center shrink-0">
                        <interview.icon className={`size-5 ${interview.iconColor}`} />
                      </div>
                      <span className="font-semibold text-white text-sm">
                        {interview.title}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`font-medium px-2.5 py-0.5 rounded-full border ${
                        interview.status === "Published" 
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                          : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                      }`}
                    >
                      {interview.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-sm text-slate-300">
                    {interview.questions} Questions
                  </TableCell>

                  <TableCell>
                    <DifficultyIndicator level={interview.difficultyLevel} label={interview.difficulty} />
                  </TableCell>

                  <TableCell className="text-sm text-slate-400">
                    {interview.createdAt}
                  </TableCell>

                  <TableCell className="px-6 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#111] border-white/10 text-slate-300 w-40">
                        <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer gap-2">
                          <Eye className="size-4" /> Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer gap-2">
                          <Edit2 className="size-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-red-500/20 focus:text-red-400 text-red-400 cursor-pointer gap-2 border-t border-white/5 mt-1 pt-1">
                          <Trash2 className="size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-slate-500">
                  No interviews found matching your criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-[#0A0A0A]">
        <span className="text-sm text-slate-500">
          Showing {data.length} of {totalCount} interview templates
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-slate-400 hover:text-white hover:bg-white/5 h-8">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-slate-400 hover:text-white hover:bg-white/5 h-8">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};