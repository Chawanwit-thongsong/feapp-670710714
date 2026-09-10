import { movies } from '../data/data.js';  // นำเข้าข้อมูลหนังจาก data.js
import MovieCard from '../components/MovieCard.jsx';
import MovieGallery from '../components/MovieGallery.jsx';

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <h2 className="text-2xl font-semibold text-slate-700 mt-6">หนังที่แนะนำ</h2>
      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6">
        {movies.slice(0, 3).map(movie => (
          <MovieCard key={movie.id} title={movie.title} year={movie.year} />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
        <div className="mx-auto max-w-md rounded-2xl">
          <MovieGallery />
        </div>
      </div>
    </div>
  );
}

export default Home;