'use client';

import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GiFamilyHouse } from 'react-icons/gi';
import { IoIosNotifications, IoMdRefresh } from 'react-icons/io';
import { IoPaperPlane, IoStar } from 'react-icons/io5';
import { MdLocationPin, MdStore, MdSyncAlt } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';

const DLAIcon = () => (
  <svg className="size-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
      fill="currentColor"
    />
  </svg>
);

const ReceivedExchangeOffers: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f8f6] text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Desktop Nav */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="text-[#13ec13] size-8">
                  <DLAIcon />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                  DLA Exchange
                </h2>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-600 hover:text-[#13ec13] transition-colors"
                >
                  Tableau de bord
                </a>
                <a href="#" className="text-sm font-semibold text-[#13ec13]">
                  Mes requêtes
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-600 hover:text-[#13ec13] transition-colors"
                >
                  Historique
                </a>
              </nav>
            </div>

            {/* Desktop Right Icons + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Desktop Search */}
              <div className="relative hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <span className="material-symbols-outlined text-lg"><CiSearch size={25}/></span>
                </span>
                <input
                  type="text"
                  placeholder="Rechercher une offre..."
                  className="w-64 pl-10 pr-4 py-2 text-sm bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#13ec13]/50 transition-all"
                />
              </div>
              {/* Notifications */}
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors relative">
                <span className="material-symbols-outlined"><IoIosNotifications size={25}/></span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              {/* Profile */}
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined"><RiAccountCircleLine size={30}/></span>
              </button>
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
              >
                <span className="material-symbols-outlined">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
            <a
              href="#"
              className="block text-sm font-semibold text-gray-600 hover:text-[#13ec13] transition-colors"
            >
              Tableau de bord
            </a>
            <a href="#" className="block text-sm font-semibold text-[#13ec13]">
              Mes requêtes
            </a>
            <a
              href="#"
              className="block text-sm font-semibold text-gray-600 hover:text-[#13ec13] transition-colors"
            >
              Historique
            </a>
            <div className="relative pt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <span className="material-symbols-outlined text-lg">
                    <CiSearch/>
                    </span>
              </span>
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#13ec13]/50 transition-all"
              />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="grow max-w-5xl mx-auto w-full px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Offres de Change Reçues
            </h1>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#13ec13]/10 border border-[#13ec13]/20 rounded-lg w-fit">
              <span className="material-symbols-outlined text-[#13ec13] text-sm"><MdSyncAlt size={20}/></span>
              <p className="text-sm font-medium text-gray-700">
                Votre demande :{' '}
                <span className="font-bold text-gray-900">1,000 EUR</span> vers{' '}
                <span className="font-bold text-gray-900">XAF</span>
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all text-sm font-bold">
            <span className="material-symbols-outlined text-lg"><IoMdRefresh/></span>
            Actualiser la liste
          </button>
        </div>

        {/* Sorting Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13ec13] text-white text-sm font-bold transition-all">
            <span className="material-symbols-outlined text-lg"><FaArrowTrendUp/></span>
            Meilleur Taux
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-all">
            <span className="material-symbols-outlined text-lg"><IoPaperPlane/></span>
            Plus Proche
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-all">
            <span className="material-symbols-outlined text-lg"><IoStar/></span>
            Mieux Notés
          </button>
        </div>

        {/* Offers List */}
        <div className="space-y-4">
          {/* Card 1 - Best Offer */}
          <div className="group relative bg-white rounded-xl border-2 border-[#13ec13] shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center hover:border-[#13ec13]/80 transition-all">
            <div className="absolute -top-3 left-6 bg-[#13ec13] text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Meilleure Offre
            </div>
            <div className="size-20 bg-[#13ec13]/20 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#13ec13] text-2xl">
                <GiFamilyHouse size={50}/>
              </span>
            </div>
            <div className="grow space-y-3 w-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    Douala Express Change
                    <span className="material-symbols-outlined text-blue-500 text-lg" title="Vérifié">
                      verified
                    </span>
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm"><MdLocationPin/></span>
                      Akwa, 0.8 km
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-yellow-500 fill-[1]">
                        <IoStar/>
                      </span>
                      4.9 (124 avis)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter block">
                    Vous recevez
                  </span>
                  <span className="text-2xl font-black text-gray-900">
                    656,000 XAF
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Taux de change</span>
                    <span className="text-lg font-bold text-[#13ec13]">1 EUR = 656.0 XAF</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Temps estimé</span>
                    <span className="text-sm font-semibold text-gray-700">
                      ~15 minutes
                    </span>
                  </div>
                </div>
                <button className="bg-[#13ec13] hover:bg-[#13ec13]/90 text-gray-900 px-8 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 group-hover:scale-105">
                  Choisir
                  <span className="material-symbols-outlined"><FaChevronRight/></span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Closest */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-all">
            <div className="size-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAc4K-hndReRb0Yz_bsXcXqNeAeRQNIZRZiv--1bpVKCDuPW3-X_i2_5SZnkUx6qe9Ah0elrpTYV03rwbZkmdxJ0SVYf6ld7_zBt4wvXBwobvJsqa8BOf13UqHFCE_Z6VkPOLc_nlogDzJtyz2bZmBBC58db_oa6dfdDJ3uZE7lEH3qbhjMsFapKKzDHTAhDPXkjO2j9Lva4TzCVftNCDQrQ7qRcAr9K6NYHctOp_4Bvs0ehn9o6B5l426SkFgVLeAnh18MzaM13Hk')",
                }}
              ></div>
            </div>
            <div className="grow space-y-3 w-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Akwa Finance S.A.</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1 font-bold text-gray-700">
                      <span className="material-symbols-outlined text-sm text-[#13ec13]"><IoPaperPlane/></span>
                      0.2 km
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-yellow-500"><IoStar/></span>
                      4.7 (89 avis)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter block">
                    Vous recevez
                  </span>
                  <span className="text-2xl font-black text-gray-900">
                    655,500 XAF
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Taux de change</span>
                    <span className="text-lg font-bold text-gray-900">
                      1 EUR = 655.5 XAF
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Statut</span>
                    <span className="text-sm font-semibold text-[#13ec13] flex items-center gap-1">
                      <span className="size-2 bg-[#13ec13] rounded-full animate-pulse"></span>
                      Ouvert
                    </span>
                  </div>
                </div>
                <button className="bg-[#13ec13]/20 hover:bg-[#13ec13] text-gray-900 px-8 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2">
                  Choisir
                  <span className="material-symbols-outlined"><FaChevronRight /></span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Good Rating */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-all">
            <div className="size-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-gray-400 text-4xl"><MdStore/></span>
            </div>
            <div className="grow space-y-3 w-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bonanjo Money Hub</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm"><MdLocationPin/></span>
                      Bonanjo, 2.5 km
                    </span>
                    <span className="flex items-center gap-1 font-bold text-yellow-600">
                      <span className="material-symbols-outlined text-sm fill-[1]"><IoStar/></span>
                      5.0 (56 avis)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter block">
                    Vous recevez
                  </span>
                  <span className="text-2xl font-black text-gray-900">
                    654,000 XAF
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Taux de change</span>
                    <span className="text-lg font-bold text-gray-900">
                      1 EUR = 654.0 XAF
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Certifié</span>
                    <span className="text-sm font-semibold text-gray-500">DLA Exchange Pro</span>
                  </div>
                </div>
                <button className="bg-[#13ec13]/20 hover:bg-[#13ec13] text-gray-900 px-8 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2">
                  Choisir
                  <span className="material-symbols-outlined"><FaChevronRight /></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map View Toggle / Preview */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200 h-64 relative bg-gray-200">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBJNkAeVyGfq9eUrpSZzGSJMOJw7tw0Q1k83K6CWj4V-Ps-yOGpPc99c0A1kPc-CBkuuz_-Os4ZapLGCOhtjR9lPeeivdv0Jy6U7SrImwCYARYRLHInkQTEO6qyki4LP4xGVtbVDFIS3GzHqAOE6J6RAPAv5PjyZuEzBBK1vZNx0zcxNTUZ0fovsyIeqGj3I9fCon27MP3GdStK_YIo_1fTiNQUzkK3yHvToA503afzRYI_dFxScg_YIwn-ZD8bSnFhbmUs70lfx4')",
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="flex justify-between items-center w-full">
              <div className="text-white">
                <h4 className="text-xl font-bold">Voir sur la carte</h4>
                <p className="text-sm text-gray-200">Visualisez les agences autour d&apos;Akwa et Bonanjo</p>
              </div>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                Ouvrir la carte
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8 pb-12 text-center space-y-4">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Les taux indiqués sont garantis par les bureaux de change pendant 30 minutes après
            acceptation de l&apos;offre. Assurez-vous de vérifier l&apos;adresse exacte de l&apos;agence
            sélectionnée.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-xs font-bold text-gray-400 hover:text-[#13ec13] underline uppercase tracking-widest"
            >
              Aide & Support
            </a>
            <a
              href="#"
              className="text-xs font-bold text-gray-400 hover:text-[#13ec13] underline uppercase tracking-widest"
            >
              Conditions de service
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ReceivedExchangeOffers;