function GenreBox({ genre, onGenreChange, genres }) {
  return (
    <select value={genre} onChange={e => onGenreChange(e.target.value)} 
    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50">
      <option value="all">ทุกประเภท</option>
      {genres.map(g => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>
  );
};

export default GenreBox;