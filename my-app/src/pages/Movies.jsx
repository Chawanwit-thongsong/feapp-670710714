import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/data.js';  // นำเข้าข้อมูลหนังจาก data.js
import {SearchBox} from '../components/SearchBox.jsx';
import GenreBox from '../components/GenreBox.jsx';

const GENRES = [...new Set(movies.map(m => m.genre))];  // สร้าง array ของประเภทหนังที่ไม่ซ้ำกัน
function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const q = searchQuery.trim().toLowerCase();
  const shown = movies.filter(m => m.title.toLowerCase().split(' ').some(word => word.startsWith(q)) && (selectedGenre === 'all' || m.genre === selectedGenre));
  // const shown = movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <SearchBox query={searchQuery} onQueryChange={setSearchQuery} />
      <div className="mb-4">
        <GenreBox genre={selectedGenre} onGenreChange={setSelectedGenre} genres={GENRES} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map(m => (
          <Link key={m.id} to={`/movies/${m.id}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                           transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
            <p className="mt-1 text-sm text-slate-500">ปี {m.year} · {m.genre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;