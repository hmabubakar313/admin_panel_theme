# Django CRUD Application - School Management System

## Overview

This project is a CRUD application built with Django, aimed at learning the Django framework. It focuses on the management of a school system, including entities like teachers, students, and tasks. The application allows the addition of tasks, students, teachers, and schools. Furthermore, tasks can be associated with specific schools.

## Project Screenshots

![Dashboard 1](https://github.com/hmabubakar313/admin_panel_theme/assets/47010808/a318c030-5f04-43ad-8d55-c279e992b709)
![Dashboard 2](https://github.com/hmabubakar313/admin_panel_theme/assets/47010808/e0f79ac2-b943-4de1-96ab-1a1e5aca0ba8)
![Dashboard 3](https://github.com/hmabubakar313/admin_panel_theme/assets/47010808/597cb17f-4524-422d-86e1-be4d9f59cfd4)
![Dashboard 4](https://github.com/hmabubakar313/admin_panel_theme/assets/47010808/fe062093-19af-4811-9233-702563400661)

## Features

- Add schools, teachers, students, and tasks.
- Associate tasks with specific schools.

## Getting Started

### Prerequisites

- Python (3.6 and above)
- Virtual Environment (Optional but recommended)

### Setting up Virtual Environment

#### Windows


python -m venv venv
venv\Scripts\activate

### macOS/Linux
python -m venv venv
source venv/bin/activate

### Installing Dependencies
pip install -r requirements.txt
### Running the Application

The application will be accessible at http://localhost:8000.



# Usage

This Django CRUD application is designed to simplify the management of schools, teachers, students, and tasks efficiently.

## Adding Entities:

1. **School Management:**
    - Access the admin interface at [http://localhost:8000/admin](http://localhost:8000/admin).
    - Log in with admin credentials.
    - Navigate to "Schools" and create a new school profile, providing necessary details such as name and address.

2. **Teacher Management:**
    - Inside the admin panel, select "Teachers" to add a teacher associated with a specific school.
    - Input details like name, subject, and link the teacher to the respective school.

3. **Student Management:**
    - Under the "Students" section in the admin panel, add students linked to particular schools.
    - Specify student details like name, grade, and associate them with the corresponding school.

4. **Task Management:**
    - Go to the "Tasks" section in the admin interface to create tasks.
    - Assign tasks to a specific school, providing details such as task name, description, and due date.

## Task Management:

1. **View and Manage Tasks:**
    - Utilize the dashboard to view and manage tasks efficiently.
    - Perform updates or deletions of tasks as necessary for better organization.

2. **Task Assignment:**
    - Associate tasks with specific students or faculty members to ensure proper task allocation within schools.




Enjoy managing your school with this Django CRUD application!

## Contributing:

- Contributions to this project are welcome! To contribute:
    - Fork the repository and clone it to your local machine.
    - Create a new branch for your features or bug fixes: `git checkout -b feature/YourFeature`
    - Commit your changes: `git commit -am 'Add new feature'`
    - Push to the branch: `git push origin feature/YourFeature`
    - Submit a pull request detailing your changes.

## License:

- This project is licensed under the [MIT License](LICENSE).

