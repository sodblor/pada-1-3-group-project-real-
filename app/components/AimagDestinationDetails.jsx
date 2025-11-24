import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"

export const AimagDestinationDetails = ({ attraction }) => {
    return (
        <Dialog>
            <AttractionTriggerComponent attraction={attraction} />
            <DialogContent className="sm:max-w-5xl p-0 overflow-hidden">
                <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-56 md:h-full bg-gray-100">
                        {attraction?.image && (
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 md:p-6 text-white">
                            <h2 className="text-lg md:text-xl font-semibold leading-snug line-clamp-2">
                                {attraction.name}
                            </h2>
                        </div>
                    </div>

                    <div className="p-5 md:p-6 flex flex-col gap-4 max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
                        <DialogHeader className="text-left">
                            <DialogTitle className="text-base md:text-lg font-semibold">
                                Why visit {attraction.name}?
                            </DialogTitle>
                            {attraction.note && (
                                <DialogDescription className="text-sm md:text-base leading-relaxed text-gray-700">
                                    {attraction.note}
                                </DialogDescription>
                            )}
                        </DialogHeader>

                        <div className="text-xs md:text-sm text-gray-500">
                            <p>Part of the wider {"Khövsgöl"} region – combine this stop with nearby lakeside towns, national parks, and nomadic camps for a fuller itinerary.</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export const AttractionTriggerComponent = ({ attraction }) => {
    return (
        <DialogTrigger>
            <div
                className="cursor-pointer rounded-2xl border border-gray-100 bg-white/95 px-4 py-4 text-sm text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-blue-50/10 transition flex gap-3"
            >
                <div className="flex-shrink-0 sr-only w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[11px] font-semibold text-blue-700">
                    {attraction.name}
                </div>
                <div className="flex-1 flex gap-3">
                    {attraction?.image && (
                        <div className="flex-shrink-0 w-28 h-20 sm:w-32 sm:h-24 rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
                            {attraction.name}
                        </p>
                        {attraction.note && (
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                {attraction.note}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </DialogTrigger>
    );
};

export const AimagHotelDetails = ({ hotel }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="cursor-pointer rounded-2xl border border-gray-100 bg-white/95 px-4 py-4 text-sm text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-blue-50/10 transition flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[11px] font-semibold text-blue-700">
                        H
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base line-clamp-2">
                                {hotel.name}
                            </p>
                            {hotel.address && (
                                <p className="text-xs md:text-sm text-gray-600 mb-1 line-clamp-2">
                                    {hotel.address}
                                </p>
                            )}
                        </div>
                        {hotel.link && (
                            <span className="mt-1 text-xs md:text-sm font-medium text-blue-600">
                                View details
                            </span>
                        )}
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader className="text-left">
                    <DialogTitle className="text-base md:text-lg font-semibold">
                        {hotel.name}
                    </DialogTitle>
                    {hotel.address && (
                        <DialogDescription className="text-sm md:text-base leading-relaxed text-gray-700">
                            {hotel.address}
                        </DialogDescription>
                    )}
                </DialogHeader>
                {hotel.link && (
                    <a
                        href={hotel.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        Open website
                    </a>
                )}
            </DialogContent>
        </Dialog>
    );
};