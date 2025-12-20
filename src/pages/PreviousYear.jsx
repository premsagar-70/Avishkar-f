import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Archive, ArrowRight } from 'lucide-react';
import api from '../services/api';

const PreviousYear = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events');
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                // Filter for past approved events
                const pastEvents = response.data.filter(e => {
                    const eventDate = new Date(e.date);
                    return e.status === 'approved' && eventDate < today;
                });

                setEvents(pastEvents);

                // Extract unique years
                const uniqueYears = [...new Set(pastEvents.map(e => new Date(e.date).getFullYear()))];
                // Sort years descending
                uniqueYears.sort((a, b) => b - a);
                setYears(uniqueYears);

                if (uniqueYears.length > 0) {
                    setSelectedYear(uniqueYears[0]);
                }

            } catch (error) {
                console.error("Failed to fetch events", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents = selectedYear
        ? events.filter(e => new Date(e.date).getFullYear() === selectedYear)
        : [];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-800">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-gray-900 pb-20 bg-gray-50">
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-blue-700 mb-4 shadow-sm">
                        <Archive size={16} />
                        <span className="text-sm font-medium">Archive</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Previous Years' Events</h1>
                    <p className="text-xl text-gray-600">Explore our past events and achievements.</p>
                </div> */}

                {events.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <Archive size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500 text-lg mb-6">No archived events found.</p>
                        <Link to="/events" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                            Return to Upcoming Events <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Year Selector */}
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-8 py-3 rounded-xl text-lg font-bold transition-all duration-300 shadow-sm
                                    ${selectedYear === year
                                            ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-600 ring-offset-2'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600 border border-gray-200'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        {/* Events Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event) => (
                                <div key={event.id} className="group h-full">
                                    <Link to={`/events/${event.id}`}>
                                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden grayscale hover:grayscale-0 cursor-pointer">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={event.imageUrl || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-white shadow-sm">
                                                    Ended
                                                </div>
                                            </div>

                                            <div className="p-6 flex-grow flex flex-col">
                                                <div className="flex items-center text-sm text-gray-500 font-medium mb-3">
                                                    <Calendar size={16} className="mr-2" />
                                                    {new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                                    {event.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                                                    {event.description}
                                                </p>

                                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                                    <span className="text-sm font-medium text-gray-400">
                                                        Category: <span className="text-gray-600 capitalize">{event.category}</span>
                                                    </span>
                                                    <span className="text-blue-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        View Details <ArrowRight size={14} className="ml-1" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PreviousYear;
