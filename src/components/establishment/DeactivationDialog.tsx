
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DeactivationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (data: {
    comments: string;
    date: Date;
    document: File | null;
  }) => void;
}

const DeactivationDialog = ({ open, onOpenChange, onConfirm }: DeactivationDialogProps) => {
  const [comments, setComments] = useState("");
  const [date, setDate] = useState<Date>();
  const [document, setDocument] = useState<File | null>(null);

  const handleConfirm = () => {
    if (date) {
      onConfirm({
        comments,
        date,
        document,
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setDocument(file);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar baja del establecimiento</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción dará de baja al establecimiento. Por favor, complete la siguiente información.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="comments" className="text-sm font-medium">
              Comentarios
            </label>
            <Textarea
              id="comments"
              placeholder="Ingrese los comentarios..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="h-24"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Fecha de baja
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Seleccione una fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label htmlFor="document" className="text-sm font-medium">
              Documento
            </label>
            <Input
              id="document"
              type="file"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancelar</Button>
          </AlertDialogCancel>
          <Button onClick={handleConfirm} disabled={!date}>
            Confirmar Baja
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeactivationDialog;
