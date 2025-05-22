import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      
      let responseText = 'This is the list of our students\n';
      
      // Sort fields alphabetically
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      
      fields.forEach((field) => {
        const studentsList = students[field].join(', ');
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${studentsList}\n`;
      });
      
      response.status(200).send(responseText);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      
      if (!students[major]) {
        response.status(200).send('List: ');
        return;
      }
      
      const studentsList = students[major].join(', ');
      response.status(200).send(`List: ${studentsList}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController; 