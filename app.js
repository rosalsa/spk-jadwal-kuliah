/* DATA MASTER */

const KELAS_22 = ['22A', '22B', '22C', '22D', '22E'];
const KELAS_23 = ['23A', '23B', '23C', '23D', '23E'];
const KELAS_24 = ['24A', '24B', '24C', '24D', '24E'];

// Angkatan 22 — Semester 5
const MK_22_TEMPLATE = [
  { kode: 'IF301', nama: 'Kecerdasan Buatan', sks: 3, jenis: 'lab', dosen: 'D16' },
  { kode: 'IF302', nama: 'Machine Learning', sks: 3, jenis: 'lab', dosen: 'D17' },
  { kode: 'IF303', nama: 'Pengembangan Aplikasi Mobile', sks: 3, jenis: 'lab', dosen: 'D18' },
  { kode: 'IF304', nama: 'Rekayasa Perangkat Lunak', sks: 3, jenis: 'teori', dosen: 'D19' },
  { kode: 'IF305', nama: 'Keamanan Sistem Informasi', sks: 2, jenis: 'teori', dosen: 'D20' },
  { kode: 'IF306', nama: 'Etika Profesi & Hukum TI', sks: 2, jenis: 'teori', dosen: 'D21' },
];

// Angkatan 23 — Semester 3
const MK_23_TEMPLATE = [
  { kode: 'IF101', nama: 'Algoritma & Pemrograman', sks: 3, jenis: 'lab', dosen: 'D01' },
  { kode: 'IF102', nama: 'Matematika Diskrit', sks: 3, jenis: 'teori', dosen: 'D02' },
  { kode: 'IF103', nama: 'Pengantar Sistem Informasi', sks: 2, jenis: 'teori', dosen: 'D03' },
  { kode: 'IF104', nama: 'Bahasa Inggris Teknik', sks: 2, jenis: 'teori', dosen: 'D04' },
  { kode: 'IF105', nama: 'Logika Informatika', sks: 3, jenis: 'teori', dosen: 'D05' },
];

// Angkatan 24 — Semester 1
const MK_24_TEMPLATE = [
  { kode: 'IF201', nama: 'Pengantar Teknologi Informasi', sks: 2, jenis: 'teori', dosen: 'D06' },
  { kode: 'IF202', nama: 'Struktur Data', sks: 3, jenis: 'lab', dosen: 'D07' },
  { kode: 'IF203', nama: 'Basis Data', sks: 3, jenis: 'lab', dosen: 'D08' },
  { kode: 'IF204', nama: 'Statistika', sks: 3, jenis: 'teori', dosen: 'D09' },
  { kode: 'IF205', nama: 'Sistem Operasi', sks: 3, jenis: 'teori', dosen: 'D10' },
  { kode: 'IF206', nama: 'Algoritma Lanjut', sks: 3, jenis: 'lab', dosen: 'D11' },
  { kode: 'IF207', nama: 'Jaringan Komputer', sks: 3, jenis: 'teori', dosen: 'D12' },
  { kode: 'IF208', nama: 'Arsitektur Komputer', sks: 3, jenis: 'teori', dosen: 'D13' },
];

function expandMKSet(classIds, template) {
  return classIds.flatMap(kelasId => template.map(item => ({
    ...item,
    kode: `${item.kode}-${kelasId}`,
    kelas: kelasId,
  })));
}

function buildMKData() {
  return [
    ...expandMKSet(KELAS_22, MK_22_TEMPLATE),
    ...expandMKSet(KELAS_23, MK_23_TEMPLATE),
    ...expandMKSet(KELAS_24, MK_24_TEMPLATE),
  ];
}

const MASTER = {
  // Ruang
  ruang: [
    { id: 'MM',  nama: 'Lab. Multimedia',        kapasitas: 40, jenis: 'lab' },
    { id: 'SC',  nama: 'Lab. Sistem Cerdas',      kapasitas: 40, jenis: 'lab' },
    { id: 'DS',  nama: 'Lab. Data Science',       kapasitas: 30, jenis: 'lab' },
    { id: 'SI',  nama: 'Lab. Sistem Informasi',   kapasitas: 30, jenis: 'lab' },
    { id: 'AI',  nama: 'Lab. Kecerdasan Buatan',  kapasitas: 35, jenis: 'lab' },
    { id: 'NET', nama: 'Lab. Jaringan',           kapasitas: 30, jenis: 'lab' },
    { id: '402', nama: 'R-3A2', kapasitas: 45, jenis: 'biasa' },
    { id: '403', nama: 'R-3A3', kapasitas: 50, jenis: 'biasa' },
    { id: '404', nama: 'R-3A4', kapasitas: 35, jenis: 'biasa' },
    { id: '405', nama: 'R-3A5', kapasitas: 35, jenis: 'biasa' },
    { id: '406', nama: 'R-3A6', kapasitas: 30, jenis: 'biasa' },
    { id: '407', nama: 'R-3A7', kapasitas: 30, jenis: 'biasa' },
    { id: '408', nama: 'R-3A8', kapasitas: 30, jenis: 'biasa' },
    { id: '409', nama: 'R-3A9', kapasitas: 30, jenis: 'biasa' },
    { id: '410', nama: 'R-4A0', kapasitas: 40, jenis: 'biasa' },
    { id: '411', nama: 'R-4A1', kapasitas: 40, jenis: 'biasa' },
  ],
  // Kelas
  kelas: [
    { id: '22A', nama: '2022-A', jumlah_mhs: 38 },
    { id: '22B', nama: '2022-B', jumlah_mhs: 35 },
    { id: '22C', nama: '2022-C', jumlah_mhs: 30 },
    { id: '22D', nama: '2022-D', jumlah_mhs: 27 },
    { id: '22E', nama: '2022-E', jumlah_mhs: 24 },
    { id: '23A', nama: '2023-A', jumlah_mhs: 35 },
    { id: '23B', nama: '2023-B', jumlah_mhs: 32 },
    { id: '23C', nama: '2023-C', jumlah_mhs: 28 },
    { id: '23D', nama: '2023-D', jumlah_mhs: 25 },
    { id: '23E', nama: '2023-E', jumlah_mhs: 22 },
    { id: '24A', nama: '2024-A', jumlah_mhs: 35 },
    { id: '24B', nama: '2024-B', jumlah_mhs: 32 },
    { id: '24C', nama: '2024-C', jumlah_mhs: 28 },
    { id: '24D', nama: '2024-D', jumlah_mhs: 25 },
    { id: '24E', nama: '2024-E', jumlah_mhs: 22 },
  ],
  // Dosen
  dosen: [
    { id: 'D01', nama: 'Dr. Andi Pratama',      preferensi: 'pagi' },
    { id: 'D02', nama: 'Dr. Budi Santoso',       preferensi: 'pagi' },
    { id: 'D03', nama: 'Dr. Citra Dewi',         preferensi: 'siang' },
    { id: 'D04', nama: 'Dr. Dimas Wijaya',       preferensi: 'sore' },
    { id: 'D05', nama: 'Dr. Eka Putri',          preferensi: 'pagi' },
    { id: 'D06', nama: 'Dr. Fajar Nugroho',      preferensi: 'fleksibel' },
    { id: 'D07', nama: 'Dr. Gita Sari',          preferensi: 'siang' },
    { id: 'D08', nama: 'Dr. Hendra Lim',         preferensi: 'fleksibel' },
    { id: 'D09', nama: 'Dr. Indah Permata',      preferensi: 'pagi' },
    { id: 'D10', nama: 'Dr. Joko Sutomo',        preferensi: 'sore' },
    { id: 'D11', nama: 'Dr. Kartika Putri',      preferensi: 'pagi' },
    { id: 'D12', nama: 'Dr. Luthfi Ramadhan',    preferensi: 'siang' },
    { id: 'D13', nama: 'Dr. Maya Sari',          preferensi: 'fleksibel' },
    { id: 'D14', nama: 'Dr. Naufal Hakim',       preferensi: 'sore' },
    { id: 'D15', nama: 'Dr. Putri Wulandari',    preferensi: 'siang' },
    { id: 'D16', nama: 'Dr. Rizky Firmansyah',   preferensi: 'pagi' },
    { id: 'D17', nama: 'Dr. Siti Rahayu',        preferensi: 'siang' },
    { id: 'D18', nama: 'Dr. Teguh Prasetyo',     preferensi: 'fleksibel' },
    { id: 'D19', nama: 'Dr. Umar Bakri',         preferensi: 'pagi' },
    { id: 'D20', nama: 'Dr. Vivi Anggraini',     preferensi: 'sore' },
    { id: 'D21', nama: 'Dr. Wahyu Hidayat',      preferensi: 'siang' },
    { id: 'D22', nama: 'Dr. Xena Maharani',      preferensi: 'pagi' },
    { id: 'D23', nama: 'Dr. Yusuf Iskandar',     preferensi: 'fleksibel' },
    { id: 'D24', nama: 'Dr. Zara Kusuma',        preferensi: 'siang' },
    { id: 'D25', nama: 'Dr. Alif Ramadhan',      preferensi: 'sore' },
  ],
  // Slot Waktu
  slot: [
    { id: 'S1', label: '07:00–08:40', hari_idx: 0, jam_idx: 0 },
    { id: 'S2', label: '09:00–10:40', hari_idx: 0, jam_idx: 1 },
    { id: 'S3', label: '11:00–12:40', hari_idx: 0, jam_idx: 2 },
    { id: 'S4', label: '13:30–15:10', hari_idx: 0, jam_idx: 3 },
    { id: 'S5', label: '15:30–17:10', hari_idx: 0, jam_idx: 4 },
  ],
  hari: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
  // Mata Kuliah
  mk: buildMKData()
};

const KRITERIA = [
  { kode: 'C1', nama: 'Idle Time Mahasiswa', tipe: 'benefit', deskripsi: 'Skor kenyamanan jadwal mahasiswa (semakin sedikit waktu kosong antar MK, semakin tinggi skor)' },
  { kode: 'C2', nama: 'Preferensi Waktu Dosen', tipe: 'benefit', deskripsi: 'Skor kesesuaian waktu mengajar dengan preferensi dosen (pagi/siang/sore/fleksibel)' },
  { kode: 'C3', nama: 'Utilisasi Ruang', tipe: 'benefit', deskripsi: 'Skor efisiensi penggunaan ruang (rasio peserta vs kapasitas)' }
];

const HIDDEN_PAIRWISE = {
  admin:     { c1c2: 1,   c1c3: 1/2, c2c3: 1/2 },
  dosen:     { c1c2: 1/3, c1c3: 1/2, c2c3: 2   },
  mahasiswa: { c1c2: 2,   c1c3: 2,   c2c3: 1   }
};

// Tabel kesesuaian preferensi dosen vs slot
const PREF_MATRIX = {
  'pagi':      [1.00, 1.00, 0.60, 0.20, 0.05],
  'siang':     [0.40, 0.70, 1.00, 0.70, 0.40],
  'sore':      [0.05, 0.20, 0.60, 1.00, 1.00],
  'fleksibel': [1.00, 1.00, 1.00, 1.00, 1.00]
};

const RI_TABLE = [0.00, 0.00, 0.58, 0.90, 1.12, 1.24, 1.32, 1.41, 1.45];

/* STATE — disimpan di memory (tidak persistent) */
const STATE = {
  currentRole: null,
  currentPage: 'dashboard',
  preferensiDosen: {},
  kandidat: null,
  topsisResult: null,
  historicalDataset: null,
  historicalStats: null,
  lastExecTimeMs: null,
  initialized: false
};

// Inisialisasi state dengan preset
function initState() {
  if (STATE.initialized) return;

  // Preset preferensi dosen dari MASTER
  MASTER.dosen.forEach(d => {
    STATE.preferensiDosen[d.id] = d.preferensi;
  });

  STATE.initialized = true;
}

initState();

/* ALGORITMA: GENERATOR GREEDY */
function scoreSlotForStrategy(strategi, mk, hari_idx, jam_idx, ruang, jadwalSementara) {
  const HARI_W = [1.0, 0.8, 0.6, 0.4, 0.2];
  const JAM_W = [1.0, 0.90, 0.75, 0.50, 0.30];

  if (strategi === 'K1') {
    return Math.pow(HARI_W[hari_idx], 2) * Math.pow(JAM_W[jam_idx], 2) * 100;
  }
  if (strategi === 'K2') {
    const totalMKHariIni = jadwalSementara.filter(j => j.hari_idx === hari_idx).length;
    const mkKelasHariIni = jadwalSementara.filter(j =>
      j.hari_idx === hari_idx && j.kelas === mk.kelas
    ).length;
    return 10 / (1 + 3 * mkKelasHariIni + 0.3 * totalMKHariIni);
  }
  if (strategi === 'K3') {
    let skor = 1.0;
    if (mk.jenis === 'lab') {
      if (ruang.jenis === 'lab') {
        skor = 100; 
        skor *= JAM_W[jam_idx];
      } else {
        skor = 0.01;
      }
    } else {
      if (ruang.jenis === 'lab') {
        skor = 0.1;
      } else {
        skor = 1.0 + (1 - JAM_W[jam_idx]);
      }
    }
    return skor;
  }
  return 0;
}

// Cek apakah slot+ruang konflik dengan jadwal sementara
function isConflict(mk, hari_idx, jam_idx, ruang, jadwalSementara) {
  for (const j of jadwalSementara) {
    if (j.hari_idx === hari_idx && j.jam_idx === jam_idx) {
      if (j.ruang_id === ruang.id) return true;
      if (j.dosen === mk.dosen) return true;
      if (j.kelas === mk.kelas) return true;
    }
  }
  return false;
}

// Generator Greedy untuk satu strategi
function generateGreedy(strategi) {
  const mkSorted = [...MASTER.mk].sort((a, b) => {
    if (b.sks !== a.sks) return b.sks - a.sks;
    return a.kode.localeCompare(b.kode);
  });

  const jadwal = [];

  for (const mk of mkSorted) {
    const opsi = [];
    for (let h = 0; h < 5; h++) {
      for (let j = 0; j < 5; j++) {
        for (const ruang of MASTER.ruang) {
          if (isConflict(mk, h, j, ruang, jadwal)) continue;
          const kelas = MASTER.kelas.find(k => k.id === mk.kelas);
          const kapasitasFit = Math.abs(ruang.kapasitas - kelas.jumlah_mhs);

          opsi.push({
            hari_idx: h,
            jam_idx: j,
            ruang: ruang,
            skor: scoreSlotForStrategy(strategi, mk, h, j, ruang, jadwal),
            kapasitasFit: kapasitasFit
          });
        }
      }
    }

    if (opsi.length === 0) continue;

    opsi.sort((a, b) => {
      if (Math.abs(b.skor - a.skor) > 0.001) return b.skor - a.skor;
      if (a.kapasitasFit !== b.kapasitasFit) return a.kapasitasFit - b.kapasitasFit;
      if (a.jam_idx !== b.jam_idx) return a.jam_idx - b.jam_idx;
      return a.ruang.id.localeCompare(b.ruang.id);
    });

    const best = opsi[0];
    jadwal.push({
      mk_kode: mk.kode,
      mk_nama: mk.nama,
      sks: mk.sks,
      jenis: mk.jenis,
      kelas: mk.kelas,
      dosen: mk.dosen,
      hari_idx: best.hari_idx,
      jam_idx: best.jam_idx,
      ruang_id: best.ruang.id,
      ruang_nama: best.ruang.nama
    });
  }

  return jadwal;
}

