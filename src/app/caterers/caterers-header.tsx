export function CaterersHeader() {
  return (
    <header className="mb-12 mt-4 flex flex-col items-center justify-center space-y-6 text-center">
      <div className="inline-flex animate-in fade-in slide-in-from-bottom-3 duration-500 items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
        <span className="flex size-2 rounded-full bg-primary mr-2 animate-pulse"></span>
        Premium Catering Network
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-[55px] lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">perfect</span> caterer
      </h1>
      <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-xl sm:leading-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        Discover hand-picked culinary experts for your next unforgettable event. Filter by price, search by name, and explore top-rated professionals.
      </p>
    </header>
  );
}
