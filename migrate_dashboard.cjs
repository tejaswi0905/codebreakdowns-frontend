const fs = require('fs');

let indexContent = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Replace the imports with imports from mockData
indexContent = indexContent.replace(/const progress = \{[\s\S]*?\n\};\n/, '');
indexContent = indexContent.replace(/type StatKey = [\s\S]*?\];\n/, '');
indexContent = indexContent.replace(/const solvedBreakdown = [\s\S]*?\];\n/, '');
indexContent = indexContent.replace(/const remainingBreakdown = [\s\S]*?\];\n/, '');
indexContent = indexContent.replace(/const backendStats = [\s\S]*?\n\};\n/, '');
indexContent = indexContent.replace(/type NodeState = [\s\S]*?\];\n/, '');

const importStatement = `import { 
  progress, 
  stats, 
  solvedBreakdown, 
  remainingBreakdown, 
  backendStats, 
  roadmap 
} from "../data/mockData";\n`;

const importRegex = /import \{ cn \} from "@\/lib\/utils";\n/;
indexContent = indexContent.replace(importRegex, `import { cn } from "@/lib/utils";\n${importStatement}`);

// Change the route definition
indexContent = indexContent.replace(/export const Route = createFileRoute\("\/"\)/, 'export const Route = createFileRoute("/dashboard")');
// Change HomePage to DashboardPage
indexContent = indexContent.replace(/function HomePage\(\)/g, 'function DashboardPage()');
indexContent = indexContent.replace(/component: HomePage/, 'component: DashboardPage');

fs.writeFileSync('src/routes/dashboard.tsx', indexContent);
console.log('dashboard.tsx created');