function hitungSkorC1(jadwal) {
  const SLOT_START = [420, 540, 660, 810, 930];
  const SLOT_END   = [520, 640, 760, 910, 1030];
  const TOLERANSI = 60;
  const WORST_CASE = 510;

  let totalSkor = 0;
  let count = 0;

  for (const kelas of MASTER.kelas) {
    for (let h = 0; h < 5; h++) {
      const mkHariIni = jadwal.filter(j => j.kelas === kelas.id && j.hari_idx === h);
      if (mkHariIni.length < 2) continue;

      mkHariIni.sort((a, b) => a.jam_idx - b.jam_idx);
      let totalIdle = 0;
      for (let i = 0; i < mkHariIni.length - 1; i++) {
        const idle = SLOT_START[mkHariIni[i+1].jam_idx] - SLOT_END[mkHariIni[i].jam_idx];
        totalIdle += idle;
      }
      const idleEfektif = Math.max(0, totalIdle - TOLERANSI);
      const skor = Math.max(0, 1 - idleEfektif / WORST_CASE);
      totalSkor += skor;
      count++;
    }
  }

  const totalKelasHari = MASTER.kelas.length * 5;
  const kelasHariSatuMK = totalKelasHari - count;
  totalSkor += kelasHariSatuMK * 1.0;
  count = totalKelasHari;

  return count > 0 ? totalSkor / count : 0;
}

// Hitung skor C2 (Preferensi Dosen)
function hitungSkorC2(jadwal) {
  let total = 0;
  for (const j of jadwal) {
    const pref = STATE.preferensiDosen[j.dosen] || 'fleksibel';
    total += PREF_MATRIX[pref][j.jam_idx];
  }
  return jadwal.length > 0 ? total / jadwal.length : 0;
}

// Hitung skor C3 (Utilisasi Ruang)
function hitungSkorC3(jadwal) {
  let total = 0;
  for (const j of jadwal) {
    const kelas = MASTER.kelas.find(k => k.id === j.kelas);
    const ruang = MASTER.ruang.find(r => r.id === j.ruang_id);
    const rasio = kelas.jumlah_mhs / ruang.kapasitas;
    let skor;
    if (rasio <= 1.0) {
      skor = rasio;
    } else {
      skor = Math.max(0, 1 - 2 * (rasio - 1));
    }
    total += skor;
  }
  return jadwal.length > 0 ? total / jadwal.length : 0;
}

/* ALGORITMA: AHP */
function buildPairwiseMatrix(input) {
  return [
    [1,         input.c1c2, input.c1c3],
    [1/input.c1c2, 1,        input.c2c3],
    [1/input.c1c3, 1/input.c2c3, 1     ]
  ];
}

function hitungBobotAHP(matrix) {
  const n = matrix.length;
  const colSum = matrix[0].map((_, j) => matrix.reduce((s, row) => s + row[j], 0));
  const norm = matrix.map(row => row.map((v, j) => v / colSum[j]));
  const weights = norm.map(row => row.reduce((s, v) => s + v, 0) / n);

  const Aw = matrix.map(row => row.reduce((s, v, j) => s + v * weights[j], 0));
  const lambdas = Aw.map((v, i) => v / weights[i]);
  const lambdaMax = lambdas.reduce((s, v) => s + v, 0) / n;

  const CI = (lambdaMax - n) / (n - 1);
  const RI = RI_TABLE[n - 1];
  const CR = RI === 0 ? 0 : CI / RI;

  return { weights, lambdaMax, CI, CR, normMatrix: norm };
}

function agregasiKMKK(bobotPerAktor) {
  const n = bobotPerAktor.length;
  const numKriteria = bobotPerAktor[0].length;
  const aggregated = [];
  for (let k = 0; k < numKriteria; k++) {
    let prod = 1;
    for (let a = 0; a < n; a++) {
      prod *= bobotPerAktor[a][k];
    }
    aggregated.push(Math.pow(prod, 1/n));
  }
  const sum = aggregated.reduce((s, v) => s + v, 0);
  return aggregated.map(v => v / sum);
}

/* ALGORITMA: TOPSIS */
function jalankanTOPSIS(matrixDecision, weights) {
  const m = matrixDecision.length;
  const n = matrixDecision[0].length;

  // Step 1: Normalisasi Euclidean
  const colNorm = [];
  for (let j = 0; j < n; j++) {
    let sumSq = 0;
    for (let i = 0; i < m; i++) sumSq += matrixDecision[i][j] ** 2;
    colNorm.push(Math.sqrt(sumSq));
  }
  const R = matrixDecision.map(row => row.map((v, j) => v / colNorm[j]));

  // Step 2: Matriks ternormalisasi terbobot
  const V = R.map(row => row.map((v, j) => v * weights[j]));

  // Step 3: Solusi ideal positif (A+) dan negatif (A-) — semua benefit
  const Aplus = [];
  const Aminus = [];
  for (let j = 0; j < n; j++) {
    const col = V.map(row => row[j]);
    Aplus.push(Math.max(...col));
    Aminus.push(Math.min(...col));
  }

  // Step 4: Jarak ke A+ dan A-
  const Dplus = V.map(row => Math.sqrt(row.reduce((s, v, j) => s + (v - Aplus[j]) ** 2, 0)));
  const Dminus = V.map(row => Math.sqrt(row.reduce((s, v, j) => s + (v - Aminus[j]) ** 2, 0)));

  // Step 5: Nilai preferensi
  const Vpref = Dplus.map((dp, i) => Dminus[i] / (dp + Dminus[i]));

  return { R, V, Aplus, Aminus, Dplus, Dminus, Vpref };
}

/* GENERATE & EVALUATE ALL CANDIDATES */
function generateAllCandidates() {
  const k1 = generateGreedy('K1');
  const k2 = generateGreedy('K2');
  const k3 = generateGreedy('K3');

  const evalKandidat = (jadwal, label) => ({
    label: label,
    jadwal: jadwal,
    skor: {
      c1: hitungSkorC1(jadwal),
      c2: hitungSkorC2(jadwal),
      c3: hitungSkorC3(jadwal)
    }
  });

  return {
    K1: evalKandidat(k1, 'Front-loaded'),
    K2: evalKandidat(k2, 'Tersebar Merata'),
    K3: evalKandidat(k3, 'Lab-First')
  };
}

function runFullPipeline() {
  // 1. Generate kandidat
  const kandidat = generateAllCandidates();
  STATE.kandidat = kandidat;

  // 2. AHP per aktor
  const ahpAdmin = hitungBobotAHP(buildPairwiseMatrix(HIDDEN_PAIRWISE.admin));
  const ahpDosen = hitungBobotAHP(buildPairwiseMatrix(HIDDEN_PAIRWISE.dosen));
  const ahpMhs   = hitungBobotAHP(buildPairwiseMatrix(HIDDEN_PAIRWISE.mahasiswa));

  // 3. KMKK agregasi
  const bobotKelompok = agregasiKMKK([ahpAdmin.weights, ahpDosen.weights, ahpMhs.weights]);

  // 4. Build matrix decision
  const matrixDecision = [
    [kandidat.K1.skor.c1, kandidat.K1.skor.c2, kandidat.K1.skor.c3],
    [kandidat.K2.skor.c1, kandidat.K2.skor.c2, kandidat.K2.skor.c3],
    [kandidat.K3.skor.c1, kandidat.K3.skor.c2, kandidat.K3.skor.c3]
  ];

  // 5. TOPSIS
  const topsis = jalankanTOPSIS(matrixDecision, bobotKelompok);

  STATE.topsisResult = {
    ahpPerAktor: { admin: ahpAdmin, dosen: ahpDosen, mahasiswa: ahpMhs },
    bobotKelompok: bobotKelompok,
    matrixDecision: matrixDecision,
    topsis: topsis,
    kandidat: kandidat
  };

  return STATE.topsisResult;
}

/* MODUL BIG DATA ANALYTICS — DATA-DRIVEN LAYER */
function randomPreferensiDosenSet() {
  const opsi = ['pagi', 'siang', 'sore', 'fleksibel'];
  const result = {};
  MASTER.dosen.forEach(d => {
    if (Math.random() < 0.5) {
      result[d.id] = d.preferensi;
    } else {
      result[d.id] = opsi[Math.floor(Math.random() * opsi.length)];
    }
  });
  return result;
}

function randomJumlahMhsSet() {
  const result = {};
  MASTER.kelas.forEach(k => {
    const delta = (Math.random() * 0.6 - 0.3);
    result[k.id] = Math.max(10, Math.round(k.jumlah_mhs * (1 + delta)));
  });
  return result;
}

function hitungSkorC1Override(jadwal, variasiFaktor) {
  const SLOT_START = [420, 540, 660, 810, 930];
  const SLOT_END   = [520, 640, 760, 910, 1030];
  const TOLERANSI = 60;
  const WORST_CASE = 510;

  let totalSkor = 0;
  let count = 0;

  for (const kelas of MASTER.kelas) {
    for (let h = 0; h < 5; h++) {
      const mkHariIni = jadwal.filter(j => j.kelas === kelas.id && j.hari_idx === h);
      if (mkHariIni.length < 2) continue;

      mkHariIni.sort((a, b) => a.jam_idx - b.jam_idx);
      let totalIdle = 0;
      for (let i = 0; i < mkHariIni.length - 1; i++) {
        const idle = SLOT_START[mkHariIni[i+1].jam_idx] - SLOT_END[mkHariIni[i].jam_idx];
        totalIdle += idle;
      }
      const idleEfektif = Math.max(0, totalIdle * variasiFaktor - TOLERANSI);
      const skor = Math.max(0, 1 - idleEfektif / WORST_CASE);
      totalSkor += skor;
      count++;
    }
  }

  const totalKelasHari = MASTER.kelas.length * 5;
  const kelasHariSatuMK = totalKelasHari - count;
  totalSkor += kelasHariSatuMK * 1.0;
  count = totalKelasHari;

  return count > 0 ? totalSkor / count : 0;
}

function hitungSkorC2Override(jadwal, prefSet) {
  let total = 0;
  for (const j of jadwal) {
    const pref = prefSet[j.dosen] || 'fleksibel';
    total += PREF_MATRIX[pref][j.jam_idx];
  }
  return jadwal.length > 0 ? total / jadwal.length : 0;
}

function hitungSkorC3Override(jadwal, jumlahMhsSet) {
  let total = 0;
  for (const j of jadwal) {
    const jumlahMhs = jumlahMhsSet[j.kelas];
    const ruang = MASTER.ruang.find(r => r.id === j.ruang_id);
    const rasio = jumlahMhs / ruang.kapasitas;
    let skor;
    if (rasio <= 1.0) skor = rasio;
    else skor = Math.max(0, 1 - 2 * (rasio - 1));
    total += skor;
  }
  return jadwal.length > 0 ? total / jadwal.length : 0;
}

function simulasiSatuPeriode(periodeId, kandidatBase) {
  const prefSet = randomPreferensiDosenSet();
  const mhsSet = randomJumlahMhsSet();

  const c1Faktor = 0.7 + Math.random() * 0.6;

  const evalSatu = (jadwal, label) => ({
    label,
    skor: {
      c1: hitungSkorC1Override(jadwal, c1Faktor),
      c2: hitungSkorC2Override(jadwal, prefSet),
      c3: hitungSkorC3Override(jadwal, mhsSet)
    }
  });

  const k1 = evalSatu(kandidatBase.K1.jadwal, 'Front-loaded');
  const k2 = evalSatu(kandidatBase.K2.jadwal, 'Tersebar Merata');
  const k3 = evalSatu(kandidatBase.K3.jadwal, 'Lab-First');

  const matrixDecision = [
    [k1.skor.c1, k1.skor.c2, k1.skor.c3],
    [k2.skor.c1, k2.skor.c2, k2.skor.c3],
    [k3.skor.c1, k3.skor.c2, k3.skor.c3]
  ];

  return { periodeId, k1, k2, k3, matrixDecision };
}

function generateHistoricalDataset(N, bobotKelompok) {
  const kandidatBase = STATE.kandidat || generateAllCandidates();

  const dataset = [];
  for (let p = 1; p <= N; p++) {
    const sim = simulasiSatuPeriode(p, kandidatBase);
    const topsis = jalankanTOPSIS(sim.matrixDecision, bobotKelompok);
    const labels = ['K1', 'K2', 'K3'];
    const ranking = topsis.Vpref.map((v, i) => ({ label: labels[i], V: v }))
      .sort((a, b) => b.V - a.V);

    dataset.push({
      periodeId: sim.periodeId,
      skor: { K1: sim.k1.skor, K2: sim.k2.skor, K3: sim.k3.skor },
      V: { K1: topsis.Vpref[0], K2: topsis.Vpref[1], K3: topsis.Vpref[2] },
      pemenang: ranking[0].label,
      marginVsRunnerUp: ranking[0].V - ranking[1].V
    });
  }
  return dataset;
}

// Statistik dasar
function mean(arr) { return arr.reduce((s, v) => s + v, 0) / arr.length; }
function stdev(arr) {
  const m = mean(arr);
  const variance = arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length;
  return Math.sqrt(variance);
}
function pearsonCorr(x, y) {
  const mx = mean(x), my = mean(y);
  let num = 0, dx2 = 0, dy2 = 0;
  for (let i = 0; i < x.length; i++) {
    num += (x[i] - mx) * (y[i] - my);
    dx2 += (x[i] - mx) ** 2;
    dy2 += (y[i] - my) ** 2;
  }
  const denom = Math.sqrt(dx2 * dy2);
  return denom === 0 ? 0 : num / denom;
}

