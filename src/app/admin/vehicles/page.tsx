'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Vehicle, STATUS_LABELS, STATUS_COLORS, LISTING_TYPE_LABELS } from '@/types/vehicle';

export default function AdminVehicles() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [listingTypeFilter, setListingTypeFilter] = useState('');
    const router = useRouter();

    const fetchVehicles = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem('token');

        const params = new URLSearchParams({
            page: currentPage.toString(),
            limit: '10',
            includeAll: 'true',
        });

        if (search) params.set('search', search);
        if (statusFilter) params.set('status', statusFilter);
        if (listingTypeFilter) params.set('listingType', listingTypeFilter);

        try {
            const res = await fetch(`/api/vehicles?${params}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                const data = await res.json();
                setVehicles(data.vehicles);
                setTotalPages(data.totalPages);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }
        setLoading(false);
    }, [currentPage, search, statusFilter, listingTypeFilter]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }
        fetchVehicles();
    }, [router, fetchVehicles]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this vehicle?')) return;

        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`/api/vehicles/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                fetchVehicles();
            } else {
                alert('Failed to delete vehicle');
            }
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            alert('Error deleting vehicle');
        }
    };

    const handleToggleFeatured = async (vehicle: Vehicle) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`/api/vehicles/${vehicle._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ featured: !vehicle.featured }),
            });

            if (res.ok) {
                fetchVehicles();
            }
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    const handleStatusChange = async (vehicle: Vehicle, newStatus: string) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`/api/vehicles/${vehicle._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                fetchVehicles();
            }
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    const getDisplayPrice = (vehicle: Vehicle) => {
        if (vehicle.price) {
            return `$${vehicle.price.toLocaleString()}`;
        }
        if (vehicle.priceMin && vehicle.priceMax) {
            return `$${vehicle.priceMin.toLocaleString()} - $${vehicle.priceMax.toLocaleString()}`;
        }
        if (vehicle.priceMin) {
            return `From $${vehicle.priceMin.toLocaleString()}`;
        }
        if (vehicle.priceMax) {
            return `Up to $${vehicle.priceMax.toLocaleString()}`;
        }
        return 'N/A';
    };

    return (
        <div className="min-h-screen bg-[#0F1614] p-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#66E5C4]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#004B3A]/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/admin" className="text-[#66E5C4] hover:text-[#EAE2D6] mb-2 inline-flex items-center transition-colors">
                            <span className="mr-2">←</span> Back to Dashboard
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F7F7F7] to-[#A9AAAE] font-heading">
                            Vehicle Listings
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/admin/vehicles/new"
                            className="inline-flex items-center bg-gradient-to-r from-[#004B3A] to-[#006B54] hover:from-[#66E5C4] hover:to-[#004B3A] hover:text-[#0A0A0A] text-[#F7F7F7] px-8 py-3 rounded-xl font-medium shadow-lg shadow-[#004B3A]/30 transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="mr-2 text-xl">+</span> Add Vehicle
                        </Link>
                    </motion.div>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Search vehicles..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && fetchVehicles()}
                            className="w-full p-3 bg-[#0A0A0A]/50 border border-white/10 rounded-xl text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]/50 focus:border-[#66E5C4] transition-all"
                        />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full p-3 bg-[#0A0A0A]/50 border border-white/10 rounded-xl text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]/50 focus:border-[#66E5C4] transition-all"
                        >
                            <option value="">All Statuses</option>
                            <option value="Available">Available</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Sold">Sold</option>
                        </select>
                        <select
                            value={listingTypeFilter}
                            onChange={(e) => setListingTypeFilter(e.target.value)}
                            className="w-full p-3 bg-[#0A0A0A]/50 border border-white/10 rounded-xl text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]/50 focus:border-[#66E5C4] transition-all"
                        >
                            <option value="">All Listing Types</option>
                            <option value="Order It">Order It</option>
                            <option value="Secure It">Secure It</option>
                            <option value="Buy It">Buy It</option>
                        </select>
                        <button
                            onClick={fetchVehicles}
                            className="bg-[#66E5C4] text-[#0A0A0A] px-6 py-3 rounded-xl font-bold uppercase tracking-wide hover:bg-[#EAE2D6] transition-colors shadow-lg shadow-[#66E5C4]/20"
                        >
                            Search
                        </button>
                    </div>
                </motion.div>

                {/* Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden"
                >
                    {loading ? (
                        <div className="p-20 text-center">
                            <div className="animate-spin h-12 w-12 border-4 border-[#66E5C4] border-t-transparent rounded-full mx-auto mb-6"></div>
                            <p className="text-[#A9AAAE] text-lg">Loading vehicles...</p>
                        </div>
                    ) : vehicles.length === 0 ? (
                        <div className="p-20 text-center">
                            <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">🔍</span>
                            </div>
                            <p className="text-[#F7F7F7] text-xl font-medium mb-2">No vehicles found</p>
                            <p className="text-[#A9AAAE] mb-6">Try adjusting your filters or add a new vehicle.</p>
                            <Link
                                href="/admin/vehicles/new"
                                className="inline-flex items-center text-[#66E5C4] hover:text-[#EAE2D6] font-medium transition-colors"
                            >
                                Add your first vehicle →
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#004B3A]/30 border-b border-white/10">
                                    <tr>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Image</th>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Vehicle</th>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Type</th>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Price</th>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Status</th>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Visibility</th>
                                        <th className="p-6 text-left text-[#66E5C4] font-bold uppercase text-sm tracking-wider">Featured</th>
                                        <th className="p-6 text-[#66E5C4] font-bold uppercase text-sm tracking-wider text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AnimatePresence>
                                        {vehicles.map((vehicle, index) => (
                                            <motion.tr
                                                key={vehicle._id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                                            >
                                                <td className="p-4 pl-6">
                                                    {vehicle.images?.[0] ? (
                                                        <div className="w-20 h-14 rounded-lg overflow-hidden border border-white/10">
                                                            <img
                                                                src={vehicle.images[0].url}
                                                                alt={vehicle.title}
                                                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-20 h-14 bg-[#A9AAAE]/10 rounded-lg border border-white/10 flex items-center justify-center">
                                                            <span className="text-xs text-[#A9AAAE]">No img</span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="p-4">
                                                    <div className="text-[#F7F7F7] font-bold text-lg max-w-xs truncate mb-1">
                                                        {vehicle.title}
                                                    </div>
                                                    <div className="text-sm text-[#A9AAAE] flex items-center">
                                                        <span className="bg-white/10 px-2 py-0.5 rounded text-xs mr-2">{vehicle.year}</span>
                                                        {vehicle.brand} {vehicle.model}
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <span className="px-3 py-1 bg-[#004B3A]/30 border border-[#004B3A] text-[#66E5C4] rounded-full text-xs font-medium">
                                                        {LISTING_TYPE_LABELS[vehicle.listingType]}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-[#EAE2D6] font-semibold">
                                                    {getDisplayPrice(vehicle)}
                                                </td>
                                                <td className="p-4">
                                                    <select
                                                        value={vehicle.status}
                                                        onChange={(e) => handleStatusChange(vehicle, e.target.value)}
                                                        className={`${STATUS_COLORS[vehicle.status]} text-white text-xs px-3 py-1.5 rounded-lg cursor-pointer border-none focus:outline-none focus:ring-2 focus:ring-[#66E5C4] shadow-md`}
                                                    >
                                                        <option value="Available">Available</option>
                                                        <option value="In Transit">In Transit</option>
                                                        <option value="Sold">Sold</option>
                                                    </select>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center">
                                                        <div className={`w-2 h-2 rounded-full mr-2 ${vehicle.published ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-gray-500'}`}></div>
                                                        <span className={`text-sm ${vehicle.published ? 'text-green-400' : 'text-gray-400'}`}>
                                                            {vehicle.published ? 'Published' : 'Draft'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <button
                                                        onClick={() => handleToggleFeatured(vehicle)}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${vehicle.featured
                                                            ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.2)]'
                                                            : 'bg-white/5 text-[#A9AAAE] border border-white/10 hover:bg-white/10'
                                                            }`}
                                                    >
                                                        {vehicle.featured ? '★ Featured' : '☆ Feature'}
                                                    </button>
                                                </td>
                                                <td className="p-4 pr-6">
                                                    <div className="flex gap-3 justify-center">
                                                        <Link
                                                            href={`/admin/vehicles/${vehicle._id}/edit`}
                                                            className="p-2 bg-[#66E5C4]/10 hover:bg-[#66E5C4] text-[#66E5C4] hover:text-[#0A0A0A] rounded-lg transition-all duration-300 transform hover:scale-110"
                                                            title="Edit"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(vehicle._id)}
                                                            className="p-2 bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                                                            title="Delete"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    )}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[#F7F7F7] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#66E5C4] hover:text-[#0A0A0A] transition-all duration-300"
                        >
                            Previous
                        </button>
                        <span className="px-6 py-2 text-[#A9AAAE] flex items-center bg-white/5 rounded-xl border border-white/5">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[#F7F7F7] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#66E5C4] hover:text-[#0A0A0A] transition-all duration-300"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
