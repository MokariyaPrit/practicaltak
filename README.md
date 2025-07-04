

---

## 🧪 Practical Test Assignment

### 🚨 Project: **Leave Management System API**

---

### 📝 Scenario:

> Build a RESTful API for a **Leave Management System** where users (employees) can register, log in, and apply for leaves. Admins can view and approve/reject leave requests. The API should include **authentication**, **authorization**, **error handling**, **input validation**, and security best practices.

---

### 📝 Tasks Order:

1. First Create POST /leaves api
	* Don't implement Role based authorization
	* Don't store anything in DB
	* Only write the business logic to return the array of leaves

2. Implement the Database
	* Create User, Leave table
	* Create models, repositories, DAO

3. Update POST /leaves API to save the request data in database.

4. Implement the API GET /admin/leaves which returns the applied leaves which are stored in the database leaves table

5. Implement the Spring Security with login and registration API

6. Implement the role based access for API /admin/leaves, only admin should able to execute it.
---

### 📌 Functional Requirements

#### 1. **User Authentication**

* `POST /register` – Register a user (email, password, name, role). Role: `employee` or `admin`.
* `POST /login` – Login using JWT; returns token.
* Password MUST BE **encrypted**.

#### 2. **Leave Request Management**

##### For Employee (Protected Routes)

* `POST /leaves` – Apply for a new leave.

  * Fields: `start_date`, `end_date`, `reason`, `type` (`sick`, `casual`, `earned`), `holidays`, `is_saturday_holiday`, `is_sunday_holiday`.
  
  **Request Body:**
  ```json
	{
		"start_date": "string",
		"end_date": "string",
		"holidays": ["13th May","14th May"],
		"is_saturday_holiday": true/false,
		"is_sunday_holiday": true/false
	}
  ```
  **Response Body:**
  ```json
	[
		"leave_date_1",
		"leave_date_2",
		"leave_date_3",
		"leave_date_4",
		..
		"leave_date_5"
	]
  ```

  **Example:**
  
  Request body
  ```json
	{
		"start_date": "8th May",
		"end_date": "22nd May",
		"holidays": ["13th May","14th May","17th May"],
		"is_saturday_holiday": false,
		"is_sunday_holiday": true
	}
  ```

  Output will:
  ```json
	[
		"8th May",
		"9th May",
		"10th May",
		"12th May",
		"15th May",
		"16th May",
		"19th May",
		"20th May",
		"21th May",
		"22th May"
	]
  ```
* User MUST NO **fetch or delete the leaves**.

##### For Admin (Protected Routes)

* `GET /admin/leaves` – View all leave requests.

---

### 🗃️ DB Schema

* **User Table**: id, name, email, password, role
* **Leave Table**: id, start\_date, end\_date, reason, type, status, user\_id (foreign key)
* Associations:

  * One-to-many: User → Leaves

---

### 📂 Deliverables

* Upload code as ZIP file on google drive, copy public link and send on below emails.
* Export Postman collection, upload on google drive, copy public links and send on below emails.
* Email links on up@gtcsys.com and hr@gtcsys.com

---

### ✅ Evaluation Criteria

| Category            | What to Check                                     |
| ------------------- | ------------------------------------------------- |
| Business Logic      | Correct leave rules and role-based actions        |
| Error Handling      | Structured responses with HTTP codes              |
| Middleware Usage    | Auth, role-based access, validation               |
| Security Practices  | sanitization, JWT, rate-limiting          |
| ORM Usage       | Models, relationships, migrations                 |
| Code Quality        | Modular, clean, well-structured                   |
| Documentation       | Clear setup, usage instructions, example requests |

---