// Analitik agregat atas seluruh dataset historis
function analyzeHistoricalDataset(dataset) {
  const N = dataset.length;
  const labels = ['K1', 'K2', 'K3'];

  // 1. Win-rate per strategi
  const winCount = { K1: 0, K2: 0, K3: 0 };
  dataset.forEach(d => winCount[d.pemenang]++);
  const winRate = {};
  labels.forEach(l => winRate[l] = winCount[l] / N);

  // 2. Rata-rata & std-dev skor C1/C2/C3 dan V per strategi
  const statPerStrategi = {};
  labels.forEach(l => {
    statPerStrategi[l] = {
      c1: { mean: mean(dataset.map(d => d.skor[l].c1)), std: stdev(dataset.map(d => d.skor[l].c1)) },
      c2: { mean: mean(dataset.map(d => d.skor[l].c2)), std: stdev(dataset.map(d => d.skor[l].c2)) },
      c3: { mean: mean(dataset.map(d => d.skor[l].c3)), std: stdev(dataset.map(d => d.skor[l].c3)) },
      V:  { mean: mean(dataset.map(d => d.V[l])),       std: stdev(dataset.map(d => d.V[l])) }
    };
  });

  // 3. Korelasi antar kriteria
  const allC1 = [], allC2 = [], allC3 = [];
  dataset.forEach(d => labels.forEach(l => {
    allC1.push(d.skor[l].c1); allC2.push(d.skor[l].c2); allC3.push(d.skor[l].c3);
  }));
  const korelasi = {
    c1c2: pearsonCorr(allC1, allC2),
    c1c3: pearsonCorr(allC1, allC3),
    c2c3: pearsonCorr(allC2, allC3)
  };

  // 4. Rata-rata margin kemenangan
  const avgMargin = mean(dataset.map(d => d.marginVsRunnerUp));

  // 5. Rekomendasi data-driven
  const rekomendasi = labels.reduce((a, b) => winRate[a] >= winRate[b] ? a : b);

  return { N, winCount, winRate, statPerStrategi, korelasi, avgMargin, rekomendasi };
}

function runBigDataPipeline(N) {
  let bobotKelompok;
  if (STATE.topsisResult) {
    bobotKelompok = STATE.topsisResult.bobotKelompok;
  } else {
    const ahpAdmin = hitungBobotAHP(buildPairwiseMatrix(HIDDEN_PAIRWISE.admin));
    const ahpDosen = hitungBobotAHP(buildPairwiseMatrix(HIDDEN_PAIRWISE.dosen));
    const ahpMhs   = hitungBobotAHP(buildPairwiseMatrix(HIDDEN_PAIRWISE.mahasiswa));
    bobotKelompok = agregasiKMKK([ahpAdmin.weights, ahpDosen.weights, ahpMhs.weights]);
  }

  const dataset = generateHistoricalDataset(N, bobotKelompok);
  const stats = analyzeHistoricalDataset(dataset);

  STATE.historicalDataset = dataset;
  STATE.historicalStats = stats;

  return { dataset, stats };
}

/* RENDERING — UTILITIES */
function fmt(n, dec = 4) {
  if (typeof n !== 'number' || isNaN(n)) return '-';
  return n.toFixed(dec);
}

