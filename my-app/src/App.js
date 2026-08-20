import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ชวัลวิทย์ ทองทรง', nickname: 'เนส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'หมา'] },
  { id: 2, name: 'เตชธร โง้วธนารมย์', nickname: 'ซูม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'มด,ปลา'] },
  { id: 3, name: 'ณัฏฐ์ ณ นคร', nickname: 'นัท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเย็น', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;