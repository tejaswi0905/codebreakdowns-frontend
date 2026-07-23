const fs = require('fs');

const indexContent = fs.readFileSync('src/routes/index.tsx', 'utf8');
const coursesContent = fs.readFileSync('src/routes/courses.tsx', 'utf8');

const extractData = (content, startRegex, endRegex) => {
  const lines = content.split('\n');
  const startIdx = lines.findIndex(l => startRegex.test(l));
  const endIdx = lines.findIndex((l, idx) => idx > startIdx && endRegex.test(l));
  return lines.slice(startIdx, endIdx + 1).join('\n');
};

const progress = extractData(indexContent, /^const progress =/, /^};/);
const stats = extractData(indexContent, /^type StatKey =/, /^\];/);
const solvedBreakdown = extractData(indexContent, /^const solvedBreakdown =/, /^\];/);
const remainingBreakdown = extractData(indexContent, /^const remainingBreakdown =/, /^\];/);
const backendStats = extractData(indexContent, /^const backendStats =/, /^};/);
const roadmap = extractData(indexContent, /^type NodeState =/, /^\];/);

const courses = extractData(coursesContent, /^type Difficulty =/, /^\];/);
const courseProgress = extractData(coursesContent, /^const courseProgress:/, /^};/);

// We need to add "export" in front of the declarations if we don't have them
const addExport = (str) => {
  if (str.startsWith('type')) return 'export ' + str;
  if (str.startsWith('const')) return 'export ' + str;
  return str;
};

const mockDataContent = `import { Flame, CheckCircle2, ListChecks, Clock } from "lucide-react";

${addExport(progress)}

${addExport(stats)}

${addExport(solvedBreakdown)}

${addExport(remainingBreakdown)}

${addExport(backendStats)}

${addExport(roadmap)}

${addExport(courses)}

${addExport(courseProgress)}
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/mockData.ts', mockDataContent);
console.log('mockData.ts created');
