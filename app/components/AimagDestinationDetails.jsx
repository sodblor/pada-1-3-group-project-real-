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
            <DialogContent className="sm:max-w-5xl p-0 overflow-hidden" style={{ background: '#FFFFFF' }}>
                <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-56 md:h-full" style={{ background: '#DDE6ED' }}>
                        {attraction?.image && (
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#27374D] via-[#27374D]/50 to-transparent p-4 md:p-6">
                            <h2 className="text-lg md:text-xl font-semibold leading-snug line-clamp-2" style={{ color: '#DDE6ED' }}>
                                {attraction.name}
                            </h2>
                        </div>
                    </div>

                    <div className="p-5 md:p-6 flex flex-col gap-4 max-h-[70vh] md:max-h-[80vh] overflow-y-auto" style={{ background: '#FFFFFF' }}>
                        <DialogHeader className="text-left">
                            <DialogTitle className="text-base md:text-lg font-semibold" style={{ color: '#27374D' }}>
                                Why visit {attraction.name}?
                            </DialogTitle>
                            {attraction.note && (
                                <DialogDescription className="text-sm md:text-base leading-relaxed" style={{ color: '#526D82' }}>
                                    {attraction.note}
                                </DialogDescription>
                            )}
                        </DialogHeader>

                        <div className="text-xs md:text-sm" style={{ color: '#526D82' }}>
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
                        <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 mask-alpha mask-cover transition-all ease-linear duration-300 mask-r-from-20% group-hover/attr-card:mask-r-from-100% aspect-square rounded-l-2xl overflow-hidden bg-gray-100">
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="flex-1 p-4 min-w-0">
                        <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base line-clamp-1">
                            {attraction.name}
                        </p>
                        {attraction.note && (
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed line-clamp-3">
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
                <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ border: '2px solid #DDE6ED' }}>
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="relative w-full md:w-64 h-48 md:h-48 flex-shrink-0 overflow-hidden" style={{ background: '#DDE6ED' }}>
                            <img
                                src={hotel.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt={hotel.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {hotel.rating && (
                                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-lg" style={{ background: '#FFFFFF' }}>
                                    <span className="text-sm font-bold" style={{ color: '#27374D' }}>{hotel.rating}</span>
                                    <svg className="w-4 h-4" style={{ color: '#f59e0b' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-5 flex flex-col">
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2" style={{ color: '#27374D' }}>
                                    {hotel.name}
                                </h3>
                                
                                {hotel.address && (
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-sm line-clamp-1" style={{ color: '#526D82' }}>
                                            {hotel.address}
                                        </p>
                                    </div>
                                )}

                                {hotel.description && (
                                    <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: '#526D82' }}>
                                        {hotel.description}
                                    </p>
                                )}

                                {/* Amenities */}
                                {hotel.amenities && hotel.amenities.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {hotel.amenities.slice(0, 4).map((amenity, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 rounded-md" style={{ background: '#DDE6ED', color: '#27374D' }}>
                                                {amenity}
                                            </span>
                                        ))}
                                        {hotel.amenities.length > 4 && (
                                            <span className="text-xs px-2.5 py-1 rounded-md" style={{ background: '#DDE6ED', color: '#526D82' }}>
                                                +{hotel.amenities.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#DDE6ED' }}>
                                <div className="flex items-center gap-2">
                                    {hotel.rating && (
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-semibold" style={{ color: '#27374D' }}>{hotel.rating}</span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg 
                                                        key={i} 
                                                        className={`w-3.5 h-3.5 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105" style={{ background: '#526D82', color: '#FFFFFF' }}>
                                    View details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-5xl p-0 overflow-hidden" style={{ background: '#FFFFFF' }}>
                <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-64 md:h-[600px]" style={{ background: '#DDE6ED' }}>
                        <img
                            src={hotel.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                        />
                        {hotel.rating && (
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-2 rounded-lg" style={{ background: '#FFFFFF' }}>
                                <span className="text-base font-bold" style={{ color: '#27374D' }}>{hotel.rating}</span>
                                <svg className="w-5 h-5" style={{ color: '#f59e0b' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>
                            </div>
                        )}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col gap-6 max-h-[70vh] md:max-h-[600px] overflow-y-auto" style={{ background: '#FFFFFF' }}>
                        <DialogHeader className="text-left">
                            <DialogTitle className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#27374D' }}>
                                {hotel.name}
                            </DialogTitle>
                            {hotel.address && (
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm" style={{ color: '#526D82' }}>{hotel.address}</span>
                                </div>
                            )}
                            {hotel.rating && (
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1">
                                        <span className="text-lg font-bold" style={{ color: '#27374D' }}>{hotel.rating}</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg 
                                                    key={i} 
                                                    className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-sm" style={{ color: '#526D82' }}>Rating</span>
                                </div>
                            )}
                        </DialogHeader>

                        <div className="space-y-6">
                            {hotel.description && (
                                <div>
                                    <h4 className="font-semibold mb-2 text-lg" style={{ color: '#27374D' }}>About this hotel</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: '#526D82' }}>{hotel.description}</p>
                                </div>
                            )}

                            {hotel.amenities && hotel.amenities.length > 0 && (
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg" style={{ color: '#27374D' }}>Amenities</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {hotel.amenities.map((amenity, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span style={{ color: '#526D82' }}>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {hotel.contact && (
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg" style={{ color: '#27374D' }}>Contact</h4>
                                    <div className="space-y-3">
                                        {hotel.contact.phone && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <a href={`tel:${hotel.contact.phone}`} className="hover:underline" style={{ color: '#526D82' }} onMouseEnter={(e) => e.target.style.color = '#27374D'} onMouseLeave={(e) => e.target.style.color = '#526D82'}>
                                                    {hotel.contact.phone}
                                                </a>
                                            </div>
                                        )}
                                        {hotel.contact.email && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <a href={`mailto:${hotel.contact.email}`} className="hover:underline" style={{ color: '#526D82' }} onMouseEnter={(e) => e.target.style.color = '#27374D'} onMouseLeave={(e) => e.target.style.color = '#526D82'}>
                                                    {hotel.contact.email}
                                                </a>
                                            </div>
                                        )}
                                        {hotel.contact.website && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#526D82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                                <a 
                                                    href={hotel.contact.website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                    style={{ color: '#526D82' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#27374D'}
                                                    onMouseLeave={(e) => e.target.style.color = '#526D82'}
                                                >
                                                    Visit website
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 mt-auto border-t" style={{ borderColor: '#DDE6ED' }}>
                            <a
                                href={hotel.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105"
                                style={{ background: '#526D82', color: '#FFFFFF' }}
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