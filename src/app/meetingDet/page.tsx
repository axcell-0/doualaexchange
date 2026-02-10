'use client';

import React, { useState } from 'react';
import { ChevronLeft, MapPin, Copy, Check } from 'lucide-react';

interface MeetingDetailsProps {
  onBack?: () => void;
  onComplete?: () => void;
  userInfo?: {
    name: string;
    avatar?: string;
    rating: number;
    exchanges: number;
    location: string;
    verified?: boolean;
  };
  meetingLocation?: {
    name: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  transactionCode?: string;
}

const MeetingDetails: React.FC<MeetingDetailsProps> = ({
  onBack,
  onComplete,
  userInfo = {
    name: 'Jean-Paul N.',
    avatar: '',
    rating: 4.9,
    exchanges: 120,
    location: 'Akwa, Douala',
    verified: true,
  },
  meetingLocation = {
    name: 'Standard Chartered Bank, Akwa',
    address: 'Avenue de la Liberté, Douala',
    coordinates: {
      lat: 4.0511,
      lng: 9.7679,
    },
  },
  transactionCode = '4582',
}) => {
  const [codeCopied, setCodeCopied] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(transactionCode);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleOpenMaps = () => {
    const { lat, lng } = meetingLocation.coordinates;
    // Open in Google Maps
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(mapsUrl, '_blank');
  };

  const handleComplete = () => {
    setIsCompleting(true);
    setTimeout(() => {
      setIsCompleting(false);
      onComplete?.();
    }, 1500);
  };

  const codeDigits = transactionCode.split('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 z-20">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-semibold text-gray-900">
            Meeting Details
          </h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto pb-6">
        <div className="max-w-2xl mx-auto">
          {/* User Info Card */}
          <div className="bg-white mx-4 mt-4 sm:mx-6 sm:mt-6 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden">
                  {userInfo.avatar ? (
                    <img
                      src={userInfo.avatar}
                      alt={userInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-xl sm:text-2xl font-bold">
                      {userInfo.name.charAt(0)}
                    </span>
                  )}
                </div>
                {userInfo.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                    {userInfo.name}
                  </h2>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="font-medium">{userInfo.rating}</span>
                  <span className="text-gray-400">•</span>
                  <span>{userInfo.exchanges}+ exchanges</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{userInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Location */}
          <div className="mx-4 mt-4 sm:mx-6 sm:mt-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Meeting Location
              </h3>
              <button
                onClick={handleOpenMaps}
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Open in Maps
              </button>
            </div>

            {/* Map Container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Static map placeholder - Replace with actual map component */}
              <div className="relative h-48 sm:h-56 bg-gray-100">
                {/* You can integrate Google Maps, Mapbox, or Leaflet here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 via-emerald-50 to-blue-50 relative">
                    {/* Map illustration/placeholder */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2393c5fd' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                    
                    {/* Location Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                      <div className="relative">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <MapPin className="w-6 h-6 text-white fill-current" />
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rotate-45 -mt-2" />
                      </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-6 left-8 w-3 h-3 bg-blue-400 rounded-full opacity-60" />
                    <div className="absolute top-10 right-12 w-2 h-2 bg-emerald-400 rounded-full opacity-60" />
                    <div className="absolute bottom-10 left-16 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-60" />
                    <div className="absolute bottom-6 right-20 w-3 h-3 bg-emerald-500 rounded-full opacity-60" />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-4 sm:p-5 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                  {meetingLocation.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{meetingLocation.address}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Secret Transaction Code */}
          <div className="mx-4 mt-6 sm:mx-6 sm:mt-8 mb-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-2">
                Secret Transaction Code
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center mb-6">
                Share this code only after verifying the cash
              </p>

              {/* Code Display */}
              <div className="flex justify-center gap-2 sm:gap-3 mb-5">
                {codeDigits.map((digit, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 flex items-center justify-center"
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {digit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyCode}
                className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-center gap-2 text-gray-700 font-medium text-sm sm:text-base"
              >
                {codeCopied ? (
                  <>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    <span className="text-emerald-600">Code Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4 sm:px-6 sm:py-5">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleComplete}
            disabled={isCompleting}
            className={`w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              isCompleting
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300'
            }`}
          >
            {isCompleting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Completing...</span>
              </>
            ) : (
              <>
                <span>Transaction Completed</span>
                <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;