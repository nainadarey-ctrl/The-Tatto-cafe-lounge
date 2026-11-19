import React, { useState, useMemo, useRef } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, AUTHENTIC_MENU_CARDS } from '../data/menuData';
import { Leaf, Search, X, FileText, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jainOnly, setJainOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('grid');
  const [selectedOriginalMenu, setSelectedOriginalMenu] = useState<{
    title: string;
    subtitle: string;
    image: string;
  } | null>(null);

  const tabsRef = useRef<HTMLDivElement>(null);
  const cardsSliderRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll state for tabs
  const [isDraggingTabs, setIsDraggingTabs] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ? true : item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesJain = jainOnly ? item.isJain : true;
      return matchesCategory && matchesSearch && matchesJain;
    });
  }, [activeCategory, searchQuery, jainOnly]);

  // Slide Category Tabs
  const slideTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      tabsRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Slide Food Cards Carousel
  const slideCards = (direction: 'left' | 'right') => {
    if (cardsSliderRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      cardsSliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Mouse Drag handlers for category tabs
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsRef.current) return;
    setIsDraggingTabs(true);
    setStartX(e.pageX - tabsRef.current.offsetLeft);
    setScrollLeft(tabsRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingTabs || !tabsRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    tabsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDraggingTabs(false);
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6D3C]">
              Explore Our Menu
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B1412] font-normal leading-tight">
            Your Favourites, <br />
            <span className="italic font-script text-4xl sm:text-6xl text-[#C5A059] lowercase">
              and something
            </span>{' '}
            New.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#685E57] max-w-xl mx-auto font-light">
            Every recipe crafted with authentic spices, fresh ingredients and heartfelt hospitality opposite Hawa Mahal.
          </p>
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8E6D3C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search pizzas, pastas, platters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 bg-white border border-[#EDE5D8] rounded-full text-xs font-light text-[#1B1412] placeholder-[#8E6D3C]/60 focus:outline-none focus:border-[#C5A059] transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-[#8E6D3C] hover:text-[#1B1412] bg-[#FAF7F2] px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Dietary Toggles & View Mode */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setJainOnly(!jainOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wider font-medium transition-all ${
                jainOnly
                  ? 'bg-[#6E4E2A] text-white border border-[#6E4E2A]'
                  : 'bg-white text-[#54433B] border border-[#EDE5D8] hover:border-[#C5A059]'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${jainOnly ? 'text-[#DFCAAB]' : 'text-emerald-600'}`} />
              <span>Jain Friendly ({MENU_ITEMS.filter((i) => i.isJain).length})</span>
            </button>

            {/* Slider / Grid View Toggle */}
            <div className="flex items-center bg-white border border-[#EDE5D8] rounded-full p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-[#1B1412] text-[#DFCAAB]' : 'text-[#8E6D3C] hover:text-[#1B1412]'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('slider')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'slider' ? 'bg-[#1B1412] text-[#DFCAAB]' : 'text-[#8E6D3C] hover:text-[#1B1412]'
                }`}
                title="Slider / Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation Slider with Left & Right Arrows */}
        <div className="relative max-w-5xl mx-auto mb-10">
          {/* Left Arrow Button */}
          <button
            onClick={() => slideTabs('left')}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1B1412] text-[#DFCAAB] border border-[#C5A059]/40 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1B1412] transition-all shadow-md group"
            aria-label="Slide categories left"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => slideTabs('right')}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1B1412] text-[#DFCAAB] border border-[#C5A059]/40 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1B1412] transition-all shadow-md group"
            aria-label="Slide categories right"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Scrollable / Slidable Category Buttons (no ugly scrollbar, supports drag & arrows) */}
          <div
            ref={tabsRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex items-center overflow-x-auto no-scrollbar py-2 px-8 sm:px-10 gap-2 sm:gap-3 select-none scroll-smooth ${
              isDraggingTabs ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {MENU_CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? MENU_ITEMS.length
                  : MENU_ITEMS.filter((i) => i.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-[#1B1412] text-[#DFCAAB] shadow-md border border-[#C5A059]/40 ring-1 ring-[#C5A059]/40'
                      : 'bg-white text-[#54433B] border border-[#EDE5D8] hover:border-[#C5A059] hover:bg-[#F4EFE6]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-[#C5A059]/30 text-[#DFCAAB]' : 'bg-[#EDE5D8] text-[#685E57]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Subtle slide hint indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] uppercase tracking-wider text-[#8E6D3C]/70">
            <span>← Slide or drag categories →</span>
          </div>
        </div>

        {/* Menu Items Container: Slider View OR Grid View */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EDE5D8] max-w-md mx-auto shadow-sm">
            <p className="font-serif text-xl text-[#1B1412]">No dishes found</p>
            <p className="text-xs text-[#685E57] mt-1">Try changing your search term or filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setJainOnly(false);
              }}
              className="mt-4 px-5 py-2 bg-[#FAF7F2] border border-[#C5A059] text-xs font-medium rounded-full text-[#1B1412] hover:bg-[#C5A059]/10"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'slider' ? (
          /* --- SLIDER / CAROUSEL VIEW --- */
          <div className="relative">
            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs uppercase tracking-wider text-[#8E6D3C] font-medium">
                Showing {filteredItems.length} Dishes • Slide to explore
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => slideCards('left')}
                  className="w-10 h-10 rounded-full bg-[#1B1412] text-[#DFCAAB] border border-[#C5A059]/40 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1B1412] transition-colors shadow-sm"
                  aria-label="Slide dishes left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => slideCards('right')}
                  className="w-10 h-10 rounded-full bg-[#1B1412] text-[#DFCAAB] border border-[#C5A059]/40 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1B1412] transition-colors shadow-sm"
                  aria-label="Slide dishes right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Cards Slider */}
            <div
              ref={cardsSliderRef}
              className="flex items-stretch overflow-x-auto no-scrollbar gap-6 pb-6 scroll-smooth snap-x snap-mandatory"
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start group bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#EDE5D8] shadow-sm hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Food Image */}
                    <div className="relative h-56 overflow-hidden bg-[#EDE5D8]">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Category Tag */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-full bg-[#1B1412]/80 backdrop-blur-sm text-[10px] uppercase tracking-wider font-medium text-[#DFCAAB] border border-[#C5A059]/30">
                          {item.category}
                        </span>
                        {item.tag && (
                          <span className="px-2.5 py-1 rounded-full bg-[#C5A059] text-[10px] uppercase tracking-wider font-semibold text-[#0F0B09]">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Veg & Jain Indicators */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {item.isJain && (
                          <span
                            className="px-2 py-0.5 rounded-full bg-amber-900/90 text-amber-200 text-[10px] font-medium border border-amber-500/30 flex items-center gap-1"
                            title="Jain Prepared"
                          >
                            <Leaf className="w-2.5 h-2.5 text-amber-300" />
                            <span>Jain</span>
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span
                            className="w-5 h-5 rounded-md bg-white/90 border border-emerald-600 flex items-center justify-center"
                            title="100% Vegetarian"
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                          </span>
                        )}
                      </div>

                      {/* Price Tag Overlay on Card */}
                      <div className="absolute bottom-3 right-3 bg-[#1B1412]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#C5A059]/40 text-[#DFCAAB] font-serif text-lg font-bold">
                        {item.formattedPrice}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1B1412] mb-2 group-hover:text-[#8E6D3C] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {item.description ? (
                        <p className="text-xs sm:text-sm text-[#685E57] font-light leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      ) : (
                        <p className="text-xs text-[#8E6D3C] italic">Freshly prepared to order in café style.</p>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-5 pt-3 border-t border-[#EDE5D8]/70 flex items-center justify-between text-[11px] text-[#685E57]">
                    <span className="text-xs font-serif text-[#8E6D3C]">The Tattoo Cafe Original</span>
                    <div className="flex items-center gap-1 text-[#C5A059] font-medium">
                      <span>* Taxes applicable</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* --- GRID VIEW --- */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#EDE5D8] shadow-sm hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Food Image with Hover Effect & Badges */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#EDE5D8]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-[#1B1412]/80 backdrop-blur-sm text-[10px] uppercase tracking-wider font-medium text-[#DFCAAB] border border-[#C5A059]/30">
                        {item.category}
                      </span>
                      {item.tag && (
                        <span className="px-2.5 py-1 rounded-full bg-[#C5A059] text-[10px] uppercase tracking-wider font-semibold text-[#0F0B09]">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Veg & Jain Indicators */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      {item.isJain && (
                        <span
                          className="px-2 py-0.5 rounded-full bg-amber-900/90 text-amber-200 text-[10px] font-medium border border-amber-500/30 flex items-center gap-1"
                          title="Jain Prepared"
                        >
                          <Leaf className="w-2.5 h-2.5 text-amber-300" />
                          <span>Jain</span>
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span
                          className="w-5 h-5 rounded-md bg-white/90 border border-emerald-600 flex items-center justify-center"
                          title="100% Vegetarian"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                        </span>
                      )}
                    </div>

                    {/* Price Tag Overlay on Card */}
                    <div className="absolute bottom-3 right-3 bg-[#1B1412]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#C5A059]/40 text-[#DFCAAB] font-serif text-lg font-bold">
                      {item.formattedPrice}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1B1412] mb-2 group-hover:text-[#8E6D3C] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {item.description ? (
                      <p className="text-xs sm:text-sm text-[#685E57] font-light leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    ) : (
                      <p className="text-xs text-[#8E6D3C] italic">Freshly prepared to order in café style.</p>
                    )}
                  </div>
                </div>

                {/* Card Footer with Details */}
                <div className="px-6 pb-5 pt-3 border-t border-[#EDE5D8]/70 flex items-center justify-between text-[11px] text-[#685E57]">
                  <span className="text-xs font-serif text-[#8E6D3C]">The Tattoo Cafe Original</span>
                  <div className="flex items-center gap-1 text-[#C5A059] font-medium">
                    <span>* Taxes applicable</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section: Explore Original Menu Cards (from uploaded photo source) */}
        <div className="mt-20 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#1B1412] text-white border border-[#C5A059]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#DFCAAB] text-[10px] uppercase tracking-widest font-medium">
                <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Verified Source</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#FAF7F2]">
                Explore Original <br />
                <span className="italic font-script text-4xl sm:text-5xl text-[#C5A059] lowercase">
                  printed
                </span>{' '}
                Menu Cards
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE5D8]/80 font-light leading-relaxed">
                Click any page to view high-resolution scans of the physical menu cards at The Tattoo Cafe & Lounge opposite Hawa Mahal.
              </p>
            </div>

            {/* Menu Cards Thumbnail Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {AUTHENTIC_MENU_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedOriginalMenu(card)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-[#C5A059]/30 bg-black/40 hover:border-[#DFCAAB] transition-all duration-300 relative shadow-md"
                >
                  <div className="h-32 sm:h-36 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2.5 bg-[#0F0B09] text-center">
                    <span className="block text-[11px] font-serif text-[#DFCAAB] truncate">
                      {card.title}
                    </span>
                    <span className="text-[9px] text-[#C5A059] uppercase tracking-wider block mt-0.5">
                      View Scan →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Modal for viewing original menu scans */}
      {selectedOriginalMenu && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#1B1412] rounded-2xl overflow-hidden border border-[#C5A059] p-4 sm:p-6 shadow-2xl flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between pb-3 border-b border-[#C5A059]/30 text-white">
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#DFCAAB]">
                  {selectedOriginalMenu.title}
                </h4>
                <p className="text-xs text-[#FAF7F2]/60">{selectedOriginalMenu.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedOriginalMenu(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-auto mt-4 flex items-center justify-center rounded-lg bg-black">
              <img
                src={selectedOriginalMenu.image}
                alt={selectedOriginalMenu.title}
                className="max-h-[75vh] w-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
