const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const files = fs.readdirSync(dataDir)
  .filter(f => f.endsWith('.json') && f !== 'manifest.json');

const manifest = {
  files,
  count: files.length,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync(
  path.join(dataDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log(`manifest.json 생성 완료 (${files.length}개 파일)`);
files.forEach(f => console.log(`  - ${f}`));
