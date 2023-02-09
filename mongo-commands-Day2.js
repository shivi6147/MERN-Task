db.ZenClass.inserMany(
    [
        {
            "id": 1,
            "user_name": "Shivam",
            "codekata": 12,
            "attendances": [
                {
                    "Date": '15/10/2022',
                    "class_attendances": "Present"
                },
                {
                    "Date": '16/10/2022',
                    "class_attendances": "Absent"
                }
            ],
            "topics": [
                {
                    "Date": '15/10/2022',
                    "topic": "Javascript - Day -1 : Introduction to Browser & web"
                },
                {
                    "Date": '16/10/2022',
                    "topic": "Javascript - Day -2 : Request & Response cycle"
                },
            ],
            "tasks": [
                {
                    "Date": '15/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "No"
                },
                {
                    "Date": '16/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "Yes"
                },
            ],
            "company_drives": [
                {
                    "company_name": "XYZ Company",
                    "Date": '15/10/2022',
                    "Appeared": "Yes"
                },
                {
                    "company_name": "ABC Company",
                    "Date": '16/10/2022',
                    "Appeared": "No"
                },
            ],
            "mentors": "Sanjay"
        },
        {
            "id": 2,
            "user_name": "Shibu",
            "codekata": 20,
            "attendances": [
                {
                    "Date": '15/10/2022',
                    "class_attendances": "Present"
                },
                {
                    "Date": '16/10/2022',
                    "class_attendances": "Present"
                }
            ],
            "topics": [
                {
                    "Date": '15/10/2022',
                    "topic": "Javascript - Day -1 : Introduction to Browser & web"
                },
                {
                    "Date": '16/10/2022',
                    "topic": "Javascript - Day -2 : Request & Response cycle"
                },
            ],
            "tasks": [
                {
                    "Date": '15/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "No"
                },
                {
                    "Date": '16/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "No"
                },
            ],
            "company_drives": [
                {
                    "company_name": "XYZ Company",
                    "Date": '15/10/2022',
                    "Appeared": "No"
                },
                {
                    "company_name": "ABC Company",
                    "Date": '16/10/2022',
                    "Appeared": "No"
                },
            ],
            "mentors": "Raghav"
        },
        {
            "id": 3,
            "user_name": "Himanshu",
            "codekata": 40,
            "attendances": [
                {
                    "Date": '15/10/2022',
                    "class_attendances": "Absent"
                },
                {
                    "Date": '16/10/2022',
                    "class_attendances": "Absent"
                }
            ],
            "topics": [
                {
                    "Date": '15/10/2022',
                    "topic": "Javascript - Day -1 : Introduction to Browser & web"
                },
                {
                    "Date": '16/10/2022',
                    "topic": "Javascript - Day -2 : Request & Response cycle"
                },
            ],
            "tasks": [
                {
                    "Date": '15/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "Yes"
                },
                {
                    "Date": '16/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "Yes"
                },
            ],
            "company_drives": [
                {
                    "company_name": "XYZ Company",
                    "Date": '15/10/2022',
                    "Appeared": "Yes"
                },
                {
                    "company_name": "ABC Company",
                    "Date": '16/10/2022',
                    "Appeared": "Yes"
                },
            ],
            "mentors": "Raghav"
        },
        {
            "id": 4,
            "user_name": "Deepak",
            "codekata": 25,
            "attendances": [
                {
                    "Date": '15/10/2022',
                    "class_attendances": "Present"
                },
                {
                    "Date": '16/10/2022',
                    "class_attendances": "Present"
                }
            ],
            "topics": [
                {
                    "Date": '15/10/2022',
                    "topic": "Javascript - Day -1 : Introduction to Browser & web"
                },
                {
                    "Date": '16/10/2022',
                    "topic": "Javascript - Day -2 : Request & Response cycle"
                },
            ],
            "tasks": [
                {
                    "Date": '15/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "Yes"
                },
                {
                    "Date": '16/10/2022',
                    "task": "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
                    "task_completed": "No"
                },
            ],
            "company_drives": [
                {
                    "company_name": "XYZ Company",
                    "Date": '15/10/2022',
                    "Appeared": "No"
                },
                {
                    "company_name": "ABC Company",
                    "Date": '16/10/2022',
                    "Appeared": "Yes"
                },
            ],
            "mentors": "Sanjay"
        },

    ]
)


// 1. Find all the topics and tasks which are thought in the month of October?

db.ZenClass.find({}, { _id: 0, tasks: 1, topics: 1 })

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020?

db.ZenClass.find({ Date: { $gte: "15/10/2022", $lte: "31/10/2022" } }, { _id: 0, user_name: 1 })

// 3. Find all the company drives and students who are appeared for the placement.?

db.ZenClass.aggregate([{
    $group: { mentor_name: "mentors", count: { $count: "$mentors" } }
}])

// 4. Find the number of problems solved by the user in codekata?

db.ZenClass.find({}, { _id: 0, user_name: 1, codekata: 1 })

// 5. Find all the mentors with who has the mentee's count more than 15?

db.ZenClass.aggregate([{
    $group: { mentor_name: "mentors", count: { $count: "$mentors" } }
}])

// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020?

db.ZenClass.aggregate([{ $match: { attendances: { "class_attendances": "Present" }, tasks: { "task_completed": "No" } } }, {
    $group: { id: "$id", name: "$user_name" }
}])

