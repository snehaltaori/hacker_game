const levels = [
    {
        id: 1,

        title: "Abandoned Employee Account",

        hint: "Investigate every file. Not all information is useful.",

        files: {

            "readme.txt": `
Employee account archived.

Former employee: John Walker

Department: IT
    `,

            "employee_note.txt": `
John always forgot his passwords.

Started writing important stuff
inside his personal notes.
    `,

            "voice_message.txt": `
.... . .-.. .-.. ---
    `,

            "coffee_order.txt": `
Coffee Order

John Walker
Large Latte

Order #HELLO
    `,

            "old_credentials.txt": `
Old password:
john123

Status:
Expired
    `,

            "server.log": `
Login Attempt Failed
Login Attempt Failed
Login Attempt Failed

Account Locked
    `,

            "trash.txt": `
Deleted audio transcription.

Not recovered.
    `
        },

        password: "hello"
    },

    {
        id: 2,

        title: "Security Officer Account",

        hint: "Old reports sometimes reveal current habits.",

        files: {

            "employee.db": `
Name: Sarah Mitchell

Department: Security

Favorite Animal: Raven
    `,

            "security_policy.txt": `
Password Policy

- Minimum 8 characters
- Include numbers
- Include uppercase letters

Employee compliance required.
    `,

            "meeting_notes.txt": `
Sarah suggested reusing her personal
password format because she never forgets it.
    `,

            "printer_history.txt": `
Recent print job:

RAVEN
    `,

            "calendar.txt": `
Important Date

04/17
    `,

            "network.log": `
Outgoing connection detected.

User: Sarah

Session ID:
R4V3N
    `,

            "recovered_note.txt": `
If forgotten:

Favorite animal
+
Important date

Remember:
First letter must remain uppercase.
    `,

            "archive.txt": `
Previous password:

Phoenix2023

Format:
Word + Year
    `
        },

        password: "Raven417"
    },

    {
        id: 4,

        title: "Project Blacksite",

        hint: "Some files reference other files.",

        files: {

            "readme.txt": `
Project files partially recovered.

Several references may still exist.
    `,

            "employee.db": `
Lead Researcher:

Name: Olivia Carter

Codename:
Cipher
    `,

            "server.log": `
System Note:

For operation details,
see archive_a.txt
    `,

            "archive_a.txt": `
Project Name stored in archive_b.txt
    `,

            "archive_b.txt": `
Project Name:

Blacksite
    `,

            "security_report.txt": `
Internal Password Policy

Project Name +
Research Codename +
Launch Year (last 2 digits)
    `,

            "launch_record.txt": `
Project Launch:

1988
    `,

            "deleted_email.txt": `
Olivia refuses to stop using
her codename in passwords.
    `,

            "printer_history.txt": `
Printed:

BLACKSITE

Classification:
CONFIDENTIAL
    `,

            "backup.log": `
Archive verification complete.

archive_a.txt intact.
archive_b.txt intact.
    `
        },

        password: "BlacksiteCipher88"
    }

];

export default levels;