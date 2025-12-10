import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"
import { cn } from "../../lib/utils"

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
                className="cursor-pointer group/attr-card rounded-2xl border border-gray-100 bg-white/95 text-sm text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-blue-50/10 transition flex gap-3"
            >
                <div className="flex-shrink-0 sr-only w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[11px] font-semibold text-blue-700">
                    {attraction.name}
                </div>
                <div className={'flex-1 flex gap-3 h-full flex item-center'}>
                    {attraction?.image && (
                        <div className="flex-shrink-0 w-30 h-full sm:w-40 mask-alpha mask-cover transition-all ease-linear duration-300 mask-r-from-20% group-hover/attr-card:mask-r-from-100% aspect-square rounded-l-2xl overflow-hidden bg-gray-100">
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="flex-1 p-4">
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
            <DialogTrigger asChild>
                <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-40 w-full overflow-hidden">
                        <img
                            src={hotel.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                            alt={hotel.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        {hotel.rating && (
                            <div className="absolute bottom-2 left-2 flex items-center rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`h-3 w-3 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                        </svg>
                                    ))}
                                    <span className="ml-1 text-xs font-medium text-white">{hotel.rating}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        <h3 className="mb-1 line-clamp-1 text-sm font-semibold text-gray-900 md:text-base">
                            {hotel.name}
                        </h3>
                        {hotel.address && (
                            <p className="mb-2 line-clamp-1 text-xs text-gray-600">
                                {hotel.address}
                            </p>
                        )}
                        {hotel.description && (
                            <p className="line-clamp-2 text-xs text-gray-600">
                                {hotel.description}
                            </p>
                        )}
                        <div className="mt-3 flex items-center justify-between">
                            <span className="inline-flex items-center text-xs font-medium text-blue-600">
                                View details
                                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
                <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-64 md:h-[500px] bg-gray-200">
                        <img
                            src={hotel.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 md:p-6 text-white">
                            <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                                {hotel.name}
                            </h2>
                            {hotel.rating && (
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                        </svg>
                                    ))}
                                    <span className="text-sm text-white/90 ml-1">{hotel.rating}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-5 md:p-8 flex flex-col gap-4 max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
                        <DialogHeader className="text-left">
                            <DialogTitle className="text-xl md:text-2xl font-semibold">
                                {hotel.name}
                            </DialogTitle>
                            {hotel.address && (
                                <div className="flex items-center gap-2 text-gray-600 mt-1">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm">{hotel.address}</span>
                                </div>
                            )}
                        </DialogHeader>

                        <div className="space-y-4">
                            {hotel.description && (
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">About this hotel</h4>
                                    <p className="text-sm text-gray-700">{hotel.description}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                {hotel.amenities && hotel.amenities.length > 0 && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Amenities</h4>
                                        <ul className="space-y-2">
                                            {hotel.amenities.slice(0, 5).map((amenity, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {amenity}
                                                </li>
                                            ))}
                                            {hotel.amenities.length > 5 && (
                                                <li className="text-xs text-gray-500">+{hotel.amenities.length - 5} more</li>
                                            )}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        {hotel.contact?.phone && (
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <a href={`tel:${hotel.contact.phone}`} className="hover:underline">
                                                    {hotel.contact.phone}
                                                </a>
                                            </div>
                                        )}
                                        {hotel.contact?.email && (
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <a href={`mailto:${hotel.contact.email}`} className="hover:underline">
                                                    {hotel.contact.email}
                                                </a>
                                            </div>
                                        )}
                                        {hotel.contact?.website && (
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                                <a 
                                                    href={hotel.contact.website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Visit website
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 mt-auto">
                            <a
                                href={hotel.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                            >
                                {hotel.link ? 'Book Now' : 'View Details'}
                            </a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};