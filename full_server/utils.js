import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};
      
      // Skip header line
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].split(',');
        const field = line[3].trim();
        const firstName = line[0].trim();
        
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }

      resolve(students);
    });
  });
};

export default readDatabase; 