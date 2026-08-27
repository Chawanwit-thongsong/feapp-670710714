import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Button from './components/Button.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail.jsx';
import NotFound from './pages/NotFound.jsx';
// import './App.css';

// const members = [
//   { id: 1, name: 'ชวัลวิทย์ ทองทรง', nickname: 'เนส',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'หมา'] },
//   { id: 2, name: 'เตชธร โง้วธนารมย์', nickname: 'ซูม',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'มด,ปลา'] },
//   { id: 3, name: 'ณัฏฐ์ ณ นคร', nickname: 'นัท',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเย็น', 'แมว'] },
//   // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
// ];

// function App() {
//   return (
//     <div className="container">
//       <h1>สมาชิกกลุ่มของเรา</h1>
//       <div className="card-row">
//         {members.map((m) => (
//           <ProfileCard
//             key={m.id}
//             name={m.name}
//             nickname={m.nickname}
//             major={m.major}
//             favorites={m.favorites}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
  { id: 2, title: 'Your Name', genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite', genre: 'Thriller', year: 2019 },
];


function App() {
  return (

    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>

    // // <h1 className="text-3xl font-bold text-cyan-600 underline">
    // //   Hello Tailwind! 🎨
    // // </h1>

    // <div>

    //   {/* <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
    //     <span className="text-xl font-bold text-white">🎬 MovieHub</span>
    //     <div className="flex gap-6 text-slate-300 ">
    //       <a href="#" className="hover:text-cyan-400">หน้าแรก</a>
    //       <a href="#" className="hover:text-cyan-400">หนังใหม่</a>
    //       <a href="#" className="hover:text-cyan-400">รายการโปรด</a>
    //     </div>
    //   </nav> */}

    //   <Navbar />

    //   {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
    //   <div className="flex min-h-screen flex-col bg-slate-50">

    //     {/* <div className="grid grid-cols-4 gap-6 p-6">
    //       <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
    //       <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
    //       <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
    //       <div className="rounded-xl bg-white p-4 shadow">การ์ด 4</div>
    //     </div> */}

    //     {/* <div className="bg-slate-100 text-center">
    //       <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
    //       <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
    //       <p className="text-sm uppercase text-cyan-600 font-semibold">since 2026</p>
    //     </div> */}

    //     <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
    //       <h1 className="text-3xl font-bold text-white md:text-5xl">
    //         ดูหนังดี ๆ ไปด้วยกัน
    //       </h1>
    //       <p className="mx-auto mt-4 max-w-xl text-slate-400">
    //         รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
    //       </p>
    //     </header>


    //     <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
    //       <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
    //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    //         {movies.map((m) => (
    //           <div key={m.id}
    //             className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
    //         transition hover:-translate-y-1 hover:shadow-xl">
    //             <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
    //             <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
    //             <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
    //                            text-xs font-medium text-cyan-700">{m.genre}</span>
    //           </div>
    //         ))}
    //       </div>
    //     </main>

    //     {/* <div className="flex gap-3 p-6">
    //     <Button>บันทึก</Button>
    //     <Button variant="danger">ลบ</Button>
    //     <Button variant="ghost">ยกเลิก</Button>
    //     </div> */}

    //     <Footer />
    //   </div>
    // </div>

  );
}

export default App;