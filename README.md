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

## Usage

1. **Add a School:**
    - Visit [http://localhost:8000/admin](http://localhost:8000/admin) and log in with admin credentials.
    - Click on "Schools" and add a new school.
    - Provide details such as name, address, etc.

2. **Add a Teacher:**
    - Click on "Teachers" and add a teacher associated with a specific school.
    - Include details like name, subject, and link the teacher to a school.

3. **Add a Student:**
    - Click on "Students" and add a student associated with a specific school.
    - Specify details such as name, grade, and link the student to a school.

4. **Add a Task:**
    - Click on "Tasks" and add a task.
    - Associate the task with a specific school.
    - Specify details such as task name, description, and due date.

5. **View and Manage Tasks:**
    - Visit the dashboard to view all tasks.
    - Manage tasks by updating details or deleting them.

6. **Associating Tasks with Schools:**
    - Assign tasks to specific students for better organization.



8. **Contributing:**
    - If you'd like to contribute, feel free to open issues or submit pull requests.

9. **License:**
    - This project is licensed under the [MIT License](LICENSE).

10. **Acknowledgments:**
    - Special thanks to the Django community for their excellent documentation.

Enjoy managing your school with this Django CRUD application!

# Usage
