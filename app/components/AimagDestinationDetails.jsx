// app/components/AimagDestinationDetails.jsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../../components/ui/dialog";

export const AimagDestinationDetails = ({ attraction }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer group rounded-2xl border border-gray-100 bg-white/95 shadow-sm hover:shadow-md transition flex gap-3">
          {attraction?.image && (
            <div className="w-32 h-24 overflow-hidden rounded-l-2xl">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1 p-4">
            <p className="font-semibold text-gray-900">{attraction.name}</p>
            {attraction.note && (
              <p className="text-sm text-gray-600">{attraction.note}</p>
            )}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{attraction.name}</DialogTitle>
          {attraction.note && (
            <DialogDescription>{attraction.note}</DialogDescription>
          )}
        </DialogHeader>
        {attraction.image && (
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-auto mt-4 rounded-lg"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
