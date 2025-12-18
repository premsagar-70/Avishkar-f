import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminSettings = () => {
    const [deadline, setDeadline] = useState('');
    const [archiveYear, setArchiveYear] = useState(new Date().getFullYear().toString());
    const [loading, setLoading] = useState(false);
    const [archiveLoading, setArchiveLoading] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await api.get('/settings');
                // Format for datetime-local input: YYYY-MM-DDTHH:mm
                if (response.data.registrationDeadline) {
                    const date = new Date(response.data.registrationDeadline);
                    const formatted = date.toISOString().slice(0, 16);
                    setDeadline(formatted);
                }
            } catch (error) {
                console.error("Failed to fetch settings", error);
            }
        };
        fetchSettings();
    }, []);

    const handleSave = async () => {
        setLoading(true);
        try {
            await api.put('/settings', { registrationDeadline: new Date(deadline).toISOString() });
            alert('Settings updated successfully!');
        } catch (error) {
            alert('Failed to update settings');
        } finally {
            setLoading(false);
        }
    };

    const handleArchive = async () => {
        if (!window.confirm(`Are you sure you want to archive all currently APPROVED events to the year ${archiveYear}? This will move them to 'Previous Years' history.`)) {
            return;
        }

        setArchiveLoading(true);
        try {
            await api.post('/events/archive', { year: archiveYear });
            alert(`Events archived to ${archiveYear} successfully!`);
        } catch (error) {
            console.error("Archive failed", error);
            alert('Failed to archive events.');
        } finally {
            setArchiveLoading(false);
        }
    };

    return (
        <div className="max-w-xl space-y-8">
            <h2 className="text-2xl font-bold mb-6">Global Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Registration Deadline</label>
                    <p className="text-sm text-gray-500 mb-2">This date controls the countdown timer on the Home page.</p>
                    <input
                        type="datetime-local"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    />
                </div>
                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
                >
                    {loading ? 'Saving...' : 'Save Settings'}
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Event Archival</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Use this to close the current event season. All currently <strong>Approved</strong> events will be marked as <strong>Completed </strong>
                    and assigned to the year specified below. They will stop appearing in the main "Upcoming Events" list and move to the "Previous Year" archive.
                </p>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Archive Year</label>
                    <input
                        type="text"
                        value={archiveYear}
                        onChange={(e) => setArchiveYear(e.target.value)}
                        placeholder="e.g. 2024"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 border p-2"
                    />
                </div>

                <button
                    onClick={handleArchive}
                    disabled={archiveLoading}
                    className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 disabled:bg-orange-300 transition-colors flex justify-center items-center gap-2"
                >
                    {archiveLoading ? 'Archiving...' : 'Archive All Current Events'}
                </button>
            </div>
        </div>
    );
};

export default AdminSettings;