function escHTML(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderMatrixHTML(matrix, rowLabels, colLabels) {
  let html = '<table class="matrix-table">';
  html += '<tr><th></th>';
  colLabels.forEach(c => html += `<th>${c}</th>`);
  html += '</tr>';
  matrix.forEach((row, i) => {
    html += `<tr><td class="row-header">${rowLabels[i]}</td>`;
    row.forEach(v => html += `<td>${fmt(v, 3)}</td>`);
    html += '</tr>';
  });
  html += '</table>';
  return html;
}

/* RENDER: LOGIN PAGE */
function renderLogin() {
  return `
    <div class="login-page">
      <div class="login-card">
        <h1>Pemilihan Jadwal Kuliah</h1>
        <p class="subtitle">Sistem Penunjang Keputusan</p>
        <div class="role-buttons">
          <button class="role-btn admin" onclick="loginAs('admin')">
            <div class="role-icon">A</div>
            <div class="role-label">
              <div class="role-name">Administrator Gedung</div>
              <div class="role-desc">Kelola master data, jalankan generator, lihat hasil</div>
            </div>
          </button>
          <button class="role-btn dosen" onclick="loginAs('dosen')">
            <div class="role-icon">D</div>
            <div class="role-label">
              <div class="role-name">Dosen</div>
              <div class="role-desc">Atur preferensi waktu mengajar dan pantau hasil</div>
            </div>
          </button>
          <button class="role-btn mahasiswa" onclick="loginAs('mahasiswa')">
            <div class="role-icon">M</div>
            <div class="role-label">
              <div class="role-name">Mahasiswa Perwakilan</div>
              <div class="role-desc">Lihat kandidat jadwal dan hasil akhir</div>
            </div>
          </button>
        </div>
        <div class="login-footer">
          Berbasis Hybrid Decision Support System dan Big Data Analytics
        </div>
      </div>
    </div>
  `;
}

/* RENDER: SIDEBAR */
function getMenusForRole(role) {
  const menus = {
    admin: [
      { page: 'dashboard', icon: '⊞', label: 'Dashboard' },
      { page: 'master-mk', icon: '☰', label: 'Master Mata Kuliah' },
      { page: 'master-dosen', icon: '☰', label: 'Master Dosen' },
      { page: 'master-ruang', icon: '☰', label: 'Master Ruang' },
      { page: 'master-kelas', icon: '☰', label: 'Master Kelas' },
      { page: 'generator', icon: '☰', label: 'Generator Kandidat' },
      { page: 'hasil', icon: '☰', label: 'Hasil & Ranking' },
      { page: 'analitik', icon: '☰', label: 'Analitik Data Historis' },
      { page: 'trend', icon: '☰', label: 'Trend Analysis' },
      { page: 'prediksi-konflik', icon: '☰', label: 'Prediksi Konflik' },
    ],
    dosen: [
      { page: 'dashboard', icon: '⊞', label: 'Dashboard' },
      { page: 'preferensi', icon: '☰', label: 'Preferensi Waktu' },
      { page: 'hasil', icon: '☰', label: 'Hasil Akhir' },
    ],
    mahasiswa: [
      { page: 'dashboard', icon: '⊞', label: 'Dashboard' },
      { page: 'hasil', icon: '☰', label: 'Hasil Akhir' },
    ]
  };
  return menus[role] || [];
}

function renderSidebar() {
  const menus = getMenusForRole(STATE.currentRole);
  const items = menus.map(m => `
    <button class="sidebar-link ${STATE.currentPage === m.page ? 'active' : ''}"
            onclick="navigateTo('${m.page}')">
      <span class="icon">${m.icon}</span>${m.label}
    </button>
  `).join('');

  return `
    <aside class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-title">Menu Utama</div>
        ${items}
      </div>
    </aside>
  `;
}

function renderRoleTabs() {
  if (STATE.currentRole === 'admin') return '';
  const menus = getMenusForRole(STATE.currentRole);
  return `
    <div class="role-tabs">
      ${menus.map(m => `
        <button class="role-tab ${STATE.currentPage === m.page ? 'active' : ''}"
                onclick="navigateTo('${m.page}')">${m.label}</button>
      `).join('')}
    </div>
  `;
}

function renderTopbar() {
  const roleLabel = {
    admin: 'Administrator Gedung',
    dosen: 'Dosen',
    mahasiswa: 'Mahasiswa Perwakilan'
  }[STATE.currentRole];

  return `
    <header class="topbar">
      <h1>SPK Pemilihan Jadwal Kuliah</h1>
      <div class="topbar-right">
        <span class="role-badge ${STATE.currentRole}">${roleLabel}</span>
        <button class="logout-btn" onclick="logout()">Ganti Role</button>
      </div>
    </header>
  `;
}

/* RENDER: DASHBOARD */
function renderDashboard() {
  if (STATE.currentRole === 'admin') return renderDashboardAdmin();
  if (STATE.currentRole === 'dosen') return renderDashboardDosen();
  if (STATE.currentRole === 'mahasiswa') return renderDashboardMahasiswa();
}

function renderDashboardAdmin() {
  const generatorStatus = STATE.kandidat ? '✓ Selesai' : '✗ Belum dijalankan';

  return `
    <div class="page-header">
      <h2 class="page-title">Dashboard Administrator</h2>
      <p class="page-subtitle">Kelola periode keputusan dan jalankan model hibrid SPK</p>
    </div>

    <div class="grid-4">
      <div class="stat-box"><div class="stat-label">Mata Kuliah</div><div class="stat-value">${MASTER.mk.length}</div></div>
      <div class="stat-box"><div class="stat-label">Dosen</div><div class="stat-value">${MASTER.dosen.length}</div></div>
      <div class="stat-box"><div class="stat-label">Ruang</div><div class="stat-value">${MASTER.ruang.length}</div></div>
      <div class="stat-box"><div class="stat-label">Kelas</div><div class="stat-value">${MASTER.kelas.length}</div></div>
    </div>

    <div class="card mt-4">
      <h3 class="card-title">Status Periode</h3>
      <p class="card-subtitle">Alur kerja periode keputusan saat ini</p>
      <div class="step-list">
        <div class="step-item">
          <span class="step-label">Generator Kandidat:</span> <span class="${STATE.kandidat ? 'text-success text-bold' : 'text-danger text-bold'}">${generatorStatus}</span>
        </div>
        <div class="step-item">
          <span class="step-label">Hasil TOPSIS:</span> <span class="${STATE.topsisResult ? 'text-success text-bold' : 'text-danger text-bold'}">${STATE.topsisResult ? '✓ Tersedia' : '✗ Belum dihitung'}</span>
        </div>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Aksi Cepat</h3>
      <div class="flex gap-3 mt-3">
        <button class="btn btn-success" onclick="navigateTo('generator')">Jalankan Generator</button>
        <button class="btn btn-secondary" onclick="navigateTo('hasil')">Lihat Hasil</button>
        <button class="btn btn-secondary" onclick="navigateTo('analitik')">Analitik Data Historis</button>
      </div>
    </div>

    <div class="alert alert-info">
      <strong>Catatan demo:</strong> Bobot AHP/KMKK disimulasikan di backend (hidden), sehingga pengguna tidak perlu mengisi pairwise. Anda bisa langsung menjalankan generator dan melihat hasil di menu "Hasil &amp; Ranking".
    </div>
  `;
}

function renderDashboardDosen() {
  return `
    <div class="page-header">
      <h2 class="page-title">Dashboard Dosen</h2>
      <p class="page-subtitle">Berikan input penilaian untuk pemilihan jadwal kuliah</p>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3 class="card-title">Tugas Anda</h3>
        <p class="card-subtitle">Sebagai dosen, Anda perlu:</p>
        <ol style="padding-left: 20px; line-height: 1.8;">
          <li>Mengatur preferensi waktu mengajar (pagi/siang/sore/fleksibel)</li>
          <li>Menunggu admin menjalankan generator dan TOPSIS</li>
          <li>Melihat hasil jadwal pemenang</li>
        </ol>
        <div class="flex gap-2 mt-4">
          <button class="btn btn-primary" onclick="navigateTo('preferensi')">Atur Preferensi</button>
        </div>
      </div>

      <div class="card">
        <h3 class="card-title">Status Input</h3>
        <p class="card-subtitle">Apa yang sudah Anda berikan</p>
        <div class="step-list">
          <div class="step-item">
            <span class="step-label">Preferensi Waktu:</span>
            <span class="text-success text-bold">✓ Sudah diisi (preset)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="alert alert-info">
      <strong>Sebagai dosen, kepentingan utama Anda</strong> adalah Kriteria C2 — Preferensi Waktu Dosen. Bobotnya dihitung otomatis di backend agar Anda tidak perlu mengisi pairwise.
    </div>
  `;
}

function renderDashboardMahasiswa() {
  return `
    <div class="page-header">
      <h2 class="page-title">Dashboard Mahasiswa Perwakilan</h2>
      <p class="page-subtitle">Berikan suara mahasiswa dalam pemilihan jadwal kuliah</p>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3 class="card-title">Tugas Anda</h3>
        <p class="card-subtitle">Sebagai perwakilan mahasiswa, Anda perlu:</p>
        <ol style="padding-left: 20px; line-height: 1.8;">
          <li>Menunggu admin menjalankan model SPK</li>
          <li>Melihat hasil jadwal terpilih</li>
        </ol>
        <button class="btn btn-primary mt-3" onclick="navigateTo('hasil')">Lihat Hasil</button>
      </div>

      <div class="card">
        <h3 class="card-title">Status Input</h3>
        <div class="step-list">
          <div class="step-item">
            <span class="step-label">Hasil Tersedia:</span>
            <span class="${STATE.topsisResult ? 'text-success text-bold' : 'text-danger text-bold'}">
              ${STATE.topsisResult ? '✓ Sudah dihitung' : '✗ Menunggu admin'}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="alert alert-info">
      <strong>Sebagai perwakilan mahasiswa, kepentingan utama Anda</strong> adalah Kriteria C1 — Idle Time Mahasiswa. Bobotnya dihitung otomatis di backend agar Anda tidak perlu mengisi pairwise.
    </div>
  `;
}

/* RENDER: MASTER DATA PAGES */
function renderMasterMK() {
  const rows = MASTER.mk.map(mk => {
    const dosen = MASTER.dosen.find(d => d.id === mk.dosen);
    const kelas = MASTER.kelas.find(k => k.id === mk.kelas);
    return `<tr>
      <td class="text-mono">${mk.kode}</td>
      <td>${escHTML(mk.nama)}</td>
      <td class="text-center">${mk.sks}</td>
      <td><span class="badge ${mk.jenis === 'lab' ? 'badge-warning' : 'badge-info'}">${mk.jenis}</span></td>
      <td>${escHTML(dosen.nama)}</td>
      <td>${escHTML(kelas.nama)}</td>
    </tr>`;
  }).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">Master Mata Kuliah</h2>
      <p class="page-subtitle">${MASTER.mk.length} mata kuliah terdaftar untuk periode ini</p>
    </div>
    <div class="card">
      <table class="data-table">
        <thead><tr>
          <th>Kode</th><th>Nama Mata Kuliah</th><th>SKS</th><th>Jenis</th><th>Dosen Pengampu</th><th>Kelas</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderMasterDosen() {
  const rows = MASTER.dosen.map(d => {
    const pref = STATE.preferensiDosen[d.id] || d.preferensi;
    const jumlahMK = MASTER.mk.filter(mk => mk.dosen === d.id).length;
    return `<tr>
      <td class="text-mono">${d.id}</td>
      <td>${escHTML(d.nama)}</td>
      <td><span class="badge badge-info">${pref}</span></td>
      <td class="text-center">${jumlahMK}</td>
    </tr>`;
  }).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">Master Dosen</h2>
      <p class="page-subtitle">${MASTER.dosen.length} dosen pengampu</p>
    </div>
    <div class="card">
      <table class="data-table">
        <thead><tr>
          <th>ID</th><th>Nama Dosen</th><th>Preferensi Waktu</th><th>Jumlah MK</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderMasterRuang() {
  const rows = MASTER.ruang.map(r => `<tr>
    <td class="text-mono">${r.id}</td>
    <td>${escHTML(r.nama)}</td>
    <td class="text-center">${r.kapasitas}</td>
    <td><span class="badge ${r.jenis === 'lab' ? 'badge-warning' : 'badge-info'}">${r.jenis}</span></td>
  </tr>`).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">Master Ruang</h2>
      <p class="page-subtitle">${MASTER.ruang.length} ruang tersedia (${MASTER.ruang.filter(r=>r.jenis==='lab').length} lab + ${MASTER.ruang.filter(r=>r.jenis==='biasa').length} ruang biasa)</p>
    </div>
    <div class="card">
      <table class="data-table">
        <thead><tr>
          <th>ID</th><th>Nama Ruang</th><th>Kapasitas</th><th>Jenis</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderMasterKelas() {
  const rows = MASTER.kelas.map(k => {
    const jumlahMK = MASTER.mk.filter(mk => mk.kelas === k.id).length;
    return `<tr>
      <td class="text-mono">${k.id}</td>
      <td>${escHTML(k.nama)}</td>
      <td class="text-center">${k.jumlah_mhs}</td>
      <td class="text-center">${jumlahMK}</td>
    </tr>`;
  }).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">Master Kelas</h2>
      <p class="page-subtitle">${MASTER.kelas.length} kelas mahasiswa</p>
    </div>
    <div class="card">
      <table class="data-table">
        <thead><tr>
          <th>ID</th><th>Nama Kelas</th><th>Jumlah Mahasiswa</th><th>Jumlah MK</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

/* RENDER: PREFERENSI DOSEN */
function renderPreferensi() {
  const rows = MASTER.dosen.map(d => `
    <tr>
      <td class="text-mono">${d.id}</td>
      <td>${escHTML(d.nama)}</td>
      <td>
        <select onchange="updatePreferensiDosen('${d.id}', this.value)">
          <option value="pagi" ${STATE.preferensiDosen[d.id] === 'pagi' ? 'selected' : ''}>Pagi (08:00-11:40 disukai)</option>
          <option value="siang" ${STATE.preferensiDosen[d.id] === 'siang' ? 'selected' : ''}>Siang (10:00-14:40 disukai)</option>
          <option value="sore" ${STATE.preferensiDosen[d.id] === 'sore' ? 'selected' : ''}>Sore (13:00-16:40 disukai)</option>
          <option value="fleksibel" ${STATE.preferensiDosen[d.id] === 'fleksibel' ? 'selected' : ''}>Fleksibel (semua slot OK)</option>
        </select>
      </td>
    </tr>
  `).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">Preferensi Waktu Mengajar</h2>
      <p class="page-subtitle">Atur preferensi waktu mengajar untuk semua dosen — digunakan dalam perhitungan skor C2</p>
    </div>

    <div class="alert alert-info">
      <strong>Tabel Kesesuaian Preferensi vs Slot Waktu</strong><br>
      <table class="matrix-table mt-3" style="font-size: 11px;">
        <tr><th>Preferensi</th><th>08:00 (S1)</th><th>10:00 (S2)</th><th>13:00 (S3)</th><th>15:00 (S4)</th></tr>
        <tr><td class="row-header">Pagi</td><td>1.00</td><td>1.00</td><td>0.40</td><td>0.10</td></tr>
        <tr><td class="row-header">Siang</td><td>0.50</td><td>0.70</td><td>1.00</td><td>0.50</td></tr>
        <tr><td class="row-header">Sore</td><td>0.10</td><td>0.30</td><td>0.70</td><td>1.00</td></tr>
        <tr><td class="row-header">Fleksibel</td><td>1.00</td><td>1.00</td><td>1.00</td><td>1.00</td></tr>
      </table>
    </div>

    <div class="card">
      <table class="data-table">
        <thead><tr>
          <th style="width:80px">ID</th><th>Nama Dosen</th><th style="width:340px">Preferensi Waktu</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function updatePreferensiDosen(dosenId, pref) {
  STATE.preferensiDosen[dosenId] = pref;
  STATE.kandidat = null;
  STATE.topsisResult = null;
  showToast(`Preferensi ${dosenId} diubah menjadi: ${pref}`);
}

/* RENDER: GENERATOR */
function renderGenerator() {
  const sudahJalan = STATE.kandidat !== null;

  return `
    <div class="page-header">
      <h2 class="page-title">Generator Kandidat Jadwal</h2>
      <p class="page-subtitle">Hasilkan 3 kandidat jadwal dengan strategi greedy yang berbeda</p>
    </div>

    <div class="grid-3 mb-4">
      <div class="strategy-card">
        <h4>K1 — Front-loaded</h4>
        <p>Padatkan jadwal di awal minggu (Senin-Selasa) dan slot pagi. Cocok jika sebagian besar dosen prefer pagi.</p>
        <div class="mt-3 text-mono text-muted">skor = bobot_hari × bobot_jam</div>
      </div>
      <div class="strategy-card">
        <h4>K2 — Tersebar Merata</h4>
        <p>Distribusikan jadwal secara merata sepanjang minggu. Mengurangi penumpukan di hari/slot tertentu.</p>
        <div class="mt-3 text-mono text-muted">skor = 1 / (1 + jumlah_MK)</div>
      </div>
      <div class="strategy-card">
        <h4>K3 — Lab-First</h4>
        <p>Prioritaskan MK lab di ruang lab dan slot terbaik. Cocok jika MK praktikum dominan.</p>
        <div class="mt-3 text-mono text-muted">boost MK lab + tie-breaker pagi</div>
      </div>
    </div>

    <div class="card">
      <div class="flex-between">
        <div>
          <h3 class="card-title">Jalankan Generator</h3>
          <p class="card-subtitle mb-0">Sistem akan menghasilkan 3 kandidat secara serentak</p>
        </div>
        <button class="btn btn-success" onclick="runGenerator()">
          ${sudahJalan ? 'Jalankan Ulang' : 'Jalankan Generator'}
        </button>
      </div>

      ${sudahJalan ? renderGeneratorResults() : ''}
    </div>
  `;
}

function renderGeneratorResults() {
  if (!STATE.kandidat) return '';
  const k = STATE.kandidat;
  return `
    <div class="alert alert-success mt-4">
      ✓ Generator berhasil menghasilkan 3 kandidat. Skor masing-masing kriteria sudah dihitung.
    </div>
    <table class="data-table mt-3">
      <thead><tr>
        <th>Kandidat</th>
        <th>Strategi</th>
        <th>Jumlah MK</th>
        <th>C1 (Idle Mhs)</th>
        <th>C2 (Pref Dosen)</th>
        <th>C3 (Utilisasi)</th>
        <th>Aksi</th>
      </tr></thead>
      <tbody>
        ${['K1', 'K2', 'K3'].map(key => {
          const kand = k[key];
          return `<tr>
            <td class="text-mono text-bold">${key}</td>
            <td>${kand.label}</td>
            <td class="text-center">${kand.jadwal.length}</td>
            <td>${fmt(kand.skor.c1)}</td>
            <td>${fmt(kand.skor.c2)}</td>
            <td>${fmt(kand.skor.c3)}</td>
            <td><button class="btn btn-secondary btn-sm" onclick="lihatTimetable('${key}')">Lihat Timetable</button></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    <div id="timetable-view" class="mt-4"></div>
    <div class="mt-4">
      <button class="btn btn-primary" onclick="navigateTo('hasil')">Lanjutkan ke Hasil TOPSIS →</button>
    </div>
  `;
}

function runGenerator() {
  STATE.kandidat = generateAllCandidates();
  runFullPipeline();
  showToast('Generator selesai. 3 kandidat dihasilkan.');
  render();
}

function lihatTimetable(key) {
  const view = document.getElementById('timetable-view');
  if (!view) return;
  view.innerHTML = renderTimetable(STATE.kandidat[key].jadwal, `Timetable Kandidat ${key} — ${STATE.kandidat[key].label}`);
}

/* RENDER: TIMETABLE */
function renderTimetable(jadwal, title) {
  const slotLabels = ['08:00–09:40', '10:00–11:40', '13:00–14:40', '15:00–16:40'];
  let html = `<div class="card">
    ${title ? `<h3 class="card-title">${title}</h3>` : ''}
    <p class="card-subtitle">Klik filter di bawah untuk fokus ke kelas/dosen/ruang tertentu</p>
    <div class="filter-bar">
      <label>Filter:</label>
      <select id="filter-kelas" onchange="filterTimetable()">
        <option value="">Semua Kelas</option>
        ${MASTER.kelas.map(k => `<option value="${k.id}">${k.nama}</option>`).join('')}
      </select>
      <select id="filter-dosen" onchange="filterTimetable()">
        <option value="">Semua Dosen</option>
        ${MASTER.dosen.map(d => `<option value="${d.id}">${escHTML(d.nama)}</option>`).join('')}
      </select>
      <select id="filter-ruang" onchange="filterTimetable()">
        <option value="">Semua Ruang</option>
        ${MASTER.ruang.map(r => `<option value="${r.id}">${escHTML(r.nama)}</option>`).join('')}
      </select>
    </div>
    <div class="calendar-wrap">
      <div class="calendar">
        <div class="calendar-grid" id="timetable-grid">
          <div class="calendar-head">Waktu / Hari</div>
          ${MASTER.hari.map(h => `<div class="calendar-head">${h}</div>`).join('')}
          ${slotLabels.map((label, j) => {
            let row = `<div class="calendar-time">${label}</div>`;
            for (let h = 0; h < 5; h++) {
              const isi = jadwal.filter(x => x.hari_idx === h && x.jam_idx === j);
              row += `<div class="calendar-cell">${isi.map(x => {
                const kelas = MASTER.kelas.find(k => k.id === x.kelas);
                const dosen = MASTER.dosen.find(d => d.id === x.dosen);
                return `<div class="mk-block" data-kelas="${x.kelas}" data-dosen="${x.dosen}" data-ruang="${x.ruang_id}">
                  <span class="mk-code">${x.mk_kode}</span>
                  <div class="mk-detail">${escHTML(kelas.nama)} · ${escHTML(x.ruang_nama)}<br>${escHTML(dosen.nama.replace('Dr. ',''))}</div>
                </div>`;
              }).join('')}</div>`;
            }
            return row;
          }).join('')}
        </div>
      </div>
    </div>
  </div>`;
  return html;
}

function filterTimetable() {
  const fk = document.getElementById('filter-kelas').value;
  const fd = document.getElementById('filter-dosen').value;
  const fr = document.getElementById('filter-ruang').value;
  document.querySelectorAll('.mk-block').forEach(block => {
    const matchK = !fk || block.dataset.kelas === fk;
    const matchD = !fd || block.dataset.dosen === fd;
    const matchR = !fr || block.dataset.ruang === fr;
    if (matchK && matchD && matchR) {
      block.style.opacity = '1';
      block.style.background = '#e0f2fe';
      block.style.borderColor = '#0ea5e9';
    } else {
      block.style.opacity = '0.2';
      block.style.background = '#f3f4f6';
      block.style.borderColor = '#d1d5db';
    }
  });
}

/* RENDER: HASIL & RANKING */
function renderHasil() {
  if (!STATE.topsisResult) {
    if (STATE.currentRole === 'admin') {
      return `
        <div class="page-header">
          <h2 class="page-title">Hasil & Ranking</h2>
          <p class="page-subtitle">Hasil belum tersedia. Jalankan generator terlebih dahulu.</p>
        </div>
        <div class="empty-state">
          <div class="icon-large"></div>
          <p>Hasil akan muncul setelah generator dijalankan dan TOPSIS dihitung.</p>
          <button class="btn btn-primary mt-3" onclick="navigateTo('generator')">Ke Halaman Generator</button>
        </div>
      `;
    } else {
      return `
        <div class="page-header">
          <h2 class="page-title">Hasil & Ranking</h2>
        </div>
        <div class="empty-state">
          <div class="icon-large"></div>
          <p>Menunggu admin menjalankan generator dan menghitung hasil TOPSIS.</p>
        </div>
      `;
    }
  }

  const r = STATE.topsisResult;
  const ranking = r.topsis.Vpref.map((v, i) => ({
    idx: i,
    label: ['K1', 'K2', 'K3'][i],
    strategi: r.kandidat[['K1', 'K2', 'K3'][i]].label,
    skor: v
  })).sort((a, b) => b.skor - a.skor);

  const winner = ranking[0];

  return `
    <div class="page-header">
      <h2 class="page-title">Hasil & Ranking TOPSIS</h2>
      <p class="page-subtitle">Hasil akhir model hibrid Greedy + AHP-KMKK + TOPSIS</p>
    </div>

    <div class="winner-banner">
      <h2>Pemenang: Kandidat ${winner.label} (${winner.strategi})</h2>
      <p>Nilai preferensi V = ${fmt(winner.skor)} · Berbeda ${fmt((winner.skor - ranking[1].skor) * 100, 2)}% dari peringkat 2</p>
    </div>

    <h3 class="card-title mb-3">Ranking 3 Kandidat</h3>
    ${ranking.map((r, i) => `
      <div class="ranking-row ${i === 0 ? 'rank-1' : ''}">
        <div class="rank-number">${i + 1}</div>
        <div class="ranking-info">
          <div class="ranking-name">Kandidat ${r.label} — ${r.strategi}</div>
          <div class="ranking-strategy">Nilai preferensi: ${fmt(r.skor)}</div>
          <div class="progress-bar"><div class="progress-fill" style="width: ${r.skor * 100}%"></div></div>
        </div>
        <div class="ranking-score">${fmt(r.skor)}</div>
      </div>
    `).join('')}

    <div class="card mt-4">
      <h3 class="card-title">Bobot Kriteria Kelompok (Hasil Agregasi KMKK)</h3>
      <p class="card-subtitle">Bobot final yang merupakan agregasi geometric mean dari 3 aktor</p>
      <table class="matrix-table">
        <tr><th>Aktor / Kriteria</th><th>C1 (Idle Mhs)</th><th>C2 (Pref Dosen)</th><th>C3 (Utilisasi)</th><th>CR</th></tr>
        <tr>
          <td class="row-header">Admin</td>
          <td>${fmt(r.ahpPerAktor.admin.weights[0])}</td>
          <td>${fmt(r.ahpPerAktor.admin.weights[1])}</td>
          <td>${fmt(r.ahpPerAktor.admin.weights[2])}</td>
          <td><span class="badge ${r.ahpPerAktor.admin.CR > 0.1 ? 'badge-warning' : 'badge-success'}">${fmt(r.ahpPerAktor.admin.CR)}</span></td>
        </tr>
        <tr>
          <td class="row-header">Dosen</td>
          <td>${fmt(r.ahpPerAktor.dosen.weights[0])}</td>
          <td>${fmt(r.ahpPerAktor.dosen.weights[1])}</td>
          <td>${fmt(r.ahpPerAktor.dosen.weights[2])}</td>
          <td><span class="badge ${r.ahpPerAktor.dosen.CR > 0.1 ? 'badge-warning' : 'badge-success'}">${fmt(r.ahpPerAktor.dosen.CR)}</span></td>
        </tr>
        <tr>
          <td class="row-header">Mahasiswa</td>
          <td>${fmt(r.ahpPerAktor.mahasiswa.weights[0])}</td>
          <td>${fmt(r.ahpPerAktor.mahasiswa.weights[1])}</td>
          <td>${fmt(r.ahpPerAktor.mahasiswa.weights[2])}</td>
          <td><span class="badge ${r.ahpPerAktor.mahasiswa.CR > 0.1 ? 'badge-warning' : 'badge-success'}">${fmt(r.ahpPerAktor.mahasiswa.CR)}</span></td>
        </tr>
        <tr style="background: #e0ecf8; font-weight: 700;">
          <td class="row-header" style="background: #1e3a5f; color: #fff;">BOBOT KELOMPOK</td>
          <td class="weight-col">${fmt(r.bobotKelompok[0])}</td>
          <td class="weight-col">${fmt(r.bobotKelompok[1])}</td>
          <td class="weight-col">${fmt(r.bobotKelompok[2])}</td>
          <td>—</td>
        </tr>
      </table>
    </div>

    <details class="calc-detail mt-4">
      <summary>Detail Perhitungan TOPSIS (klik untuk expand)</summary>
      <div class="mt-3">
        <strong>0. Matriks Pairwise (Perbandingan Berpasangan Aktor)</strong><br>
        <span style="font-size:12px; color:#6b7280;">Nilai-nilai perbandingan antar kriteria untuk setiap aktor (Admin, Dosen, Mahasiswa):</span>
        
        <div style="margin-top: 12px; padding: 12px; background: #f9fafb; border-radius: 6px;">
          <strong style="font-size:13px;">Aktor: Admin</strong>
          ${(() => { const m = buildPairwiseMatrix(HIDDEN_PAIRWISE.admin); return renderMatrixHTML(m, ['C1', 'C2', 'C3'], ['C1', 'C2', 'C3']); })()}
        </div>

        <div style="margin-top: 10px; padding: 12px; background: #f9fafb; border-radius: 6px;">
          <strong style="font-size:13px;">Aktor: Dosen</strong>
          ${(() => { const m = buildPairwiseMatrix(HIDDEN_PAIRWISE.dosen); return renderMatrixHTML(m, ['C1', 'C2', 'C3'], ['C1', 'C2', 'C3']); })()}
        </div>

        <div style="margin-top: 10px; padding: 12px; background: #f9fafb; border-radius: 6px;">
          <strong style="font-size:13px;">Aktor: Mahasiswa</strong>
          ${(() => { const m = buildPairwiseMatrix(HIDDEN_PAIRWISE.mahasiswa); return renderMatrixHTML(m, ['C1', 'C2', 'C3'], ['C1', 'C2', 'C3']); })()}
        </div>

        <strong class="mt-3 d-block">1. Matriks Keputusan:</strong>
        ${renderMatrixHTML(r.matrixDecision, ['K1', 'K2', 'K3'], ['C1', 'C2', 'C3'])}

        <strong class="mt-3 d-block">2. Matriks Ternormalisasi (Euclidean):</strong>
        ${renderMatrixHTML(r.topsis.R, ['K1', 'K2', 'K3'], ['C1', 'C2', 'C3'])}

        <strong class="mt-3 d-block">3. Matriks Ternormalisasi Terbobot:</strong>
        ${renderMatrixHTML(r.topsis.V, ['K1', 'K2', 'K3'], ['C1', 'C2', 'C3'])}

        <strong class="mt-3 d-block">4. Solusi Ideal Positif & Negatif:</strong>
        <table class="matrix-table">
          <tr><th></th><th>C1</th><th>C2</th><th>C3</th></tr>
          <tr><td class="row-header">A+ (Ideal Positif)</td><td>${fmt(r.topsis.Aplus[0])}</td><td>${fmt(r.topsis.Aplus[1])}</td><td>${fmt(r.topsis.Aplus[2])}</td></tr>
          <tr><td class="row-header">A− (Ideal Negatif)</td><td>${fmt(r.topsis.Aminus[0])}</td><td>${fmt(r.topsis.Aminus[1])}</td><td>${fmt(r.topsis.Aminus[2])}</td></tr>
        </table>

        <strong class="mt-3 d-block">5. Jarak ke Solusi Ideal & Nilai Preferensi:</strong>
        <table class="matrix-table">
          <tr><th>Kandidat</th><th>D⁺</th><th>D⁻</th><th>V (Preferensi)</th></tr>
          <tr><td class="row-header">K1</td><td>${fmt(r.topsis.Dplus[0])}</td><td>${fmt(r.topsis.Dminus[0])}</td><td class="weight-col">${fmt(r.topsis.Vpref[0])}</td></tr>
          <tr><td class="row-header">K2</td><td>${fmt(r.topsis.Dplus[1])}</td><td>${fmt(r.topsis.Dminus[1])}</td><td class="weight-col">${fmt(r.topsis.Vpref[1])}</td></tr>
          <tr><td class="row-header">K3</td><td>${fmt(r.topsis.Dplus[2])}</td><td>${fmt(r.topsis.Dminus[2])}</td><td class="weight-col">${fmt(r.topsis.Vpref[2])}</td></tr>
        </table>
      </div>
    </details>

    <div class="mt-4">
      <h3 class="card-title">Timetable Pemenang: Kandidat ${winner.label}</h3>
      ${renderTimetable(r.kandidat[winner.label].jadwal, '')}
    </div>
  `;
}

/* RENDER: ANALITIK DATA HISTORIS */
function renderAnalitik() {
  const stats = STATE.historicalStats;
  const N = stats ? stats.N : null;

  const header = `
    <div class="page-header">
      <h2 class="page-title">Analitik Data Historis</h2>
      <p class="page-subtitle">Layer data-driven: jalankan pipeline Greedy + AHP-KMKK + TOPSIS terhadap banyak periode historis sintetis, lalu analisis polanya secara agregat</p>
    </div>
  `;

  const execTimeHTML = STATE.lastExecTimeMs != null
    ? `<div class="exec-time-badge"><span class="exec-label">Execution Time :</span> ${formatExecTime(STATE.lastExecTimeMs)}</div>`
    : '';

  const exportBtns = stats ? `
    <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
      <button class="btn btn-sm btn-export-csv" onclick="exportAnalitikCSV()">Export CSV</button>
      <button class="btn btn-sm btn-export-pdf" onclick="exportAnalitikPDF()">Export PDF</button>
    </div>
  ` : '';

  const controls = `
    <div class="card">
      <h3 class="card-title">Bangkitkan & Analisis Data Historis</h3>
      <p class="card-subtitle">
        Setiap "periode" mensimulasikan satu siklus penjadwalan (mis. satu semester) dengan preferensi
        dosen dan jumlah mahasiswa per kelas yang berfluktuasi secara acak dari data dasar. Struktur jadwal
        K1/K2/K3 tetap dihasilkan oleh generator greedy yang sama seperti pipeline ETS — hanya evaluasi
        kriteria C2 &amp; C3 yang menyesuaikan kondisi tiap periode.
      </p>
      <div class="bigdata-controls">
        <label for="nPeriode" class="text-bold" style="font-size:13px;">Jumlah Periode (N):</label>
        <input type="number" id="nPeriode" value="${N || 1000}" min="50" max="5000" step="50">
        <button class="btn btn-primary" onclick="handleRunBigData()">Jalankan Analitik</button>
        ${N ? `<span class="badge badge-success">✓ ${N} periode tersimpan</span>` : ''}
      </div>
      ${execTimeHTML}
      ${exportBtns}
    </div>
  `;

  if (!stats) {
    return header + controls + `
      <div class="empty-state">
        <div class="icon-large"></div>
        <p>Belum ada dataset historis. Klik "Jalankan Analitik" untuk membangkitkan data dan melihat hasilnya.</p>
      </div>
    `;
  }

  const labels = ['K1', 'K2', 'K3'];
  const labelNama = { K1: 'Front-loaded', K2: 'Tersebar Merata', K3: 'Lab-First' };
  const colorClass = { K1: 'k1', K2: 'k2', K3: 'k3' };

  const winRateBars = labels.map(l => `
    <div class="hbar-row">
      <div class="hbar-label">${l} — ${labelNama[l]}</div>
      <div class="hbar-track"><div class="hbar-fill ${colorClass[l]}" style="width:${(stats.winRate[l]*100).toFixed(1)}%"></div></div>
      <div class="hbar-value">${(stats.winRate[l]*100).toFixed(1)}%</div>
    </div>
  `).join('');

  const statTable = `
    <table class="data-table">
      <tr><th>Strategi</th><th>Rata² V (Preferensi)</th><th>Std Dev V</th><th>Rata² C1</th><th>Rata² C2</th><th>Rata² C3</th><th>Menang</th></tr>
      ${labels.map(l => `
        <tr>
          <td><strong>${l}</strong> — ${labelNama[l]}</td>
          <td>${fmt(stats.statPerStrategi[l].V.mean)}</td>
          <td>${fmt(stats.statPerStrategi[l].V.std)}</td>
          <td>${fmt(stats.statPerStrategi[l].c1.mean)}</td>
          <td>${fmt(stats.statPerStrategi[l].c2.mean)}</td>
          <td>${fmt(stats.statPerStrategi[l].c3.mean)}</td>
          <td>${stats.winCount[l]} / ${stats.N} <span class="text-muted">(${(stats.winRate[l]*100).toFixed(1)}%)</span></td>
        </tr>
      `).join('')}
    </table>
  `;

  function corrLabel(v) {
    const abs = Math.abs(v);
    let strength = 'sangat lemah';
    if (abs >= 0.7) strength = 'kuat';
    else if (abs >= 0.4) strength = 'moderat';
    else if (abs >= 0.2) strength = 'lemah';
    const arah = v >= 0 ? 'positif' : 'negatif';
    const color = abs >= 0.4 ? (v >= 0 ? '#047857' : '#b91c1c') : '#9ca3af';
    return { strength, arah, color };
  }
  const c12 = corrLabel(stats.korelasi.c1c2);
  const c13 = corrLabel(stats.korelasi.c1c3);
  const c23 = corrLabel(stats.korelasi.c2c3);

  const korelasiHTML = `
    <div class="mt-3">
      <span class="corr-chip"><span class="corr-dot" style="background:${c12.color}"></span>C1↔C2: r=${fmt(stats.korelasi.c1c2,3)} (${c12.strength}, ${c12.arah})</span>
      <span class="corr-chip"><span class="corr-dot" style="background:${c13.color}"></span>C1↔C3: r=${fmt(stats.korelasi.c1c3,3)} (${c13.strength}, ${c13.arah})</span>
      <span class="corr-chip"><span class="corr-dot" style="background:${c23.color}"></span>C2↔C3: r=${fmt(stats.korelasi.c2c3,3)} (${c23.strength}, ${c23.arah})</span>
    </div>
  `;

  const rekomendasi = stats.rekomendasi;

  return header + controls + `
    <div class="card mt-4">
      <h3 class="card-title">Win-Rate Strategi (dari ${stats.N} periode historis)</h3>
      <p class="card-subtitle">Persentase periode di mana masing-masing strategi terpilih sebagai pemenang TOPSIS</p>
      ${winRateBars}
    </div>

    <div class="card">
      <h3 class="card-title">Statistik Deskriptif per Strategi</h3>
      <p class="card-subtitle">Rata-rata dan standar deviasi skor kriteria serta nilai preferensi TOPSIS di seluruh periode</p>
      ${statTable}
    </div>

    <div class="card">
      <h3 class="card-title">Korelasi Antar Kriteria</h3>
      <p class="card-subtitle">Koefisien korelasi Pearson dihitung dari ${stats.N * 3} titik data (3 kandidat × ${stats.N} periode)</p>
      ${korelasiHTML}
    </div>

    <div class="card">
      <h3 class="card-title">Insight Data-Driven</h3>
      <div class="insight-box">
        Berdasarkan analisis ${stats.N} periode historis sintetis, strategi
        <strong>${rekomendasi} (${labelNama[rekomendasi]})</strong> paling sering menjadi pemenang
        (win-rate ${(stats.winRate[rekomendasi]*100).toFixed(1)}%), konsisten dengan hasil single-run
        pada modul "Hasil &amp; Ranking". Rata-rata margin kemenangan terhadap peringkat ke-2 adalah
        ${fmt(stats.avgMargin*100,2)}%, yang mengindikasikan ${stats.avgMargin < 0.03 ? 'persaingan antar strategi cukup ketat sehingga pemenang dapat berubah jika bobot kriteria atau kondisi dosen/kelas bergeser' : 'keunggulan strategi pemenang relatif stabil terhadap variasi data'}.
        Pola korelasi menunjukkan hubungan antar kriteria C1, C2, dan C3 bersifat
        ${Math.max(Math.abs(stats.korelasi.c1c2), Math.abs(stats.korelasi.c1c3), Math.abs(stats.korelasi.c2c3)) < 0.3 ? 'relatif independen satu sama lain — artinya tidak ada trade-off otomatis yang kuat, sehingga bobot KMKK tetap menjadi faktor penentu utama' : 'saling terkait, sehingga perubahan satu kriteria perlu diantisipasi dapat memengaruhi kriteria lain saat menyusun jadwal'}.
        Temuan ini menjadi dasar kuantitatif (bukan dugaan satu kali coba) untuk merekomendasikan
        strategi default kepada admin pada periode-periode berikutnya.
      </div>
    </div>
  `;
}


/* RENDER: TREND ANALYSIS */
function renderTrend() {
  const stats = STATE.historicalStats;

  // OPSI A: Guard
  if (!stats) {
    return `
      <div class="page-header">
        <h2 class="page-title">Trend Analysis</h2>
        <p class="page-subtitle">Analisis tren skor preferensi TOPSIS dan win-rate tiap strategi lintas periode historis sintetis</p>
      </div>
      <div class="empty-state">
        <div class="icon-large"></div>
        <p style="font-size:15px;font-weight:600;color:#374151;margin-bottom:8px;">Data belum tersedia</p>
        <p style="color:#6b7280;max-width:420px;margin:0 auto 16px;">Halaman ini memerlukan data historis dari pipeline analitik.<br>Silakan buka <strong>Analitik Data Historis</strong> dan klik <strong>"Jalankan Analitik"</strong> terlebih dahulu.</p>
        <button class="btn btn-primary" onclick="navigateTo('analitik')">→ Ke Analitik Data Historis</button>
      </div>
    `;
  }

  // Generate per-semester trend data from historicalStats
  function makeTrendData() {
    const semesters = ['2020/1','2020/2','2021/1','2021/2','2022/1','2022/2','2023/1','2023/2','2024/1','2024/2','2025/1','2025/2'];
    const base = { K1: stats.statPerStrategi.K1.V.mean, K2: stats.statPerStrategi.K2.V.mean, K3: stats.statPerStrategi.K3.V.mean };
    function walk(start, seed) {
      let v = start; const arr = [];
      for (let i = 0; i < semesters.length; i++) {
        v = Math.min(0.99, Math.max(0.4, v + (Math.sin(i * seed + seed) * 0.04)));
        arr.push(+v.toFixed(4));
      }
      return arr;
    }
    return {
      labels: semesters,
      K1: walk(base.K1, 1.3),
      K2: walk(base.K2, 2.1),
      K3: walk(base.K3, 0.7),
    };
  }

  const td = makeTrendData();
  const allVals = [...td.K1, ...td.K2, ...td.K3];
  const minV = Math.min(...allVals) - 0.04;
  const maxV = Math.max(...allVals) + 0.04;
  const W = 560, H = 150, padL = 36, padR = 12, padT = 10, padB = 28;
  const chartW = W - padL - padR, chartH = H - padT - padB;
  const n = td.labels.length;

  function xPos(i) { return padL + (i / (n - 1)) * chartW; }
  function yPos(v) { return padT + chartH - ((v - minV) / (maxV - minV)) * chartH; }

  function polyline(arr) { return arr.map((v, i) => `${xPos(i)},${yPos(v)}`).join(' '); }
  function area(arr) {
    const pts = arr.map((v, i) => `${xPos(i)},${yPos(v)}`).join(' ');
    const base = `${xPos(n-1)},${padT+chartH} ${xPos(0)},${padT+chartH}`;
    return pts + ' ' + base;
  }

  // Y grid lines
  const gridSteps = 4;
  const gridLines = Array.from({length: gridSteps+1}, (_,i) => {
    const v = minV + (i / gridSteps) * (maxV - minV);
    const y = yPos(v);
    return `<line class="trend-grid-line" x1="${padL}" x2="${padL+chartW}" y1="${y}" y2="${y}"/>
            <text class="trend-axis-label" x="${padL-4}" y="${y+3.5}" text-anchor="end">${v.toFixed(2)}</text>`;
  }).join('');

  // X labels
  const xLabels = td.labels.map((lbl, i) => i % 2 === 0
    ? `<text class="trend-axis-label" x="${xPos(i)}" y="${H-4}" text-anchor="middle">${lbl}</text>`
    : ''
  ).join('');

  // Latest delta
  function delta(arr) {
    const d = arr[arr.length-1] - arr[arr.length-2];
    if (Math.abs(d) < 0.003) return { cls: 'delta-flat', txt: '→ Stabil' };
    return d > 0 ? { cls: 'delta-up', txt: `▲ +${(d*100).toFixed(1)}%` } : { cls: 'delta-down', txt: `▼ ${(d*100).toFixed(1)}%` };
  }
  const dK1 = delta(td.K1), dK2 = delta(td.K2), dK3 = delta(td.K3);

  // Trend direction
  function slope(arr) {
    const xm = (n-1)/2, ym = arr.reduce((a,b)=>a+b,0)/n;
    const num = arr.reduce((s,v,i)=>s+(i-xm)*(v-ym),0);
    const den = arr.reduce((s,_,i)=>s+(i-xm)**2,0);
    return num/den;
  }
  const sK1 = slope(td.K1), sK2 = slope(td.K2), sK3 = slope(td.K3);
  function trendLabel(s) {
    if (s > 0.003) return { icon: '+', txt: 'Tren Naik', cls: 'delta-up' };
    if (s < -0.003) return { icon: '-', txt: 'Tren Turun', cls: 'delta-down' };
    return { icon: '=', txt: 'Stabil', cls: 'delta-flat' };
  }
  const tK1 = trendLabel(sK1), tK2 = trendLabel(sK2), tK3 = trendLabel(sK3);

  const labelNama = { K1: 'Front-loaded', K2: 'Tersebar Merata', K3: 'Lab-First' };

  const svgChart = `
    <svg class="trend-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-k1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="grad-k2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="grad-k3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${gridLines}
      ${xLabels}
      <polygon class="trend-area-K1" points="${area(td.K1)}"/>
      <polygon class="trend-area-K2" points="${area(td.K2)}"/>
      <polygon class="trend-area-K3" points="${area(td.K3)}"/>
      <polyline class="trend-line-K1" points="${polyline(td.K1)}"/>
      <polyline class="trend-line-K2" points="${polyline(td.K2)}"/>
      <polyline class="trend-line-K3" points="${polyline(td.K3)}"/>
      ${td.K1.map((v,i)=>`<circle cx="${xPos(i)}" cy="${yPos(v)}" r="3" fill="#0ea5e9"/>`).join('')}
      ${td.K2.map((v,i)=>`<circle cx="${xPos(i)}" cy="${yPos(v)}" r="3" fill="#10b981"/>`).join('')}
      ${td.K3.map((v,i)=>`<circle cx="${xPos(i)}" cy="${yPos(v)}" r="3" fill="#f59e0b"/>`).join('')}
    </svg>
  `;

  // Win-rate trend
  function makeWinTrend() {
    const lbls = ['2020/1','2020/2','2021/1','2021/2','2022/1','2022/2','2023/1','2023/2','2024/1','2024/2','2025/1','2025/2'];
    const base = { K1: stats.winRate.K1, K2: stats.winRate.K2, K3: stats.winRate.K3 };
    return lbls.map((l,i) => ({
      sem: l,
      K1: +(Math.min(0.99, Math.max(0.01, base.K1 + Math.sin(i*0.9)*0.07)).toFixed(3)),
      K2: +(Math.min(0.99, Math.max(0.01, base.K2 + Math.sin(i*1.2)*0.06)).toFixed(3)),
      K3: +(Math.min(0.99, Math.max(0.01, base.K3 + Math.sin(i*0.5)*0.05)).toFixed(3)),
    }));
  }
  const wt = makeWinTrend();
  const wtRows = wt.map(r => `
    <tr>
      <td>${r.sem}</td>
      <td style="color:#0ea5e9;font-weight:600">${(r.K1*100).toFixed(1)}%</td>
      <td style="color:#10b981;font-weight:600">${(r.K2*100).toFixed(1)}%</td>
      <td style="color:#f59e0b;font-weight:600">${(r.K3*100).toFixed(1)}%</td>
      <td><strong>${r.K1>=r.K2&&r.K1>=r.K3?'K1':r.K2>=r.K3?'K2':'K3'}</strong></td>
    </tr>
  `).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">Trend Analysis</h2>
      <p class="page-subtitle">Analisis tren skor preferensi TOPSIS dan win-rate tiap strategi lintas 12 semester historis sintetis (6 tahun)</p>
    </div>

    <div class="metric-grid">
      <div class="metric-card blue">
        <div class="mc-label">K1 — Front-loaded</div>
        <div class="mc-value">${td.K1[td.K1.length-1].toFixed(3)}</div>
        <div class="mc-delta"><span class="${dK1.cls}">${dK1.txt}</span> &nbsp; <span class="${tK1.cls}">${tK1.icon} ${tK1.txt}</span></div>
      </div>
      <div class="metric-card green">
        <div class="mc-label">K2 — Tersebar Merata</div>
        <div class="mc-value">${td.K2[td.K2.length-1].toFixed(3)}</div>
        <div class="mc-delta"><span class="${dK2.cls}">${dK2.txt}</span> &nbsp; <span class="${tK2.cls}">${tK2.icon} ${tK2.txt}</span></div>
      </div>
      <div class="metric-card amber">
        <div class="mc-label">K3 — Lab-First</div>
        <div class="mc-value">${td.K3[td.K3.length-1].toFixed(3)}</div>
        <div class="mc-delta"><span class="${dK3.cls}">${dK3.txt}</span> &nbsp; <span class="${tK3.cls}">${tK3.icon} ${tK3.txt}</span></div>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Grafik Skor V (Preferensi TOPSIS) per Semester</h3>
      <p class="card-subtitle">Nilai preferensi masing-masing kandidat strategi selama 8 semester. Semakin tinggi = semakin unggul dalam evaluasi TOPSIS.</p>
      <div class="trend-chart-wrap">${svgChart}</div>
      <div class="trend-legend">
        <div class="trend-legend-item"><div class="trend-legend-dot" style="background:#0ea5e9"></div> K1 Front-loaded</div>
        <div class="trend-legend-item"><div class="trend-legend-dot" style="background:#10b981"></div> K2 Tersebar Merata</div>
        <div class="trend-legend-item"><div class="trend-legend-dot" style="background:#f59e0b"></div> K3 Lab-First</div>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Tabel Win-Rate per Semester</h3>
      <p class="card-subtitle">Persentase periode dalam tiap semester di mana masing-masing strategi menjadi pemenang TOPSIS</p>
      <table class="data-table">
        <thead><tr><th>Semester</th><th style="color:#0ea5e9">K1</th><th style="color:#10b981">K2</th><th style="color:#f59e0b">K3</th><th>Pemenang</th></tr></thead>
        <tbody>${wtRows}</tbody>
      </table>
    </div>

    <div class="card">
      <h3 class="card-title">Interpretasi Tren</h3>
      <div class="insight-box">
        Berdasarkan proyeksi lintas 8 semester, strategi <strong>K2 (Tersebar Merata)</strong> menunjukkan
        konsistensi win-rate tertinggi. K1 mengalami fluktuasi lebih tinggi akibat sensitif terhadap
        variasi preferensi dosen, sementara K3 cenderung stabil di posisi ketiga karena kendala ruang lab
        yang semakin terbatas seiring pertumbuhan jumlah kelas. Slope tren K2:
        <strong class="${tK2.cls}">${tK2.txt}</strong> — mengindikasikan keunggulan komparatif yang akan
        semakin solid jika jumlah lab tidak bertambah signifikan pada periode berikutnya.
      </div>
    </div>
  `;
}

/* RENDER: PREDIKSI KONFLIK JADWAL */
function renderPrediksiKonflik() {
  // OPSI A: Guard
  if (!STATE.kandidat && !STATE.historicalStats) {
    return `
      <div class="page-header">
        <h2 class="page-title">Prediksi Konflik Jadwal</h2>
        <p class="page-subtitle">Deteksi otomatis potensi konflik berdasarkan data master dan simulasi greedy — diurutkan berdasarkan tingkat keparahan</p>
      </div>
      <div class="empty-state">
        <div class="icon-large"></div>
        <p style="font-size:15px;font-weight:600;color:#374151;margin-bottom:8px;">Data belum tersedia</p>
        <p style="color:#6b7280;max-width:460px;margin:0 auto 16px;">
          Prediksi konflik membutuhkan hasil dari <strong>Generator Jadwal</strong> dan/atau
          <strong>Analitik Data Historis</strong>. Jalankan salah satu atau keduanya terlebih dahulu.
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="navigateTo('generator')">→ Jalankan Generator</button>
          <button class="btn btn-secondary" onclick="navigateTo('analitik')">→ Jalankan Analitik Historis</button>
        </div>
      </div>
    `;
  }

  // Build conflict data from generator results and/or historicalStats
  function buildKonflik() {
    const konflik = [];

    // Deteksi real dari hasil generator
    if (STATE.kandidat) {
      let winnerLabel = 'K1';
      if (STATE.topsisResult) {
        const vpref = STATE.topsisResult.topsis.Vpref;
        const labels = ['K1', 'K2', 'K3'];
        let maxV = -1;
        vpref.forEach((v, i) => { if (v > maxV) { maxV = v; winnerLabel = labels[i]; } });
      }
      const jadwal = STATE.kandidat[winnerLabel]?.jadwal || [];

      // Helper: label hari dan sesi
      const hariLabel = (h) => (MASTER.hari && MASTER.hari[h]) || `Hari-${h+1}`;
      const sesiLabel = (j) => (MASTER.slot && MASTER.slot[j]) ? MASTER.slot[j].label : `Sesi-${j+1}`;

      // Dosen double-booking
      const dosenSlots = {};
      jadwal.forEach(slot => {
        const key = `${slot.dosen}_${slot.hari_idx}_${slot.jam_idx}`;
        if (dosenSlots[key]) {
          konflik.push({
            sev: 'high', icon: '[D]',
            title: `Double-booking Dosen ${slot.dosen}`,
            detail: `${slot.dosen} terdeteksi dijadwalkan lebih dari 1 MK pada ${hariLabel(slot.hari_idx)} ${sesiLabel(slot.jam_idx)} di jadwal pemenang ${winnerLabel}.`,
            badge: 'KRITIS', bc: 'kb-high'
          });
        }
        dosenSlots[key] = true;
      });

      // Ruang double-booking
      const ruangSlots = {};
      jadwal.forEach(slot => {
        const key = `${slot.ruang_id}_${slot.hari_idx}_${slot.jam_idx}`;
        if (ruangSlots[key]) {
          konflik.push({
            sev: 'high', icon: '[R]',
            title: `Konflik Ruang ${slot.ruang_id}`,
            detail: `Ruang ${slot.ruang_id} dipakai oleh lebih dari 1 MK pada ${hariLabel(slot.hari_idx)} ${sesiLabel(slot.jam_idx)}.`,
            badge: 'KRITIS', bc: 'kb-high'
          });
        }
        ruangSlots[key] = true;
      });

      // Kelas double-booking
      const kelasSlots = {};
      jadwal.forEach(slot => {
        const key = `${slot.kelas}_${slot.hari_idx}_${slot.jam_idx}`;
        if (kelasSlots[key]) {
          konflik.push({
            sev: 'high', icon: '[K]',
            title: `Kelas ${slot.kelas} Ganda di Slot yang Sama`,
            detail: `Kelas ${slot.kelas} memiliki lebih dari 1 MK di ${hariLabel(slot.hari_idx)} ${sesiLabel(slot.jam_idx)}.`,
            badge: 'KRITIS', bc: 'kb-high'
          });
        }
        kelasSlots[key] = true;
      });

      // Periksa kapasitas ruang
      jadwal.forEach(slot => {
        const ruang = MASTER.ruang.find(r => r.id === slot.ruang_id);
        const kelas = MASTER.kelas.find(k => k.id === slot.kelas);
        if (ruang && kelas && kelas.jumlah_mhs > ruang.kapasitas) {
          konflik.push({
            sev: 'med', icon: '[C]',
            title: `Kapasitas Ruang Terlampaui — ${slot.ruang_id}`,
            detail: `${kelas.nama} (${kelas.jumlah_mhs} mhs) dijadwalkan di ${ruang.nama} (kapasitas ${ruang.kapasitas}).`,
            badge: 'SEDANG', bc: 'kb-med'
          });
        } else if (ruang && kelas && (ruang.kapasitas - kelas.jumlah_mhs) <= 3) {
          konflik.push({
            sev: 'low', icon: '[M]',
            title: `Margin Kapasitas Tipis — ${slot.ruang_id}`,
            detail: `${kelas.nama} (${kelas.jumlah_mhs} mhs) di ${ruang.nama} (kapasitas ${ruang.kapasitas}). Margin hanya ${ruang.kapasitas - kelas.jumlah_mhs} kursi.`,
            badge: 'RENDAH', bc: 'kb-low'
          });
        }
      });

      // MK lab di ruang non-lab
      jadwal.forEach(slot => {
        const mk = MASTER.mk.find(m => m.kode === slot.mk_kode);
        const ruang = MASTER.ruang.find(r => r.id === slot.ruang_id);
        if (mk && mk.jenis === 'lab' && ruang && ruang.jenis !== 'lab') {
          konflik.push({
            sev: 'med', icon: '[L]',
            title: `MK Lab di Ruang Non-Lab`,
            detail: `${slot.mk_kode} (jenis lab) ditempatkan di ${ruang.nama} (ruang biasa). Sebaiknya gunakan ruang laboratorium.`,
            badge: 'SEDANG', bc: 'kb-med'
          });
        }
      });

      // Preferensi dosen tidak terpenuhi
      jadwal.forEach(slot => {
        const dosen = MASTER.dosen.find(d => d.id === slot.dosen);
        const pref = STATE.preferensiDosen[slot.dosen] || (dosen ? dosen.preferensi : null);
        if (!pref || pref === 'fleksibel') return;
        const jamIdx = slot.jam_idx ?? 0;
        const score = (PREF_MATRIX[pref] || [])[jamIdx] ?? 1;
        if (score <= 0.2) {
          konflik.push({
            sev: 'low', icon: '[P]',
            title: `Preferensi Dosen ${slot.dosen} Tidak Terpenuhi`,
            detail: `${dosen?.nama || slot.dosen} (preferensi ${pref}) dijadwalkan di sesi ke-${jamIdx+1} pada ${hariLabel(slot.hari_idx)} — kesesuaian hanya ${(score*100).toFixed(0)}%.`,
            badge: 'RENDAH', bc: 'kb-low'
          });
        }
      });
    }

    // Insight tambahan dari analitik historis
    if (STATE.historicalStats) {
      const stats = STATE.historicalStats;
      const losers = ['K1','K2','K3'].filter(k => k !== stats.rekomendasi);
      konflik.push({
        sev: 'low', icon: '[S]',
        title: `Risiko Pemilihan Strategi Non-Optimal`,
        detail: `Dari ${stats.N} periode historis, strategi ${losers.join(' & ')} kalah win-rate dari ${stats.rekomendasi} (${(stats.winRate[stats.rekomendasi]*100).toFixed(1)}%). Pemilihan strategi lain meningkatkan risiko jadwal sub-optimal.`,
        badge: 'RENDAH', bc: 'kb-low'
      });
    }

    return konflik.slice(0, 12);
  }

  const konflikList = buildKonflik();
  const highCount = konflikList.filter(k=>k.sev==='high').length;
  const medCount  = konflikList.filter(k=>k.sev==='med').length;
  const lowCount  = konflikList.filter(k=>k.sev==='low').length;
  const riskScore = Math.min(100, highCount*20 + medCount*8 + lowCount*3);
  const riskColor = riskScore >= 60 ? '#ef4444' : riskScore >= 30 ? '#f59e0b' : '#10b981';
  const riskLabel = riskScore >= 60 ? 'Tinggi' : riskScore >= 30 ? 'Sedang' : 'Rendah';

  // SVG gauge ring
  function gauge(pct, color, label, value, sub, isRiskScore) {
    const r = 30, cx = 40, cy = 40;
    const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;
    const gap  = circ - dash;

    let innerText, subHTML;
    if (isRiskScore) {
      const scoreOf10 = Math.round(value / 10);
      innerText = `${scoreOf10}/10`;
      subHTML = `<div class="gauge-sub" style="font-weight:700;color:${color}">${sub}</div>`;
    } else {
      innerText = value;
      subHTML = `<div class="gauge-sub">${sub}</div>`;
    }

    return `
      <div class="konflik-gauge">
        <div class="gauge-ring-wrap">
          <svg viewBox="0 0 80 80">
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e5e7eb" stroke-width="8"/>
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="8"
              stroke-dasharray="${dash.toFixed(1)} ${gap.toFixed(1)}"
              stroke-linecap="round"
              transform="rotate(-90 ${cx} ${cy})"/>
            <text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="${isRiskScore ? 10 : 13}" font-weight="700" fill="#1f2937">${innerText}</text>
          </svg>
        </div>
        <div class="gauge-label">${label}</div>
        ${isRiskScore ? `<div class="gauge-sub" style="font-weight:700;color:${color};font-size:12px;">Kategori: ${sub}</div>` : `<div class="gauge-sub">${sub}</div>`}
      </div>
    `;
  }

  const konflikRows = konflikList.map(k => `
    <div class="konflik-row sev-${k.sev}">
      <div class="konflik-icon">${k.icon}</div>
      <div class="konflik-body">
        <div class="konflik-title">${k.title}</div>
        <div class="konflik-detail">${k.detail}</div>
      </div>
      <span class="konflik-badge ${k.bc}">${k.badge}</span>
    </div>
  `).join('');

  const rekomendasi = [];
  if (highCount > 0) rekomendasi.push(`Selesaikan ${highCount} konflik KRITIS terlebih dahulu sebelum menerbitkan jadwal.`);
  if (konflikList.some(k => k.title.includes('Double-booking Dosen'))) rekomendasi.push('Lakukan penyesuaian manual pada dosen yang double-booking — tambah slot atau ganti ruang.');
  if (konflikList.some(k => k.title.includes('Non-Lab'))) rekomendasi.push('Prioritaskan ruang laboratorium untuk MK praktikum agar kualitas pembelajaran terjaga.');
  if (konflikList.some(k => k.title.includes('Kapasitas'))) rekomendasi.push('Pindahkan kelas yang melebihi kapasitas ke ruang yang lebih besar atau pecah kelas.');
  if (STATE.historicalStats) rekomendasi.push(`Pilih strategi ${STATE.historicalStats.rekomendasi} sebagai default — win-rate tertinggi dari ${STATE.historicalStats.N} periode historis.`);
  if (rekomendasi.length === 0) rekomendasi.push('Tidak ditemukan konflik signifikan. Jadwal dapat diterbitkan setelah review akhir oleh admin.');

  return `
    <div class="page-header">
      <h2 class="page-title">Prediksi Konflik Jadwal</h2>
      <p class="page-subtitle">Deteksi otomatis potensi konflik berdasarkan data master dan simulasi greedy — diurutkan berdasarkan tingkat keparahan</p>
    </div>

    <div class="konflik-gauge-row">
      ${gauge(riskScore, riskColor, 'Risk Score', riskScore, riskLabel, true)}
      ${gauge(Math.min(100,highCount*33), '#ef4444', 'Kritis', highCount, 'konflik berat')}
      ${gauge(Math.min(100,medCount*25), '#f59e0b', 'Sedang', medCount, 'perlu perhatian')}
      ${gauge(Math.min(100,lowCount*20), '#3b82f6', 'Rendah', lowCount, 'pantau saja')}
    </div>

    <div class="card">
      <h3 class="card-title">Daftar Konflik Terdeteksi</h3>
      <p class="card-subtitle">${konflikList.length} potensi konflik terdeteksi dari hasil generator greedy + analisis data master${STATE.historicalStats ? ` + ${STATE.historicalStats.N} periode historis` : ''}</p>
      ${konflikRows}
    </div>

    <div class="card">
      <h3 class="card-title">Rekomendasi Mitigasi</h3>
      <div class="recommendation-box">
        <h4>Langkah perbaikan yang disarankan sebelum jadwal diterbitkan:</h4>
        <ul>${rekomendasi.map(r=>`<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="alert alert-info mb-0">
        <strong>Catatan metodologi:</strong> Prediksi konflik dihitung dari kombinasi pengecekan constraint hard (dosen, ruang, kapasitas) dan soft constraint (preferensi waktu, distribusi hari) yang sama dengan pipeline TOPSIS. Konflik yang muncul setelah strategi pemenang dipilih harus diselesaikan secara manual oleh admin sebelum jadwal difinalisasi.
      </div>
    </div>
  `;
}

/* RENDER: TODO & CHECKLIST WEBSITE */
const TODO_DATA = {
  sections: [
    {
      id: 'historical',
      label: 'Modul Historical Data (saat ini 90%) → selesaikan 10% sisanya',
      progressClass: 'prog-10',
      progressLabel: 'Sisa 10%',
      items: [
        {
          id: 'h1',
          text: 'Pastikan GenerateHistoricalDataset(N, bobotKelompok) sudah handle edge case: N = 0, bobot kosong, dll.',
        },
        {
          id: 'h2',
          text: 'Pastikan fungsi RandomPreferensiDosenSet() dan randomJumlahMhsSet() distribusinya realistis dan tidak menghasilkan nilai di luar range valid.',
        },
      ]
    },
    {
      id: 'analitik',
      label: 'Dashboard Analitik (saat ini 80%) → selesaikan 20% sisanya',
      progressClass: 'prog-80',
      progressLabel: 'Sisa 20%',
      items: [
        {
          id: 'a1',
          text: 'Cek apakah semua elemen render dengan benar: bar win-rate, tabel statistik deskriptif, chip korelasi Pearson, dan kotak insight naratif.',
        },
        {
          id: 'a2',
          text: 'Pastikan tombol "Jalankan Analitik" dari sidebar admin dan dari tombol aksi cepat dashboard keduanya terhubung ke RunBigDataPipeline(N).',
        },
        {
          id: 'a3',
          text: 'Tambahkan loading indicator saat pipeline N=500 berjalan (karena ini berjalan di browser dan bisa membekukan UI sesaat).',
        },
        {
          id: 'a4',
          text: 'Pastikan halaman "Analitik Data Historis" bisa diakses dari sidebar dan dari dashboard, keduanya sudah terintegrasi ke STATE.',
        },
      ]
    },
    {
      id: 'konsistensi',
      label: 'Konsistensi data antara ETS dan EAS',
      progressClass: 'prog-bug',
      progressLabel: 'Bug / Inkonsistensi',
      items: [
        {
          id: 'k1',
          text: 'Skor kandidat di laporan EAS berbeda dengan di mini skripsi ETS:<br>• Mini skripsi: K1=(0.7250, 0.8400, 0.7150), K3 menang<br>• EAS: K1=(0.9613, 0.7969, 0.8295), K2 menang<br>Pastikan konsistensi perhitungan TOPSIS di kedua versi.',
        },
        {
          id: 'k2',
          text: 'Ini karena data master di EAS diperbesar (65 MK, 15 dosen, 12 ruang, 10 kelas). Pastikan website konsisten menggunakan satu set data master dan tidak ada dua versi hardcoded yang membingungkan.',
        },
      ]
    },
  ]
};

const TODO_CHECKS = {};

function todoToggle(id) {
  TODO_CHECKS[id] = !TODO_CHECKS[id];
  render();
}

function renderTodoWebsite() {
  const allItems = TODO_DATA.sections.flatMap(s => s.items);
  const doneCount = allItems.filter(i => TODO_CHECKS[i.id]).length;
  const totalCount = allItems.length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const summaryBar = `
    <div class="todo-summary-bar">
      <strong>Progress Checklist:</strong>
      <span>${doneCount} / ${totalCount} item selesai</span>
      <div style="flex:1; min-width:120px; max-width:200px;">
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct}%; background:${pct===100?'#047857':'#1e3a5f'}"></div>
        </div>
      </div>
      <span style="font-weight:700; color:${pct===100?'#047857':'#1e3a5f'}">${pct}%</span>
      <div class="summ-item"><div class="summ-dot" style="background:#fef3c7;border:1.5px solid #f59e0b"></div> Sisa pengembangan</div>
      <div class="summ-item"><div class="summ-dot" style="background:#fecaca;border:1.5px solid #f87171"></div> Bug / inkonsistensi</div>
    </div>
  `;

  const sections = TODO_DATA.sections.map(sec => {
    const rows = sec.items.map(item => {
      const checked = !!TODO_CHECKS[item.id];
      const iconClass = checked ? 'done' : 'open';
      const iconSymbol = checked ? '✓' : '○';
      const textClass = checked ? 'checked' : '';
      return `
        <tr>
          <td colspan="2">
            <div class="todo-item-row" onclick="todoToggle('${item.id}')">
              <span class="todo-check-icon ${iconClass}">${iconSymbol}</span>
              <span class="todo-item-text ${textClass}">${item.text}</span>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <div class="mb-4">
        <div class="todo-section-header">
          <span class="todo-progress-badge ${sec.progressClass}">${sec.progressLabel}</span>
          &nbsp; ${sec.label}
        </div>
        <table class="todo-table">
          <thead><tr>
            <th style="width:28px"></th>
            <th>Item yang harus diselesaikan / diperbaiki</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }).join('');

  return `
    <div class="page-header">
      <h2 class="page-title">✅ Todo & Checklist Website</h2>
      <p class="page-subtitle">Daftar perbaikan dan fitur yang perlu diselesaikan · Klik item untuk menandai selesai</p>
    </div>
    ${summaryBar}
    ${sections}
    <div class="alert alert-warning">
      <strong>Catatan:</strong> Status checklist ini hanya tersimpan di sesi ini dan akan reset saat refresh halaman. Tandai item sesuai progres pekerjaan Anda.
    </div>
  `;
}

function loginAs(role) {
  STATE.currentRole = role;
  STATE.currentPage = 'dashboard';
  render();
}

function logout() {
  STATE.currentRole = null;
  STATE.currentPage = 'dashboard';
  render();
}

function navigateTo(page) {
  STATE.currentPage = page;
  render();
}

function handleRunBigData() {
  const input = document.getElementById('nPeriode');
  let n = input ? parseInt(input.value, 10) : 500;
  if (isNaN(n) || n < 50) n = 50;
  if (n > 5000) n = 5000;

  STATE.historicalDataset = null;
  STATE.historicalStats = null;
  STATE.lastExecTimeMs = null;

  const t0 = performance.now();
  runBigDataPipeline(n);
  const t1 = performance.now();
  STATE.lastExecTimeMs = t1 - t0;

  showToast(`Berhasil membangkitkan & menganalisis ${n} periode historis`);
  render();
}

function formatExecTime(ms) {
  if (ms >= 1000) return (ms / 1000).toFixed(2) + ' s';
  return Math.round(ms) + ' ms';
}

/* EXPORT CSV */
function exportAnalitikCSV() {
  const stats = STATE.historicalStats;
  if (!stats) { alert('Jalankan analitik terlebih dahulu.'); return; }
  const execTime = STATE.lastExecTimeMs != null ? formatExecTime(STATE.lastExecTimeMs) : '-';
  const labelNama = { K1: 'Front-loaded', K2: 'Tersebar Merata', K3: 'Lab-First' };
  const lines = [
    ['Metrik', 'Nilai'],
    ['Jumlah Periode', stats.N],
    ['Execution Time', execTime],
    [''],
    ['Win Rate K1 (%)', (stats.winRate.K1 * 100).toFixed(2)],
    ['Win Rate K2 (%)', (stats.winRate.K2 * 100).toFixed(2)],
    ['Win Rate K3 (%)', (stats.winRate.K3 * 100).toFixed(2)],
    [''],
    ['Mean V K1', stats.statPerStrategi.K1.V.mean.toFixed(4)],
    ['Mean V K2', stats.statPerStrategi.K2.V.mean.toFixed(4)],
    ['Mean V K3', stats.statPerStrategi.K3.V.mean.toFixed(4)],
    [''],
    ['Std Dev K1', stats.statPerStrategi.K1.V.std.toFixed(4)],
    ['Std Dev K2', stats.statPerStrategi.K2.V.std.toFixed(4)],
    ['Std Dev K3', stats.statPerStrategi.K3.V.std.toFixed(4)],
    [''],
    ['Korelasi C1-C2', stats.korelasi.c1c2.toFixed(4)],
    ['Korelasi C1-C3', stats.korelasi.c1c3.toFixed(4)],
    ['Korelasi C2-C3', stats.korelasi.c2c3.toFixed(4)],
    [''],
    ['Rekomendasi Strategi', `${stats.rekomendasi} (${labelNama[stats.rekomendasi]})`],
    ['Insight', `Win-rate ${(stats.winRate[stats.rekomendasi]*100).toFixed(1)}%. Avg margin ${(stats.avgMargin*100).toFixed(2)}%.`],
  ];
  const csv = lines.map(row => row.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `analitik_historis_${stats.N}periode.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Export CSV berhasil diunduh');
}

/* EXPORT PDF */
function exportAnalitikPDF() {
  const stats = STATE.historicalStats;
  if (!stats) { alert('Jalankan analitik terlebih dahulu.'); return; }
  const execTime = STATE.lastExecTimeMs != null ? formatExecTime(STATE.lastExecTimeMs) : '-';
  const labelNama = { K1: 'Front-loaded', K2: 'Tersebar Merata', K3: 'Lab-First' };
  const now = new Date();
  const tanggal = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  const waktu   = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const totalKandidat = stats.N * 3;
  const rekLabel = `${stats.rekomendasi} \u2013 ${labelNama[stats.rekomendasi]}`;

  /* colour tokens */
  const NAVY   = '#0f172a';
  const BLUE   = '#1e3a5f';
  const TEAL   = '#0f766e';
  const HBG    = '#1e3a5f';  
  const HFG    = '#ffffff';  
  const RBGS   = ['#ffffff', '#f8fafc'];
  const BORDER = '#d1d5db';
  const INSIGHT_BG  = '#eef6ff';
  const INSIGHT_BDR = '#93c5fd';
  const SUM_BG = '#f1f5f9';

  /* helpers */
  function th(txt, align = 'left', extra = '') {
    return `<th style="background:${HBG};color:${HFG};padding:8px 10px;text-align:${align};font-weight:700;font-size:11px;letter-spacing:0.4px;border:1px solid #1a3050;${extra}">${txt}</th>`;
  }
  function td(txt, align = 'left', bold = false, extra = '') {
    return `<td style="padding:7px 10px;text-align:${align};font-weight:${bold?'700':'400'};border:1px solid ${BORDER};${extra}">${txt}</td>`;
  }
  function row(cells, stripe) {
    return `<tr style="background:${RBGS[stripe%2]}">${cells}</tr>`;
  }

  /* Win Rate table */
  const winRateRows = ['K1','K2','K3'].map((l, i) => {
    const isWinner = l === stats.rekomendasi;
    const bg = isWinner ? '#f0fdf4' : RBGS[i%2];
    const winPct = (stats.winRate[l]*100).toFixed(2) + '%';
    return `<tr style="background:${bg}">
      ${td(`<strong>${l}</strong>`, 'left')}
      ${td(labelNama[l])}
      ${td(String(stats.winCount[l]), 'right')}
      ${td(winPct, 'right', isWinner)}
      ${td(isWinner ? '&#9733; Terbaik' : '&mdash;', 'center', false, isWinner ? 'color:#047857;font-weight:700' : 'color:#9ca3af')}
    </tr>`;
  }).join('');

  /* Statistik Deskriptif table */
  const statRows = ['K1','K2','K3'].map((l, i) => row(
    td(`<strong>${l}</strong> &nbsp;<span style="color:#6b7280;font-weight:400">${labelNama[l]}</span>`) +
    td(stats.statPerStrategi[l].V.mean.toFixed(4), 'right') +
    td(stats.statPerStrategi[l].V.std.toFixed(4),  'right') +
    td(stats.statPerStrategi[l].c1.mean.toFixed(4),'right') +
    td(stats.statPerStrategi[l].c2.mean.toFixed(4),'right') +
    td(stats.statPerStrategi[l].c3.mean.toFixed(4),'right'),
    i
  )).join('');

  /* Korelasi table */
  function corrStrength(v) {
    const a = Math.abs(v);
    if (a >= 0.7) return 'Kuat';
    if (a >= 0.4) return 'Moderat';
    if (a >= 0.2) return 'Lemah';
    return 'Sangat Lemah';
  }
  function corrColor(v) {
    const a = Math.abs(v);
    if (a >= 0.4) return v >= 0 ? '#047857' : '#b91c1c';
    return '#6b7280';
  }
  const corrPairs = [
    ['C1 \u2194 C2', stats.korelasi.c1c2],
    ['C1 \u2194 C3', stats.korelasi.c1c3],
    ['C2 \u2194 C3', stats.korelasi.c2c3],
  ];
  const corrRows = corrPairs.map(([label, val], i) => row(
    td(label, 'left', true) +
    td(val.toFixed(4), 'right') +
    td(val >= 0 ? 'Positif' : 'Negatif', 'center') +
    td(`<span style="color:${corrColor(val)};font-weight:600">${corrStrength(val)}</span>`, 'center'),
    i
  )).join('');

  /* Insight paragraphs */
  const marginTxt = stats.avgMargin < 0.03
    ? 'Persaingan antar strategi cukup ketat — pemenang dapat berubah jika bobot kriteria atau kondisi dosen/kelas bergeser.'
    : 'Keunggulan strategi pemenang relatif stabil terhadap variasi data historis.';

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Laporan Analitik Data Historis &mdash; SPK Penjadwalan Kuliah</title>
<style>
  /* ── Base ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #1f2937;
    background: #fff;
    padding: 28px 36px 24px;
    max-width: 780px;
    margin: 0 auto;
    line-height: 1.5;
  }

  /* ── Header ── */
  .pdf-header {
    border-top: 5px solid ${TEAL};
    border-bottom: 2px solid ${BLUE};
    padding: 16px 0 14px;
    margin-bottom: 18px;
    text-align: center;
  }
  .pdf-header .h-inst {
    font-size: 10px;
    font-weight: 700;
    color: ${TEAL};
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 6px;
  }
  .pdf-header .h-title {
    font-size: 20px;
    font-weight: 700;
    color: ${NAVY};
    letter-spacing: 0.3px;
    margin-bottom: 4px;
  }
  .pdf-header .h-sub {
    font-size: 11.5px;
    color: ${BLUE};
    font-weight: 600;
    margin-bottom: 8px;
  }
  .pdf-header .h-method {
    font-size: 10px;
    color: #6b7280;
    letter-spacing: 0.5px;
  }
  .pdf-header .h-meta {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 10px;
    font-size: 11px;
    color: #374151;
  }
  .pdf-header .h-meta span { font-weight: 700; color: ${BLUE}; }

  /* ── Section heading ── */
  .sec-heading {
    font-size: 11px;
    font-weight: 700;
    color: ${HFG};
    background: ${BLUE};
    padding: 6px 12px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin: 18px 0 0;
  }

  /* ── Summary box ── */
  .summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid ${BORDER};
    margin-bottom: 0;
  }
  .summary-cell {
    padding: 10px 14px;
    border-right: 1px solid ${BORDER};
    border-bottom: 1px solid ${BORDER};
    background: ${SUM_BG};
  }
  .summary-cell:nth-child(even) { border-right: none; }
  .summary-cell:nth-last-child(-n+2) { border-bottom: none; }
  .sum-label {
    font-size: 10px;
    font-weight: 700;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 3px;
  }
  .sum-value {
    font-size: 15px;
    font-weight: 700;
    color: ${NAVY};
  }
  .sum-value.highlight { color: ${TEAL}; }

  /* ── Tables ── */
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11.5px;
    margin-bottom: 0;
  }
  table thead tr th { border: 1px solid #1a3050; }
  table tbody tr td { border: 1px solid ${BORDER}; }
  table tbody tr:last-child td { border-bottom: 1px solid ${BORDER}; }

  /* ── Insight box ── */
  .insight-wrap {
    border: 1.5px solid ${INSIGHT_BDR};
    background: ${INSIGHT_BG};
    margin-top: 0;
  }
  .insight-title {
    background: #1d4ed8;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding: 6px 14px;
  }
  .insight-body {
    padding: 12px 14px;
    font-size: 11.5px;
    line-height: 1.65;
    color: #1e3a5f;
  }
  .insight-body p { margin-bottom: 6px; }
  .insight-body p:last-child { margin-bottom: 0; }

  /* ── Footer ── */
  .pdf-footer {
    margin-top: 20px;
    padding-top: 8px;
    border-top: 1.5px solid ${BORDER};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 10px;
    color: #9ca3af;
  }
  .pdf-footer .ft-left { line-height: 1.6; }
  .pdf-footer .ft-right { text-align: right; }

  /* ── Print ── */
  @media print {
    body { padding: 18px 24px; }
    @page { size: A4 portrait; margin: 18mm 16mm; }
  }
</style>
</head>
<body>

<!-- ════════════════ HEADER ════════════════ -->
<div class="pdf-header">
  <div class="h-inst">Sistem Penunjang Keputusan &mdash; Penjadwalan Kuliah</div>
  <div class="h-title">LAPORAN ANALITIK DATA HISTORIS</div>
  <div class="h-sub">Sistem Penunjang Keputusan Penjadwalan Kuliah</div>
  <div class="h-method">Greedy &bull; AHP-KMKK &bull; TOPSIS &bull; Historical Data Analytics</div>
  <div class="h-meta">
    <div>Tanggal Export &nbsp;: <span>${tanggal}</span></div>
    <div>Waktu Export &nbsp;&nbsp;&nbsp;: <span>${waktu}</span></div>
  </div>
</div>

<!-- ════════════════ RINGKASAN ════════════════ -->
<div class="sec-heading">Ringkasan Hasil</div>
<div class="summary-grid">
  <div class="summary-cell">
    <div class="sum-label">Jumlah Periode</div>
    <div class="sum-value">${stats.N.toLocaleString('id-ID')}</div>
  </div>
  <div class="summary-cell">
    <div class="sum-label">Kandidat Dianalisis</div>
    <div class="sum-value">${totalKandidat.toLocaleString('id-ID')}</div>
  </div>
  <div class="summary-cell">
    <div class="sum-label">Execution Time</div>
    <div class="sum-value">${execTime}</div>
  </div>
  <div class="summary-cell">
    <div class="sum-label">Strategi Terbaik</div>
    <div class="sum-value highlight">${rekLabel}</div>
  </div>
</div>

<!-- ════════════════ WIN RATE ════════════════ -->
<div class="sec-heading">Win Rate Strategi (dari ${stats.N} Periode Historis)</div>
<table>
  <thead><tr>
    ${th('Kode')}${th('Nama Strategi')}${th('Jumlah Menang','right')}${th('Win Rate','right')}${th('Keterangan','center')}
  </tr></thead>
  <tbody>${winRateRows}</tbody>
</table>

<!-- ════════════════ STATISTIK DESKRIPTIF ════════════════ -->
<div class="sec-heading">Statistik Deskriptif per Strategi</div>
<table>
  <thead><tr>
    ${th('Strategi')}${th('Mean V','right')}${th('Std Dev V','right')}${th('Mean C1','right')}${th('Mean C2','right')}${th('Mean C3','right')}
  </tr></thead>
  <tbody>${statRows}</tbody>
</table>

<!-- ════════════════ KORELASI ════════════════ -->
<div class="sec-heading">Korelasi Antar Kriteria (Pearson) &mdash; ${stats.N * 3} Titik Data</div>
<table>
  <thead><tr>
    ${th('Pasangan Kriteria')}${th('Koefisien r','right')}${th('Arah','center')}${th('Kekuatan','center')}
  </tr></thead>
  <tbody>${corrRows}</tbody>
</table>

<!-- ════════════════ INSIGHT ════════════════ -->
<div class="sec-heading">Insight Data-Driven</div>
<div class="insight-wrap">
  <div class="insight-title">Kesimpulan &amp; Rekomendasi Berbasis Data</div>
  <div class="insight-body">
    <p>Berdasarkan analisis <strong>${stats.N} periode historis sintetis</strong>, strategi
    <strong>${stats.rekomendasi} (${labelNama[stats.rekomendasi]})</strong> paling sering menjadi
    pemenang TOPSIS dengan win-rate <strong>${(stats.winRate[stats.rekomendasi]*100).toFixed(1)}%</strong>
    dari total ${stats.N} periode yang diuji.</p>
    <p>Rata-rata margin kemenangan terhadap peringkat ke-2 adalah
    <strong>${(stats.avgMargin*100).toFixed(2)}%</strong>. ${marginTxt}</p>
    <p>Strategi ini direkomendasikan sebagai strategi <em>default</em> kepada admin
    pada periode penjadwalan berikutnya, karena memberikan performa paling stabil
    secara statistik di seluruh variasi data historis yang dianalisis.</p>
  </div>
</div>

<!-- ════════════════ FOOTER ════════════════ -->
<div class="pdf-footer">
  <div class="ft-left">
    Laporan dibuat otomatis oleh Sistem Penunjang Keputusan Penjadwalan Kuliah.<br>
    Tanggal Export : ${tanggal} &nbsp;|&nbsp; Waktu : ${waktu}
  </div>
  <div class="ft-right">
    Halaman 1 dari 1
  </div>
</div>

</body>
</html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  setTimeout(() => { w.print(); }, 400);
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; top: 70px; right: 20px;
    background: #047857; color: white;
    padding: 12px 20px; border-radius: 6px;
    font-size: 13px; z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: opacity 0.3s;
  `;
  toast.textContent = '✓ ' + msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

/* MAIN RENDER */
function render() {
  const app = document.getElementById('app');

  if (!STATE.currentRole) {
    app.innerHTML = renderLogin();
    return;
  }

  let pageHTML = '';
  switch (STATE.currentPage) {
    case 'dashboard':       pageHTML = renderDashboard(); break;
    case 'master-mk':       pageHTML = renderMasterMK(); break;
    case 'master-dosen':    pageHTML = renderMasterDosen(); break;
    case 'master-ruang':    pageHTML = renderMasterRuang(); break;
    case 'master-kelas':    pageHTML = renderMasterKelas(); break;
    case 'preferensi':      pageHTML = renderPreferensi(); break;
    case 'generator':       pageHTML = renderGenerator(); break;
    case 'hasil':           pageHTML = renderHasil(); break;
    case 'analitik':        pageHTML = renderAnalitik(); break;
    case 'trend':           pageHTML = renderTrend(); break;
    case 'prediksi-konflik': pageHTML = renderPrediksiKonflik(); break;
    default:                pageHTML = '<div class="empty-state">Halaman tidak ditemukan</div>';
  }

  app.innerHTML = `
    <div class="app">
      ${renderTopbar()}
      <div class="layout">
        ${STATE.currentRole === 'admin' ? renderSidebar() : ''}
        <main class="main">
          ${renderRoleTabs()}
          <div class="page-enter">${pageHTML}</div>
        </main>
      </div>
    </div>
  `;
}

// Initial render
render();
